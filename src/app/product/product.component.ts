import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../app-service/product/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class ProductComponent implements OnInit {
  data: any;
  displayProduct: boolean = false;
  viewProduct: any = {};
  addedProductInCart: any = [];
  template:any;
  templatesListcheck:boolean = false;
  focusedIdx: number;
  templatesList:any [];
  
  count:number = 0;
  mod:number = 0;
  value:any;
  @HostListener('keydown',['$event.target'])
  onkeydown(event:any){
    console.log("keydown",event);
  }
  constructor(private router: Router,
     private http: HttpClient,
     private productService: ProductService) { }

  ngOnInit(): void {
    //console.log("l;dkjih");
      this.http.get('/assets/mock-api-data.json').subscribe(response => {
      console.log("response", response);
      this.data = response;
    });
    this.templatesList = [{name:"0"},{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},
    {name:"7"},{name:"8"},{name:"9"},{name:"10"},{name:"11"},{name:"12"},{name:"13"},{name:"14"},{name:"15"},{name:"16"},{name:"17"},{name:"18"},{name:"19"},
    {name:"20"},{name:"21"},{name:"22"},{name:"23"},{name:"24"},{name:"25"},{name:"26"},{name:"27"},{name:"28"},{name:"29"},{name:"30"},{name:"20"},{name:"21"},{name:"22"},{name:"23"},{name:"24"},{name:"25"}]
   this.focusedIdx = 0;
   this.value = this.templatesList[0].name
  }

  public selectProduct(item2: any) {
    this.viewProduct = item2;
    console.log("this.viewProduct", this.viewProduct);
    this.displayProduct = true;
  }

  getTemplateNames(){
   this.templatesListcheck = true;
   this.focusedIdx= 0;
   
  }
  eventHandler(event:any){
   //let count = -1
   console.log("template",this.template);
   
   
 if (event.keyCode == 40) {
   
       if (this.focusedIdx >= -1 && this.focusedIdx < this.templatesList.length-1)  {
        
         this.focusedIdx++;
         this.value = this.templatesList[this.focusedIdx].name;
         this.count++
         if(this.count >= 7){
          let ele = document.getElementById('outerDiv')
          if(ele!=null){
           
            ele.scrollTop=ele.scrollTop+20+this.count;
          }
         }
        
      /*  if(this.templatesList.length == this.focusedIdx){
         this.count=4;
         this.focusedIdx =0;
         let ele = document.getElementById('outerDiv')
         if(ele!=null){
          ele.scrollTop=-20  ;

         }
         
        }
         
      if(this.count == 7){
        let ele = document.getElementById('outerDiv')
        if(ele!=null){
          this.count = 0;
          ele.scrollTop=ele.scrollTop+165 ;
        }
       }
      
         var test = document.getElementById("outerDiv");
          if (this.mod==0) {
            let ele = document.getElementById('outerDiv')
            if(ele!=null){
              ele.scrollTop=ele.scrollTop+165 ;
            }
        
          }
          else{
           this.mod++;
         }
       */
       }
     }
   if (event.key == "ArrowUp") {
    // event.stopPropagation();
    debugger;
   
    if(this.focusedIdx <= 0){
     //alert("less than first");
     return;
   }
    // this.searchDropDown = true;
     console.log("this.focusedIdxFirst",this.focusedIdx);
     if (this.focusedIdx > -1 && this.focusedIdx != 0) {
     
      //change
      this.focusedIdx--;
       this.value = this.templatesList[this.focusedIdx].name;
       this.mod =  this.focusedIdx % 7;
       
      
     if (this.templatesList.length-1== this.focusedIdx) {
        this.mod = 6;
     }
       if (this.mod==0) {
         let ele = document.getElementById('outerDiv');
         if(ele!=null)
         {
           
        console.log("ele",ele.scrollHeight);
        let test = ele.scrollHeight/7;
         ele.scrollTop = ele.scrollTop-165;
         }
//        console.log('innertext',this.templateValue);
       //this.templatenamefield(event);
       
         }
         else{
           this.mod--;
         }
      
       //this.templatenamefield(event);
     } else {
       this.focusedIdx = this.templatesList.length - 1;
     }
   }

   // if (event.code == "Enter" && this.focusedIdx > -1) {
   //   //event.stopPropagation();
   // this.templatenamefield(event);
   //   //this.selectDropdown(this.templatesList[this.focusedIdx]);
   // }

  }
  addtobag(item: any) {
    console.log("item", item);
    this.productService.sendDataToOtherComponent(item);
    this.displayProduct = false;


  }

}
