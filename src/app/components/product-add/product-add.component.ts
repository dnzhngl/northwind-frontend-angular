import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
//! FormBuilder -> reactive form'un service'i.

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  //* html'de ki forma bindlanır.
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  //* Bu fonksiyon, componenet çalıştığı zaman, html tarafındaki hangi alanlar buraya map edilecek, ve o alanları kurallar nelerdir konulaır ile ilgilenir.
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      //* ürün eklerken formda olması istenen alanları key, value pair şeklinde eklenir.
      //* productName configurasyonu. ilk verilen değer productName'in default değeri
      productName: ['', Validators.required],
      unitPrice: ['0', Validators.required],
      unitsInStock: ['0', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add() {
    //* productAddForm valid ise
    if (this.productAddForm.valid) {
      //! Object.assign({}, value) -> önce boş bir obje oluşturur, sonra vermiş olduğumuz html'deki form içerisindeki değerleri oluşturmuş olduğu boş objeye dönüştürüp değişkene atar.
      let productModel = Object.assign({}, this.productAddForm.value);
      // console.log(productModel);
      this.productService.add(productModel).subscribe(
        (response) => {
          //! Success durumunda çalışan kodları içerir
          // console.log(response);
          this.toastrService.success(response.message, 'Başarılı'); //* Success mesajını subscribe dışına yazarsak, javascript asenkron yapıda çalıştığı için, işlemler tamamlanmadan success mesajı çalışır.
        },
        (responseError) => {
          //! Error durumunda çalışır.
          // console.log(responseError)
          if (responseError.error.ValidationErrors.length > 0) { //* Apiden, validation hatası olması durumunda ValidationErrors adı altında tüm doğrulama hataları döner.
            // console.log(responseError.error.ValidationErrors);
            for ( let i = 0; i < responseError.error.ValidationErrors.length ; i++ ) {  //* Dönen her bir doğrulama hatasını toastr ile ekranda gösterir.
              this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,'Doğrulama Hatası');
            }
          }
        }
      );
    } else {
      this.toastrService.error('Tüm alanları doldurun.', 'Dikkat');
    }
  }
}
