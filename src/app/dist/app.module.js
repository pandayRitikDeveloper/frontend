"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var common_1 = require("@angular/common"); // Import CommonModule
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./product-list/product-list.component");
var cart_component_1 = require("./cart/cart.component");
var navbar_component_component_1 = require("./navbar-component/navbar-component.component");
var auth_service_1 = require("./sevice/auth.service");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var home_component_component_1 = require("./home-component/home-component.component");
var register_component_component_1 = require("./register-component/register-component.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_list_component_1.ProductListComponent,
                cart_component_1.CartComponent,
                navbar_component_component_1.NavbarComponentComponent,
                login_component_1.LoginComponent,
                home_component_component_1.HomeComponentComponent,
                register_component_component_1.RegisterComponentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            providers: [auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
