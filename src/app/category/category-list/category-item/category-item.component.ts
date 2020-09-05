import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  @Input() index;
  @Input() items;
  @Input() category;
  categoryItem ;
  itemdatas: Array<Object>;
  showhide: boolean = true;
  hide: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.index)
    this.categoryItem = this.category.itemVals;
    this.itemdatas = this.items[this.categoryItem];
  }

  showHide(){
    this.showhide = !this.showhide;
    // var x = document.querySelectorAll(".card-style")
    // x.forEach((node) => {
    //   if (this.showhide == false){
    //     node.classList.add('hidden');
    //   }
    //   else {
    //     node.classList.remove('hidden');
    //   }
    // })

  }

  getDetails(itemname: any){
     this.router.navigate(['/category',this.category.categoryName, itemname], { queryParams: { 'id' : this.index  }});
  }
}
