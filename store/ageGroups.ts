import {
  $frappe,
  CursorPaginator,
  DBFilterInput,
  DBFilterOperator,
} from '~/plugins/frappeclient'
import { VuexModule, Module, VuexAction } from 'nuxt-property-decorator'
import { AgeGroup } from './types'

@Module({ namespaced: true, stateFactory: true })
export default class AgeGroupStore extends VuexModule {
  @VuexAction
  public async searchAgeGroups(txt?: string) {
    const filter: DBFilterInput[] = []
    if (txt) {
      filter.push({
        fieldname: 'title',
        operator: DBFilterOperator.LIKE,
        value: `%${txt}%`,
      })
    }
    return $frappe
      .graphql<{ AgeGroups: CursorPaginator<AgeGroup> }>(
        `
    query AgeGroupsQuery($filter: [DBFilterInput!]) {
      AgeGroups(first: 10, filter: $filter) {
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
      .then((r) => r.data.AgeGroups.edges.map((x) => x.node))
  }

  @VuexAction
  public async getAllAgeGroups() {
    return $frappe
      .graphql<{ AgeGroups: CursorPaginator<AgeGroup> }>(
        `
    query AgeGroupsQuery {
      AgeGroups(first: 99999, sortBy: { direction: ASC, field: TITLE }) {
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
      .then((r) => r.data.AgeGroups.edges.map((x) => x.node))
  }
}
