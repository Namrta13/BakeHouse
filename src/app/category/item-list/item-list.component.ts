import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../category-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  name: any;
  index: any;
  itemlist;
  constructor(private CategoryServ: CategoryListService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
        this.route.params.subscribe((param) => {
            this.name = param['name'];
            this.route.queryParams.subscribe((val) => {
              this.index = +val['id']
              console.log(this.index)
              this.itemlist = this.CategoryServ.getItemsByCategory(this.name, this.index);
            console.log(this.itemlist);
            });
            
        });
  }

  getDetails(itemname: any){
    this.router.navigate([itemname], { queryParamsHandling: 'merge' , relativeTo: this.route})
  }

}
