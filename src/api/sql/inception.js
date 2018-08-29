import request from '@/utils/request'

const inceptions = '/inceptions/'

export function GetSqlList(params) {
  return request({
    url: inceptions,
    method: 'get',
    params
  })
}

export function GetSqlDetail(id) {
  return request.get(inceptions + id)
}

export function SqlAction(id, action) {
  return request.get(inceptions + id + '/' + action)
}
