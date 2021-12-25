import { EventEmitter,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from 'src/app/app-model/product';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  SendProductEmiiter= new Subject<any>();

  sendDataToOtherComponent(data:any){
    
    this.SendProductEmiiter.next(data);
}

}
