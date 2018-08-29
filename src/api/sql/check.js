import request from '@/utils/request'

const autoSelects = '/sqlmng/autoselects/'
// const autoSelects = '/autoselects/'
const inceptionCheck = '/inceptioncheck/'

export function GetSelectData(data) {
  return request({
    url: autoSelects,
    method: 'post',
    data: data
  })
}
export function CheckSql(data) {
  return request({
    url: inceptionCheck,
    method: 'post',
    data: data
  })
}
