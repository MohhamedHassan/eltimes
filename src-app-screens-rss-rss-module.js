(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-rss-rss-module"],{

/***/ "2DOJ":
/*!*******************************************!*\
  !*** ./src/app/screens/rss/rss.module.ts ***!
  \*******************************************/
/*! exports provided: RssModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssModule", function() { return RssModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rss_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rss-routing.module */ "xXxb");
/* harmony import */ var _components_rss_rss_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/rss/rss.component */ "uAQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RssModule {
}
RssModule.ɵfac = function RssModule_Factory(t) { return new (t || RssModule)(); };
RssModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RssModule });
RssModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _rss_routing_module__WEBPACK_IMPORTED_MODULE_1__["RssRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RssModule, { declarations: [_components_rss_rss_component__WEBPACK_IMPORTED_MODULE_2__["RssComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _rss_routing_module__WEBPACK_IMPORTED_MODULE_1__["RssRoutingModule"]] }); })();


/***/ }),

/***/ "uAQ1":
/*!*************************************************************!*\
  !*** ./src/app/screens/rss/components/rss/rss.component.ts ***!
  \*************************************************************/
/*! exports provided: RssComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssComponent", function() { return RssComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/screens/dashboard/services/addvertisment.service */ "cY7r");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RssComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function RssComponent_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.eltimeseg.com/rss/rss.xml/" + (category_r4 == null ? null : category_r4._id), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4 == null ? null : category_r4.title, " ");
} }
function RssComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RssComponent_ng_template_1_div_3_Template, 5, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
} }
class RssComponent {
    constructor(adsService, title, categoriesService) {
        this.adsService = adsService;
        this.title = title;
        this.categoriesService = categoriesService;
        this.loading = true;
    }
    ngOnInit() {
        this.getCategoriesName();
        this.adsService.leftAds = [];
        this.adsService.rightAds = [];
        this.adsService.mainAds = [];
        this.title.setTitle('rss');
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
    }
    getCategoriesName() {
        this.categoriesService.getCategories().subscribe((categoriesNames) => {
            this.categories = categoriesNames.data;
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }
}
RssComponent.ɵfac = function RssComponent_Factory(t) { return new (t || RssComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__["AddvertismentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"])); };
RssComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RssComponent, selectors: [["app-rss"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["Rss", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "py-5", "rss", 2, "min-height", "100vh"], [1, "container-fluid"], [1, "row"], ["class", "col-md-6 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-2"], [1, "bg-secondary", "text-white", "p-3"], ["target", "_blank", 2, "height", "100%", "width", "100%", "display", "block", 3, "href"], [1, "fas", "fa-rss", 2, "background-color", "#FF9A00"]], template: function RssComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RssComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RssComponent_ng_template_1_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".rss[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.rss[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px;\n  display: inline-block;\n  margin-left: 10px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHJzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFHLHVCQUFBO0FBQ1A7QUFBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRVIiLCJmaWxlIjoicnNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJzcyB7XHJcbiAgICBhIHtjb2xvcjp3aGl0ZSAhaW1wb3J0YW50fVxyXG4gICAgaSB7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "xXxb":
/*!***************************************************!*\
  !*** ./src/app/screens/rss/rss-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RssRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RssRoutingModule", function() { return RssRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_rss_rss_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/rss/rss.component */ "uAQ1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_rss_rss_component__WEBPACK_IMPORTED_MODULE_1__["RssComponent"]
    }
];
class RssRoutingModule {
}
RssRoutingModule.ɵfac = function RssRoutingModule_Factory(t) { return new (t || RssRoutingModule)(); };
RssRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RssRoutingModule });
RssRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RssRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-screens-rss-rss-module.js.map