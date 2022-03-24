export interface HttpResponse<T = any> {
  code: number
  message: string | undefined | null
  data: T
}

export interface Page {
  currentPage: number
  pageSize: number
  total: number
}

export interface PageContext<T> {
  list: Array<T>
  currentPag?: number
  pageSize?: number
  total?: number
  [key: string]: any
}

export interface PageQueryParams<T = any> {
  currentPage: number
  pageSize: number
  data: T
}

export interface UploadRes {
  url: string
}
export interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

export interface HttpInstance<C = any> {
  request<T = any>(config: C): Promise<T>
  get<T = any>(url: string, config?: C): Promise<T>
  delete<T = any>(url: string, config?: C): Promise<T>
  head<T = any>(url: string, config?: C): Promise<T>
  options<T = any>(url: string, config?: C): Promise<T>
  post<T = any>(url: string, data?: any, config?: C): Promise<T>
  put<T = any>(url: string, data?: any, config?: C): Promise<T>
  patch<T = any>(url: string, data?: any, config?: C): Promise<T>
  [key: string]: any
}

export interface IBaseService<
  C = any,
  G = any,
  A = G,
  D = G,
  U = G,
  F = G,
  DF = G
> {
  module: string
  pk: string
  _http: HttpInstance<C> | undefined | null

  list: <T = F>(params?: Record<string, any>) => Promise<HttpResponse<T[]>>
  paging: <T = F>(
    params: PageQueryParams
  ) => Promise<HttpResponse<PageContext<T>>>
  get: <T = DF>(params: Record<string, any>) => Promise<HttpResponse<T>>
  post: <T extends A>(data: Partial<T>) => Promise<HttpResponse<T>>
  put: <T extends U>(params: Partial<T>) => Promise<HttpResponse<T>>
  delete: <T = D>(params: Record<string, any>) => Promise<HttpResponse<T>>
  update: <T extends U | A>(
    params: Partial<T>
  ) => T extends U ? Promise<HttpResponse<U>> : Promise<HttpResponse<A>>
  upload: (
    url: '',
    file: File,
    params?: Record<string, any>,
    onProgress?: (e: UploadProgressEvent) => void
  ) => Promise<HttpResponse<UploadRes>>
}
