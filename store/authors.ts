import { VuexModule, Module, VuexAction } from 'nuxt-property-decorator'
import {
  $frappe,
  CursorPaginator,
  DBFilterInput,
  DBFilterOperator,
} from '~/plugins/frappeclient'
import { Author } from './types'

@Module({ namespaced: true, stateFactory: true })
export default class AuthorsStore extends VuexModule {
  @VuexAction
  public async searchAuthors(txt?: string) {
    const filter: DBFilterInput[] = []
    if (txt) {
      filter.push({
        fieldname: 'title',
        operator: DBFilterOperator.LIKE,
        value: `%${txt}%`,
      })
    }
    return $frappe
      .graphql<{ Authors: CursorPaginator<Author> }>(
        `
    query AuthorQuery($filter: [DBFilterInput!]) {
      Authors(first: 10, filter: $filter) {
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
      .then((r) => r.data.Authors.edges.map((x) => x.node))
  }

  @VuexAction
  public async getAllAuthors() {
    return $frappe
      .graphql<{ Authors: CursorPaginator<Author> }>(
        `
    query AuthorQuery {
      Authors(first: 99999, sortBy: { direction: ASC, field: TITLE }) {
        edges {
          node {
            title
            name
            slug
          }
        }
      }
    }
    `
      )
      .then((r) => r.data.Authors.edges.map((x) => x.node))
  }
}
