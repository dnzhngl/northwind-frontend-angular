import { HttpClient} from '@angular/common/http';  //bunun vasıtasıyla bir backende istekte bulunabiliyoruz, backendteki dataya ulaşabiliyoruz.. React'ta axios, fetch vb.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44311/api/products/getall";
  constructor(private httpClient:HttpClient) { }

  
  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl); 
  } // gelen datayı product response modele map edeceksin.
}