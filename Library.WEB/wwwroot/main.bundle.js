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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");


var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'library',
        children: [
            { path: '', loadChildren: 'app/library/library.module#LibraryModule' },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_edit_service__ = __webpack_require__("./src/app/home/edit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__ = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_library_module__ = __webpack_require__("./src/app/library/library.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navmenu_navmenu_component__ = __webpack_require__("./src/app/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navmenu_navmenu_component__["a" /* NavmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientJsonpModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__library_library_module__["LibraryModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_grid__["a" /* GridModule */]
            ],
            providers: [
                {
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]],
                    provide: __WEBPACK_IMPORTED_MODULE_5__home_edit_service__["a" /* EditService */],
                    useFactory: function (jsonp) { return function () { return new __WEBPACK_IMPORTED_MODULE_5__home_edit_service__["a" /* EditService */](jsonp); }; }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/edit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
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
var EditService = /** @class */ (function (_super) {
    __extends(EditService, _super);
    function EditService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    EditService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    EditService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    EditService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    EditService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.ProductID === dataItem.ProductID; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.reset = function () {
        this.data = [];
    };
    EditService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        return this.http
            .jsonp("https://demos.telerik.com/kendo-ui/service/Products/" + action + "?" + this.serializeModels(data), 'callback')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (res) { return res; }));
    };
    EditService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    EditService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EditService);
    return EditService;
}(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]));



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"ProductName\" title=\"Product Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.ProductName\" kendoGridFocusable name=\"ProductName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"UnitPrice\" editor=\"numeric\" title=\"Price\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.UnitPrice\" kendoGridFocusable name=\"UnitPrice\" class=\"k-textbox\" type=\"number\"/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"Discontinued\" editor=\"boolean\" title=\"Discontinued\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.Discontinued\" kendoGridFocusable name=\"Discontinued\" type=\"checkbox\"/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"UnitsInStock\" editor=\"numeric\" title=\"Units In Stock\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input\n                [(ngModel)]=\"dataItem.UnitsInStock\"\n                kendoGridFocusable\n                name=\"UnitsInStock\"\n                required\n                min=\"0\"\n                max=\"99\"\n                class=\"k-textbox\"\n                type=\"number\"/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"command\" width=\"220\">\n        <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n            <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n            <button kendoGridRemoveCommand type=\"button\">Remove</button>\n            <button\nkendoGridSaveCommand type=\"button\"\n[disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}</button>\n            <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n        </ng-template>\n    </kendo-grid-command-column>\n  </kendo-grid>\n</form>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_data_query__ = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__("./src/app/home/products.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_service__ = __webpack_require__("./src/app/home/edit.service.ts");
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





var HomeComponent = /** @class */ (function () {
    function HomeComponent(editServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.editService = editServiceFactory();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.editService.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (data) { return Object(__WEBPACK_IMPORTED_MODULE_1__progress_kendo_data_query__["e" /* process */])(data, _this.gridState); }));
        this.editService.read();
    };
    HomeComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.editService.read();
    };
    HomeComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        sender.addRow(new __WEBPACK_IMPORTED_MODULE_2__products__["a" /* Product */]());
    };
    HomeComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedProduct = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    HomeComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    HomeComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.editService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    };
    HomeComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editService.remove(dataItem);
    };
    HomeComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editService.resetItem(this.editedProduct);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__edit_service__["a" /* EditService */])),
        __metadata("design:paramtypes", [Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/products.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.ProductName = '';
        this.Discontinued = false;
        this.UnitPrice = 0;
    }
    return Product;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__all_library_service__ = __webpack_require__("./src/app/library/all-library/all-library.service.ts");
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
            providers: [__WEBPACK_IMPORTED_MODULE_0__all_library_service__["a" /* AllLibraryService */]],
            styleUrls: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__all_library_service__["a" /* AllLibraryService */])),
        __metadata("design:paramtypes", [Object])
    ], AllLibraryComponent);
    return AllLibraryComponent;
}());



/***/ }),

/***/ "./src/app/library/all-library/all-library.service.ts":
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

