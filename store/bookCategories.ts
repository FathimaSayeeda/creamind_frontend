import { VuexModule, Module, VuexAction } from 'nuxt-property-decorator'
import { $frappe, CursorPaginator, DBFilterInput, DBFilterOperator } from '~/plugins/frappeclient'
import { BookCategory } from './types'

@Module({ namespaced: true, stateFactory: true })
export default class BookCategoriesStore extends VuexModule {
  @VuexAction
  public async searchCategories(txt?: string) {
    const filter: DBFilterInput[] = []
    if (txt) {
      filter.push({ fieldname: 'title', operator: DBFilterOperator.LIKE, value: `%${txt}%` })
    }
    return $frappe
      .graphql<{ BookCategorys: CursorPaginator<BookCategory> }>(
        `
    query BookCategories($filter: [DBFilterInput!]) {
      BookCategorys(first: 10, filter: $filter) {
        edges {
          node {
            title
            name
            slug
          }
        }
      }
    }
    `,
        {
          filter,
        }
      )
      .then((r) => r.data.BookCategorys.edges.map((x) => x.node))
  }
}
