(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~src-app-screens-art-art-module~src-app-screens-articles-articles-module~src-app-screens-cate~dbe990fd"],{

/***/ "Lm2G":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
  \*************************************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




// todo: split
/** Provides default values for Pagination and pager components */



const _c0 = function (a0, a1) { return { "pull-left": a0, "float-left": a1 }; };
const _c1 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
const _c2 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.selectPage(1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
} }
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.selectPage(ctx_r17.page - 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
} }
const _c3 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const pg_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectPage(pg_r19.number, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r19 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r2.disabled, pg_r19, ctx_r2.page));
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selectPage(ctx_r22.page + 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectPage(ctx_r24.totalPages, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
} }
function PaginationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const page_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r26.text);
} }
function PaginationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.getText("next"));
} }
function PaginationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.getText("previous"));
} }
function PaginationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getText("first"));
} }
function PaginationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.getText("last"));
} }
class PaginationConfig {
    constructor() {
        this.main = {
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
PaginationConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function PaginationConfig_Factory() { return new PaginationConfig(); }, token: PaginationConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PagerComponent),
    multi: true
};
class PagerComponent {
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** if `true` aligns each link to the sides of pager */
        this.align = false;
        /** if false first and last buttons will be hidden */
        this.boundaryLinks = false;
        /** if false previous and next buttons will be hidden */
        this.directionLinks = true;
        // labels
        /** first button text */
        this.firstText = 'First';
        /** previous button text */
        this.previousText = '« Previous';
        /** next button text */
        this.nextText = 'Next »';
        /** last button text */
        this.lastText = 'Last';
        /** if true current page will in the middle of pages list */
        this.rotate = true;
        // css
        /** add class to <code><li\></code> */
        this.pageBtnClass = '';
        /** if true pagination component will be disabled */
        this.disabled = false;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.classMap = '';
        this.inited = false;
        this._itemsPerPage = 15;
        this._totalItems = 0;
        this._totalPages = 0;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /** total number of items in all pages */
    get totalItems() {
        return this._totalItems;
    }
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
        return this._totalPages;
    }
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    get page() {
        return this._page;
    }
    set page(value) {
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        if (typeof this.maxSize === 'undefined') {
            this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
        }
        if (typeof this.rotate === 'undefined') {
            this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
        }
        if (typeof this.boundaryLinks === 'undefined') {
            this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
        }
        if (typeof this.directionLinks === 'undefined') {
            this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
        }
        if (typeof this.pageBtnClass === 'undefined') {
            this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
        }
        // base class
        if (typeof this.itemsPerPage === 'undefined') {
            this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
        }
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this[`${key}Text`] || this.config[`${key}Text`];
    }
    noPrevious() {
        return this.page === 1;
    }
    noNext() {
        return this.page === this.totalPages;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized && this.maxSize) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    calculateTotalPages() {
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["pager"]], inputs: { align: "align", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage(ctx.page - 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage(ctx.page + 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
PagerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PagerComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => PaginationComponent),
    multi: true
};
class PaginationComponent {
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** if `true` aligns each link to the sides of pager */
        this.align = true;
        /** if false first and last buttons will be hidden */
        this.boundaryLinks = false;
        /** if false previous and next buttons will be hidden */
        this.directionLinks = true;
        // labels
        /** first button text */
        this.firstText = 'First';
        /** previous button text */
        this.previousText = 'Previous';
        /** next button text */
        this.nextText = 'Next';
        /** last button text */
        this.lastText = 'Last';
        /** if true current page will in the middle of pages list */
        this.rotate = true;
        // css
        /** add class to <code><li\></code> */
        this.pageBtnClass = '';
        /** if true pagination component will be disabled */
        this.disabled = false;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.classMap = '';
        this.inited = false;
        this._itemsPerPage = 10;
        this._totalItems = 0;
        this._totalPages = 0;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /** total number of items in all pages */
    get totalItems() {
        return this._totalItems;
    }
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
        return this._totalPages;
    }
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    get page() {
        return this._page;
    }
    set page(value) {
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        if (typeof this.maxSize === 'undefined') {
            this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
        }
        if (typeof this.rotate === 'undefined') {
            this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
        }
        if (typeof this.boundaryLinks === 'undefined') {
            this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
        }
        if (typeof this.directionLinks === 'undefined') {
            this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
        }
        if (typeof this.pageBtnClass === 'undefined') {
            this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
        }
        // base class
        if (typeof this.itemsPerPage === 'undefined') {
            this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
        }
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this[`${key}Text`] || this.config[`${key}Text`];
    }
    noPrevious() {
        return this.page === 1;
    }
    noNext() {
        return this.page === this.totalPages;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized && this.maxSize) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    calculateTotalPages() {
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["pagination"]], inputs: { align: "align", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", customPageTemplate: "customPageTemplate", customNextTemplate: "customNextTemplate", customPreviousTemplate: "customPreviousTemplate", customFirstTemplate: "customFirstTemplate", customLastTemplate: "customLastTemplate" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 3, 7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 3, 7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 3, 10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 3, 7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
PaginationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PaginationComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customPageTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customNextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customPreviousTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customFirstTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customLastTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled && !pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext() || disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\n      </ng-container>\n    </a>\n  </li>\n</ul>\n\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\n\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\n\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\n\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\n\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPageTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customNextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPreviousTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customFirstTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customLastTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class PaginationModule {
    static forRoot() {
        return { ngModule: PaginationModule, providers: [] };
    }
}
PaginationModule.ɵfac = function PaginationModule_Factory(t) { return new (t || PaginationModule)(); };
PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: function () { return [PagerComponent, PaginationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [PagerComponent, PaginationComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-bootstrap-pagination.js.map

/***/ }),

/***/ "lWuh":
/*!***************************************************************!*\
  !*** ./src/app/screens/dashboard/services/artilce.service.ts ***!
  \***************************************************************/
/*! exports provided: ArtilceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtilceService", function() { return ArtilceService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ArtilceService {
    constructor(http) {
        this.http = http;
    }
    addArticle(value) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}post`, value);
    }
    getArticles(params) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}post`, { params });
    }
    articleById(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}post/${id}`);
    }
    deleteArticle(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}post/${id}`);
    }
    editArticle(id, value) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}post/${id}`, value);
    }
}
ArtilceService.ɵfac = function ArtilceService_Factory(t) { return new (t || ArtilceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ArtilceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ArtilceService, factory: ArtilceService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default~src-app-screens-art-art-module~src-app-screens-articles-articles-module~src-app-screens-cate~dbe990fd.js.map