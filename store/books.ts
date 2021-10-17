import {
  VuexModule,
  Module,
  VuexMutation,
  VuexAction,
} from 'nuxt-property-decorator'
import {
  $frappe,
  CursorPaginator,
  GQLResponse,
  DBFilterInput,
} from '~/plugins/frappeclient'
import { BookNode, Author } from './types'



export interface SearchBooksParams {
  first?: number
  last?: number
  after?: string
  before?: string
  filter?: DBFilterInput[]
  sortBy?: {
    direction: 'ASC' | 'DESC'
    field: 'NAME' | 'TITLE'
  }
}

// do not pass in module name here
// https://github.com/championswimmer/vuex-module-decorators/issues/116#issuecomment-606144953
@Module({ namespaced: true, stateFactory: true })
export default class BooksStore extends VuexModule {
  wheels = 2

  @VuexMutation
  incrWheels(extra: number) {
    this.wheels += extra
  }

  @VuexAction
  public async getBook(slug: string): Promise<BookNode | null> {
    const gql = await $frappe.graphql<{ getDocBySlug: BookNode | null }>(
      `query GetBookBySlug($slug: String!) {
        getDocBySlug(doctype: "Book", slug: $slug) {
            name
            doctype
            ...on Book {
                slug title sub_title: sub_title__name
                title_image description isbn retail_price
                is_featured
                categories {
                  book_category {
                      title slug
                  }
                }
                age_groups {
                    age_group {
                        title, slug
                    }
                }
                author {
                    slug title
                }
                publisher {
                    slug title
                }
                book_series {
                    slug title
                }
                book_series_idx
                media {
                    media_url
                    type
                    alt
                    title
                }
            }
        }
    }`,
      { slug }
    )

    return gql.data.getDocBySlug
  }

  @VuexAction
  public async getFeaturedBooks() {
    const paginator: CursorPaginator<BookNode> = await this.context.dispatch(
      'searchBooks',
      {
        first: 10,
        filter: [{ fieldname: 'is_featured', operator: 'EQ', value: '1' }],
      }
    )
    return paginator.edges.map((x) => x.node)
  }

  @VuexAction
  public async searchBooks(
    args: SearchBooksParams = {
      first: 10,
      sortBy: { direction: 'ASC', field: 'NAME' },
    }
  ): Promise<CursorPaginator<BookNode>> {
    return $frappe
      .graphql<{ searchBooks: CursorPaginator<BookNode> }>(
        `
    query BooksQuery($first: Int, $last: Int, $after: String, $before: String, $filter: [DBFilterInput!], $sortBy: BookSortingInput) {
      searchBooks(
        first: $first, last: $last,
        after: $after, before: $before,
        filter: $filter, sortBy: $sortBy
      ) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            title, is_featured, title_image,
            sub_title: sub_title__name,
            author {
              title slug
            }
            publisher {
              title slug
            }
            slug
          }
        }
      }
    }
    `,
        args
      )
      .then((r) => r.data.searchBooks)
  }
}
