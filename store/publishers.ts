import { VuexModule, Module, VuexAction } from 'nuxt-property-decorator'
import {
  $frappe,
  CursorPaginator,
  DBFilterInput,
  DBFilterOperator,
} from '~/plugins/frappeclient'
import { Publisher } from './types'

@Module({ namespaced: true, stateFactory: true })
export default class PublishersStore extends VuexModule {
  @VuexAction
  public async searchPublishers(txt?: string) {
    const filter: DBFilterInput[] = []
    if (txt) {
      filter.push({
        fieldname: 'title',
        operator: DBFilterOperator.LIKE,
        value: `%${txt}%`,
      })
    }
    return $frappe
      .graphql<{ Publishers: CursorPaginator<Publisher> }>(
        `
    query Publishers($filter: [DBFilterInput!]) {
      Publishers(first: 10, filter: $filter) {
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
      .then((r) => r.data.Publishers.edges.map((x) => x.node))
  }

  @VuexAction
  public async getAllPublishers() {
    return $frappe
      .graphql<{ Publishers: CursorPaginator<Publisher> }>(
        `
    query Publishers {
      Publishers(first: 99999, sortBy: { direction: ASC, field: TITLE }) {
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
      .then((r) => r.data.Publishers.edges.map((x) => x.node))
  }
}
