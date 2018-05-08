webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/library/library.module": [
		"./src/app/library/library.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_email_validator_directive__ = __webpack_require__("./src/app/directives/email.validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_routing__ = __webpack_require__("./src/app/account/account.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registration_form_registration_form_component__ = __webpack_require__("./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__ = __webpack_require__("./src/app/account/login-form/login-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__account_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__registration_form_registration_form_component__["a" /* RegistrationFormComponent */], __WEBPACK_IMPORTED_MODULE_5__directives_email_validator_directive__["a" /* EmailValidator */], __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__ = __webpack_require__("./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__("./src/app/account/login-form/login-form.component.ts");



var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild([
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */] },
]);


/***/ }),

/***/ "./src/app/account/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// auth.guard.ts



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.user.isLoggedIn()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 new-user-alert\">\n      <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\n          <strong>All set!</strong> Please login with your account\n      </div>  \n      <h2>Login</h2>        \n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\n          \n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input id=\"email\" type=\"text\" required name=\"email\" class=\"form-control\" placeholder=\"Email\" [ngModel]=\"credentials.email\" #email=\"ngModel\" tmFocus validateEmail>\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" placeholder=\"Password\" ngModel>\n          </div>          \n\n          <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Login</button>\n              <app-spinner [isRunning]=\"isRequesting\"></app-spinner> \n          </div>\n\n          <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n              <strong>Oops!</strong> {{errors}}\n            </div> \n          \n        </form>\n   </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.email = param['email'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/dashboard/home']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/account/login-form/login-form.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2>Please enter your information</h2>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <form #f=\"ngForm\" novalidate (ngSubmit)=\"registerUser(f)\">\n          <div class=\"form-group\">\n              <label for=\"first-name\">First name</label>\n              <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First name\" name=\"firstName\" tmFocus ngModel>              \n          </div>\n          <div class=\"form-group\">\n              <label for=\"last-name\">Last name</label>\n              <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last name\" name=\"lastName\" ngModel>              \n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n          \t<input id=\"email\" type=\"text\" required name=\"email\" validateEmail class=\"form-control\" placeholder=\"Email\" ngModel  #email=\"ngModel\">\n            <small [hidden]=\"email.valid || (email.pristine && !submitted)\" class=\"text-danger\">Please enter a valid email</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Password\" ngModel>\n          </div>   \n          <div class=\"form-group\">\n             <label for=\"location\">Location</label>\n             <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Location\"  required name=\"location\" ngModel>              \n          </div> \n\n          <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.invalid || isRequesting\">Sign Up</button>\n              <app-spinner [isRunning]=\"isRequesting\"></app-spinner> \n          </div>\n\n          <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\n              <strong>Oops!</strong> {{errors}}\n            </div>               \n          \n        </form>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationFormComponent = /** @class */ (function () {
    function RegistrationFormComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, function (errors) { return _this.errors = errors; });
        }
    };
    RegistrationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration-form',
            template: __webpack_require__("./src/app/account/registration-form/registration-form.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");


var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'library',
        children: [
            { path: '', loadChildren: 'app/library/library.module#LibraryModule' },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n  <div class='row'>\n    <div class='col-sm-3'>\n      <nav-menu></nav-menu>\n    </div>\n    <div class='col-sm-9 body-content'>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authenticate_xhr_backend__ = __webpack_require__("./src/app/authenticate-xhr.backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__library_library_module__ = __webpack_require__("./src/app/library/library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account_module__ = __webpack_require__("./src/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navmenu_navmenu_component__ = __webpack_require__("./src/app/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//system







//kendo

//modules


//components





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navmenu_navmenu_component__["a" /* NavmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__library_library_module__["LibraryModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_9__account_account_module__["a" /* AccountModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__shared_utils_config_service__["a" /* ConfigService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* XHRBackend */],
                    useClass: __WEBPACK_IMPORTED_MODULE_6__authenticate_xhr_backend__["a" /* AuthenticateXHRBackend */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticate-xhr.backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateXHRBackend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticateXHRBackend = /** @class */ (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* XSRFStrategy */]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* XHRBackend */]));



/***/ }),

