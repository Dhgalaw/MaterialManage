import {request} from "./request";

export function getMaterial(name) {
  return request({
    url:'material/select',
    method: 'post',
    data: {
      "name": name
    }

  })

}