import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //products!: Product[];
  products: Product[] = [];
  searchIdProduit: string = '';
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.getProduts();
  }
  getProduts() {
    this.productService.getProductList().subscribe(data =>{
      console.log(data);
      this.products= data;
    },
    error => {
      console.error('Error fetching products:', error);
    })
  }
  /*searchProduct() {
    if (this.searchIdProduit.trim() !== '') {
      this.productService.searchProductById(this.searchIdProduit).subscribe(
        (data: Product[]) => {
          console.log(data);
          this.products = data;
        },
        (error) => {
          console.error('Error searching product:', error);
          this.products = []; // Clear the products list if an error occurs
        }
      );
    } else {
      this.getProduts(); // If searchIdProduit is empty, get all products
    }
  }*/
  searchProduct(): void {
    if (!this.searchIdProduit) {
      // If search query is empty, show all products
      this.getProduts();
      return;
    }
    this.products = this.products.filter((product) =>
      product.productId.toLowerCase().includes(this.searchIdProduit.toLowerCase()) 
    );
  }

}