/***/ "./src/app/directives/email.validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidator = EmailValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* forwardRef */])(function () { return EmailValidator_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidator);
    return EmailValidator;
    var EmailValidator_1;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myFocus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = /** @class */ (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    myFocus = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[tmFocus]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */]])
    ], myFocus);
    return myFocus;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n <div class=\"container center-block\">\n     <div class=\"col-sm-6 center-block\">\n         <h2>Welcome to Library</h2>\n     </div>\n </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/library/all-library/all-library.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 >All Library</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      [navigable]=\"true\"\n    >\n\n    <kendo-grid-column field=\"name\" title=\"Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"type\" title=\"Type\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.type\" kendoGridFocusable name=\"type\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/all-library/all-library.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllLibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_all_library_service__ = __webpack_require__("./src/app/library/services/all-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AllLibraryComponent = /** @class */ (function () {
    function AllLibraryComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 12
        };
        this.allLibraryService = bookServiceFactory;
    }
    AllLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.allLibraryService.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.allLibraryService.read();
    };
    AllLibraryComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.allLibraryService.read();
    };
    AllLibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/library/all-library/all-library.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_all_library_service__["a" /* AllLibraryService */]],
            styleUrls: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__services_all_library_service__["a" /* AllLibraryService */])),
        __metadata("design:paramtypes", [Object])
    ], AllLibraryComponent);
    return AllLibraryComponent;
}());



/***/ }),

