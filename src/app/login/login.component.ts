import { Component, OnInit,ViewEncapsulation,Renderer2} from '@angular/core';
import { from } from 'rxjs';
import {Login}  from 'src/app/app-model/login'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username:string = "";
  password:string = "";
  login:Login= new Login();
  passwordIncorrect:boolean=false;

  constructor(private renderer: Renderer2,private router:Router) {
  
    }

  ngOnInit(): void {

    this.passwordIncorrect=false;
  }
  onSubmit(){

   
    debugger;
   // if(localStorage.hasOwnProperty(this.login.username.toLowerCase())){
     // var password = localStorage.getItem(this.login.username.toLowerCase())
     //if(this.login.password==password){
      this.router.navigate(['product']);
     /*}
     else{
      this.passwordIncorrect=true;
     }

    }
    else{
      this.passwordIncorrect=true;
    }*/
 
  }

  onchange(){
    this.passwordIncorrect=false;
  }

}
