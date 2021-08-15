import { $frappe, CursorPaginator, DBFilterInput, DBFilterOperator } from '~/plugins/frappeclient'
import { VuexModule, Module, VuexAction } from 'nuxt-property-decorator'
import { BookSeries } from './types'

@Module({ namespaced: true,stateFactory: true })
export default class BookSeriesStore extends VuexModule {
  @VuexAction
  public async searchBookSeries(txt?: string) {
    const filter: DBFilterInput[] = []
    if (txt) {
      filter.push({ fieldname: 'title', operator: DBFilterOperator.LIKE, value: `%${txt}%` })
    }
    return $frappe
      .graphql<{ BookSeries: CursorPaginator<BookSeries> }>(
        `
    query BookSeriesQuery($filter: [DBFilterInput!]) {
      BookSeries(first: 10, filter: $filter) {
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
      .then((r) => r.data.BookSeries.edges.map((x) => x.node))
  }
}
