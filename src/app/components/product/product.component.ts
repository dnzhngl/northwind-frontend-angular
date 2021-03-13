import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product',    //! Componenti html tag'i olarak çağırıkan kullanacağımız isim.
  templateUrl: './product.component.html',  //! Component'e karşılık gelen html sayfasının url'i.
  styleUrls: ['./product.component.css']  //! Component'in sahip olduğu css sayfası
})

export class ProductComponent implements OnInit { //OnInit : ngOnInit(): metodunu getirir.

  //! component'in html tarafında burada oluşturmuş olduğumuz her bir değişkene direk adını vererek ulaşabiliriz.
  products:Product[] = []; //products: Product tipinde array, bunu array olarak initialize ediyoruz.
  dataLoaded = false; 

  //! constructorın amacı: componentin instanceını bellekte oluşturmaktır. Bir datayı initialize etmekten başka hiç birşey yapılmamlıdır.
  //* C#'da external olarak Autofac, IoC kullandığımız gibi burada injection hazır olarak geliyor. Burada verilen değişken sanki classın içerisinde tanımlanmış bir değişken gibidir. Bu değişkene class içerisinde her yerden erişilebilir.
  constructor(private productService:ProductService) { } 
  
  //! ngOnInit : Component ilk kez açıldığında/çağırıldığında çalışan metodumuzdur.
  //* this -> bir fonksiyonun dışındaki bir şeye ulaşmak istediğinde typescripte this yazıyoruz.
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    //console.log("Api request başladı. 1.");
    this.productService.getProducts().subscribe(response => { //getProducts ve subscribe asenkron çalışıyor.
      this.products = response.data;
      this.dataLoaded = true;
     // console.log("Api request bitti. 3.");
    });
  //  console.log("Method bitti. 2.");
  }
}
