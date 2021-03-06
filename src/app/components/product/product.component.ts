import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product', //! Componenti html tag'i olarak çağırıkan kullanacağımız isim.
  templateUrl: './product.component.html', //! Component'e karşılık gelen html sayfasının url'i.
  styleUrls: ['./product.component.css'], //! Component'in sahip olduğu css sayfası
})
export class ProductComponent implements OnInit {
  //OnInit : ngOnInit(): metodunu getirir.

  //! component'in html tarafında burada oluşturmuş olduğumuz her bir değişkene direk adını vererek ulaşabiliriz.
  products: Product[] = []; //products: Product tipinde array, bunu array olarak initialize ediyoruz.
  dataLoaded = false;
  filterText="";

  //! constructorın amacı: componentin instanceını bellekte oluşturmaktır. Bir datayı initialize etmekten başka hiç birşey yapılmamalıdır.
  //* C#'da external olarak Autofac, IoC kullandığımız gibi burada injection hazır olarak geliyor. Burada verilen değişken sanki classın içerisinde tanımlanmış bir değişken gibidir. Bu değişkene class içerisinde her yerden erişilebilir.
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,  //! ActivatedRoute : angulara özel built-in bir servistir. Aktifletirilmiş route/mevcut route yani Url adresine erişmemizi sağlar.
    private toastrService:ToastrService,
    private cartService:CartService
  ) {}

  //! ngOnInit : Component ilk kez açıldığında/çağırıldığında çalışan metodumuzdur.
  //* this -> bir fonksiyonun dışındaki bir şeye ulaşmak istendiğinde typescriptte this kullanılıyor.
  ngOnInit(): void {
    //! activatedRoute.params : observable params döndürür. Observable türünde olanlara subscribe olmak zorundayız. Subscribe olarak, observable'ın içerisine erişebiliyoruz.
    //* params : parametreler
    this.activatedRoute.params.subscribe((params) => {
      //* params içerisinde categoryId diye bişey var mı? categoryId'nin yazımı app.routing.module.ts içerisindeki pathte verilen şekliyle olmak zorunda! C# dictionary gibi çalışıyor.
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });

    this.getProducts();
  }

  //! Her iş için ayrı metot oluşturuyoruz. Gerekli olanları ngOnInit içeriside çağırıyoruz.
  //* Yazılan service ile ilgili component bazlı kurallar var ise, subscribe component tarafına geçirilir ama yoksa subscribe'i direk service yazıp hiç observable ile uğraşmadan buraya geçiş yapılabilir. Ama genellikle bu tip component bazlı kurallar olduğu için subscribe işlemleri burada halledilir.
  getProducts() {
    //console.log("Api request başladı. 1.");
    this.productService.getProducts().subscribe((response) => {
      //getProducts ve subscribe asenkron çalışıyor.
      this.products = response.data;
      this.dataLoaded = true;
      // console.log("Api request bitti. 3.");
    });
    //  console.log("Method bitti. 2.");
  }

  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
      });
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    this.toastrService.success("Added to cart.", product.productName)
    console.log(product)
  }
}

