import { HttpClientModule } from '@angular/common/http'; //! HttpClientModule istekleri yapmamıza yarayan modul! Bir Appiye istekte bulunablilmek için modulumuzde bunun olması şart.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  // Bir modulün componentleri kullanabailmesi için o componentlerin burada declerasyonlarda tanımlı olması ve import edilmiş olması lazım.
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent
  ],
  imports: [ // Dışarıdan bizim yazmadığımız modulleri importlara koyuyoruz.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //! Aynı zamanda burada import olarak belirtmek zorundayız
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
