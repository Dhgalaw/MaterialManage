import {request} from "./request";

export function login(name,password) {
  return request({
    url: 'material/login',
    method: 'post',
    data: {
      "account":name,
      "password":password
    }
  })
  
}