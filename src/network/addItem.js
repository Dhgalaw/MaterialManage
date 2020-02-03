import {request} from "./request";


export function addItem(name,number,borrow,returner,total,price) {
  return request({
    url: 'material/insert',
    method: 'post',
    data: {
      "name": name,
      "number": number,
      "borrow": borrow,
      "returner": returner,
      "total": total,
      "price": price
    }
  })

}