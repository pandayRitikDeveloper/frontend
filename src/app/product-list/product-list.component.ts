import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service'; // Make sure to import the CartService

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[]=[];

  
  constructor(
    private productService: ProductService,
    private cartService: CartService // Inject the CartService
  ) { 
  
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product); // Call the addToCart method from CartService
  }
  addToWishlist(){

  }
  removeFromCart(){}
  
}
