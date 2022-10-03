(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-art-art-module"],{

/***/ "/X0U":
/*!*******************************************!*\
  !*** ./src/app/screens/art/art.module.ts ***!
  \*******************************************/
/*! exports provided: ArtModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtModule", function() { return ArtModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _art_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./art-routing.module */ "5zna");
/* harmony import */ var _components_art_art_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/art/art.component */ "4nu+");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ArtModule {
}
ArtModule.ɵfac = function ArtModule_Factory(t) { return new (t || ArtModule)(); };
ArtModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ArtModule });
ArtModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _art_routing_module__WEBPACK_IMPORTED_MODULE_1__["ArtRoutingModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ArtModule, { declarations: [_components_art_art_component__WEBPACK_IMPORTED_MODULE_2__["ArtComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _art_routing_module__WEBPACK_IMPORTED_MODULE_1__["ArtRoutingModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__["NgxSkeletonLoaderModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"]] }); })();


/***/ }),

/***/ "4nu+":
/*!*************************************************************!*\
  !*** ./src/app/screens/art/components/art/art.component.ts ***!
  \*************************************************************/
/*! exports provided: ArtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtComponent", function() { return ArtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_smallnavbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/smallnavbar.service */ "DBm8");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_screens_dashboard_services_artilce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/screens/dashboard/services/artilce.service */ "lWuh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/screens/dashboard/services/addvertisment.service */ "cY7r");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");












