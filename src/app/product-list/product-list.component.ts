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
  productSum:any;
  
  constructor(
    private productService: ProductService,
    private cartService: CartService // Inject the CartService
  ) { 
  this.productSum=0;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.products.map(Element=>this.productSum+=Element.productPrice)
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
  
  removeFromCart(id:any){
  this.productService.removeProducts(id).subscribe(
    (data) => {
      this.products = this.products.filter(element => {
        if(element._id !== id) this.productSum-=element.productPrice;
        return element._id !== id});
    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  );
}
}
