import { ToastrService } from 'ngx-toastr';
import { LoginModel } from './../../models/loginModel';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder, 
    private authService:AuthService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel:LoginModel = Object.assign({}, this.loginForm.value);

      this.authService.login(loginModel).subscribe(response =>{
        console.log(response);
        this.toastrService.info(response.message, "Giriş Yapıldı");
        localStorage.setItem("token", response.data.token); //localStorage için ayrı bir servis yazılabilir.
      }, responseError =>{
        console.log(responseError);
        this.toastrService.error(responseError.error);
      });
    }
  }
}
