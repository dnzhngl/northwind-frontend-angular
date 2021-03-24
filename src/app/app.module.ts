import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //! HttpClientModule istekleri yapmamıza yarayan modul! Bir Apiye istekte bulunabilmek için, uygulamamızın modulleri arasına bunu eklemeliyiz..
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [ //! Bir modulün componentleri kullanabilmesi için o componentlerin declerations'da tanımlı olması ve import edilmiş olması lazım. Bizim tarafımızdan projeye eklenmiş olan olan componentler declarations'a otomatik olarak eklenir. Eklenmez ise, eklememiz gerekir.
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
  ],
  imports: [ //! Dışarıdan, bizim yazmadığımız, başka modulleri uygulamamız içerisinde kullanıyorsak o modulleri imports'a ekliyoruz.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //! Aynı zamanda burada import olarak belirtmek zorundayız
    FormsModule,       //! Angularda form'lar ile çalışırken FormsModule import edilmeli. Ex. ngModel kullanımı için gereklidir.
    ReactiveFormsModule, //! Angularda Reactive Form'lar ile çalışırken kullanılır. Angular'ın kendi sunuş olduğu form yapısıdır.
    ToastrModule.forRoot({ //!forRoot -> bu proje içinde roottan itibaren bu modulu kullanılabilir hale getir.
      positionClass: "toast-bottom-right" // * genel ayarları buradan yapılabilir.
    }),
    BrowserAnimationsModule
  ],
  providers: [ //! Global Service'leri (birden fazla component içerisinde kullanılabilecek olan serviceler) providers içerisinde tnaımlanır verilir.
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true} // Http interceptorlarını bütün http isteklerine inject etmiş oluyoruz. Orada kullanlacak olan interceptor'ın AuthInterceptor olacağını söylüyoruz. Multiple kullanımına izin veriyoruz.
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
