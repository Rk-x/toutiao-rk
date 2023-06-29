/**
 * 用户相关请求
 */

import request from '@/util/request'

// 登录
export function login (data) {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}

// 获取验证码  /v1_0/sms/codes/:mobile
export function sendCode (mobile) {
  return request({
    method: 'POST',
    url: '/v1_0/sms/codes/${mobile}'
  })
}
