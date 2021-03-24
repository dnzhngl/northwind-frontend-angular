import { LoginGuard } from './components/guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
//! Routing configurations - route ayarları burada yapılır.
//* Url'e girilen adrese karşılık neresi getirilsin/ hangi component çalışsın.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

//! Uygulama içerisindeki her bir route, Routes arrayı içerisinde obje notasyonu ile tanımlanır.
//! app.component.html içerisinde kullanılan <router-outlet>'te gösterilmesi istenen route'lar burada verilir.
const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent}, // Ana sayfada, router outlet alanında, ProductComponent'i gösterir. pathMatch:"full" -> girilen adres burada belirtilen ile tamı tamına eşleşmeli.
  { path:'products', component:ProductComponent }, //Url'de products var ise ProductComponent'in htmlini ilgili data ile birlikte döndürür.
  { path:'products/category/:categoryId', component:ProductComponent }, // route path'e parametre verilecekse :parametreAdi şeklinde yazılır. Verilen parametrenin yazım şekli önemlidir.
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]}, // product add component'inin çalışması için önce login gurdın çalışması gerek. login guard'dan geçerse product add componenti çalışır.
  {path:"login", component:LoginComponent}, // Login 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Uygulamanın roote'u için, yani index.html'deki base tagi için, uygulama içindeki route'ları devreye alır.
  exports: [RouterModule]
})
export class AppRoutingModule { }
