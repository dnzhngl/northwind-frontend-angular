import { Observable } from 'rxjs';
import { SingleResponseModel } from './../models/singleResponseModel';
import { TokenNodel } from './../models/tokenModel';
import { LoginModel } from './../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.api_url + "auth/";
  // apiUrl="https://localhost:44311/api/auth";

  constructor(private httpClient: HttpClient) { }

  //* Default olarak observable döner.
  login(user:LoginModel){
    let newPath = this.apiUrl + "login";
    return this.httpClient.post<SingleResponseModel<TokenNodel>>(newPath, user);
  }

  isAuthenticated(){
    //! localStorage: Login olunan tarayıcı yenilendiği anda login sonucu dönen response iptal olur. Bu tarz token vb. şeyleri localStorage'ta tutabiliriz.
    if(localStorage.getItem("token")){  //* Eğer localStorage'da token adında bişi var ise;
      return true;
    } else{
      return false;
    }
  }
}
