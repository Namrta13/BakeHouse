import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryListService } from '../../category-list.service';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  inCart: boolean = false;
  selectedVal;
  category: any;
  itemName: any;
  index;
  itemdetail;
  sellingPrice: number;
  discountVal: number;
  quantity;
  weight;
  constructor(private route: ActivatedRoute, private CategoryServ: CategoryListService, private SharedServ: SharedService, private router: Router) { }

  ngOnInit() {
     this.route.params.subscribe((param) => {
       this.category = param['name']
        this.itemName = param['itemname'];
        console.log(param['itemname'])
        this.route.queryParams.subscribe((val) => {
            this.index = +val['id']
            console.log(+val['id'])
            this.itemdetail = this.CategoryServ.getItemDetail(this.itemName, this.index, this.category);
            console.log(this.itemdetail)
            if (this.itemdetail.discount){
              this.discountVal = this.CategoryServ.getDiscountDetails(this.itemdetail.name).discount;
              this.sellingPrice = this.CategoryServ.getDiscountValue(this.itemdetail.cost, this.discountVal);
            }
            
        });
     });
     if (!this.itemdetail.weights){
     this.selectedVal = "1";
     }
     if (this.itemdetail.weights){
      this.weight = this.itemdetail.weights[0];
     }
     console.log(this.SharedServ.getCartItems())
     this.inCart = this.SharedServ.isItemInCart(this.itemdetail.name);

  }

  additemToCart(item){
    if (!item.weights){
      console.log("quant")
    this.quantity = (<HTMLSelectElement>document.getElementById("quantity")).value;
    console.log(this.quantity);
    this.SharedServ.sendItemToCart(item, this.quantity);
    this.ngOnInit();
    } else {
    console.log(this.weight);
    this.SharedServ.sendItemToCart(item, this.weight);
    this.ngOnInit(); 
    }   
  }

  removeItem(name_item){
    this.SharedServ.removeItemFromCart(name_item);
    this.ngOnInit();
  }

  getWeight(netWeight){
    this.weight = netWeight;
  }
}
