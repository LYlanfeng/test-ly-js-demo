export interface ResponseData<T = any> {
  code: number
  message: string | undefined | null
  data: T
}

export interface Page {
  currentPage: number
  pageSize: number
  total: number
}

export interface PageResponse<T> {
  list: Array<T>
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  navigateFirstPage: number
  navigateLastPage: number
  navigatePages: number
  navigatepageNums: number[]
  nextPage: number
  pageNum: number
  pageSize: number
  pages: number
  prePage: number
  size: number
  startRow: number
  total: number
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
  percent: number;
}
