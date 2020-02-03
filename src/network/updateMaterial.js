import {request} from "./request";


export function updateMaterial(id,name,number,borrow,returner,total,price) {
  return request({
    url: 'material/update',
    method: 'post',
    data: {
      "id": id,
      "name": name,
      "number": number,
      "borrow": borrow,
      "returner": returner,
      "total": total,
      "price": price
    }

  })

}