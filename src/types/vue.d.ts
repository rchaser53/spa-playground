import Vue from 'vue'
import { AxiosRequestConfig, CancelTokenSource } from 'axios'

declare module 'vue/types/vue' {
	interface Vue {
    apiGet: GlobalMixin.apiGet
    cancelSource: CancelTokenSource
    onEventBus: any
    onEventBusOnce: any
    emitEventBus: any
    httpClient: any
	}
}

declare global {
	namespace GlobalMixin { export type apiGet = (api: string, param?: any) => any }
}
