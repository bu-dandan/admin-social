import request from '@/utils/request'

export function access_token(data) {
  return request({
    url: '/openApi/oauth2/access_token/',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/openApi/oauth2/advertiser/get/',
    method: 'get',
    params: { 'access_token': token }
  })
}
