import { HttpClientModule } from '@angular/common/http'; //! HttpClientModule istekleri yapmamıza yarayan modul! Bir Apiye istekte bulunablilmek için, uygulamamızın modulleri arasına bunu eklemeliyiz..
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [ //! Bir modulün componentleri kullanabilmesi için o componentlerin declerations'da tanımlı olması ve import edilmiş olması lazım. Bizim tarafımızdan projeye eklenmiş olan olan componentler declarations'a otomatik olarak eklenir. Eklenmez ise, eklememiz gerekir.
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent
  ],
  imports: [ //! Dışarıdan, bizim yazmadığımız, başka modulleri uygulamamız içerisinde kullanıyorsak o modulleri imports'a ekliyoruz.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //! Aynı zamanda burada import olarak belirtmek zorundayız
  ],
  providers: [], //! Global Service'leri (birden fazla component içerisinde kullanılabilecek olan serviceler) providers içerisinde tnaımlanır verilir.
  bootstrap: [AppComponent]
})
export class AppModule { }
