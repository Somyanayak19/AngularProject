import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../app-service/product/product.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router,private productService:ProductService) {
    
   }
  
  username:any=null;
  count:number=0;
  CartItem:any=[];
  existCartItem:any=[];
  ngOnInit(): void {
    debugger;
   
   this.productService.SendProductEmiiter.subscribe(response=>{
  
    var cartItem=null;
    cartItem=localStorage.getItem("CartProduct");
   if(cartItem!=null){
   var existItem = JSON.parse(cartItem);
   
   existItem.push(response);
   
   localStorage.setItem("CartProduct",JSON.stringify(existItem));
   }
   else{
     var newItem=[];
     newItem.push(response);
     localStorage.setItem("CartProduct",JSON.stringify(newItem));
   }

    this.CartItem.push(response);
    console.log("subject",this.CartItem);
    //this.count=this.CartItem.length;
    this.count=this.count+1;

    
  })
  }
  public checkUrl(): boolean {
   this.count=0;
     this.existCartItem = localStorage.getItem("CartProduct");
     if(this.existCartItem!=null){

      this.existCartItem=  JSON.parse(this.existCartItem);
      this.count= this.existCartItem.length;
     }
     
    
     
    if (this.isCurrentUrl('login')) {
        return false;
    } else {
        return true;
    }
}
public isCurrentUrl(url: string): boolean {
 // console.log(this.router.url);
    if (this.router.url.indexOf(url) >= 0) {
        return true;
    }
    return false;
}

  
  logout(){
    //localStorage.clear();
    localStorage.removeItem("CartProduct");
  }
}
