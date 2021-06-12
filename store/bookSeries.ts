import { VuexModule, Module } from 'nuxt-property-decorator'

@Module({ namespaced: true,stateFactory: true })
export default class BookSeriesStore extends VuexModule {
  series = 2
}