/***/ "./src/app/library/author/author.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Authors</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"authorName\" title=\"Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.authorName\" kendoGridFocusable name=\"authorName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"year\" editor=\"numeric\" title=\"Year\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.year\" kendoGridFocusable name=\"year\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/author/author.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_author_service__ = __webpack_require__("./src/app/library/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_author_model__ = __webpack_require__("./src/app/library/models/author.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AuthorComponent = /** @class */ (function () {
    function AuthorComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.authorService = bookServiceFactory;
    }
    AuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.authorService.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.authorService.read();
    };
    AuthorComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.authorService.read();
    };
    AuthorComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newAuthor = new __WEBPACK_IMPORTED_MODULE_1__models_author_model__["a" /* Author */]();
        sender.addRow(newAuthor);
    };
    AuthorComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedAuthor = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    AuthorComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    AuthorComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.authorService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedAuthor = undefined;
    };
    AuthorComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.authorService.remove(dataItem);
    };
    AuthorComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.authorService.resetItem(this.editedAuthor);
        this.editedRowIndex = undefined;
        this.editedAuthor = undefined;
    };
    AuthorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-author',
            template: __webpack_require__("./src/app/library/author/author.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_author_service__["a" /* AuthorService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__services_author_service__["a" /* AuthorService */])),
        __metadata("design:paramtypes", [Object])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/library/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Books</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid [data]=\"view | async\"\n              [height]=\"533\"\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n              [pageable]=\"true\" [sortable]=\"true\"\n              (dataStateChange)=\"onStateChange($event)\"\n              (selectionChange)=\"selectionChange($event)\"\n              (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n              (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n              (add)=\"addHandler($event, myForm)\"\n              [navigable]=\"true\"\n              [selectable]=\"selectableSettings\">\n    <ng-template kendoGridToolbarTemplate>\n      <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Name\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"authorsFormated\" title=\"Authors\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <kendo-multiselect #list\n                           [data]=\"authorList\"\n                           [(ngModel)]=\"dataItem.authors\"\n                           [ngModelOptions]=\"{standalone: true}\"\n                           [filterable]=\"true\"\n                            (valueChange)=\"multiselectValueChange($event)\"\n                           textField=\"authorName\"\n                           valueField=\"authorId\"\n                           placeholder=\"Authors\">\n        </kendo-multiselect>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column field=\"publicHousesFormated\" title=\"Publiation Houses\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <kendo-multiselect #list\n                           [data]=\"publicHouseList\"\n                           [(ngModel)]=\"dataItem.publicHouses\"\n                           [ngModelOptions]=\"{standalone: true}\"\n                           [filterable]=\"true\"\n                            (valueChange)=\"multiselectValueChange($event)\"\n                           textField=\"publicHouseName\"\n                           valueField=\"publicHouseId\"\n                           placeholder=\"Public Houses\">\n        </kendo-multiselect>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\n        <button kendoGridSaveCommand type=\"button\"\n                [disabled]=\"myForm.invalid\">\n          {{ isNew ? 'Add' : 'Update' }}\n        </button>\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n    </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_book_service__ = __webpack_require__("./src/app/library/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_book_model__ = __webpack_require__("./src/app/library/models/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BookComponent = /** @class */ (function () {
    function BookComponent(bookServiceFactory) {
        this.selectedIds = Array();
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.selectableSettings = {
            checkboxOnly: false,
            mode: 'multiple'
        };
        this.bookService = bookServiceFactory;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.bookService.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.bookService.getPublicHouseList().subscribe(function (data) {
            _this.publicHouseList = data;
        });
        this.bookService.getAuthorList().subscribe(function (data) {
            _this.authorList = data;
        });
        this.bookService.read();
    };
    BookComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.bookService.read();
    };
    BookComponent.prototype.selectionChange = function (event) {
        var _this = this;
        event.selectedRows.forEach(function (e) { return _this.selectedIds.push(e.dataItem.bookId); });
        event.deselectedRows.forEach(function (e) { return _this.selectedIds = _this.selectedIds.filter(function (item) { return item != e.dataItem.bookId; }); });
        console.log(this.selectedIds);
    };
    BookComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newBook = new __WEBPACK_IMPORTED_MODULE_1__models_book_model__["a" /* Book */]();
        sender.addRow(newBook);
    };
    BookComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedBook = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    BookComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BookComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.bookService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.bookService.remove(dataItem);
    };
    BookComponent.prototype.multiselectValueChange = function () {
    };
    BookComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.bookService.resetItem(this.editedBook);
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/library/book/book.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_book_service__["a" /* BookService */]],
            styleUrls: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__services_book_service__["a" /* BookService */])),
        __metadata("design:paramtypes", [Object])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/library/brochure/brochure.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Brochures</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Brochure Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"typeOfCover\" title=\"Cover\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.typeOfCover\" kendoGridFocusable name=\"typeOfCover\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"numberOfPages\" editor=\"numeric\" title=\"Pages\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.numberOfPages\" kendoGridFocusable name=\"numberOfPages\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/brochure/brochure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_brochure_model__ = __webpack_require__("./src/app/library/models/brochure.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_brochure_service__ = __webpack_require__("./src/app/library/services/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BrochureComponent = /** @class */ (function () {
    function BrochureComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.brochureService = bookServiceFactory;
    }
    BrochureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.brochureService.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.brochureService.read();
    };
    BrochureComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.brochureService.read();
    };
    BrochureComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newBrochure = new __WEBPACK_IMPORTED_MODULE_0__models_brochure_model__["a" /* Brochure */]();
        sender.addRow(newBrochure);
    };
    BrochureComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedBrochure = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    BrochureComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BrochureComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.brochureService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    BrochureComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.brochureService.remove(dataItem);
    };
    BrochureComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.brochureService.resetItem(this.editedBrochure);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    BrochureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/library/brochure/brochure.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_brochure_service__["a" /* BrochureService */]],
            styleUrls: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_brochure_service__["a" /* BrochureService */])),
        __metadata("design:paramtypes", [Object])
    ], BrochureComponent);
    return BrochureComponent;
}());



/***/ }),

/***/ "./src/app/library/library.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryModule", function() { return LibraryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__ = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_brochure_service__ = __webpack_require__("./src/app/library/services/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_magazine_service__ = __webpack_require__("./src/app/library/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_book_service__ = __webpack_require__("./src/app/library/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_public_house_service__ = __webpack_require__("./src/app/library/services/public-house.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_all_library_service__ = __webpack_require__("./src/app/library/services/all-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_author_service__ = __webpack_require__("./src/app/library/services/author.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__brochure_brochure_component__ = __webpack_require__("./src/app/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__library_routing__ = __webpack_require__("./src/app/library/library.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__book_book_component__ = __webpack_require__("./src/app/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__magazine_magazine_component__ = __webpack_require__("./src/app/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__public_house_public_house_component__ = __webpack_require__("./src/app/library/public-house/public-house.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__all_library_all_library_component__ = __webpack_require__("./src/app/library/all-library/all-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__author_author_component__ = __webpack_require__("./src/app/library/author/author.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//system





//kendo ui



//services






//components







var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_15__library_routing__["a" /* LibraryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__["b" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__brochure_brochure_component__["a" /* BrochureComponent */],
                __WEBPACK_IMPORTED_MODULE_16__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_17__magazine_magazine_component__["a" /* MagazineComponent */],
                __WEBPACK_IMPORTED_MODULE_18__public_house_public_house_component__["a" /* PublicHouseComponent */],
                __WEBPACK_IMPORTED_MODULE_19__all_library_all_library_component__["a" /* AllLibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__author_author_component__["a" /* AuthorComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_brochure_service__["a" /* BrochureService */],
                __WEBPACK_IMPORTED_MODULE_9__services_magazine_service__["a" /* MagazineService */],
                __WEBPACK_IMPORTED_MODULE_10__services_book_service__["a" /* BookService */],
                __WEBPACK_IMPORTED_MODULE_11__services_public_house_service__["a" /* PublicHouseService */],
                __WEBPACK_IMPORTED_MODULE_12__services_all_library_service__["a" /* AllLibraryService */],
                __WEBPACK_IMPORTED_MODULE_13__services_author_service__["a" /* AuthorService */]
            ]
        })
    ], LibraryModule);
    return LibraryModule;
}());



/***/ }),

