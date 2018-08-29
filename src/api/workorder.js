import request from '@/utils/request'

// 获取工单列表
export function getWorkOrderList(params) {
  return request({
    url: '/workorder/',
    method: 'get',
    params
  })
}

// 创建工单
export function createWorkOrder(data) {
  return request({
    url: '/workorder/',
    method: 'post',
    data
  })
}

// 修改工单
export function updateWorkOrder(id, data) {
  return request({
    url: '/workorder/' + id + '/',
    //method: 'put',
    method: 'patch',
    data
  })
}

// 删除工单
export function deleteWorkOrder(id) {
  return request({
    url: '/workorder/' + id + '/',
    method: 'delete'
  })
}
