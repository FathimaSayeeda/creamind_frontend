import { VuexModule, Module } from 'nuxt-property-decorator'

@Module({ namespaced: true, name: 'authors', stateFactory: true })
export default class AuthorsStore extends VuexModule {
  auth = 2
}