/***/ "./src/app/library/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Books</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid [data]=\"view | async\"\n              [height]=\"533\"\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n              [pageable]=\"true\" [sortable]=\"true\"\n              (dataStateChange)=\"onStateChange($event)\"\n              (selectionChange)=\"selectionChange($event)\"\n              (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n              (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n              (add)=\"addHandler($event, myForm)\"\n              [navigable]=\"true\"\n              [selectable]=\"selectableSettings\">\n    <ng-template kendoGridToolbarTemplate>\n      <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Name\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"authorName\" title=\"Author\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <input [(ngModel)]=\"dataItem.authorName\" kendoGridFocusable name=\"authorName\" class=\"k-textbox\" />\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column field=\"publicHousesFormated\" title=\"Publiation Houses\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <kendo-multiselect #list\n                           [data]=\"publicHouseList\"\n                           [(ngModel)]=\"dataItem.publicHouses\"\n                           [ngModelOptions]=\"{standalone: true}\"\n                           [filterable]=\"true\"\n                            (valueChange)=\"multiselectValueChange($event)\"\n                           textField=\"publicHouseName\"\n                           valueField=\"publicHouseId\"\n                           placeholder=\"Public Houses\">\n        </kendo-multiselect>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\n        <button kendoGridSaveCommand type=\"button\"\n                [disabled]=\"myForm.invalid\">\n          {{ isNew ? 'Add' : 'Update' }}\n        </button>\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n    </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_model__ = __webpack_require__("./src/app/library/book/book.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("./src/app/library/book/book.service.ts");
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
        this.loaded = true;
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
        var newBook = new __WEBPACK_IMPORTED_MODULE_0__book_model__["a" /* Book */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/library/book/book.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]],
            styleUrls: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */])),
        __metadata("design:paramtypes", [Object])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/library/book/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(bookId, name, authorName, yearOfPublishing, publicHouses, publicHousesFormated) {
        if (bookId === void 0) { bookId = 0; }
        this.bookId = bookId;
        this.name = name;
        this.authorName = authorName;
        this.yearOfPublishing = yearOfPublishing;
        this.publicHouses = publicHouses;
        this.publicHousesFormated = publicHousesFormated;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/library/book/book.service.ts":
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

/***/ "./src/app/library/brochure/brochure.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Brochures</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Brochure Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"typeOfCover\" title=\"Cover\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.typeOfCover\" kendoGridFocusable name=\"typeOfCover\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"numberOfPages\" editor=\"numeric\" title=\"Pages\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.numberOfPages\" kendoGridFocusable name=\"numberOfPages\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/brochure/brochure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrochureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brochure_service__ = __webpack_require__("./src/app/library/brochure/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brochure_model__ = __webpack_require__("./src/app/library/brochure/brochure.model.ts");
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
        var newBrochure = new __WEBPACK_IMPORTED_MODULE_2__brochure_model__["a" /* Brochure */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/library/brochure/brochure.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__brochure_service__["a" /* BrochureService */]],
            styleUrls: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__brochure_service__["a" /* BrochureService */])),
        __metadata("design:paramtypes", [Object])
    ], BrochureComponent);
    return BrochureComponent;
}());



/***/ }),

/***/ "./src/app/library/brochure/brochure.model.ts":
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

