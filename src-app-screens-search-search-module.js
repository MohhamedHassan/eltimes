(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-search-search-module"],{

/***/ "M7xe":
/*!*********************************************************!*\
  !*** ./src/app/screens/search/search-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/search.component */ "v7og");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]
    }
];
class SearchRoutingModule {
}
SearchRoutingModule.ɵfac = function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); };
SearchRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bwuJ":
/*!*************************************************!*\
  !*** ./src/app/screens/search/search.module.ts ***!
  \*************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-routing.module */ "M7xe");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search.component */ "v7og");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_1__["SearchRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _search_routing_module__WEBPACK_IMPORTED_MODULE_1__["SearchRoutingModule"]] }); })();


/***/ }),

/***/ "v7og":
/*!**********************************************************************!*\
  !*** ./src/app/screens/search/components/search/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/screens/dashboard/services/addvertisment.service */ "cY7r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SearchComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a1) { return ["/main/details", a1]; };
function SearchComponent_ng_template_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const article_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, article_r7 == null ? null : article_r7._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", article_r7 == null ? null : article_r7.main == null ? null : article_r7.main.image == null ? null : article_r7.main.image.image == null ? null : article_r7.main.image.image.file == null ? null : article_r7.main.image.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", article_r7 == null ? null : article_r7.main == null ? null : article_r7.main.title, "...");
} }
function SearchComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchComponent_ng_template_1_ng_container_1_div_2_Template, 6, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.searchResult);
} }
function SearchComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_template_1_ng_container_1_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchComponent_ng_template_1_ng_template_2_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.searchResult == null ? null : ctx_r2.searchResult.length)("ngIfElse", _r4);
} }
class SearchComponent {
    constructor(http, title, adsService, activatedRoute) {
        this.http = http;
        this.title = title;
        this.adsService = adsService;
        this.activatedRoute = activatedRoute;
        this.loading = true;
    }
    ngOnInit() {
        this.adsService.leftAds = [];
        this.adsService.rightAds = [];
        this.adsService.mainAds = [];
        this.title.setTitle('search');
        this.adsService.allAds.subscribe((ads) => {
            var _a;
            if (ads === null || ads === void 0 ? void 0 : ads.length) {
                for (let i = 0; i < ads.length; i++) {
                    if ((_a = ads[i].types) === null || _a === void 0 ? void 0 : _a.length) {
                        let left = ads[i].types.filter(item => item == 'left' || item == 'homepage');
                        let right = ads[i].types.filter(item => item == 'right' || item == 'homepage');
                        if ((left === null || left === void 0 ? void 0 : left.length) == 2)
                            this.adsService.leftAds.push(ads[i]);
                        if ((right === null || right === void 0 ? void 0 : right.length) == 2)
                            this.adsService.rightAds.push(ads[i]);
                    }
                }
            }
        });
        this.activatedRoute.params.subscribe(param => {
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}post?keywords=${param.id}&limit=10000&status=true&sort=createdAt:-1`).subscribe((res) => {
                this.loading = false;
                this.searchResult = res === null || res === void 0 ? void 0 : res.data;
            }, err => {
                this.loading = false;
            });
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_4__["AddvertismentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "news", "search", "py-2", 2, "min-height", "100vh"], ["notFound", ""], [1, "row"], ["class", "col-sm-6  col-md-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "mb-4"], [3, "routerLink"], ["alt", "", 1, "w-100", 3, "src"], [1, "my-5", "fw-bold", "text-center"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchComponent_ng_template_1_Template, 4, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-screens-search-search-module.js.map