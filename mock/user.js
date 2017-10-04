import {Random} from 'mockjs'
import {md5} from '../src/utils/tools'

const randomAvatar = () => `https://www.gravatar.com/avatar/${md5(Random.email())}?d=retro&s=96`;

const userBase = {
  'username': /\+861[358]\d{9}/,
  'nickname|1': ['@name', '@cname'],
  'uid': '@id',
  'access': 'user',
  'avatar': randomAvatar,
  'address|1': ['', '@county(true) @csentence'],
  'lastPointAddress': ['@province', '@city', '@county'],
  'lastPoint|+1': 1
};

module.exports = {
  '/user/logining': {
    'result|1': ['OK', 'ERROR'],
    'info': {
      ...userBase
    },
    'message|1': ['此用户已登录', '用户账号或密码错误']
  },
  '/user/logout': {
    'result|1': ['OK', 'ERROR'],
    'message': '此用户未登录，注销失败'
  },
  '/user/login/state/': {
    result: 'OK',
    'info|+1': ["LOGINING", {
      ...userBase
    }]
  },
  '/user/login/QRCode': {
    result: 'OK',
    info: {
      url: '@image(300x300, @hex, Mock QRCode)'
    }
  },
  '/user/registerable': {
    'result|1': ['OK', 'ERROR'],
    'message': '该账号已注册，请直接登录'
  },
  '/user/SMS/captcha': {
    result: 'OK'
  },
  '/user/signing': {
    'result|1': ['OK', 'ERROR'],
    'info': {
      ...userBase
    },
    'message': '验证码错误'
  },
  '/user/info': {
    result: 'OK',
    info: {
      'username': /\+861[358]\d{9}/,
      'nickname|1': ['@name', '@cname'],
      'uid': '@id',
      'access|1': ['user', 'vendor', 'manager'],
      'avatar': randomAvatar,
      'address': '@county(true) @csentence',
      createDate: '@now(T)',
      library: {
        illegalCount: '@natural(0, 1)',
        uploadFileCount: '@natural(1, 10)',
        acceptFileCount: '@natural(1, 5)',
        deleteFileCount: '@natural(0, 3)'
      },
      school: {
        "city": '@province',
        "name": '@city',
        "campus": '@city()大学'
      }
    }
  }
};