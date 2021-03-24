import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient} from '@angular/common/http';  //! HtmlClient : vasıtasıyla bir backende istekte bulunabiliyoruz, backendteki dataya ulaşabiliyoruz. React'ta karşılığı axios, fetch vb.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { ResponseModel } from '../models/responseModel';
import { environment} from '../../environments/environment';

//! Classın injectable olduğunu belirtir.
//! root -> globalde tanımlandığını gösterir. İstenilen her yere inject edilebilir.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //! Sorgu atacağımız genel Url Adresi
  apiUrl = environment.api_url + "products/"
  // apiUrl="https://localhost:44311/api/";
  
  //! Api sorgularımızı HttpClient vasıtasıyla atıyoruz. Service içerisinde kullanabilmek için constructor'a inject ediyoruz.
  //* private olarak tanımlamazsak, product service'e erişen birisi http client'ada erişim sağlar. private, ilgili nesnenin sadece burada geçerli olduğunu belirtir.
  constructor(private httpClient:HttpClient) { }

  //* Gelen datayı product tipinde çalışan list response modele map eder.
  //* Observable : gelen datanın izlenebilir olduğunu belirtir. Yani bu dataya subscribe olana kadar çalışmaz, üzerinde her türlü işlem yapılabilir. Observable'lar birbirinden farklı veri tipinde değeri taşıyabilirler.
  //* Dönüş tipi Observable, veri tipi Product ile çalışacak olan ListResponseModel.
  getProducts(): Observable<ListResponseModel<Product>> {
    //! Bu metodun sorgu atacağı yeni url adresi
    let newPath = this.apiUrl + "getall";

    //* httpClient.get() : HttpClient modulunun sağlamış olduğu get metodu, klasik api sorguları atabilmemizi sğalar. (get, post, put, delete vb.) Postman sorguları gibi.
    //* get'e generic olarak vermiş olduğumuz tipe/model'e sorgudan dönen datayı mapler.
    return this.httpClient.get<ListResponseModel<Product>>(newPath); 
  } 

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "getallbycategory?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", product); //! Url adresine post edilecek olan değer, post() metodu içerisinde ikinci parametre olarak verilir.
  }
}