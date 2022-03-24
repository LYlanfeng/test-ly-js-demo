import { useService } from '@/apis/useService'
import { userService as service } from '../service'
import type { User } from '../types'

const {
  useList: useUserList,
  usePaging: useUserPaging,
  useDetail: useUserDetail,
  useUpdate: useUserUpdate
} = useService<User>(service)

export { useUserList, useUserPaging, useUserDetail, useUserUpdate }
