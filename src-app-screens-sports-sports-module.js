(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-sports-sports-module"],{

/***/ "+Zz4":
/*!**********************************************************************!*\
  !*** ./src/app/screens/sports/components/sports/sports.component.ts ***!
  \**********************************************************************/
/*! exports provided: SportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsComponent", function() { return SportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_smallnavbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/smallnavbar.service */ "DBm8");
/* harmony import */ var src_app_screens_dashboard_services_live_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/screens/dashboard/services/live.service */ "XlhB");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-facebook */ "vEIf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_screens_dashboard_services_artilce_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/screens/dashboard/services/artilce.service */ "lWuh");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/screens/dashboard/services/addvertisment.service */ "cY7r");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
















function SportsComponent_div_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r17.areaone[0] == null ? null : ctx_r17.areaone[0].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r17.areaone[0] == null ? null : ctx_r17.areaone[0].image == null ? null : ctx_r17.areaone[0].image.file == null ? null : ctx_r17.areaone[0].image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_div_13_ng_container_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r20 == null ? null : item_r20.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r20 == null ? null : item_r20.image == null ? null : item_r20.image.file == null ? null : item_r20.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_div_13_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SportsComponent_div_13_ng_container_2_2_ng_template_0_Template, 2, 2, "ng-template", 24);
} }
const _c0 = function () { return { delay: 5000, disableOnInteraction: false }; };
const _c1 = function () { return { clickable: true }; };
function SportsComponent_div_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_div_13_ng_container_2_2_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true)("autoHeight", true)("allowTouchMove", false)("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("navigation", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.areaone);
} }
function SportsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_div_13_ng_container_1_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_div_13_ng_container_2_Template, 3, 9, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.areaone == null ? null : ctx_r0.areaone.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.areaone.length > 1);
} }
const _c2 = function () { return { width: "100%", height: "300px", "border-radius": "10px", margin: 0 }; };
function SportsComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function SportsComponent_ng_template_18_ng_container_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r24 == null ? null : item_r24.main == null ? null : item_r24.main.image == null ? null : item_r24.main.image.imageBigSize == null ? null : item_r24.main.image.imageBigSize.file == null ? null : item_r24.main.image.imageBigSize.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c3 = function (a1) { return ["/main/details", a1]; };
function SportsComponent_ng_template_18_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_ng_template_18_ng_container_1_img_2_Template, 1, 1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsComponent_ng_template_18_ng_container_1_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.sliderRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsComponent_ng_template_18_ng_container_1_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.sliderLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, item_r24 == null ? null : item_r24._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24 == null ? null : item_r24.show);
} }
function SportsComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_ng_template_18_ng_container_1_Template, 5, 4, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.newsSlider);
} }
function SportsComponent_ng_container_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fb-video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r31.live);
} }
function SportsComponent_ng_container_21_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r32.live)("height", 250)("width", 500);
} }
function SportsComponent_ng_container_21_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r33.live, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SportsComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_ng_container_21_div_2_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SportsComponent_ng_container_21_div_3_Template, 2, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SportsComponent_ng_container_21_div_4_Template, 1, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0628\u062B \u0645\u0628\u0627\u0634\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.liveType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.liveType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.liveType == 1);
} }
function SportsComponent_ng_template_22_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r35.areatwo[0] == null ? null : ctx_r35.areatwo[0].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r35.areatwo[0] == null ? null : ctx_r35.areatwo[0].image == null ? null : ctx_r35.areatwo[0].image.file == null ? null : ctx_r35.areatwo[0].image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_ng_template_22_div_0_ng_container_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r38 == null ? null : item_r38.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r38 == null ? null : item_r38.image == null ? null : item_r38.image.file == null ? null : item_r38.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_ng_template_22_div_0_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SportsComponent_ng_template_22_div_0_ng_container_2_2_ng_template_0_Template, 2, 2, "ng-template", 24);
} }
function SportsComponent_ng_template_22_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_ng_template_22_div_0_ng_container_2_2_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true)("autoHeight", true)("allowTouchMove", false)("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("navigation", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r36.areatwo);
} }
function SportsComponent_ng_template_22_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_ng_template_22_div_0_ng_container_1_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_ng_template_22_div_0_ng_container_2_Template, 3, 9, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r34.areatwo == null ? null : ctx_r34.areatwo.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.areatwo.length > 1);
} }
function SportsComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SportsComponent_ng_template_22_div_0_Template, 3, 2, "div", 4);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.areatwo == null ? null : ctx_r6.areatwo.length);
} }
const _c4 = function () { return { width: "100%", height: "10px", "margin-bottom": "10px" }; };
function SportsComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c4));
} }
function SportsComponent_ng_template_26_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, item_r42 == null ? null : item_r42._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 2, item_r42 == null ? null : item_r42.main == null ? null : item_r42.main.title, 0, 100), "... ");
} }
function SportsComponent_ng_template_26_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_ng_template_26_ng_container_0_div_1_Template, 5, 8, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r42 == null ? null : item_r42.show);
} }
function SportsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SportsComponent_ng_template_26_ng_container_0_Template, 2, 1, "ng-container", 16);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.newsSlider);
} }
function SportsComponent_div_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r45.areathree[0] == null ? null : ctx_r45.areathree[0].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r45.areathree[0] == null ? null : ctx_r45.areathree[0].image == null ? null : ctx_r45.areathree[0].image.file == null ? null : ctx_r45.areathree[0].image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_div_28_ng_container_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r48 == null ? null : item_r48.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r48 == null ? null : item_r48.image == null ? null : item_r48.image.file == null ? null : item_r48.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_div_28_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SportsComponent_div_28_ng_container_2_2_ng_template_0_Template, 2, 2, "ng-template", 24);
} }
function SportsComponent_div_28_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_div_28_ng_container_2_2_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true)("autoHeight", true)("allowTouchMove", false)("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("navigation", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.areathree);
} }
function SportsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_div_28_ng_container_1_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_div_28_ng_container_2_Template, 3, 9, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r10.areathree == null ? null : ctx_r10.areathree.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.areathree.length > 1);
} }
const _c5 = function () { return { width: "100%", height: "150px", "border-radius": "10px", margin: 0 }; };
function SportsComponent_ng_container_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c5));
} }
function SportsComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_ng_container_31_div_1_Template, 2, 2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.navBarService.loadingCount);
} }
function SportsComponent_ng_template_32_ng_container_0_div_1_ng_container_5_article_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", sub_r57 == null ? null : sub_r57.main == null ? null : sub_r57.main.image == null ? null : sub_r57.main.image.image == null ? null : sub_r57.main.image.image.file == null ? null : sub_r57.main.image.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", sub_r57 == null ? null : sub_r57.main == null ? null : sub_r57.main.title, "...");
} }
function SportsComponent_ng_template_32_ng_container_0_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_ng_template_32_ng_container_0_div_1_ng_container_5_article_2_Template, 4, 2, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, sub_r57 == null ? null : sub_r57._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r57 != null);
} }
const _c6 = function (a1, a3) { return ["/main/category/", a1, true, a3]; };
function SportsComponent_ng_template_32_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SportsComponent_ng_template_32_ng_container_0_div_1_ng_container_5_Template, 3, 4, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c6, item_r54 == null ? null : item_r54._id, item_r54 == null ? null : item_r54.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r54 == null ? null : item_r54.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r54 == null ? null : item_r54.posts);
} }
function SportsComponent_ng_template_32_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_ng_template_32_ng_container_0_div_1_Template, 6, 6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r54 == null ? null : item_r54.posts == null ? null : item_r54.posts.length);
} }
function SportsComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SportsComponent_ng_template_32_ng_container_0_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 1, ctx_r13.news, 0, 4));
} }
function SportsComponent_div_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r61.areafour[0] == null ? null : ctx_r61.areafour[0].link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r61.areafour[0] == null ? null : ctx_r61.areafour[0].image == null ? null : ctx_r61.areafour[0].image.file == null ? null : ctx_r61.areafour[0].image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_div_34_ng_container_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r64 == null ? null : item_r64.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r64 == null ? null : item_r64.image == null ? null : item_r64.image.file == null ? null : item_r64.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SportsComponent_div_34_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SportsComponent_div_34_ng_container_2_2_ng_template_0_Template, 2, 2, "ng-template", 24);
} }
function SportsComponent_div_34_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_div_34_ng_container_2_2_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loop", true)("autoHeight", true)("allowTouchMove", false)("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1))("navigation", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r62.areafour);
} }
function SportsComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_div_34_ng_container_1_Template, 3, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_div_34_ng_container_2_Template, 3, 9, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r14.areafour == null ? null : ctx_r14.areafour.length) == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.areafour.length > 1);
} }
function SportsComponent_ng_container_37_div_1_ng_container_5_article_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", sub_r70 == null ? null : sub_r70.main == null ? null : sub_r70.main.image == null ? null : sub_r70.main.image.image == null ? null : sub_r70.main.image.image.file == null ? null : sub_r70.main.image.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", sub_r70 == null ? null : sub_r70.main == null ? null : sub_r70.main.title, "...");
} }
function SportsComponent_ng_container_37_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SportsComponent_ng_container_37_div_1_ng_container_5_article_2_Template, 4, 2, "article", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, sub_r70 == null ? null : sub_r70._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r70 != null);
} }
function SportsComponent_ng_container_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SportsComponent_ng_container_37_div_1_ng_container_5_Template, 3, 4, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c6, item_r67 == null ? null : item_r67._id, item_r67 == null ? null : item_r67.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r67 == null ? null : item_r67.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r67 == null ? null : item_r67.posts);
} }
function SportsComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SportsComponent_ng_container_37_div_1_Template, 6, 6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r67 == null ? null : item_r67.posts == null ? null : item_r67.posts.length);
} }
function SportsComponent_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fb-video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r74.live);
} }
function SportsComponent_div_40_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r75.live)("height", 250)("width", 500);
} }
function SportsComponent_div_40_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 36);
} if (rf & 2) {
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r76.live, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function SportsComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SportsComponent_div_40_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r77.IframFixedClass = false; return ctx_r77.hideFixedIframe = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SportsComponent_div_40_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SportsComponent_div_40_div_4_Template, 2, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SportsComponent_div_40_div_5_Template, 1, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.liveType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.liveType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.liveType == 1);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_1__["Autoplay"]]);
class SportsComponent {
    constructor(navBarService, liveService, platformId, title, meta, cd, fb, sanitizer, activatedRoute, artileService, categoriesService, adsService) {
        this.navBarService = navBarService;
        this.liveService = liveService;
        this.platformId = platformId;
        this.title = title;
        this.meta = meta;
        this.cd = cd;
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.artileService = artileService;
        this.categoriesService = categoriesService;
        this.adsService = adsService;
        this.newsSliderIndex = -1;
        this.lastSlide = false;
        this.sportsLoading = true;
        this.news = [];
        this.live = "";
        this.IframFixedClass = false;
        this.hideFixedIframe = true;
        this.areaone = [];
        this.areatwo = [];
        this.areathree = [];
        this.areafour = [];
    }
    ngOnInit() {
        this.getLive();
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
                                            if (ads[i].seq[k] == 3)
                                                this.areathree.push(ads[i]);
                                            if (ads[i].seq[k] == 4)
                                                this.areafour.push(ads[i]);
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
            this.getCategoryById(params === null || params === void 0 ? void 0 : params.id);
            this.getCatSlider(params === null || params === void 0 ? void 0 : params.id);
        });
    }
    getCategoryById(id) {
        this.categoriesService.getCategoryById(id).subscribe((res) => {
            this.news = res === null || res === void 0 ? void 0 : res.subcategories;
            this.news = this.news.filter(i => { var _a; return (_a = i === null || i === void 0 ? void 0 : i.posts) === null || _a === void 0 ? void 0 : _a.length; });
            let metaData = res === null || res === void 0 ? void 0 : res.metaData;
            this.title.setTitle(metaData.title);
            this.meta.updateTag({ name: 'keywords', content: metaData.keywords });
            this.meta.updateTag({ name: 'description', content: metaData.desc });
            this.sportsLoading = false;
        });
    }
    setIntervall() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.intervall = setInterval(() => {
                var _a, _b;
                for (let i = 0; i < ((_a = this.newsSlider) === null || _a === void 0 ? void 0 : _a.length); i++)
                    this.newsSlider[i].show = false;
                this.newsSliderIndex++;
                if (this.newsSliderIndex == ((_b = this.newsSlider) === null || _b === void 0 ? void 0 : _b.length)) {
                    this.newsSliderIndex = 0;
                    this.lastSlide = true;
                }
                else {
                    this.lastSlide = false;
                }
                this.newsSlider[this.newsSliderIndex].show = true;
            }, 5000);
        }
    }
    sliderLeft() {
        var _a, _b, _c;
        clearInterval(this.intervall);
        for (let i = 0; i < ((_a = this.newsSlider) === null || _a === void 0 ? void 0 : _a.length); i++)
            this.newsSlider[i].show = false;
        if (this.newsSliderIndex == 0)
            this.newsSliderIndex = ((_b = this.newsSlider) === null || _b === void 0 ? void 0 : _b.length) - 1;
        else if (this.lastSlide)
            this.newsSliderIndex = ((_c = this.newsSlider) === null || _c === void 0 ? void 0 : _c.length) - 2;
        else
            this.newsSliderIndex -= 1;
        this.newsSlider[this.newsSliderIndex].show = true;
        this.setIntervall();
    }
    sliderRight() {
        var _a, _b;
        clearInterval(this.intervall);
        for (let i = 0; i < ((_a = this.newsSlider) === null || _a === void 0 ? void 0 : _a.length); i++)
            this.newsSlider[i].show = false;
        if (this.newsSliderIndex == ((_b = this.newsSlider) === null || _b === void 0 ? void 0 : _b.length) - 1)
            this.newsSliderIndex = 0;
        else
            this.newsSliderIndex += 1;
        this.newsSlider[this.newsSliderIndex].show = true;
        this.setIntervall();
    }
    getLive() {
        this.liveService.getLive().subscribe((res) => {
            var _a, _b, _c;
            if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.length) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
                    this.live = (_b = res === null || res === void 0 ? void 0 : res.data[0]) === null || _b === void 0 ? void 0 : _b.url.trim();
                    if (((_c = this.live) === null || _c === void 0 ? void 0 : _c.length) < 20)
                        this.liveType = 0;
                    else if (this.live.includes('<blockquote'))
                        this.liveType = 1;
                    else
                        this.liveType = 2;
                    let initParams = {
                        xfbml: true,
                        version: 'v2.8'
                    };
                    setTimeout((() => this.fb.init(initParams)), 200);
                    setTimeout((() => twttr.widgets.load()), 200);
                }
                else {
                    this.live = '';
                }
            }
        }, err => {
        });
    }
    onScroll(event) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            if (window.scrollY > 700 && this.IframFixedClass == false && this.live) {
                this.IframFixedClass = true;
                let initParams = {
                    xfbml: true,
                    version: 'v2.8'
                };
                setTimeout((() => this.fb.init(initParams)), 200);
                setTimeout((() => twttr.widgets.load()), 200);
            }
            if (window.scrollY < 700) {
                this.IframFixedClass = false;
                this.hideFixedIframe = true;
            }
        }
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
            this.newsSlider = res === null || res === void 0 ? void 0 : res.data;
            if ((_a = this.newsSlider) === null || _a === void 0 ? void 0 : _a.length) {
                for (let i = 0; i < ((_b = this.newsSlider) === null || _b === void 0 ? void 0 : _b.length); i++) {
                    this.newsSlider[i].show = false;
                }
                this.setIntervall();
            }
        });
    }
    ngOnDestroy() {
    }
}
SportsComponent.ɵfac = function SportsComponent_Factory(t) { return new (t || SportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_smallnavbar_service__WEBPACK_IMPORTED_MODULE_3__["SmallnavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_live_service__WEBPACK_IMPORTED_MODULE_4__["LiveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_facebook__WEBPACK_IMPORTED_MODULE_6__["FacebookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_artilce_service__WEBPACK_IMPORTED_MODULE_8__["ArtilceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_dashboard_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_10__["AddvertismentService"])); };
SportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportsComponent, selectors: [["app-sports"]], hostBindings: function SportsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SportsComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 41, vars: 16, consts: [[1, "breadCrumbb", "d-flex", "mb-5", "p-2", "list-unstyled"], ["routerLink", "/main/home"], [1, "pageTitle", "mb-5"], [1, "title"], ["class", "advertisment mb-4", 4, "ngIf"], [1, "sportsPage", "pb-3", 2, "min-height", "100vh"], [1, "row"], [1, "order-2", "order-md-1", "col-md-7", "mb-4"], [4, "ngIf", "ngIfElse"], ["swiperImages", ""], [1, "order-1", "order-md-2", "col-md-5", "mb-4"], ["noLive", ""], [1, "swiperTitleSection", "mb-4"], ["swiperTitle", ""], [1, "news"], ["articles", ""], [4, "ngFor", "ngForOf"], [1, "d-none", "d-lg-block"], ["style", "position: fixed;bottom: 100px;left: 100px;width: 300px;height: 200px;z-index:1111111111111111;overflow: auto;", "class", "fixed-ifram", 4, "ngIf"], [1, "advertisment", "mb-4"], [4, "ngIf"], ["target", "_blank", 3, "href"], [2, "max-height", "150px", "width", "100%", "object-fit", "contain", 3, "src"], [1, "", 3, "loop", "autoHeight", "allowTouchMove", "autoplay", "pagination", "navigation"], ["data-swiper-autoplay", "6000", "swiperSlide", ""], ["count", "1", "appearance", "circle", 3, "theme"], [1, "newsImages", "autoSlider", "position-relative"], ["aria-label", "Eltimes EG article details", 3, "routerLink"], ["alt", "", 3, "src", 4, "ngIf"], [1, "fas", "fa-chevron-right", "right", 3, "click"], [1, "fas", "fa-chevron-left", "left", 3, "click"], ["alt", "", 3, "src"], [2, "height", "300px", "overflow", "auto"], [3, "innerHtml", 4, "ngIf"], [1, "bg-danger", "text-white", "text-center", "p-3"], ["suggestedQuality", "highres", 3, "videoId", "height", "width"], [3, "innerHtml"], ["count", "3", 3, "theme"], ["style", "height: 300px;overflow: hidden;", "class", "swiperTitle mb-4 d-flex align-items-center py-4", 4, "ngIf"], [1, "swiperTitle", "mb-4", "d-flex", "align-items-center", "py-4", 2, "height", "300px", "overflow", "hidden"], [2, "color", "white", 3, "routerLink"], [2, "line-height", "40px"], ["class", "col-sm-6  col-md-3 mb-4", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-3", "mb-4"], ["class", "col-sm-6  col-md-3 mb-4", 4, "ngIf"], [3, "routerLink"], ["alt", "\u062A\u0627\u064A\u0645\u0632 eg \u0631\u064A\u0627\u0636\u0629", 1, "w-100", 3, "src"], [1, "fixed-ifram", 2, "position", "fixed", "bottom", "100px", "left", "100px", "width", "300px", "height", "200px", "z-index", "1111111111111111", "overflow", "auto"], [2, "background-color", "rgba(0,0,0,.5)", "padding", "10px"], [1, "fas", "fa-times", "text-white", 2, "cursor", "pointer", 3, "click"]], template: function SportsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0631\u064A\u0627\u0636\u0629 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0631\u064A\u0627\u0636\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SportsComponent_div_13_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SportsComponent_ng_container_17_Template, 2, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SportsComponent_ng_template_18_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SportsComponent_ng_container_21_Template, 7, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SportsComponent_ng_template_22_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SportsComponent_ng_container_25_Template, 2, 2, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SportsComponent_ng_template_26_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SportsComponent_div_28_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SportsComponent_ng_container_31_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SportsComponent_ng_template_32_Template, 2, 5, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SportsComponent_div_34_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SportsComponent_ng_container_37_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SportsComponent_div_40_Template, 6, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areaone == null ? null : ctx.areaone.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sportsLoading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.live)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sportsLoading)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areathree == null ? null : ctx.areathree.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sportsLoading)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.areafour == null ? null : ctx.areafour.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 13, ctx.news, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.IframFixedClass && ctx.hideFixedIframe);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_11__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_11__["SwiperSlideDirective"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_12__["NgxSkeletonLoaderComponent"], ngx_facebook__WEBPACK_IMPORTED_MODULE_6__["FBVideoComponent"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_13__["YouTubePlayer"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".swiper-button-prev,   .swiper-button-next {\n  color: #E03030 !important;\n}\n\n.sportsPage[_ngcontent-%COMP%]   .swiperTitle[_ngcontent-%COMP%] {\n  background-color: #54B100;\n}\n\n.sportsPage[_ngcontent-%COMP%]   .swiperTitle[_ngcontent-%COMP%]::after {\n  background: #1C3407;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0FBQVI7O0FBS0k7RUFDSSx5QkFBQTtBQUZSOztBQUdRO0VBQ0ksbUJBQUE7QUFEWiIsImZpbGUiOiJzcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xyXG4gICAgLnN3aXBlci1idXR0b24tcHJldiwgLnN3aXBlci1idXR0b24tbmV4dCB7XHJcbiAgICAgICAgY29sb3I6I0UwMzAzMCAhaW1wb3J0YW50XHJcbiAgICB9XHJcbn1cclxuLnNwb3J0c1BhZ2Uge1xyXG4gIFxyXG4gICAgLnN3aXBlclRpdGxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRCMTAwO1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFDMzQwNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "FUTm":
/*!*************************************************!*\
  !*** ./src/app/screens/sports/sports.module.ts ***!
  \*************************************************/
/*! exports provided: SportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsModule", function() { return SportsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sports_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sports-routing.module */ "wTR1");
/* harmony import */ var _components_sports_sports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sports/sports.component */ "+Zz4");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-skeleton-loader */ "xJkR");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-facebook */ "vEIf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");











class SportsModule {
}
SportsModule.ɵfac = function SportsModule_Factory(t) { return new (t || SportsModule)(); };
SportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SportsModule });
SportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _sports_routing_module__WEBPACK_IMPORTED_MODULE_1__["SportsRoutingModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SportsModule, { declarations: [_components_sports_sports_component__WEBPACK_IMPORTED_MODULE_2__["SportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sports_routing_module__WEBPACK_IMPORTED_MODULE_1__["SportsRoutingModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"],
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_4__["NgxSkeletonLoaderModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"], ngx_facebook__WEBPACK_IMPORTED_MODULE_7__["FacebookModule"]] }); })();


/***/ }),

/***/ "wTR1":
/*!*********************************************************!*\
  !*** ./src/app/screens/sports/sports-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsRoutingModule", function() { return SportsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sports_sports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sports/sports.component */ "+Zz4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _components_sports_sports_component__WEBPACK_IMPORTED_MODULE_1__["SportsComponent"]
    }
];
class SportsRoutingModule {
}
SportsRoutingModule.ɵfac = function SportsRoutingModule_Factory(t) { return new (t || SportsRoutingModule)(); };
SportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SportsRoutingModule });
SportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=src-app-screens-sports-sports-module.js.map