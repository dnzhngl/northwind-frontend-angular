import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //Binding(bağlanma/ilişkilendirme): Component'in html'i component.ts içerisinde oluşturulan değişkenlere erişebilir. Bu yüzden component içerisinde yönetilecek olan datalar, yine component içerisinde oluşturulan değişkenler ile tutulur. 
  categories:Category[]=[];
  currentCategory: Category;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
    })
  }

  // Html'de bir category'e tıklandığı zaman buradaki currentCategory değişkenine, seçilen category atanır.
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

  // Html'de ngFor ile kategori listesi oluşturulurken, her bir category için çalışır. Eğer geçerli olan category current category'e eşit ise css class'ına active eklenir değil ise normal class özellikleri eklenir.
  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active";
    }else{
      return "list-group-item"
    }
  }

  // Kategori listesinde herhangi bir kategori seçili değilse, tüm ürünler seçili ise bu metot çalışır.
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active";
    }else{
      return "list-group-item"
    }
  }

  // currentCategory'i sıfırlasa da Category listesinde All Products'ın active olmasını sağlamıyor. 
  deleteCurrentCategory(){
    this.currentCategory = {} as Category;
  }
}
