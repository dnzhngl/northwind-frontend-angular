// TypeScript kısmı - buradaki TypeScript build edildiğinde arka planda javascripte çevrilir.
// JavaScript küçük büyük harf duyarlıdır. 
// {} Süslü parantez -> Javascripte obje demek.

//* Angular'da type script kullanılır.
//! app.component.html işin görüntü kısmı
//! app.component.ts -> datayı yönettiğimiz yer
//! Componenet :  HTML'in datasını yönettiğimiz yerdir.

//* Component declarasyonunu kullanabilmek için import şart. Component oluşturulduğunda otomatik olarak import edilir.
import { Component } from '@angular/core';

//* @Component -> Attributelar gibi. Sen bir Componentsin. Bu classın bir component olarak iş görmesini sağlar.
// Component declaration
@Component({
  selector: 'app-root',                 //* Html tagleri arasında <app-root></app-root> şekilde kullanılabileceğini belirtiriz.
  templateUrl: './app.component.html',  //* Bu component'in Html'idir. Bu adreste gösterilecek olan data, burada yönetilir. 
  styleUrls: ['./app.component.css']    //* Burada veirlmiş olan css dosyası bu componente aittir. Birden fazla css dosyası olabileceğinden aray tipinde verilir.
})

export class AppComponent {
  title = 'northwind';    // Javascriptte type belirtme yoktur.
  user:string="Deniz C";  // TypeScript'te variable'ın yanına :string, :number şeklinde veri tipi belirtilir.
}
