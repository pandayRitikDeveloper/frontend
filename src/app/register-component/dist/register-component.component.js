"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponentComponent = void 0;
var core_1 = require("@angular/core");
var RegisterComponentComponent = /** @class */ (function () {
    function RegisterComponentComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponentComponent.prototype.onSubmit = function () {
        var _this = this;
        var obj = { name: this.name, email: this.email, password: this.password,
            phoneNumber: this.phone, location: this.Location };
        this.authService.register(obj)
            .subscribe(function (response) {
            _this.authService.saveUserDetails(response);
            console.log(response);
            _this.authService.login(_this.email, _this.password)
                .subscribe(function (response) {
                _this.authService.saveUserDetails(response);
                console.log(response);
                _this.router.navigate(['/']);
                // Handle successful login, e.g., store authentication status
                // and redirect to dashboard page.
            }, function (error) {
                // Handle login error, e.g., display error message to the user.
            });
            // Handle successful login, e.g., store authentication status
            // and redirect to dashboard page.
        }, function (error) {
            // Handle login error, e.g., display error message to the user.
        });
    };
    RegisterComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-register-component',
            templateUrl: './register-component.component.html',
            styleUrls: ['./register-component.component.css']
        })
    ], RegisterComponentComponent);
    return RegisterComponentComponent;
}());
exports.RegisterComponentComponent = RegisterComponentComponent;
