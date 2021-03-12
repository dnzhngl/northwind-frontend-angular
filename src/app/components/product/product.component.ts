import { ProductService } from './../../services/product.service';
import { ProductResponseModel } from './../../models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit { //OnInit : ngOnInit(): metodunu getirir.

  products:Product[] = []; // Array
  dataLoaded = false;
  // construcotrın amacı componentin instanceını bellekte oluşturmaktır. bir datayı initialize etmekten başka hiç birşey yapılmamlıdır.
  constructor(private productService:ProductService) { } 
  // C#da Autofac , IoC kullandığımız gibi burada injection hazır olarak geliyor. Burada verilen dğeişken sanki classın içerisinde tanımlanmış bir dğeişken gibidir. bu class içerisinde heryerden erişilebilir.

  // Component ilk kez açıldığında çalışan metodumuzdur.
  // this -> bir fonksiyonun dışındaki bir şeye ulaşmak istediğinde typescripte this yazıyoruz.
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
