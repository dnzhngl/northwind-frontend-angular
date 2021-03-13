
import { HttpClient} from '@angular/common/http';  //! HtmlClient : vasıtasıyla bir backende istekte bulunabiliyoruz, backendteki dataya ulaşabiliyoruz. React'ta karşılığı axios, fetch vb.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

//! Classın injectable olduğunu belirtir.
//! root -> globalde tanımlandığını gösterir. İstenilen her yere inject edilebilir.
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //! Sorgu atacağımız Url Adresi
  apiUrl="https://localhost:44311/api/products/getall";
  //! Api sorgularımızı HttpClient vasıtasıyla atıyoruz. Service içerisinde kullanabilmek için constructor'a inject ediyoruz.
  constructor(private httpClient:HttpClient) { }

  //* gelen datayı product response modele map eder.
  //* Observable : gelen datanın izlenebilir olduğunu belirtir. Yani bu dataya subscribe olana kadar çalışmaz, üzerinde her türlü işlem yapılabilir. Observable'lar birbirinden farklı veri tipinde değeri taşıyabilirler.
  getProducts(): Observable<ProductResponseModel> {
    
    //* httpClient.get() : HttpClient modulunun sağlamış olduğu get metodu, klasik api sorguları atabilmemizi sğalar. (get, post, put, delete vb.) Postman sorguları gibi.
    return this.httpClient.get<ProductResponseModel>(this.apiUrl); 
  } 
}