/***/ "./src/app/library/library.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brochure_brochure_component__ = __webpack_require__("./src/app/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book_component__ = __webpack_require__("./src/app/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_house_public_house_component__ = __webpack_require__("./src/app/library/public-house/public-house.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__magazine_magazine_component__ = __webpack_require__("./src/app/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_library_all_library_component__ = __webpack_require__("./src/app/library/all-library/all-library.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_registration_form_registration_form_component__ = __webpack_require__("./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__account_login_form_login_form_component__ = __webpack_require__("./src/app/account/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_auth_guard__ = __webpack_require__("./src/app/account/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__author_author_component__ = __webpack_require__("./src/app/library/author/author.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//system


//components









var routes = [
    {
        path: 'library',
        children: [
            { path: 'brochure', component: __WEBPACK_IMPORTED_MODULE_2__brochure_brochure_component__["a" /* BrochureComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__account_auth_guard__["a" /* AuthGuard */]], data: { title: "Brochures" } },
            { path: 'book', component: __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__account_auth_guard__["a" /* AuthGuard */]], data: { title: "Books" } },
            { path: 'magazine', component: __WEBPACK_IMPORTED_MODULE_5__magazine_magazine_component__["a" /* MagazineComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__account_auth_guard__["a" /* AuthGuard */]], data: { title: "Magazines" } },
            { path: 'publichouse', component: __WEBPACK_IMPORTED_MODULE_4__public_house_public_house_component__["a" /* PublicHouseComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__account_auth_guard__["a" /* AuthGuard */]], data: { title: "Publication Houses" } },
            { path: 'alllibrary', component: __WEBPACK_IMPORTED_MODULE_6__all_library_all_library_component__["a" /* AllLibraryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__account_auth_guard__["a" /* AuthGuard */]], data: { title: "All Library" } },
            { path: 'author', component: __WEBPACK_IMPORTED_MODULE_10__author_author_component__["a" /* AuthorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__account_auth_guard__["a" /* AuthGuard */]], data: { title: "Authors" } },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__account_registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__account_login_form_login_form_component__["a" /* LoginFormComponent */] },
        ]
    }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__account_auth_guard__["a" /* AuthGuard */]]
        })
    ], LibraryRoutingModule);
    return LibraryRoutingModule;
}());



/***/ }),

/***/ "./src/app/library/magazine/magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Magazines</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Magazine Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"authorName\" title=\"Author\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.authorName\" kendoGridFocusable name=\"authorName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/magazine/magazine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_magazine_service__ = __webpack_require__("./src/app/library/services/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_magazine_model__ = __webpack_require__("./src/app/library/models/magazine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MagazineComponent = /** @class */ (function () {
    function MagazineComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.brochureService = bookServiceFactory;
    }
    MagazineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.brochureService.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.brochureService.read();
    };
    MagazineComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.brochureService.read();
    };
    MagazineComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newBrochure = new __WEBPACK_IMPORTED_MODULE_1__models_magazine_model__["a" /* Magazine */]();
        sender.addRow(newBrochure);
    };
    MagazineComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedBrochure = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    MagazineComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    MagazineComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.brochureService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    MagazineComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.brochureService.remove(dataItem);
    };
    MagazineComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.brochureService.resetItem(this.editedBrochure);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    MagazineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-magazine',
            template: __webpack_require__("./src/app/library/magazine/magazine.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_magazine_service__["a" /* MagazineService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__services_magazine_service__["a" /* MagazineService */])),
        __metadata("design:paramtypes", [Object])
    ], MagazineComponent);
    return MagazineComponent;
}());



