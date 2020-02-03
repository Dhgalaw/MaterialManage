import {request} from "./request";

export function register(name,password) {
  return request({
    url: '/material/registerUser',
    method: 'post',
    data: {
      "account":name,
      "password":password
    }
  })
}