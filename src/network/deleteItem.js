import {request} from "./request";

export function deleteItem(id) {
  return request({
    url:'material/delete',
    method: 'post',
    data: {
      "id": id
    }

  })

}