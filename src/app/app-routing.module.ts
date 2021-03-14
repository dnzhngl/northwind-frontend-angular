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
  { path:'products/category/:categoryId', component:ProductComponent } // route path'e parametre verilecekse :parametreAdi şeklinde yazılır. Verilen parametrenin yazım şekli önemlidir.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Uygulamanın roote'u için, yani index.html'deki base tagi için, uygulama içindeki route'ları devreye alır.
  exports: [RouterModule]
})
export class AppRoutingModule { }