/***/ }),

/***/ "./src/app/library/models/author.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Author; });
var Author = /** @class */ (function () {
    function Author(authorId, authorName, year) {
        if (authorId === void 0) { authorId = 0; }
        this.authorId = authorId;
        this.authorName = authorName;
        this.year = year;
    }
    return Author;
}());



/***/ }),

/***/ "./src/app/library/models/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(bookId, name, authorName, yearOfPublishing, publicHouses, publicHousesFormated, authors, authorsFormated) {
        if (bookId === void 0) { bookId = 0; }
        this.bookId = bookId;
        this.name = name;
        this.authorName = authorName;
        this.yearOfPublishing = yearOfPublishing;
        this.publicHouses = publicHouses;
        this.publicHousesFormated = publicHousesFormated;
        this.authors = authors;
        this.authorsFormated = authorsFormated;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/library/models/brochure.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brochure; });
var Brochure = /** @class */ (function () {
    function Brochure(brochureId, name, typeOfCover, numberOfPages) {
        if (brochureId === void 0) { brochureId = 0; }
        this.brochureId = brochureId;
        this.name = name;
        this.typeOfCover = typeOfCover;
        this.numberOfPages = numberOfPages;
    }
    return Brochure;
}());



/***/ }),

/***/ "./src/app/library/models/magazine.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Magazine; });
var Magazine = /** @class */ (function () {
    function Magazine(magazineId, name, authorName, yearOfPublishing) {
        if (magazineId === void 0) { magazineId = 0; }
        this.magazineId = magazineId;
        this.name = name;
        this.authorName = authorName;
        this.yearOfPublishing = yearOfPublishing;
    }
    return Magazine;
}());



/***/ }),

/***/ "./src/app/library/models/public-house.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicHouse; });
var PublicHouse = /** @class */ (function () {
    function PublicHouse(publicHouseId, publicHouseName, country) {
        if (publicHouseId === void 0) { publicHouseId = 0; }
        this.publicHouseId = publicHouseId;
        this.publicHouseName = publicHouseName;
        this.country = country;
    }
    return PublicHouse;
}());



/***/ }),

/***/ "./src/app/library/public-house/public-house.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Publication Houses</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"publicHouseName\" title=\"House Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.publicHouseName\" kendoGridFocusable name=\"publicHouseName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"country\" title=\"Country\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.country\" kendoGridFocusable name=\"country\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/public-house/public-house.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_public_house_model__ = __webpack_require__("./src/app/library/models/public-house.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_public_house_service__ = __webpack_require__("./src/app/library/services/public-house.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PublicHouseComponent = /** @class */ (function () {
    function PublicHouseComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.publicHouseService = bookServiceFactory;
    }
    PublicHouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.publicHouseService.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.publicHouseService.read();
    };
    PublicHouseComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.publicHouseService.read();
    };
    PublicHouseComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newPublicHouse = new __WEBPACK_IMPORTED_MODULE_0__models_public_house_model__["a" /* PublicHouse */]();
        sender.addRow(newPublicHouse);
    };
    PublicHouseComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedPublicHouse = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    PublicHouseComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    PublicHouseComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.publicHouseService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedPublicHouse = undefined;
    };
    PublicHouseComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.publicHouseService.remove(dataItem);
    };
    PublicHouseComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.publicHouseService.resetItem(this.editedPublicHouse);
        this.editedRowIndex = undefined;
        this.editedPublicHouse = undefined;
    };
    PublicHouseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-publichouse',
            template: __webpack_require__("./src/app/library/public-house/public-house.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_public_house_service__["a" /* PublicHouseService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_public_house_service__["a" /* PublicHouseService */])),
        __metadata("design:paramtypes", [Object])
    ], PublicHouseComponent);
    return PublicHouseComponent;
}());



/***/ }),

