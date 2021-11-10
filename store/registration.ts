import { VuexModule, Module, VuexAction } from 'nuxt-property-decorator'
import {
  $frappe,
  CursorPaginator,
  DBFilterInput,
  DBFilterOperator,
} from '~/plugins/frappeclient'

@Module({ namespaced: true, stateFactory: true })
export default class RegistrationStore extends VuexModule {
  @VuexAction
  public async makeRegistrationRequest(doc: object) {
    return $frappe.graphql(
      `
      mutation SaveDoc($doctype: String!, $doc: String!) {
        saveDoc(doctype: $doctype, doc: $doc) {
          doctype
          name
        }
      }
      `,
      {
        doctype: 'Registration Request',
        doc: JSON.stringify(doc),
      }
    )
  }
}
