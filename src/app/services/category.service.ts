import { Observable } from 'rxjs';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  apiUrl= environment.api_url + "categories/";

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>>{
    let newPath = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }

}
