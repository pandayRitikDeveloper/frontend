"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, cartService // Inject the CartService
    ) {
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
        }, function (error) {
            console.error('Error fetching products:', error);
        });
    };
    ProductListComponent.prototype.addToCart = function (product) {
        this.cartService.addToCart(product); // Call the addToCart method from CartService
    };
    ProductListComponent.prototype.addToWishlist = function () {
    };
    ProductListComponent.prototype.removeFromCart = function () { };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
