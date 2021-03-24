//! Bütün Http isteklerimizi intercept edecek kısımdır.
//* Error handling için aynı backendde yaptığımız gibi interceptor yazabiliyoruz.

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //! request: post yada herhangi bir istek, next: interceptor işlevini gören kısım. Yapılan request'i durdurup yapılacak işlemi veriyor. 
  //! Biz buraya bir Header koyarsak bütün http isteklerimizie header'ı eklemiş oluyoruz.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem("token"); //* -> local storage taki token'ı yakalar.
    let newRequest: HttpRequest<any> // yapılan isteği newRequest'e atıyoruz.
    newRequest = request.clone({ // kullanıcının yapmış olduğu request'i klonlar, içerisine veirlen bilgileride ekler.
      headers: request.headers.set("Authorization", "Bearer " + token) // yapılan request'in headerslarından, Authorization header'ı yolla değer olarakta Bearer tokenını ekler.
    })

    return next.handle(newRequest); // oluşturulan newRequest handle edilir.
  }
}
