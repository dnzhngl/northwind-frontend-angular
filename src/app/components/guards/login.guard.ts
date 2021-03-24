import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private authService:AuthService, 
    private toastrService:ToastrService, 
    private router:Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isAuthenticated()){ //* kullanıcının authenticated olup olmadığına bakar.
        return true;
      } else{
        this.router.navigate(["login"]) //* app-routing içerisindeki hangi route objesine yönlendirmesini sitiyorsak, o objenin path adı verilir. Yani login'e gönder.
        this.toastrService.warning("Sisteme giriş yapmalısınız.");
        return false;
      }
  }
  
}
