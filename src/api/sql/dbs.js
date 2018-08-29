import request from '@/utils/request'

const dbConfs = '/dbconfs/'

export function GetDbList(params) {
  return request({
    url: dbConfs,
    method: 'get',
    params
  })
}

export function UpdateDb(id, data) {
  return request({
    url: dbConfs + id + '/',
    method: 'put',
    data: data
  })
}

export function CreateDb(data) {
  return request({
    url: dbConfs,
    method: 'post',
    data: data
  })
}

export function DeleteDb(id) {
  return request({
    url: dbConfs + id + '/',
    method: 'delete'
  })
}
