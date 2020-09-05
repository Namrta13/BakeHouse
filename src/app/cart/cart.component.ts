import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  totalCost: number = 0;
  cartList;
  constructor(private SharedServ: SharedService) { }

  ngOnInit() {
     this.cartList = this.SharedServ.getCartItems();
     console.log(this.cartList)
     console.log(this.cartList.length)
     this.cartList.forEach((item) => {
       this.totalCost = this.totalCost + +item.cost;
     })
  }
  
  removeFromCart(name){
  this.SharedServ.removeItemFromCart(name);
    this.ngOnInit();
  }
}
