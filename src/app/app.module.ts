import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookCatagoryComponent } from './components/book-catagory/book-catagory.component';
import { BooksCatagoryComponent } from './components/books-catagory/books-catagory.component';
import { OrderComponent } from './components/order/order.component';
import { OrderConformationComponent } from './components/components/order-conformation/order-conformation.component';
import { OrderListComponent } from './components/components/order-list/order-list.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    BookListComponent,
    BookDetailComponent,
    BookCatagoryComponent,
    BooksCatagoryComponent,
    OrderComponent,
    OrderConformationComponent,
    OrderListComponent,
    EditOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
