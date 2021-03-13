//! Routing configurations - route ayarları burada yapılır. 
//* Url'e girilen adrese karşılık neresi getirilsin/ hangi component çalışsın.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

//! Uygulama içerisindeki her bir route, Routes arrayı içerisinde obje notasyonu ile tanımlanır.
const routes: Routes = [
  { path:'products', component:ProductComponent } //Url'de products var ise ProductComponent'in htmlini ilgili data ile birlikte döndürür.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
