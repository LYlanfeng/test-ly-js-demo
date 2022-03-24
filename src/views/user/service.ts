import BaseService from '@/apis/BaseService'
import type { HttpInstance } from '@/apis/types'
import type { User } from './types'

class UserService extends BaseService<User> {
  pk = 'userId'

  constructor(http?: HttpInstance) {
    super('sys/user', http)
  }
}

const userService = new UserService()

export { UserService, userService }
