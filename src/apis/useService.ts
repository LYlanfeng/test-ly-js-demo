import { isRef, unref } from 'vue'
import { useSWR, usePagination } from '@ly-js/element'
import { capitalize } from '@ly-js/utils'
import type { Ref, UnwrapNestedRefs } from 'vue'
import type { SWRConfig } from '@ly-js/element'
import type { PageResponse } from '@/apis/types'
import BaseService from './BaseService'

export const useService = <G = any, A = G, D = G, U = G, F = G, DF = G>(
  service: BaseService<G, A, D, U, F, DF>
  // export const useService = <
  //   R extends BaseService,
  //   G = R extends BaseService<infer GG> ? GG : never,
  //   A = R extends BaseService<infer GG, infer AA> ? AA : never,
  //   D = R extends BaseService<infer GG, infer AA, infer DD> ? DD : never,
  //   U = R extends BaseService<infer GG, infer AA, infer DD, infer UU>
  //     ? UU
  //     : never,
  //   F = R extends BaseService<infer GG, infer AA, infer DD, infer UU, infer FF>
  //     ? FF
  //     : never,
  //   DF = R extends BaseService<
  //     infer GG,
  //     infer AA,
  //     infer DD,
  //     infer UU,
  //     infer FF,
  //     infer DFF
  //   >
  //     ? DFF
  //     : never
  // >(
  //   service: R
) => {
  const useList = <T extends Record<string, any>>(
    options: SWRConfig<Array<F>>,
    query?: UnwrapNestedRefs<T> | Ref<T>
  ) => {
    const { data, mutate, loading } = useSWR(
      async () => {
        const res = await service.list(unref(query))
        return res.data
      },
      options,
      []
    )

    return {
      data,
      mutate,
      loading
    }
  }
  const usePaging = <T>(
    options: SWRConfig<PageResponse<F>> = {},
    query?: UnwrapNestedRefs<T> | Ref<T>
  ) => {
    const { pagination, render: renderPage, addListening } = usePagination()

    options.page = pagination
    const { data, mutate, loading } = useSWR(() => {
      return service
        .paging({
          data: isRef(query) ? unref(query) : query,
          currentPage: pagination.currentPage,
          pageSize: pagination.pageSize
        })
        .then(res => res.data)
    }, options)
    addListening(mutate)

    return {
      renderPage,
      data,
      mutate,
      loading
    }
  }
  const useDetail = <T extends Record<string, any>>(
    options: SWRConfig<DF> = {},
    query: UnwrapNestedRefs<T> | Ref<T>
  ) => {
    const { data, mutate, loading } = useSWR(async () => {
      const res = await service.get(unref(query))
      return res.data
    }, options)
    return {
      data,
      mutate,
      loading
    }
  }
  const useUpdate = <T extends U | A>(
    options: SWRConfig<U | A> = {},
    value: UnwrapNestedRefs<T> | Ref<T>
  ) => {
    const { data, mutate, loading } = useSWR(async () => {
      const o = isRef(value) ? unref(value) : value
      const res = await service.update(o as T)
      return res.data
    }, options)
    return {
      data,
      mutate,
      loading
    }
  }

  return {
    useList,
    usePaging,
    useDetail,
    useUpdate
  } as const
}
