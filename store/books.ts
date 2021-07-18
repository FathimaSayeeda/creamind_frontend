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

export interface BookNode {
  title: string
  name: string
  is_featured: boolean
  sub_title: string
  title_image: string
  author: string
  publisher: string
}

export interface SearchBooksParams {
  first?: number
  last?: number
  after?: string
  before?: string
  filter?: DBFilterInput[]
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
  public async getFeaturedBooks() {
    const paginator = await this.context.dispatch('searchBooks', {
      first: 10,
      filter: [{ fieldname: 'is_featured', operator: 'EQ', value: "1" }],
    })
    return paginator.edges.map((x) => x.node)
  }

  @VuexAction
  public async searchBooks(
    args: SearchBooksParams = { first: 10 }
  ): Promise<CursorPaginator<BookNode>> {
    return $frappe
      .graphql<{ Books: CursorPaginator<BookNode> }>(
        `
    query BooksQuery($first: Int, $last: Int, $after: String, $before: String, $filter: [DBFilterInput!]) {
      Books(
        first: $first, last: $last,
        after: $after, before: $before,
        filter: $filter
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
            name, title, is_featured, title_image,
            sub_title: sub_title__name,
            author: author__name,
            publisher: publisher__name
          }
        }
      }
    }
    `,
        args
      )
      .then((r) => r.data.Books)
  }
}
