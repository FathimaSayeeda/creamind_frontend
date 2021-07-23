import { NuxtHTTPInstance } from '@nuxt/http'
import { Plugin } from '@nuxt/types'

export interface CursorPaginator<T> {
  totalCount: number
  pageInfo: {
    hasNextPage: boolean
    hasPreviousPage: boolean
    startCursor: string
    endCursor: string
  }
  edges: {
    cursor: string
    node: T
  }[]
}

export interface DBFilterInput {
  fieldname: string
  operator: 'EQ' | 'NEQ' | 'LT' | 'GT' | 'LTE' | 'GTE' | 'LIKE' | 'NOT_LIKE'
  value: any
}

export interface GQLResponse<T> {
  data: T
  errors: any[]
}

export class FrappeClient {
  base_url: string

  constructor(private $http: NuxtHTTPInstance) {
    this.base_url = this.$http.getBaseURL()
  }

  public async call<T>(cmd: string, args: { [x: string]: any } = {}) {
    return this.$http
      .$post('', {
        cmd,
        ...args,
      })
      .then((r) => (r as FrappeResponse<T>).message)
  }

  public async graphql<T>(
    query: string,
    variables: { [x: string]: any } = {},
    operationName = null
  ): Promise<GQLResponse<T>> {
    return this.$http.$post('/api/method/graphql', {
      query,
      variables,
      operationName,
    })
  }

  public async getList<T>(doctype: string, fields?: string[]) {
    let params = {
      doctype,
      fields: '["name"]',
    }
    if (fields) {
      params.fields = JSON.stringify(fields)
    }
    return this.$http
      .$get('/api/method/frappe.client.get_list', {
        searchParams: params,
      })
      .then((r) => {
        // console.log("Get List Response", r)
        return (r as FrappeResponse<T[]>).message
      })
  }

  public getUrl(url: string): string {
    return this.base_url + url
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $frappe: FrappeClient
  }
}

declare module 'vuex/types/index' {
  interface Vue {
    $frappe: FrappeClient
  }
}

export interface FrappeResponse<T> {
  message: T
}

let $frappe: FrappeClient
const frappePlugin: Plugin = ({ $http }, inject) => {
  $frappe = new FrappeClient($http)
  inject('frappe', $frappe)
}

export { $frappe }
export default frappePlugin
