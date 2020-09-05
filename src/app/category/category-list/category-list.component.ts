import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../category-list.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  
  categoryList: Array<Object>;
  categoryItem: Array<Object>;
  viewList: boolean = false;
  
  constructor(private CategoryServ: CategoryListService) { }

  ngOnInit() {
      this.categoryList = this.CategoryServ.getCategoryList();
      this.categoryItem = this.CategoryServ.getCategoryItem();
  }

  viewAll(){
     this.viewList = !this.viewList;
     var div = document.querySelector('.button-style');
     div.classList.add('hidden');
  }

}