/***/ "./src/app/library/brochure/brochure.service.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__brochure_brochure_service__ = __webpack_require__("./src/app/library/brochure/brochure.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__magazine_magazine_service__ = __webpack_require__("./src/app/library/magazine/magazine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_book_service__ = __webpack_require__("./src/app/library/book/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__public_house_public_house_service__ = __webpack_require__("./src/app/library/public-house/public-house.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__all_library_all_library_service__ = __webpack_require__("./src/app/library/all-library/all-library.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__brochure_brochure_component__ = __webpack_require__("./src/app/library/brochure/brochure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__library_routing__ = __webpack_require__("./src/app/library/library.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__book_book_component__ = __webpack_require__("./src/app/library/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__magazine_magazine_component__ = __webpack_require__("./src/app/library/magazine/magazine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__public_house_public_house_component__ = __webpack_require__("./src/app/library/public-house/public-house.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__all_library_all_library_component__ = __webpack_require__("./src/app/library/all-library/all-library.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_14__library_routing__["a" /* LibraryRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_grid__["a" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_buttons__["b" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["c" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__brochure_brochure_component__["a" /* BrochureComponent */],
                __WEBPACK_IMPORTED_MODULE_15__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_16__magazine_magazine_component__["a" /* MagazineComponent */],
                __WEBPACK_IMPORTED_MODULE_17__public_house_public_house_component__["a" /* PublicHouseComponent */],
                __WEBPACK_IMPORTED_MODULE_18__all_library_all_library_component__["a" /* AllLibraryComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__brochure_brochure_service__["a" /* BrochureService */],
                __WEBPACK_IMPORTED_MODULE_9__magazine_magazine_service__["a" /* MagazineService */],
                __WEBPACK_IMPORTED_MODULE_10__book_book_service__["a" /* BookService */],
                __WEBPACK_IMPORTED_MODULE_11__public_house_public_house_service__["a" /* PublicHouseService */],
                __WEBPACK_IMPORTED_MODULE_12__all_library_all_library_service__["a" /* AllLibraryService */]
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
            { path: 'brochure', component: __WEBPACK_IMPORTED_MODULE_2__brochure_brochure_component__["a" /* BrochureComponent */], data: { title: "Brochures" } },
            { path: 'book', component: __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */], data: { title: "Books" } },
            { path: 'magazine', component: __WEBPACK_IMPORTED_MODULE_5__magazine_magazine_component__["a" /* MagazineComponent */], data: { title: "Magazines" } },
            { path: 'publichouse', component: __WEBPACK_IMPORTED_MODULE_4__public_house_public_house_component__["a" /* PublicHouseComponent */], data: { title: "Publication Houses" } },
            { path: 'alllibrary', component: __WEBPACK_IMPORTED_MODULE_6__all_library_all_library_component__["a" /* AllLibraryComponent */], data: { title: "All Library" } },
        ]
    }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__magazine_model__ = __webpack_require__("./src/app/library/magazine/magazine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__magazine_service__ = __webpack_require__("./src/app/library/magazine/magazine.service.ts");
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
        var newBrochure = new __WEBPACK_IMPORTED_MODULE_0__magazine_model__["a" /* Magazine */]();
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
            providers: [__WEBPACK_IMPORTED_MODULE_1__magazine_service__["a" /* MagazineService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__magazine_service__["a" /* MagazineService */])),
        __metadata("design:paramtypes", [Object])
    ], MagazineComponent);
    return MagazineComponent;
}());



/***/ }),

/***/ "./src/app/library/magazine/magazine.model.ts":
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

/***/ "./src/app/library/magazine/magazine.service.ts":
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

/***/ "./src/app/library/public-house/public-house.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Publication Houses</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"publicHouseName\" title=\"House Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.publicHouseName\" kendoGridFocusable name=\"publicHouseName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"country\" title=\"Country\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.country\" kendoGridFocusable name=\"country\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/public-house/public-house.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicHouseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__public_house_service__ = __webpack_require__("./src/app/library/public-house/public-house.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_house_model__ = __webpack_require__("./src/app/library/public-house/public-house.model.ts");
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
        var newPublicHouse = new __WEBPACK_IMPORTED_MODULE_1__public_house_model__["a" /* PublicHouse */]();
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
            providers: [__WEBPACK_IMPORTED_MODULE_0__public_house_service__["a" /* PublicHouseService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__public_house_service__["a" /* PublicHouseService */])),
        __metadata("design:paramtypes", [Object])
    ], PublicHouseComponent);
    return PublicHouseComponent;
}());



/***/ }),

/***/ "./src/app/library/public-house/public-house.model.ts":
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

/***/ "./src/app/library/public-house/public-house.service.ts":
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

module.exports = "<div class='main-nav'>\n  <div class='navbar navbar-inverse'>\n    <div class='navbar-header'>\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n        <span class='sr-only'>Toggle navigation</span>\n        <span class='icon-bar'></span>\n        <span class='icon-bar'></span>\n        <span class='icon-bar'></span>\n      </button>\n      <a class='navbar-brand' [routerLink]=\"['/home']\">Library</a>\n    </div>\n    <div class='clearfix'></div>\n    <div class='navbar-collapse collapse'>\n      <ul class='nav navbar-nav'>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['/home']\">\n            <span class='glyphicon glyphicon-home'></span> Home\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/book']\">\n            <span class='glyphicon glyphicon-book'></span> Books\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/brochure']\">\n            <span class='glyphicon glyphicon-picture'></span> Brochures\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/magazine']\">\n            <span class='glyphicon glyphicon-file'></span> Magazines\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/publichouse']\">\n            <span class='glyphicon glyphicon-briefcase'></span> Publication Houses\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/alllibrary']\">\n            <span class='glyphicon glyphicon-th-list'></span> All Library\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenuComponent; });
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

var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent() {
    }
    NavmenuComponent.prototype.ngOnInit = function () {
    };
    NavmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'nav-menu',
            template: __webpack_require__("./src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("./src/app/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavmenuComponent);
    return NavmenuComponent;
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