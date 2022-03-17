import { useService } from '@/apis/useService'
import { userService as service } from '../service'
import type { User } from '../types'

const {
  useList: useUserList,
  usePaging: useUserPaging,
  useDetail: useUserDetail,
  useUpdate: useUserUpdate
} = useService<User>(service)

// const { data, mutate, loading } = useUserList({})

export { useUserList, useUserPaging, useUserDetail, useUserUpdate }

// export const useUserList = <T extends Record<string, any>>(
//   options: SWRConfig<Array<User>>,
//   query?: UnwrapNestedRefs<T> | Ref<T>
// ) => {
//   const { data, mutate, loading } = useSWR(
//     async () => {
//       const res = await service.list(unref(query))
//       return res.data
//     },
//     options,
//     []
//   )

//   return {
//     data,
//     mutate,
//     loading
//   }
// }
// const { data: data2 } = useUserList({})
// export const useUserPagingQuery = <T>(
//   options: SWRConfig<PageResponse<User>> = {},
//   query?: UnwrapNestedRefs<T> | Ref<T>
// ) => {
//   const { pagination, render: renderPage, addListening } = usePagination()

//   options.page = pagination
//   const { data, mutate, loading } = useSWR(() => {
//     return service
//       .paging({
//         data: isRef(query) ? unref(query) : query,
//         currentPage: pagination.currentPage,
//         pageSize: pagination.pageSize
//       })
//       .then(res => res.data)
//   }, options)
//   addListening(mutate)

//   return {
//     renderPage,
//     data,
//     mutate,
//     loading
//   }
// }
// export const useUserDetail = <T extends Record<string, any>>(
//   options: SWRConfig<User> = {},
//   query: UnwrapNestedRefs<T> | Ref<T>
// ) => {
//   const { data, mutate, loading } = useSWR(async () => {
//     const res = await service.get(unref(query))
//     return res.data
//   }, options)
//   return {
//     data,
//     mutate,
//     loading
//   }
// }
// export const useUserUpdate = <T extends User>(
//   options: SWRConfig<User> = {},
//   value: UnwrapNestedRefs<T> | Ref<T>
// ) => {
//   const { data, mutate, loading } = useSWR(async () => {
//     const res = await service.update(isRef(value) ? unref(value) : value)
//     return res.data
//   }, options)
//   return {
//     data,
//     mutate,
//     loading
//   }
// }
