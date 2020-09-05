import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryListService {
    itemId;
    categoryList: any = [{ 'categoryName': 'Shakes', 'itemVals': 'Shakeitems'},
    { 'categoryName': 'Cakes', 'itemVals': 'Cakeitems'},
  { 'categoryName': 'Cookies', 'itemVals': 'Cookieitems' }]
  
    categoryItem: any = [{'Shakeitems': [{
      'name': 'Chocolate Shake', 'image': '../assets/img/Chocolate-Shake.jpg', 'cost': '150', 'discount': true, 'description': 'Combine the ice cream, diced chocolate, and 1/2 cup whipped cream in a blender. Blend until smooth. Pour into glasses, and garnish with 1/4 cup whipped cream. Pour into glasses, and garnish with 1/4 cup whipped cream.'},
      {'name': 'Butterscotch Shake', 'image': '../assets/img/butterscoch-shake.jpg', 'cost': '200', 'discount': true, 'description': 'Take the milk and add the butterscotch icecream in it and blend it. Then for serving pour into glasses and top it with a small scoop of icecream and chopped almonds.'},
      { 'name': 'Strawberry Shake', 'image': '../assets/img/strawberry-shake.jpg', 'cost': '250', 'discount': false, 'description': 'Blend half of strawberries, 1/4 tsp. vanilla, 1 cup ice cream and 2 Tbsp. milk in blender until smooth. Pour into 2 glasses. Repeat with remaining strawberries, vanilla, ice cream and milk.'},
      { 'name': 'Chiku Shake', 'image': '../assets/img/chiku-shake.jpg', 'cost': '300', 'discount': false, 'description': 'Chikoo blended with cream, grape juice, orange juice and almond paste.'}
    ]}, {
    'Cakeitems': [{
      'name': 'Chocolate Cake', 'image': '../assets/img/choclate-cake.jpg', 'cost': '450', 'weights': ['250gm', '500gm'], 'discount': true, 'description': 'Double Chocolate Amycakes are decorated with chocolate flakes and chocolate ganache drizzle. Confetti- Moist Vanilla Almond cake studded with cashew.alert-danger'},
      {'name': 'Vanila Cake', 'image': '../assets/img/vanila-cake.jpg', 'cost': '350', 'weights': ['250gm', '500gm'], 'discount': false, 'description': 'Vanilla Almond- Light and sweet but moist and rich in flavor, our Vanilla Almond cake is filled and frosted with our house vanilla buttercream.'},
      { 'name': 'Fruit Cake', 'image': '../assets/img/fruit-cake.jpg', 'cost': '500', 'weights': ['250gm', '500gm'], 'discount': true, 'description': 'This easy recipe for Vanilla Cream Sponge Cake made with whipped cream icing. The top layer topped with whipped cream and fresh fruit.'},
      { 'name': 'Strawberry Cake', 'image': '../assets/img/strawberry-cake.jpg', 'cost': '550', 'weights': ['250gm', '500gm'], 'discount': false, 'description': 'Jam-packed with fresh strawberries, this strawberry cake is one of simplest, most delicious cakes you will ever make'},
      { 'name': 'Cranberry Cake', 'image': '../assets/img/cranberry-cake.jpg', 'cost': '400', 'weights': ['250gm', '500gm'], 'discount': true, 'description': 'Fresh cranberries are a deliciously tart addition to this simple cake. A sweet cream sauce poured over the hot cake keeps it extra moist.'}
    ] },
    {'Cookieitems': [{
      'name': 'Chocolate Shake', 'image': '../assets/img/Chocolate-Shake.jpg', 'cost': '150', 'discount': true, 'description': 'Combine the ice cream, diced chocolate, and 1/2 cup whipped cream in a blender. Blend until smooth. Pour into glasses, and garnish with 1/4 cup whipped cream. Pour into glasses, and garnish with 1/4 cup whipped cream.'},
      {'name': 'Butterscotch Shake', 'image': '../assets/img/butterscoch-shake.jpg', 'cost': '200', 'discount': true, 'description': 'Take the milk and add the butterscotch icecream in it and blend it. Then for serving pour into glasses and top it with a small scoop of icecream and chopped almonds.'},
      { 'name': 'Strawberry Shake', 'image': '../assets/img/strawberry-shake.jpg', 'cost': '250', 'discount': false, 'description': 'Blend half of strawberries, 1/4 tsp. vanilla, 1 cup ice cream and 2 Tbsp. milk in blender until smooth. Pour into 2 glasses. Repeat with remaining strawberries, vanilla, ice cream and milk.'},
      { 'name': 'Chiku Shake', 'image': '../assets/img/chiku-shake.jpg', 'cost': '300', 'discount': false, 'description': 'Chikoo blended with cream, grape juice, orange juice and almond paste.'}
    ]}]

    offers: any = [{'item': 'Chocolate Shake', 'discount': 10}, {'item': 'Butterscotch Shake', 'discount': 20}, {'item': 'Chocolate Cake', 'discount': 15},
    {'item': 'Fruit Cake', 'discount': 20}, {'item': 'Cranberry Cake', 'discount': 5}];

    itemdatas: any;
    sellingPrice: number;

    getCategoryList(){
        return this.categoryList.slice();
    }

    getCategoryItem(){
        return this.categoryItem.slice();
    }

    getDiscountDetails(name: any){
      console.log(this.offers.find((list) => list.item == name))
      return this.offers.find((list) => list.item == name)     
    }
    getItemsByCategory(name: any, id: any){
      this.itemId = this.categoryList.find((list) => list.categoryName == name )
      this.itemdatas = this.categoryItem[id];
      return this.itemdatas[this.itemId.itemVals];
    }

    getItemDetail(name: any, id: any, category: any){
      this.itemId = this.categoryList.find((list) => list.categoryName == category )
       this.itemdatas = this.categoryItem[id];
       console.log(this.categoryItem[id]);
      return this.itemdatas[this.itemId.itemVals].find((data) => data.name == name );
    }

    getDiscountValue(price: number, discount: number){
        console.log(this.sellingPrice = (price - (price * (discount/100))))
         return this.sellingPrice = (price - (price * (discount/100)))
    }
}