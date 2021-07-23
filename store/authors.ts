import { VuexModule, Module, VuexAction } from 'nuxt-property-decorator'
import { $frappe, CursorPaginator, DBFilterInput } from '~/plugins/frappeclient'

export interface Author {
  name: string
  title: string
}

@Module({ namespaced: true, stateFactory: true })
export default class AuthorsStore extends VuexModule {
  @VuexAction
  public async searchAuthorsLink(txt?: string) {
    const filter: DBFilterInput[] = []
    if (txt) {
      filter.push({ fieldname: 'title', operator: 'LIKE', value: txt })
    }
    return $frappe
      .graphql<{ Authors: CursorPaginator<Author> }>(
        `
    query AuthorQuery($filter: [DBFilterInput!]) {
      edges {
        node {
          title
          name
        }
      }
    }
    `,
        {
          filter,
        }
      )
      .then((r) => r.data.Authors.edges.map((x) => x.node))
  }
}
