import request from '@/utils/request'

export function getAdvertiserList(params) {
  return request({
    url: '/openApi/2/report/ad/get/',
    method: 'get',
    params
  })
}
export function searchTable(params) {
  return request({
    url: '/test/table/search',
    method: 'get',
    params
  })
}
export function clickTable(params) {
  return request({
    url: '/test/table/click',
    method: 'get',
    params
  })
}

export function crawling(params) {
  return request({
    url: '/test/table/crawling',
    method: 'get',
    params
  })
}