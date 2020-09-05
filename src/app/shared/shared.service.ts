import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  cartArray = [];
  itemVal;
  index;
  count = new Subject<number>();
  orders: any = [];

  constructor() { }

  getCartItems(){
    return this.cartArray.slice();
  }

  // countCartItems(){
  //   this.count = this.cartArray.length;
  // }

  sendItemToCart(item, quant) {
    item.quantity = quant;
     this.cartArray.push(item);
     this.count.next(this.cartArray.length)
  }

  isItemInCart(name){
      this.itemVal = this.cartArray.find((data) => data.name == name )
      if(this.itemVal){
        return true;
      }
      else {
        return false;
      }
  }

  removeItemFromCart(name){
     this.index = this.cartArray.findIndex((val) => {
         return val.name == name
     });
     console.log(this.index)
     this.cartArray.splice(this.index,1);
     console.log(this.cartArray);
     this.count.next(this.cartArray.length)
  }

  createOrders(items: []){
    let orderId = this.orders.length + 1;
    console.log(orderId) 
    let order = { orderId, ...items }
   this.orders.push(order);
   console.log(this.orders)
  }
}
