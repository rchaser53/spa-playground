import Vue from 'vue'
import { AxiosRequestConfig } from 'axios'

declare module 'vue/types/vue' {
	interface Vue {
		apiGet: GlobalMixin.apiGet
	}
}

declare global {
	namespace GlobalMixin { export type apiGet = (api: string, param?: any) => any }
}
