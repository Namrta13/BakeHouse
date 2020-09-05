import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryItemComponent } from './category/category-list/category-item/category-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ItemListComponent } from './category/item-list/item-list.component';
import { ItemDetailComponent } from './category/item-list/item-detail/item-detail.component';
import { Route, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatInputModule } from '@angular/material/input';
import { BarRatingModule } from 'ngx-bar-rating';
import { CartComponent } from './cart/cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CheckoutComponent } from './checkout/checkout.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Route[] = [
  { path: '', redirectTo: 'category', pathMatch: 'full'},
  { path: 'category', component: CategoryComponent, 
       children: [
         { path: '', component: CategoryListComponent},
         { path: ':name', component: ItemListComponent},
         { path: ':name/:itemname', component: ItemDetailComponent}
       ]},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'login', component: LoginComponent, 
    children: [
      { path: '', component: LoginComponent},
      { path: 'reset', component: ResetPasswordComponent},
      { path: 'forget', component: ForgotPasswordComponent}
    ]}     
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ItemListComponent,
    ItemDetailComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    OrdersComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCarouselModule,
    MatCardModule,
    MatListModule,
    RouterModule.forRoot(routes),
    ScrollingModule,
    MatInputModule,
    BarRatingModule,
    FormsModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
