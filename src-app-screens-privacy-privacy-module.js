(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-privacy-privacy-module"],{

/***/ "3cu6":
/*!***************************************************!*\
  !*** ./src/app/screens/privacy/privacy.module.ts ***!
  \***************************************************/
/*! exports provided: PrivacyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyModule", function() { return PrivacyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-routing.module */ "YeGe");
/* harmony import */ var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/privacy/privacy.component */ "l/8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PrivacyModule {
}
PrivacyModule.ɵfac = function PrivacyModule_Factory(t) { return new (t || PrivacyModule)(); };
PrivacyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PrivacyModule });
PrivacyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrivacyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PrivacyModule, { declarations: [_components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _privacy_routing_module__WEBPACK_IMPORTED_MODULE_1__["PrivacyRoutingModule"]] }); })();


/***/ }),

/***/ "YeGe":
/*!***********************************************************!*\
  !*** ./src/app/screens/privacy/privacy-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PrivacyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyRoutingModule", function() { return PrivacyRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/privacy/privacy.component */ "l/8t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_1__["PrivacyComponent"]
    }
];
class PrivacyRoutingModule {
}
PrivacyRoutingModule.ɵfac = function PrivacyRoutingModule_Factory(t) { return new (t || PrivacyRoutingModule)(); };
PrivacyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PrivacyRoutingModule });
PrivacyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PrivacyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "l/8t":
/*!*************************************************************************!*\
  !*** ./src/app/screens/privacy/components/privacy/privacy.component.ts ***!
  \*************************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/screens/dashboard/services/addvertisment.service */ "cY7r");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class PrivacyComponent {
    constructor(adsService, title) {
        this.adsService = adsService;
        this.title = title;
    }
    ngOnInit() {
        this.title.setTitle('سياسة الخصوصية');
        this.adsService.leftAds = [];
        this.adsService.rightAds = [];
        this.adsService.mainAds = [];
        this.adsService.allAds.subscribe((ads) => {
            var _a;
            if (ads === null || ads === void 0 ? void 0 : ads.length) {
                for (let i = 0; i < ads.length; i++) {
                    if ((_a = ads[i].types) === null || _a === void 0 ? void 0 : _a.length) {
                        console.log(ads[i].types);
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
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__["AddvertismentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 43, vars: 0, consts: [[1, "bg-dark", "text-white", "p-2", "mb-4"], [1, "my-4"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0648\u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 (\u0627\u0644\u0643\u0648\u0643\u064A\u0632)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0627\u0644\u062A\u0627\u064A\u0645\u0632EG\" \u0647\u064A \u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0645\u0634\u0631\u0641\u0629 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0639\u0627\u0644\u062C\u0647\u0627\u060C \u0645\u0627 \u0644\u0645 \u064A\u0630\u0643\u0631 \u062E\u0644\u0627\u0641 \u0630\u0644\u0643. \u0648\u0647\u064A \u0634\u0631\u0643\u0629 \u0630\u0627\u062A \u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0645\u062D\u062F\u0648\u062F\u0629 \u062A\u0623\u0633\u0633\u062A \u0628\u0645\u0648\u062C\u0628 \u0642\u0648\u0627\u0646\u064A\u0646 \u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0635\u0631 \u0627\u0644\u0639\u0631\u0628\u064A\u0629\u060C \u0648\u0645\u0642\u0631\u0647\u0627 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u062C\u0645\u0647\u0648\u0631\u064A\u0629 \u0645\u0635\u0631 \u0627\u0644\u0639\u0631\u0628\u064A\u0629.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u062A\u0646\u0637\u0628\u0642 \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0648\u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 (\u0627\u0644\u0643\u0648\u0643\u064A\u0632) \u0647\u0630\u0647 \u0641\u064A \u062D\u0627\u0644 \u0643\u0646\u062A \u062A\u0633\u062A\u062E\u062F\u0645 \u0625\u062D\u062F\u0649 \u062E\u062F\u0645\u0627\u062A\u0646\u0627\u060C \u0623\u0648 \u0625\u0630\u0627 \u0642\u0645\u062A \u0628\u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0623\u0648 \u0646\u062D\u0646 \u062A\u0648\u0627\u0635\u0644\u0646\u0627 \u0645\u0639\u0643 \u0628\u0634\u0623\u0646 \u0623\u064A \u0645\u0646 \u062E\u062F\u0645\u0627\u062A\u0646\u0627\u060C \u0648\u0627\u0644\u062A\u064A \u0642\u062F \u062A\u0634\u0645\u0644\u060C \u0639\u0644\u0649 \u0633\u0628\u064A\u0644 \u0627\u0644\u0645\u062B\u0627\u0644 \u0644\u0627 \u0627\u0644\u062D\u0635\u0631: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0623\u064A \u0645\u0646 \u0627\u0644\u0645\u0646\u0635\u0627\u062A \u0648\u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0646\u0627.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0644\u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0641\u064A \u0623\u064A \u0645\u0646 \u0639\u0645\u0644\u064A\u0627\u062A \u062A\u062E\u0635 \u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0642\u0646\u0648\u0627\u062A \u062E\u062F\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u062E\u062F\u0645\u0627\u062A\u0646\u0627\u060C \u0623\u0648 \u0645\u0646\u062A\u062C\u0627\u062A\u0646\u0627\u060C \u0623\u0648 \u0628\u0631\u0627\u0645\u062C\u0646\u0627 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0645\u0644\u0648\u0643 \u0648\u064A\u062C\u0631\u064A \u062A\u0634\u063A\u064A\u0644\u0647 \u0645\u0646 \u0642\u0628\u0644 \"\u0634\u0631\u0643\u0629 \u0627\u0644\u062A\u0627\u064A\u0645\u0632 EG \u0644\u0625\u0646\u062A\u0627\u062C \u0648\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u064A \u0627\u0644\u0631\u0642\u0645\u064A \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0646\u062D\u0646 \u0646\u0648\u0644\u064A \u062E\u0635\u0648\u0635\u064A\u062A\u0643\u0645 \u0627\u0647\u062A\u0645\u0627\u0645\u0627\u064B \u0628\u0627\u0644\u063A\u0627\u064B\u060C \u0648\u0628\u0627\u0644\u062A\u0627\u0644\u064A \u0646\u0631\u063A\u0628 \u0628\u0625\u0639\u0644\u0627\u0645\u0643\u0645 \u0628\u0627\u0644\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u064A \u064A\u062A\u0645 \u0645\u0646 \u062E\u0644\u0627\u0644\u0647\u0627 \u062C\u0645\u0639 \u0628\u064A\u0627\u0646\u0627\u062A\u0643\u0645\u060C\u0648 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647\u0627\u060C \u0648\u0645\u0634\u0627\u0631\u0643\u062A\u0647\u0627\u060C \u0648\u062A\u062E\u0632\u064A\u0646\u0647\u0627\u060C \u0648\u0647\u064A \u0645\u0648\u0636\u062D\u0629 \u0641\u064A \u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0648\u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 (\u0627\u0644\u0643\u0648\u0643\u064A\u0632) \u0647\u0630\u0647.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u064A\u064F\u0631\u062C\u0649 \u0645\u0644\u0627\u062D\u0638\u0629 \u0623\u0646\u0647 \u064A\u062C\u0631\u064A \u062A\u062D\u062F\u064A\u062B \u0648\u0641\u0642 \u0644\u0627\u0633\u064A\u0627\u0633\u062A\u0646\u0627 \u0628\u0634\u0623\u0646 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0648\u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0645\u0646 \u062D\u064A\u0646 \u0625\u0644\u0649 \u0622\u062E\u0631\u060C \u0648\u0623\u0646\u0643\u0645 \u0645\u064F\u0644\u0632\u064E\u0645\u0648\u0646 \u0628\u0627\u0644\u0627\u0645\u062A\u062B\u0627\u0644 \u0644\u0622\u062E\u0631 \u062A\u062D\u062F\u064A\u062B \u0644\u0644\u0633\u064A\u0627\u0633\u0629 \u064A\u062A\u0645 \u0646\u0634\u0631\u0647 \u0639\u0644\u0649 \u0645\u0648\u0642\u0639\u0646\u0627. \u0648\u062D\u064A\u062B\u0645\u0627 \u0623\u0645\u0643\u0646\u060C \u0633\u064A\u062A\u0645 \u0625\u062E\u0637\u0627\u0631\u0643\u0645 \u0639\u0628\u0631 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0628\u0623\u064A \u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0647\u0627\u0645\u0629. \u0648\u0639\u0644\u064A\u0647\u060C \u0641\u0625\u0646\u0647 \u064A\u062C\u0628 \u0639\u0644\u064A\u0643\u0645 \u0645\u0631\u0627\u062C\u0639\u0629 \u0633\u064A\u0627\u0633\u062A\u0646\u0627 \u0628\u0634\u0623\u0646 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 \u0648\u0645\u0644\u0641\u0627\u062A \u062A\u0639\u0631\u064A\u0641 \u0627\u0644\u0627\u0631\u062A\u0628\u0627\u0637 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631 \u0644\u0644\u0627\u0637\u0644\u0627\u0639 \u0639\u0644\u0649 \u0623\u062D\u062F\u062B \u0627\u0644\u0625\u0635\u062F\u0627\u0631\u0627\u062A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u064A\u062C\u0648\u0632 \u0644\u0646\u0627 \u062C\u0645\u0639\u0647\u0627 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0646\u062C\u0645\u0639 \u0646\u062D\u0646 (\u0648\u0645\u0632\u0648\u062F\u064A \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0630\u064A\u0646 \u0646\u0635\u0631\u0651\u062D \u0644\u0647\u0645) \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u064A \u062A\u064F\u0642\u062F\u0645\u0648\u0646\u0647\u0627 \u0639\u0628\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0648\u0623\u064A \u0645\u0646 \u0645\u0648\u0627\u0642\u0639\u0646\u0627 \u0627\u0644\u0623\u062E\u0631\u0649 \u0623\u0648 \u0623\u064A \u0645\u0646 \u0642\u0646\u0648\u0627\u062A \u062E\u062F\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0641\u064A \u0645\u0648\u0642\u0639\u0646\u0627\u060C \u0628\u0645\u0627 \u0641\u064A \u0630\u0644\u0643\u060C \u0639\u0644\u0649 \u0633\u0628\u064A\u0644 \u0627\u0644\u0645\u062B\u0627\u0644 \u0644\u0627 \u0627\u0644\u062D\u0635\u0631\u060C \u0639\u0628\u0631 \u0627\u0644\u0647\u0627\u062A\u0641 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0639\u0628\u0631 \u062A\u0637\u0628\u064A\u0642 \"\u0648\u0627\u062A\u0633\u0627\u0628\" \u0623\u0648 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0645\u064A\u0632\u0629 \u0627\u0644\u0645\u062D\u0627\u062F\u062B\u0629 \u0627\u0644\u0641\u0648\u0631\u064A\u0629 \u0644\u062F\u064A\u0646\u0627 (\u062D\u064A\u062B\u0645\u0627 \u0643\u0627\u0646\u062A \u0645\u062A\u0648\u0641\u0631\u0629). \u0643\u0645\u0627 \u0646\u062C\u0645\u0639 \u0646\u062D\u0646 \u0648\u0645\u0632\u0648\u062F\u064A \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0639\u062A\u0645\u062F\u064A\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0646\u062F \u0632\u064A\u0627\u0631\u062A\u0643\u0645 \u0644\u0645\u0648\u0642\u0639\u0646\u0627\u060C \u0648\u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0623\u062E\u0631\u0649 \u0627\u0644\u062A\u064A \u0646\u0634\u063A\u0644\u0647\u0627 \u0623\u0648 \u0645\u0646 \u0623\u0637\u0631\u0627\u0641 \u062B\u0627\u0644\u062B\u0629 \u0645\u0635\u0631\u064E\u0651\u062D \u0644\u0647\u0627 \u0628\u0645\u0634\u0627\u0631\u0643\u0629 \u0645\u0639\u0644\u0648\u0645\u0627\u062A\u0643\u0645 \u0645\u0639\u0646\u0627. \u0639\u0644\u0645\u0627\u064B \u0628\u0623\u0646\u0647 \u064A\u062C\u0648\u0632 \u0644\u0646\u0627 \u0623\u0648 \u0644\u0645\u0632\u0648\u062F\u064A \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0645\u0635\u0631\u0651\u064E\u062D \u0644\u0647\u0645 \u0645\u0645\u0646 \u0646\u062A\u0639\u0627\u0645\u0644 \u0645\u0639\u0647\u0645 \u062C\u0645\u0639 \u0628\u0639\u0636 \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062D\u062A\u0649 \u0644\u0648 \u0644\u0645 \u062A\u0643\u0648\u0646\u0648\u0627 \u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0645\u0633\u062C\u0644\u064A\u0646 \u0623\u0648 \u0644\u0645 \u062A\u0642\u0648\u0645\u0648\u0627 \u0628\u062A\u0633\u062C\u064A\u0644 \u0623\u064A \u0637\u0644\u0628\u064A\u0627\u062A. \u0648\u0642\u062F \u062A\u062A\u0636\u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0645\u062B\u0644: \u0627\u0644\u0627\u0633\u0645\u060C \u0648\u0627\u0644\u0639\u0646\u0648\u0627\u0646\u060C \u0648\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641\u060C \u0648\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0648\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F\u060C \u0648\u0627\u0644\u062C\u0646\u0633\u060C \u0648\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0629 \u0644\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u060C \u0645\u062B\u0644: \u0645\u0643\u0627\u0646 \u0625\u0642\u0627\u0645\u062A\u0643\u0645\u060C \u0639\u0646\u0648\u0627\u0646 URL \u0627\u0644\u0630\u064A \u062A\u0633\u062A\u062E\u062F\u0645\u0648\u0646\u0647 \u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u0646\u0638\u0627\u0645\u060C \u0627\u0644\u0645\u062A\u0635\u0641\u062D\u060C \u0646\u0648\u0639 \u0627\u0644\u062C\u0647\u0627\u0632 \u060C \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u0648\u062A\u0648\u0643\u0648\u0644 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0644\u0644\u0643\u0645\u0628\u064A\u0648\u062A\u0631 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643\u0645\u060C \u0646\u0648\u0639 \u0627\u0644\u0646\u0637\u0627\u0642\u060C \u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u062A\u064A \u0642\u0645\u062A\u0645 \u0628\u0632\u064A\u0627\u0631\u062A\u0647\u0627\u060C \u0645\u0635\u0637\u0644\u062D\u0627\u062A \u0627\u0644\u0628\u062D\u062B \u0627\u0644\u062A\u064A \u0623\u062F\u062E\u0644\u062A\u0645\u0648\u0647\u0627\u060C \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u062A\u064A \u0646\u0642\u0631\u062A\u0645 \u0639\u0644\u064A\u0647\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u064A\u0639\u062A\u0628\u0631 \u062A\u0642\u062F\u064A\u0645\u0643\u0645 \u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062E\u0627\u0635\u0629 \u0628\u0623\u0637\u0631\u0627\u0641 \u062B\u0627\u0644\u062B\u0629 \u0625\u0644\u064A\u0646\u0627 \u062A\u0623\u0643\u064A\u062F\u0627\u064B \u0645\u0646\u0643\u0645 \u0639\u0644\u0649 \u0623\u0646\u0643\u0645 \u0642\u062F \u062D\u0635\u0644\u062A\u0645 \u0645\u0633\u0628\u0642\u0627\u064B \u0639\u0644\u0649 \u0645\u0648\u0627\u0641\u0642\u0629 \u0647\u0630\u0647 \u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0639\u0644\u0649 \u0630\u0644\u0643.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0643\u064A\u0641 \u0646\u062C\u0645\u0639 \u0645\u0639\u0644\u0648\u0645\u0627\u062A\u0643\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0646\u062D\u0635\u0644 \u0639\u0644\u0649 \u0645\u0639\u0638\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0627\u0644\u062A\u064A \u0646\u0639\u0627\u0644\u062C\u0647\u0627 \u0628\u0634\u0643\u0644 \u0645\u0628\u0627\u0634\u0631 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0623\u062D\u062F \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u062A\u0642\u062F\u0645\u062A \u0625\u0644\u064A\u0646\u0627 \u0628\u0634\u0643\u0648\u0649 \u0623\u0648 \u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u0623\u0648 \u062A\u0639\u0644\u064A\u0642 \u0639\u0644\u0649 \u0623\u062D\u062F \u062E\u062F\u0645\u0627\u062A\u0646\u0627 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u062A\u0642\u062F\u0645\u062A \u0625\u0644\u064A\u0646\u0627 \u0628\u0637\u0644\u0628 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062D\u0648\u0644 \u0623\u0645\u0631 \u0645\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0627\u0634\u062A\u0631\u0643\u062A \u0644\u062A\u0644\u0642\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0645\u0646 \u0637\u0631\u0641\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0643\u0645\u0627 \u0642\u062F \u0646\u062D\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0628\u0634\u0643\u0644 \u063A\u064A\u0631 \u0645\u0628\u0627\u0634\u0631 \u0641\u064A \u0628\u0639\u0636 \u0627\u0644\u062D\u0627\u0644\u0627\u062A.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-screens-privacy-privacy-module.js.map