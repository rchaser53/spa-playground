declare module '*.vue' {
  import Vue from 'vue'
  import { VueConstructor } from 'vue/types/vue'
 
	export default Vue
  export function createClass(diObj: any): any
  export function createDecoratorObj(client: any, data: any): any
  export function insertUtilMixins(MixinClasses: VueConstructor[]): any
}
