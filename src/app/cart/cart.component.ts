import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ProductService} from '../app-service/product/product.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public CartItem:any=[];
  public AllCartItem:any=[];
  products:Subscription;
  constructor(private productService:ProductService) {
   
   }

  ngOnInit(): void {
   
    this.CartItem=localStorage.getItem("CartProduct");
    console.log("localStorage",JSON.parse(this.CartItem));
    this.CartItem=JSON.parse(this.CartItem);
  }

  

}
