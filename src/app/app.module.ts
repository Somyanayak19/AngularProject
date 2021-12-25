import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import {CardModule} from 'primeng/card';
import { ProductComponent } from './product/product.component';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule}from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import { CartComponent } from './cart/cart.component';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    HttpClientModule,
    DialogModule,
    RippleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
