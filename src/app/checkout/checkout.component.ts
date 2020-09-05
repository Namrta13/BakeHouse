import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartList;
  totalCost: number = 0;
  constructor(private SharedServ: SharedService) { }

  ngOnInit() {
    this.cartList = this.SharedServ.getCartItems();
     console.log(this.cartList)
     console.log(this.cartList.length)
     this.cartList.forEach((item) => {
       this.totalCost = this.totalCost + +item.cost;
     });
  }

  onCheckout(checkoutForm: NgForm){
     console.log("hello")
     this.SharedServ.createOrders(this.cartList);
  }
}
