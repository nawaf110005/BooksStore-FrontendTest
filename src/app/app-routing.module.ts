import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookCatagoryComponent } from './components/book-catagory/book-catagory.component';
import { BooksCatagoryComponent } from './components/books-catagory/books-catagory.component';
import { OrderComponent } from './components/order/order.component';
import { OrderConformationComponent } from './components/components/order-conformation/order-conformation.component';
import { OrderListComponent } from './components/components/order-list/order-list.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:_id',
    component: BookDetailComponent
  },
  {
    path: 'catagory/:books',
    component: BooksCatagoryComponent
  },
  {
    path: 'catagory',
    component: BookCatagoryComponent
  },
  {
    path: 'order/:id',
    component: OrderComponent
  },
  {
    path: 'conformation/:id',
    component: OrderConformationComponent
  },
  {
    path: 'orders',
    component: OrderListComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
