
import { Component } from '@angular/core';
import { Cart } from '../model/card.model';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repostory';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Router } from '@angular/router';
@Component({
  selector: 'shop',
  templateUrl: "./shop.component.html",
  styles: [`.pt-100{padding-top:100px}`]
})


export class ShopComponent {
  public selectedCategory: Category | undefined;
  public productsPerPage = 3;
  public selectedPage = 1;
  public selectedProduct: Product[]=[]

  constructor(
    private productRepostory: ProductRepository,
    private categoryRepostory: CategoryRepository,
    private card: Cart,
    private router:Router

  ) { }

  get products(): Product[] {
    let index = (this.selectedPage - 1) * this.productsPerPage;

this.selectedProduct=this.productRepostory
      .getProducts(this.selectedCategory)

    return this.selectedProduct
      .slice(index, index + this.productsPerPage);

  }
  get category(): Category[] {
    return this.categoryRepostory.getCategory();
  }


  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productRepostory
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0)
      .map((a, i) => i + 1)
  }
  changePage(page: number) {
    this.selectedPage = page;
  }

  changePageSize(size: number) {
    this.productsPerPage = size;
    this.changePage(1);
}
  addProductToCart(product: Product) {
    this.card.addItem(product);
    this.router.navigateByUrl("cart")
  }

}