function ArtComponent_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r12.areatwo[0] == null ? null : ctx_r12.areatwo[0].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.areatwo[0] == null ? null : ctx_r12.areatwo[0].image == null ? null : ctx_r12.areatwo[0].image.file == null ? null : ctx_r12.areatwo[0].image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ArtComponent_div_13_ng_container_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r15 == null ? null : item_r15.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r15 == null ? null : item_r15.image == null ? null : item_r15.image.file == null ? null : item_r15.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ArtComponent_div_13_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtComponent_div_13_ng_container_2_2_ng_template_0_Template, 2, 2, "ng-template", 21);
} }
const _c0 = function () { return { delay: 5000, disableOnInteraction: false }; };
const _c1 = function () { return { clickable: true }; };
function ArtComponent_div_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtComponent_div_13_ng_container_2_2_Template, 1, 0, undefined, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true)("autoHeight", true)("allowTouchMove", false)("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("navigation", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.areatwo);
} }
function ArtComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtComponent_div_13_ng_container_1_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtComponent_div_13_ng_container_2_Template, 3, 9, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.areatwo == null ? null : ctx_r0.areatwo.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.areatwo.length > 1);
} }
const _c2 = function () { return { width: "100%", height: "300px", "border-radius": "10px", margin: 0 }; };
function ArtComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function ArtComponent_ng_template_17_ng_container_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r19 == null ? null : item_r19.main == null ? null : item_r19.main.image == null ? null : item_r19.main.image.imageBigSize == null ? null : item_r19.main.image.imageBigSize.file == null ? null : item_r19.main.image.imageBigSize.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c3 = function (a1) { return ["/main/details", a1]; };
function ArtComponent_ng_template_17_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtComponent_ng_template_17_ng_container_1_img_2_Template, 1, 1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtComponent_ng_template_17_ng_container_1_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.sliderRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtComponent_ng_template_17_ng_container_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.sliderLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, item_r19 == null ? null : item_r19._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.show);
} }
function ArtComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtComponent_ng_template_17_ng_container_1_Template, 5, 4, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.artSlider);
} }
function ArtComponent_div_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r26.areaone[0] == null ? null : ctx_r26.areaone[0].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r26.areaone[0] == null ? null : ctx_r26.areaone[0].image == null ? null : ctx_r26.areaone[0].image.file == null ? null : ctx_r26.areaone[0].image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ArtComponent_div_19_ng_container_3_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r29 == null ? null : item_r29.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r29 == null ? null : item_r29.image == null ? null : item_r29.image.file == null ? null : item_r29.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ArtComponent_div_19_ng_container_3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtComponent_div_19_ng_container_3_2_ng_template_0_Template, 2, 2, "ng-template", 21);
} }
function ArtComponent_div_19_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtComponent_div_19_ng_container_3_2_Template, 1, 0, undefined, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true)("autoHeight", true)("allowTouchMove", false)("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("navigation", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r27.areaone);
} }
function ArtComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtComponent_div_19_ng_container_2_Template, 3, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArtComponent_div_19_ng_container_3_Template, 3, 9, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.areaone == null ? null : ctx_r4.areaone.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.areaone.length > 1);
} }
const _c4 = function () { return { width: "100%", height: "10px", "margin-bottom": "10px" }; };
function ArtComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
function ArtComponent_ng_template_22_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, item_r33 == null ? null : item_r33._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 2, item_r33 == null ? null : item_r33.main == null ? null : item_r33.main.title, 0, 100), "... ");
} }
function ArtComponent_ng_template_22_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtComponent_ng_template_22_ng_container_0_div_1_Template, 5, 8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r33.show);
} }
function ArtComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtComponent_ng_template_22_ng_container_0_Template, 2, 1, "ng-container", 20);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.artSlider);
} }
const _c5 = function () { return { width: "100%", height: "150px", "border-radius": "10px", margin: 0 }; };
const _c6 = function () { return { width: "100%", height: "5px", "margin-bottom": "2px", "border-radius": "10px" }; };
function ArtComponent_ng_container_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c6));
} }
function ArtComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtComponent_ng_container_26_div_1_Template, 3, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.navBarService.loadingCount);
} }
function ArtComponent_ng_template_27_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, item_r42 == null ? null : item_r42._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r42 == null ? null : item_r42.main == null ? null : item_r42.main.image == null ? null : item_r42.main.image.image == null ? null : item_r42.main.image.image.file == null ? null : item_r42.main.image.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r42 == null ? null : item_r42.main == null ? null : item_r42.main.title, "...");
} }
function ArtComponent_ng_template_27_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtComponent_ng_template_27_ng_container_0_div_1_Template, 6, 5, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r38.articless);
} }
function ArtComponent_ng_template_27_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArtComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtComponent_ng_template_27_ng_container_0_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtComponent_ng_template_27_ng_template_1_Template, 2, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.articless == null ? null : ctx_r10.articless.length)("ngIfElse", _r39);
} }
function ArtComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function ArtComponent_div_29_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r11.totalPages)("maxSize", 5);
} }
class ArtComponent {
    constructor(navBarService, title, meta, artileService, activatedRoute, platformId, adsService) {
        this.navBarService = navBarService;
        this.title = title;
        this.meta = meta;
        this.artileService = artileService;
        this.activatedRoute = activatedRoute;
        this.platformId = platformId;
        this.adsService = adsService;
        this.artSliderIndex = -1;
        this.lastSlide = false;
        this.totalPages = 0;
        this.artSlider = [];
        this.articlesLoading = true;
        this.AllParams = {};
        this.areaone = [];
        this.areatwo = [];
    }
    ngOnInit() {
        this.adsService.leftAds = [];
        this.adsService.rightAds = [];
        this.adsService.mainAds = [];
        this.activatedRoute.params.subscribe(params => {
            this.adsService.allAds.subscribe(ads => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (ads === null || ads === void 0 ? void 0 : ads.length) {
                    for (let i = 0; i < ads.length; i++) {
                        if ((_a = ads[i].categories) === null || _a === void 0 ? void 0 : _a.length) {
                            for (let j = 0; j < ((_b = ads[i].categories) === null || _b === void 0 ? void 0 : _b.length); j++) {
                                if (ads[i].categories[j]._id == (params === null || params === void 0 ? void 0 : params.id)) {
                                    if ((_d = (_c = ads[i]) === null || _c === void 0 ? void 0 : _c.seq) === null || _d === void 0 ? void 0 : _d.length) {
                                        for (let k = 0; k < ((_e = ads[i].seq) === null || _e === void 0 ? void 0 : _e.length); k++) {
                                            if (ads[i].seq[k] == 1)
                                                this.areaone.push(ads[i]);
                                            if (ads[i].seq[k] == 2)
                                                this.areatwo.push(ads[i]);
                                        }
                                    }
                                    if ((_g = (_f = ads[i]) === null || _f === void 0 ? void 0 : _f.types) === null || _g === void 0 ? void 0 : _g.length) {
                                        for (let t = 0; t < ((_h = ads[i].types) === null || _h === void 0 ? void 0 : _h.length); t++) {
                                            if (ads[i].types[t] == 'left') {
                                                this.adsService.leftAds.push(ads[i]);
                                            }
                                            if (ads[i].types[t] == 'right') {
                                                this.adsService.rightAds.push(ads[i]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            this.AllParams = {};
            this.AllParams.categories = params === null || params === void 0 ? void 0 : params.id;
            this.AllParams.status = true;
            this.AllParams.page = 1;
            this.AllParams.limit = 9;
            this.AllParams.sort = 'createdAt:-1';
            this.getArticles(this.AllParams);
            this.getCatSlider(params === null || params === void 0 ? void 0 : params.id);
        });
    }
    getArticles(AllParams) {
        this.articlesLoading = true;
        this.artileService.getArticles(AllParams).subscribe((categories) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            this.articlesLoading = false;
            this.articless = categories === null || categories === void 0 ? void 0 : categories.data;
            if ((_a = this.articless) === null || _a === void 0 ? void 0 : _a.length) {
                this.title.setTitle((_d = (_c = (_b = this.articless[0]) === null || _b === void 0 ? void 0 : _b.categories[0]) === null || _c === void 0 ? void 0 : _c.metaData) === null || _d === void 0 ? void 0 : _d.title);
                this.meta.updateTag({ name: 'keywords', content: (_f = (_e = this.articless[0]) === null || _e === void 0 ? void 0 : _e.categories[0]) === null || _f === void 0 ? void 0 : _f.keywords });
                this.meta.updateTag({ name: 'description', content: (_h = (_g = this.articless[0]) === null || _g === void 0 ? void 0 : _g.categories[0]) === null || _h === void 0 ? void 0 : _h.desc });
            }
            this.totalPages = categories === null || categories === void 0 ? void 0 : categories.totalCount;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                window.scroll(0, 0);
            }
        }, err => {
            this.articlesLoading = false;
        });
    }
    setIntervall() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.intervall = setInterval(() => {
                var _a, _b;
                for (let i = 0; i < ((_a = this.artSlider) === null || _a === void 0 ? void 0 : _a.length); i++)
                    this.artSlider[i].show = false;
                this.artSliderIndex++;
                if (this.artSliderIndex == ((_b = this.artSlider) === null || _b === void 0 ? void 0 : _b.length)) {
                    this.artSliderIndex = 0;
                    this.lastSlide = true;
                }
                else {
                    this.lastSlide = false;
                }
                this.artSlider[this.artSliderIndex].show = true;
            }, 5000);
        }
    }
    sliderLeft() {
        var _a, _b, _c;
        clearInterval(this.intervall);
        for (let i = 0; i < ((_a = this.artSlider) === null || _a === void 0 ? void 0 : _a.length); i++)
            this.artSlider[i].show = false;
        if (this.artSliderIndex == 0)
            this.artSliderIndex = ((_b = this.artSlider) === null || _b === void 0 ? void 0 : _b.length) - 1;
        else if (this.lastSlide)
            this.artSliderIndex = ((_c = this.artSlider) === null || _c === void 0 ? void 0 : _c.length) - 2;
        else
            this.artSliderIndex -= 1;
        this.artSlider[this.artSliderIndex].show = true;
        this.setIntervall();
    }
    sliderRight() {
        var _a, _b;
        clearInterval(this.intervall);
        for (let i = 0; i < ((_a = this.artSlider) === null || _a === void 0 ? void 0 : _a.length); i++)
            this.artSlider[i].show = false;
        if (this.artSliderIndex == ((_b = this.artSlider) === null || _b === void 0 ? void 0 : _b.length) - 1)
            this.artSliderIndex = 0;
        else
            this.artSliderIndex += 1;
        this.artSlider[this.artSliderIndex].show = true;
        this.setIntervall();
    }
    pageChanged(event) {
        this.AllParams.page = event.page;
        this.getArticles(this.AllParams);
    }
    getCatSlider(id) {
        let params = {
            status: 'true',
            categories: id,
            positions: 'categorySlider',
            sort: 'createdAt:-1'
        };
        this.artileService.getArticles(params).subscribe((res) => {
            var _a, _b;
            this.artSlider = res === null || res === void 0 ? void 0 : res.data;
            if ((_a = this.artSlider) === null || _a === void 0 ? void 0 : _a.length) {
                for (let i = 0; i < ((_b = this.artSlider) === null || _b === void 0 ? void 0 : _b.length); i++) {
                    this.artSlider[i].show = false;
                }
                this.setIntervall();
            }
        });
    }
    ngOnDestroy() {
    }
}
ArtComponent.ɵfac = function ArtComponent_Factory(t) { return new (t || ArtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_smallnavbar_service__WEBPACK_IMPORTED_MODULE_2__["SmallnavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_artilce_service__WEBPACK_IMPORTED_MODULE_4__["ArtilceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_6__["AddvertismentService"])); };
ArtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtComponent, selectors: [["app-art"]], decls: 30, vars: 9, consts: [[1, "breadCrumbb", "d-flex", "mb-5", "p-2", "list-unstyled"], ["routerLink", "/main/home"], [1, "pageTitle", "mb-5"], [1, "title"], ["class", "advertisment mb-4", 4, "ngIf"], [1, "row"], [1, "order-2", "order-md-1", "col-md-7", "mb-4"], [4, "ngIf", "ngIfElse"], ["swiperImages", ""], ["class", "order-1 order-md-2 col-md-5 mb-4", 4, "ngIf"], [1, "swiperTitleSection", "mb-4"], ["swiperTitle", ""], [1, "news", 2, "min-height", "100vh"], ["articles", ""], ["style", "overflow:auto", "class", "d-flex justify-content-center", 4, "ngIf"], [1, "advertisment", "mb-4"], [4, "ngIf"], ["aria-label", "Eltimes EG ads", "target", "_blank", 3, "href"], [2, "max-height", "150px", "width", "100%", "object-fit", "contain", 3, "src"], [1, "", 3, "loop", "autoHeight", "allowTouchMove", "autoplay", "pagination", "navigation"], [4, "ngFor", "ngForOf"], ["data-swiper-autoplay", "6000", "swiperSlide", ""], ["count", "1", "appearance", "circle", 3, "theme"], [1, "newsImages", "autoSlider", "position-relative"], ["aria-label", "Eltimes EG article details", 3, "routerLink"], ["alt", "", 3, "src", 4, "ngIf"], [1, "fas", "fa-chevron-right", "right", 3, "click"], [1, "fas", "fa-chevron-left", "left", 3, "click"], ["alt", "", 3, "src"], [1, "order-1", "order-md-2", "col-md-5", "mb-4"], ["count", "3", 3, "theme"], ["style", "height: 300px;overflow: hidden;", "class", "swiperTitle mb-4 d-flex align-items-center py-4", 4, "ngIf"], [1, "swiperTitle", "mb-4", "d-flex", "align-items-center", "py-4", 2, "height", "300px", "overflow", "hidden"], [3, "routerLink"], [2, "line-height", "40px"], ["class", "col-sm-6  col-md-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "mb-4"], ["count", "2", 3, "theme"], ["notFound", ""], ["alt", "\u0627\u0644\u062A\u0627\u064A\u0645\u0632 eg", 1, "w-100", 3, "src"], [1, "text-center"], [1, "d-flex", "justify-content-center", 2, "overflow", "auto"], ["previousText", "\u2039", "nextText", "\u203A", "firstText", "\u00AB", "lastText", "\u00BB", 3, "totalItems", "maxSize", "pageChanged"]], template: function ArtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0641\u0646 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0641\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ArtComponent_div_13_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ArtComponent_ng_container_16_Template, 2, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ArtComponent_ng_template_17_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ArtComponent_div_19_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ArtComponent_ng_container_21_Template, 2, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ArtComponent_ng_template_22_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ArtComponent_ng_container_26_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ArtComponent_ng_template_27_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ArtComponent_div_29_Template, 2, 2, "div", 14);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areatwo == null ? null : ctx.areatwo.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articlesLoading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areaone == null ? null : ctx.areaone.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articlesLoading)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articlesLoading)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPages > 10);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_7__["SwiperSlideDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_8__["NgxSkeletonLoaderComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: [".swiperTitle[_ngcontent-%COMP%] {\n  background-color: #F0F0F0;\n}\n.swiperTitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: black !important;\n}\n.swiperTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #cc3e3e !important;\n}\n.artSwiper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 400px;\n  object-fit: fill;\n  margin-bottom: 30px;\n}\n  .swiper-button-prev,   .swiper-button-next {\n  color: #E03030 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0FBRVI7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFJSTtFQUNJLHlCQUFBO0FBRFIiLCJmaWxlIjoiYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlclRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6I2NjM2UzZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuLmFydFN3aXBlciB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2LCAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICAgICAgICBjb2xvcjojRTAzMDMwICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "5zna":
/*!***************************************************!*\
  !*** ./src/app/screens/art/art-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ArtRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtRoutingModule", function() { return ArtRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_art_art_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/art/art.component */ "4nu+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_art_art_component__WEBPACK_IMPORTED_MODULE_1__["ArtComponent"]
    }
];
class ArtRoutingModule {
}
ArtRoutingModule.ɵfac = function ArtRoutingModule_Factory(t) { return new (t || ArtRoutingModule)(); };
ArtRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ArtRoutingModule });
ArtRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ArtRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-screens-art-art-module.js.map