import {request} from "./request";

export function selectIt(name) {
  return request({
    url: "/material/select",
    method: 'post',
    data: {
      "name": name? name:'',
    }
  })
}