/***/ "./src/app/library/services/all-library.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllLibraryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AllLibraryService = /** @class */ (function (_super) {
    __extends(AllLibraryService, _super);
    function AllLibraryService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/library";
        _this.data = [];
        return _this;
    }
    AllLibraryService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    AllLibraryService.prototype.reset = function () {
        this.data = [];
    };
    AllLibraryService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
    };
    AllLibraryService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    AllLibraryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AllLibraryService);
    return AllLibraryService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "./src/app/library/services/author.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var AuthorService = /** @class */ (function (_super) {
    __extends(AuthorService, _super);
    function AuthorService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/author";
        _this.data = [];
        return _this;
    }
    AuthorService.prototype.getData = function () {
        this.read();
        return this.data;
    };
    AuthorService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    AuthorService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.authorId === dataItem.authorId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    AuthorService.prototype.reset = function () {
        this.data = [];
    };
    AuthorService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.authorId)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.authorId, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
    };
    AuthorService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    AuthorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthorService);
    return AuthorService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "./src/app/library/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var BookService = /** @class */ (function (_super) {
    __extends(BookService, _super);
    function BookService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/book";
        _this.data = [];
        return _this;
    }
    BookService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BookService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BookService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BookService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.bookId == dataItem.bookId; });
        console.log(this.data);
        console.log(originalDataItem);
        console.log(dataItem);
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BookService.prototype.reset = function () {
        this.data = [];
    };
    BookService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.bookId)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.bookId, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
    };
    BookService.prototype.getPublicHouseList = function () {
        return this.http.get('api/publichouse').pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
    };
    BookService.prototype.getAuthorList = function () {
        return this.http.get('api/author').pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
    };
    BookService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookService);
    return BookService;
}(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "./src/app/library/services/brochure.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var BrochureService = /** @class */ (function (_super) {
    __extends(BrochureService, _super);
    function BrochureService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/brochure";
        _this.data = [];
        return _this;
    }
    BrochureService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BrochureService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BrochureService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BrochureService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.brochureId === dataItem.brochureId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BrochureService.prototype.reset = function () {
        this.data = [];
    };
    BrochureService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.brochureId)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.brochureId, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
    };
    BrochureService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    BrochureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BrochureService);
    return BrochureService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "./src/app/library/services/magazine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagazineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var MagazineService = /** @class */ (function (_super) {
    __extends(MagazineService, _super);
    function MagazineService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/magazine";
        _this.data = [];
        return _this;
    }
    MagazineService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    MagazineService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    MagazineService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    MagazineService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.magazineId === dataItem.magazineId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    MagazineService.prototype.reset = function () {
        this.data = [];
    };
    MagazineService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.magazineId)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.magazineId, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
    };
    MagazineService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    MagazineService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MagazineService);
    return MagazineService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "./src/app/library/services/public-house.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicHouseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var PublicHouseService = /** @class */ (function (_super) {
    __extends(PublicHouseService, _super);
    function PublicHouseService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/publichouse";
        _this.data = [];
        return _this;
    }
    PublicHouseService.prototype.getData = function () {
        this.read();
        return this.data;
    };
    PublicHouseService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    PublicHouseService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublicHouseService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublicHouseService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.publicHouseId === dataItem.publicHouseId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    PublicHouseService.prototype.reset = function () {
        this.data = [];
    };
    PublicHouseService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.publicHouseId)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.publicHouseId, data)
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
        }
    };
    PublicHouseService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    PublicHouseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PublicHouseService);
    return PublicHouseService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "./src/app/navmenu/navmenu.component.css":
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  /* Highlighting rules for nav menu items */\r\n  \r\n  li.link-active a,\r\n  li.link-active a:hover,\r\n  li.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n  }\r\n  \r\n  /* Keep the nav menu independent of scrolling and on top of other items */\r\n  \r\n  .main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n      height: 100%;\r\n      width: calc(25% - 20px);\r\n    }\r\n  \r\n    .navbar {\r\n      border-radius: 0px;\r\n      border-width: 0px;\r\n      height: 100%;\r\n    }\r\n  \r\n    .navbar-header {\r\n      float: none;\r\n    }\r\n  \r\n    .navbar-collapse {\r\n      border-top: 1px solid #444;\r\n      padding: 0px;\r\n    }\r\n  \r\n    .navbar ul {\r\n      float: none;\r\n    }\r\n  \r\n    .navbar li {\r\n      float: none;\r\n      font-size: 15px;\r\n      margin: 6px;\r\n    }\r\n  \r\n      .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n      }\r\n  \r\n    .navbar a {\r\n      /* If a menu item's text is too long, truncate it */\r\n      width: 100%;\r\n      white-space: nowrap;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n  <div class='navbar navbar-inverse'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n        <span class='sr-only'>Toggle navigation</span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a class='navbar-brand' [routerLink]=\"['/home']\">Library</a>\r\n    </div>\r\n    <div class='clearfix'></div>\r\n    <div class='navbar-collapse collapse'>\r\n      <ul class='nav navbar-nav'>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['/home']\">\r\n            <span class='glyphicon glyphicon-home'></span> Home\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['library/book']\">\r\n            <span class='glyphicon glyphicon-book'></span> Books\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['library/brochure']\">\r\n            <span class='glyphicon glyphicon-picture'></span> Brochures\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['library/magazine']\">\r\n            <span class='glyphicon glyphicon-file'></span> Magazines\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['library/publichouse']\">\r\n            <span class='glyphicon glyphicon-briefcase'></span> Publication Houses\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['library/author']\">\r\n            <span class='glyphicon glyphicon-paperclip'></span> Authors\r\n          </a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['link-active']\">\r\n          <a [routerLink]=\"['library/alllibrary']\">\r\n            <span class='glyphicon glyphicon-th-list'></span> All Library\r\n          </a>\r\n        </li>\r\n\r\n        <ul *ngIf=\"status\" class=\"nav navbar-nav\">\r\n          <li class=\"nav-item\">\r\n             <a class=\"nav-link\" (click)=\"logout()\" href=\"#\">\r\n                <span class='glyphicon glyphicon-user'></span> Logout</a>\r\n          </li>       \r\n        </ul>\r\n\r\n        <ul *ngIf=\"!status\" class=\"nav navbar-nav\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/register\">\r\n                <span class='glyphicon glyphicon-user'></span> Signup</a>\r\n            </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/login\">\r\n              <span class='glyphicon glyphicon-user'></span> Login</a>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n      </ul>\r\n\r\n      \r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent(userService) {
        this.userService = userService;
    }
    NavmenuComponent.prototype.logout = function () {
        this.userService.logout();
    };
    NavmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.userService.authNavStatus$.subscribe(function (status) { return _this.status = status; });
    };
    NavmenuComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    };
    NavmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-menu',
            template: __webpack_require__("./src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("./src/app/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]])
    ], NavmenuComponent);
    return NavmenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__ = __webpack_require__("./src/app/directives/focus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__ = __webpack_require__("./src/app/spinner/spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__["a" /* myFocus */], __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__["a" /* SpinnerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__["a" /* myFocus */], __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__["a" /* SpinnerComponent */]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");

var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Observable */].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Observable */].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Add the RxJS Observable operators we need in this app.
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* BehaviorSubject */](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.register = function (email, password, firstName, lastName, location) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, location: location });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + "/accounts", body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.facebookLogin = function (accessToken) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = JSON.stringify({ accessToken: accessToken });
        return this.http
            .post(this.baseUrl + '/externalauth/facebook', body, { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__utils_config_service__["a" /* ConfigService */]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiURI = 'http://localhost:52257/api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n    width: 40px;\r\n    height: 40px;\r\n  \r\n    position: relative;\r\n    margin: 30px auto;\r\n  }\r\n  \r\n  .double-bounce1, .double-bounce2 {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #333;\r\n    opacity: 0.6;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  \r\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n    animation: sk-bounce 2.0s infinite ease-in-out;\r\n  }\r\n  \r\n  .double-bounce2 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n  }\r\n  \r\n  @-webkit-keyframes sk-bounce {\r\n    0%, 100% { -webkit-transform: scale(0.0) }\r\n    50% { -webkit-transform: scale(1.0) }\r\n  }\r\n  \r\n  @keyframes sk-bounce {\r\n    0%, 100% {\r\n      transform: scale(0.0);\r\n      -webkit-transform: scale(0.0);\r\n    } 50% {\r\n        transform: scale(1.0);\r\n        -webkit-transform: scale(1.0);\r\n      }\r\n  }"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">  \n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div> \n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spinner',
            template: __webpack_require__("./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__("./src/app/spinner/spinner.component.css")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map