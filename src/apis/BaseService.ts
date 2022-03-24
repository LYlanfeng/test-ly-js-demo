import Qs, { IStringifyOptions } from 'qs'
import { AxiosRequestConfig } from 'axios'
import type {
  HttpResponse,
  Page,
  PageContext,
  PageQueryParams,
  UploadRes,
  UploadProgressEvent,
  IBaseService,
  HttpInstance
} from './types'

export type {
  HttpResponse,
  Page,
  PageContext,
  PageQueryParams,
  UploadRes,
  UploadProgressEvent
}

class BaseService<G = any, A = G, D = G, U = G, F = G, DF = G>
  implements IBaseService<AxiosRequestConfig, G, A, D, U, F, DF>
{
  /**
   * restful module 名称配置
   * @type {string}
   */
  module = ''
  /**
   * @type {string}
   */
  pk = ''

  _http

  static staticHttp: HttpInstance | undefined

  serializerConfig: IStringifyOptions = {
    arrayFormat: 'indices',
    allowDots: false
  }
  /**
   * 构造函数
   * @param module 模块名称
   * @param myHttp 请求实例, 多实例请求使用
   */
  constructor(module: string, myHttp: HttpInstance | undefined | null) {
    this.module = module
    this._http = myHttp
  }

  static setHttp(http: HttpInstance) {
    BaseService.staticHttp = http
  }
  get http() {
    const r = this._http || BaseService.staticHttp
    if (!r) {
      throw new Error('BaseService not has http instance!!!')
    }
    return r
  }
  /**
   * 使用qs格式化请求参数
   * @param params
   * @param config
   * @returns {string}
   */
  serializer(params: any, config: IStringifyOptions = {}) {
    config = { ...this.serializerConfig, ...config }
    return Qs.stringify(params, config)
  }

  /**
   * Get请求封装，用于带参数的Get请求
   * @param url
   * @param params
   * @param config qs序列化配置
   * @returns Promise<ResponseData>}
   */
  query<T = any>(url: string, params?: any, config?: IStringifyOptions) {
    const { http } = this
    return http.get<HttpResponse<T>>(url, {
      params,
      paramsSerializer: (params: any) => this.serializer(params, config)
    })
  }

  /**
   * 分页查询所有资源
   * @param params 请求参数
   * @returns Promise<ResponseData>}
   */
  list<T = F>(params: Record<string, any> = {}) {
    const { http, module } = this
    return http.post<HttpResponse<Array<T>>>(`/${module}/list`, params)
  }

  /**
   * 分页查询所有资源
   * @param params 请求参数
   * @returns Promise<ResponseData>}
   */
  paging<T = F>(params: PageQueryParams) {
    const { http, module } = this
    return http.post<HttpResponse<PageContext<T>>>(`/${module}/pager`, params)
  }

  /**
   * 通过id查询某个资源
   * @param id
   * @returns Promise<ResponseData>}
   */
  get<T = DF>(params: Record<string, any>) {
    const { http, module } = this
    return http.post<HttpResponse<T>>(`/${module}/info`, params)
  }

  /**
   * 新增一个资源
   * @param data
   * @returns Promise<ResponseData>}
   */
  post<T extends A>(data: Partial<T>) {
    const { http, module } = this
    return http.post<HttpResponse<T>>(`/${module}/insert`, data)
  }

  /**
   * 修改一个资源
   * @param id 资源id
   * @param params 资源对象
   * @returns Promise<ResponseData>}
   */
  put<T extends U>(params: Partial<T>) {
    const { http, module } = this
    return http.post<HttpResponse<T>>(`/${module}/update`, params)
  }

  /**
   * 删除一个资源
   * @param id 资源id
   * @returns Promise<ResponseData>}
   */
  delete<T = D>(params: Record<string, any>) {
    const { http, module } = this
    return http.post<HttpResponse<T>>(`/${module}/delete`, params)
  }

  /**
   * 新增或者编辑一个资源
   * @param params 资源对象
   * @returns {*|void|IDBRequest<IDBValidKey>|Promise<void>}
   */
  update<T extends U | A>(params: Partial<T>) {
    const pk = this.pk || 'id' // 子类通过设置pk 可以用于判断资源id是否存在用于执行新增/修改
    const id = (params as any)[pk]
    let r: unknown
    if (id) {
      r = this.put<U>(params as T)
    }
    r = this.post<A>(params as T)
    return r as T extends U
      ? Promise<HttpResponse<U>>
      : Promise<HttpResponse<A>>
  }

  upload(
    url: '',
    file: File,
    params?: Record<string, any>,
    onProgress?: (e: any) => void
  ) {
    const formData = new FormData()
    formData.append('file', file)
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        formData.append(key, value)
      })
    }
    const { http } = this
    return http.post<HttpResponse<UploadRes>>(`${url}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (e: ProgressEvent) => {
        if (e.total > 0) {
          ;(e as UploadProgressEvent).percent = (e.loaded / e.total) * 100
        }
        if (onProgress) {
          onProgress(e)
        }
      }
    })
  }
}
export default BaseService
