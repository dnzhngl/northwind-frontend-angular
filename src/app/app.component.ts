// TypeScript kısmı - buradaki type script build edildiğinde arka planda javascripte çevrilir.
// JavaScript küçük büyük harf duyarlı.
// Angular'da type script kullanılır.
// app.component.html işin görüntü kısmı
// app.component.ts -> ydatayı yönettiğimiz yer
// Componenet :  HTML'in datasını yönettiğimiz yerdir.

// Component declarasyonunu kullanabilmek için import şart.
import { Component } from '@angular/core';

// @Component -> Attributelar gibi. Sen bir Componentsin.
// {} Süslü parantez -> Javascripte obje demek.
// Component declarasyonu
@Component({
  selector: 'app-root', // HTml tagleri arasında <app-root></app-root> şekilde kullanılabileceğini belirtiriz.
  templateUrl: './app.component.html', // sen bu adresteki yerin datasını yönetecek olan componentsin. ./ : aynı klasörde bulunduğunu belirtir.
  styleUrls: ['./app.component.css']  // birden fazla css dosyası olabileceğinden aray tipinde verilir.
})

export class AppComponent {
  title = 'northwind'; // Javascriptte type belirtme yoktur.
  // title2:string = 'northwind'; // TypeScriptte bu şekilde data tipi verilebilir.
  user:string="Deniz C";
 
}
