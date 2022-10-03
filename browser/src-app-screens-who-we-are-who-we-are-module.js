(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-who-we-are-who-we-are-module"],{

/***/ "/w/T":
/*!**************************************************************************!*\
  !*** ./src/app/screens/who-we-are/components/we-are/we-are.component.ts ***!
  \**************************************************************************/
/*! exports provided: WeAreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeAreComponent", function() { return WeAreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/screens/dashboard/services/addvertisment.service */ "cY7r");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class WeAreComponent {
    constructor(adsService, title) {
        this.adsService = adsService;
        this.title = title;
    }
    ngOnInit() {
        this.adsService.leftAds = [];
        this.adsService.rightAds = [];
        this.adsService.mainAds = [];
        this.title.setTitle("من نحن");
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
WeAreComponent.ɵfac = function WeAreComponent_Factory(t) { return new (t || WeAreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__["AddvertismentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
WeAreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeAreComponent, selectors: [["app-we-are"]], decls: 52, vars: 0, consts: [[1, "bg-dark", "text-white", "p-2", "mb-4"]], template: function WeAreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0645\u0646 \u0646\u062D\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \"\u0627\u0644\u062A\u0627\u064A\u0645\u0632 EG\" \u0645\u0648\u0642\u0639 \u0625\u062E\u0628\u0627\u0631\u064A \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0634\u0627\u0645\u0644 \u060C \u064A\u0635\u062F\u0631 \u0639\u0646 \u0634\u0631\u0643\u0629 \"\u0627\u0644\u062A\u0627\u064A\u0645\u0632 \u0627\u064A\u062C\u064A \u0644\u0625\u0646\u062A\u0627\u062C \u0648\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0642\u0645\u064A\"\u060C \u0648\u0647\u0649 \u0627\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u0645\u0627\u0644\u0643\u0629 \u0644\u0644\u0645\u0648\u0642\u0639 \u0628\u0627\u0644\u062A\u0631\u062E\u064A\u0635 \u0631\u0642\u0645 (4686 \u0639 \u0631 ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0648\u062A\u0639\u0645\u0644 \"\u0627\u0644\u062A\u0627\u064A\u0645\u0632 EG\" \u0648\u0641\u0642 \u0622\u0644\u064A\u0627\u062A \u0627\u0644\u063A\u0631\u0636 \u0627\u0644\u0645\u062E\u0635\u0635 \u0644\u0647\u0627 \u0648\u0647\u064A : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1-\t\u0635\u0646\u0627\u0639\u0629 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0625\u062A\u0635\u0627\u0644\u0627\u062A \u0628\u0645\u0627 \u062A\u0634\u0645\u0644\u0647 \u0645\u0646 \u0623\u0646\u0634\u0637\u0629 \u0635\u0646\u0627\u0639\u0629 \u0648\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0627\u062A \u0648\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u062A\u0639\u0647\u064A\u062F \u060C \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0627\u062A \u060C \u0648\u0627\u0644\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 2-\t\u0625\u0646\u062A\u0627\u062C \u0648\u0625\u0646\u0634\u0627\u0621 \u0648\u0635\u0646\u0627\u0639\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u064A \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0628\u0635\u0648\u0631\u0647 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629 \u0645\u0646 \u0635\u0648\u062A \u0648\u0635\u0648\u0631\u0629 \u0648\u0628\u064A\u0627\u0646\u0627\u062A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "3-\t\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0648\u0635\u064A\u0641 \u0648\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0644\u0646\u0638\u0645 \u0627\u0644\u062D\u0627\u0633\u0628\u0627\u062A \u0628\u0645\u062E\u062A\u0644\u0641 \u0623\u0646\u0648\u0627\u0639\u0647\u0627 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "4-\t\u0625\u0646\u062A\u0627\u062C \u0648\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0646\u0638\u0645 \u0627\u0644\u0645\u062F\u0645\u062C\u0629 \u0648\u062A\u0634\u063A\u064A\u0644\u0647\u0627 \u0648\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0639\u0644\u064A\u0647\u0627 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "5-\t\u062A\u0646\u0641\u064A\u0630 \u0648\u0625\u062F\u0627\u0631\u0629 \u0634\u0628\u0643\u0627\u062A \u0646\u0642\u0644 \u0648\u062A\u062F\u0627\u0648\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646 ( \u0635\u0648\u062A \u0648\u0635\u0648\u0631\u0629 \u0648\u0628\u064A\u0627\u0646\u0627\u062A ) .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 6-\t\u0627\u0644\u0625\u062A\u0635\u0627\u0644\u0627\u062A \u0648\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "7-\t\u0645\u0634\u0631\u0648\u0639\u0627\u062A \u0627\u0644\u0628\u062D\u062B \u0648\u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0639\u0644\u0645\u064A \u0645\u0646 \u0623\u062C\u0644 \u0627\u0644\u062A\u0646\u0645\u064A\u0629 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "8-\t\u0625\u0646\u0634\u0627\u0621 \u0648\u0625\u062F\u0627\u0631\u0629 \u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0644\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0628\u0627\u062D\u062B\u064A\u0646 \u0648\u0645\u0631\u0627\u0643\u0632 \u0646\u0642\u0644 \u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 9-\t\u0625\u0646\u0634\u0627\u0621 \u0648\u0625\u062F\u0627\u0631\u0629 \u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0625\u0633\u062A\u0634\u0627\u0631\u0627\u062A \u0648\u0627\u0644\u062F\u0631\u0627\u0633\u0627\u062A \u0627\u0644\u0645\u062A\u062E\u0635\u0635\u0629 \u0641\u064A \u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0648\u0627\u0644\u0625\u062A\u0635\u0627\u0644\u0627\u062A \u0648\u062A\u0637\u0648\u064A\u0631\u0647\u0627 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "10-\t\u062D\u0627\u0636\u0646\u0627\u062A \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0629 \u0648\u062F\u0639\u0645 \u0631\u064A\u0627\u062F\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 11-\t\u0627\u0644\u0623\u0646\u0634\u0637\u0629 \u0627\u0644\u0645\u062A\u0639\u0644\u0642\u0629 \u0628\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0645\u062D\u062A\u0648\u064A \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A \u0645\u0646 \u0635\u0648\u062A \u0648\u0635\u0648\u0631\u0629 \u0648\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0649 \u0645\u062D\u062A\u0648\u0649 \u0631\u0642\u0645\u064A \u0628\u0645\u0627 \u0641\u064A \u0630\u0644\u0643 \u0631\u0642\u0645\u0646\u0629 \u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0639\u0644\u0645\u064A \u0648\u0627\u0644\u062B\u0642\u0627\u0641\u064A \u0648\u0627\u0644\u0641\u0646\u064A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "12-\t\u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 13-\t\u0627\u0644\u062A\u0633\u0648\u064A\u0642 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 14-\t\u0625\u0642\u0627\u0645\u0629 \u0648\u062A\u0634\u063A\u064A\u0644 \u0645\u0631\u0643\u0632 \u0644\u0625\u0639\u062F\u0627\u062F \u0648\u062A\u062F\u0631\u064A\u0628 \u0648\u062A\u0646\u0645\u064A\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " 15-\t\u0625\u0639\u062F\u0627\u062F \u0648\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "16-\t\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0645\u0648\u0627\u0647\u0628 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A\u0629 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 17-\t\u0625\u0646\u0634\u0627\u0621 \u0648\u062A\u0634\u063A\u064A\u0644 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 18-\t\u0625\u062F\u0627\u0631\u0629 \u0648\u062A\u0634\u063A\u064A\u0644 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0645\u0648\u0644 .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "19-\t\u0625\u0642\u0627\u0645\u0629 \u0648\u062A\u0646\u0638\u064A\u0645 \u0627\u0644\u062D\u0641\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0648\u0627\u0644\u0645\u0624\u062A\u0645\u0631\u0627\u062A .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u0648\u062A\u0636\u0639 \"\u0627\u0644\u062A\u0627\u064A\u0645\u0632 EG\" \u0647\u0630\u0647 \u0627\u0644\u0623\u0647\u062F\u0627\u0641 \u0636\u0645\u0646 \u0623\u0648\u0644\u0648\u064A\u062A\u0647\u0627 \u0648\u0646\u0635\u0628 \u0639\u064A\u0646 \u0641\u0631\u064A\u0642 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062E\u0627\u0635 \u0628\u0647\u0627 \u0627\u064A\u0645\u0627\u0646\u0627 \u0645\u0646\u0647\u0627 \u0628\u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u0649 \u0623\u0643\u0628\u0631 \u0627\u0644\u0637\u0648\u0627\u0626\u0641 \u0641\u064A \u0645\u0635\u0631 \u0648\u0627\u0644\u0648\u0637\u0646 \u0627\u0644\u0639\u0631\u0628\u064A \u0648\u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u064A \u0627\u0644\u0639\u0627\u0644\u0645 \u0645\u0646 \u0623\u062C\u0644 \u062A\u0641\u0639\u064A\u0644 \u062F\u0648\u0631 \u0645\u0635\u0631 \u0627\u0644\u0631\u064A\u0627\u062F\u064A \u0648\u062A\u0642\u062F\u0645\u0647\u0627 \u0648\u0627\u0644\u0639\u0645\u0644 \u0645\u0639 \u062C\u0645\u064A\u0639 \u0645\u0624\u0633\u0633\u0627\u062A \u0627\u0644\u062F\u0648\u0644\u0629 \u0645\u0646 \u0623\u062C\u0644 \u0631\u0641\u0639\u062A\u0647\u0627 . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0648\u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u0637\u0644\u0642 \u0642\u0631\u0631\u062A \" \u0627\u0644\u062A\u0627\u064A\u0645\u0632 EG\" \u0627\u0633\u062A\u0647\u062F\u0627\u0641 \u062C\u0645\u064A\u0639 \u0627\u0644\u0641\u0626\u0627\u062A \u0645\u0646 \u0627\u0644\u0645\u062B\u0642\u0641\u064A\u0646 \u0648\u0627\u0644\u0633\u064A\u0627\u0633\u064A\u0646 \u0648\u0627\u0644\u0641\u0646\u0627\u0646\u064A\u0646 \u0648\u0639\u0645\u0627\u0644 \u0648\u0641\u0644\u0627\u062D\u064A\u0646 \u0628\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0642\u0637\u0627\u0631 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0648\u062A\u0645\u062A\u062F \u0627\u0644\u0649 \u0634\u0631\u064A\u062D\u0629 \u0627\u0644\u0628\u0627\u062D\u062B\u064A\u0646 \u0648\u0645\u0637\u0648\u0631\u064A \u0627\u0644\u062A\u0643\u0646\u062A\u0648\u0644\u0648\u062C\u064A\u0627 \u0648\u0627\u0644\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u0631\u0642\u0645\u064A \u0628\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0648\u0627\u062F \u0645\u0646 ( \u0635\u0648\u062A \u0648\u0635\u0648\u0631\u0629 \u0648\u0628\u064A\u0627\u0646\u0627\u062A ) \u0648\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0628\u0645\u0627 \u064A\u0639\u0632\u0632 \u062F\u0648\u0631 \u0645\u0635\u0631 \u0628\u064A\u0646 \u0627\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062E\u062A\u0644\u0641\u0629 \u0648\u064A\u062D\u0641\u0638 \u062A\u0631\u0627\u062B\u0647\u0627 \u0648\u062D\u0636\u0627\u0631\u062A\u0647\u0627 . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0645\u0648\u0642\u0639 : \u0627\u0644\u062A\u0627\u064A\u0645\u0632 EG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZS1hcmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "HZW/":
/*!*****************************************************************!*\
  !*** ./src/app/screens/who-we-are/who-we-are-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: WhoWeAreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoWeAreRoutingModule", function() { return WhoWeAreRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_we_are_we_are_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/we-are/we-are.component */ "/w/T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_we_are_we_are_component__WEBPACK_IMPORTED_MODULE_1__["WeAreComponent"]
    }
];
class WhoWeAreRoutingModule {
}
WhoWeAreRoutingModule.ɵfac = function WhoWeAreRoutingModule_Factory(t) { return new (t || WhoWeAreRoutingModule)(); };
WhoWeAreRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WhoWeAreRoutingModule });
WhoWeAreRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WhoWeAreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bMGq":
/*!*********************************************************!*\
  !*** ./src/app/screens/who-we-are/who-we-are.module.ts ***!
  \*********************************************************/
/*! exports provided: WhoWeAreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoWeAreModule", function() { return WhoWeAreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _who_we_are_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./who-we-are-routing.module */ "HZW/");
/* harmony import */ var _components_we_are_we_are_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/we-are/we-are.component */ "/w/T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class WhoWeAreModule {
}
WhoWeAreModule.ɵfac = function WhoWeAreModule_Factory(t) { return new (t || WhoWeAreModule)(); };
WhoWeAreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WhoWeAreModule });
WhoWeAreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _who_we_are_routing_module__WEBPACK_IMPORTED_MODULE_1__["WhoWeAreRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WhoWeAreModule, { declarations: [_components_we_are_we_are_component__WEBPACK_IMPORTED_MODULE_2__["WeAreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _who_we_are_routing_module__WEBPACK_IMPORTED_MODULE_1__["WhoWeAreRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-screens-who-we-are-who-we-are-module.js.map