import Vue from 'vue'
import { AxiosRequestConfig, CancelTokenSource } from 'axios'

declare module 'vue/types/vue' {
	interface Vue {
    apiGet: GlobalMixin.apiGet
    cancelSource: CancelTokenSource
    eventhub: Vue
	}
}

declare global {
	namespace GlobalMixin { export type apiGet = (api: string, param?: any) => any }
}
