"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/api'; // Replace this with your API endpoint
        this.userLocalStorageKey = 'loggedInUser';
    }
    AuthService.prototype.login = function (username, password) {
        var body = { email: username, password: password };
        return this.http.post(this.apiUrl + '/login', body);
    };
    AuthService.prototype.register = function (obj) {
        return this.http.post(this.apiUrl + '/register', obj);
    };
    AuthService.prototype.saveUserDetails = function (user) {
        localStorage.setItem(this.userLocalStorageKey, JSON.stringify(user));
    };
    AuthService.prototype.getUserDetails = function () {
        var user = localStorage.getItem(this.userLocalStorageKey);
        return user ? JSON.parse(user) : null;
    };
    // Check if the user is logged in based on stored user details
    AuthService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem(this.userLocalStorageKey);
    };
    // Log out the user by removing the stored user details
    AuthService.prototype.logout = function () {
        localStorage.removeItem(this.userLocalStorageKey);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
