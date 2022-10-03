(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-screens-dashboard-dashboard-module"],{

/***/ "+72H":
/*!*****************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-user/add-user.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AddUserComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0628\u0631\u062C\u0627\u0621 \u0627\u062F\u062E\u0627\u0621 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddUserComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0628\u0631\u062C\u0627\u0621 \u0627\u062F\u062E\u0627\u0621 \u0628\u0631\u064A\u062F \u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0635\u0627\u0644\u062D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddUserComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0623\u062F\u0645\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddUserComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "8 \u062D\u0631\u0648\u0641 \u0627\u0648 \u0627\u0631\u0642\u0627\u0645 \u0639\u0644\u064A \u0627\u0644\u0627\u0642\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddUserComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0645\u0637\u0627\u0628\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddUserComponent_i_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
} }
function AddUserComponent_p_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r6.error));
} }
class AddUserComponent {
    constructor(fb, authservice, toastrService, router) {
        this.fb = fb;
        this.authservice = authservice;
        this.toastrService = toastrService;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.returnAddUserForm();
    }
    get FormControls() {
        return this.addUserForm.controls;
    }
    returnAddUserForm() {
        return this.addUserForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            repassword: [''],
        });
    }
    addUser(value) {
        if (this.addUserForm.valid) {
            this.loading = true;
            delete value.repassword;
            this.authservice.addUser(value).subscribe((res) => {
                this.loading = false;
                this.error = "";
                this.toastrService.success('تم اضافة مستخدم بنجاح');
                this.router.navigate(["/dashboard-page/main/users"]);
                console.log(res);
            }, err => {
                var _a;
                this.loading = false;
                this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
            });
        }
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 31, vars: 9, consts: [[1, "add-users"], [1, "mb-5"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4"], ["formControlName", "name", "type", "text", "placeholder", "\u0623\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", 1, "form-control"], ["class", "text-danger my-2", 4, "ngIf"], ["formControlName", "email", "type", "email", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control"], ["formControlName", "role", 1, "form-select"], ["value", "", "selected", ""], ["value", "6244d0f59f5f1e0c78ebbe52", 4, "ngIf"], ["value", "6244d11e9f5f1e0c78ebbe56"], ["value", "6244d13b9f5f1e0c78ebbe5a"], ["value", "6244d1599f5f1e0c78ebbe5e"], ["formControlName", "password", "type", "password", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", 1, "form-control"], ["formControlName", "repassword", "type", "password", "placeholder", "\u062A\u0627\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631  ", 1, "form-control"], [1, "btn", "btn-secondary", "mb-4", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "text-danger my-3", 4, "ngIf"], [1, "text-danger", "my-2"], ["value", "6244d0f59f5f1e0c78ebbe52"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "text-danger", "my-3"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0623\u0636\u0627\u0641\u0629 \u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddUserComponent_Template_form_ngSubmit_3_listener() { return ctx.addUser(ctx.addUserForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddUserComponent_p_6_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AddUserComponent_p_9_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0635\u0644\u0627\u062D\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AddUserComponent_option_14_Template, 2, 0, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0645\u0634\u0631\u0641");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0643\u0627\u062A\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0645\u062D\u0631\u0631");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AddUserComponent_p_23_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AddUserComponent_p_26_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u0623\u0646\u0634\u0627\u0621 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AddUserComponent_i_29_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddUserComponent_p_30_Template, 3, 3, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.FormControls == null ? null : ctx.FormControls.name == null ? null : ctx.FormControls.name.errors == null ? null : ctx.FormControls.name.errors.invalidContetn) && (ctx.FormControls == null ? null : ctx.FormControls.name == null ? null : ctx.FormControls.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx.FormControls == null ? null : ctx.FormControls.email == null ? null : ctx.FormControls.email.errors == null ? null : ctx.FormControls.email.errors.email) || (ctx.FormControls == null ? null : ctx.FormControls.email == null ? null : ctx.FormControls.email.errors == null ? null : ctx.FormControls.email.errors.required)) && (ctx.FormControls == null ? null : ctx.FormControls.email == null ? null : ctx.FormControls.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.authservice == null ? null : ctx.authservice.userProfile == null ? null : ctx.authservice.userProfile.role == null ? null : ctx.authservice.userProfile.role.type) == "admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx.FormControls == null ? null : ctx.FormControls.password == null ? null : ctx.FormControls.password.errors == null ? null : ctx.FormControls.password.errors.minlength) || (ctx.FormControls == null ? null : ctx.FormControls.password == null ? null : ctx.FormControls.password.errors == null ? null : ctx.FormControls.password.errors.required)) && (ctx.FormControls == null ? null : ctx.FormControls.password == null ? null : ctx.FormControls.password.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.FormControls == null ? null : ctx.FormControls.repassword == null ? null : ctx.FormControls.repassword.value) != (ctx.FormControls == null ? null : ctx.FormControls.password == null ? null : ctx.FormControls.password.value) && (ctx.FormControls == null ? null : ctx.FormControls.repassword == null ? null : ctx.FormControls.repassword.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addUserForm.invalid || (ctx.FormControls == null ? null : ctx.FormControls.repassword == null ? null : ctx.FormControls.repassword.value) != (ctx.FormControls == null ? null : ctx.FormControls.password == null ? null : ctx.FormControls.password.value) || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "+Cnu":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
  \*********************************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");





const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
const expandAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }))
];
const collapseAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }))
];

class CollapseDirective {
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** This event fires when collapsing is started */
        this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** This event fires as soon as content becomes visible */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** This event fires when expansion is started */
        this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /** turn on/off animation */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /** A flag indicating visibility of content (shown or hidden) */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    get collapse() {
        return this.isExpanded;
    }
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /** allows to manually toggle content visibility */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /** allows to manually hide content */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        });
    }
    /** allows to manually show collapsed content */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        });
    }
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (callback) => callback();
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (callback) => { var _a; return (_a = this._player) === null || _a === void 0 ? void 0 : _a.onDone(callback); };
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"])); };
CollapseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CollapseDirective, selectors: [["", "collapse", ""]], hostVars: 10, hostBindings: function CollapseDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
    } }, inputs: { isAnimated: "isAnimated", display: "display", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, exportAs: ["bs-collapse"] });
CollapseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }
];
CollapseDirective.propDecorators = {
    collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    collapses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expands: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.in',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-expanded',] }],
    isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-hidden',] }],
    isCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapse',] }],
    isCollapsing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapsing',] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    collapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.collapse]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }]; }, { collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], collapses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], expands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.in']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.show']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-expanded']
        }], isCollapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['attr.aria-hidden']
        }], isCollapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapse']
        }], isCollapsing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.collapsing']
        }], isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], collapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class CollapseModule {
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.ɵfac = function CollapseModule_Factory(t) { return new (t || CollapseModule)(); };
CollapseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CollapseModule });
CollapseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CollapseModule, { declarations: [CollapseDirective], exports: [CollapseDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollapseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-bootstrap-collapse.js.map

/***/ }),

/***/ "0yzQ":
/*!*****************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-file/add-file.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFileComponent", function() { return AddFileComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AddFileComponent_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 8);
} }
class AddFileComponent {
    constructor(fb, http, toastr, router) {
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.loading = false;
    }
    ngOnInit() {
        this.addFileForm = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    selectImage(event) {
        this.image = event.target.files[0];
    }
    addFile(value) {
        if (this.addFileForm.valid) {
            this.loading = true;
            let formdata = new FormData();
            formdata.append('title', value.title);
            formdata.append('file', this.image);
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}file`, formdata).subscribe(res => {
                console.log(res);
                this.toastr.success("تم");
                this.addFileForm.reset();
                this.loading = false;
            }, err => {
                console.log(err);
            });
        }
    }
}
AddFileComponent.ɵfac = function AddFileComponent_Factory(t) { return new (t || AddFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AddFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddFileComponent, selectors: [["app-add-file"]], decls: 13, vars: 3, consts: [[1, "add-category"], [1, "mb-5"], [3, "formGroup", "ngSubmit"], ["for", ""], ["type", "file", "formControlName", "image", 1, "form-control", "mb-3", 3, "change"], ["type", "text", "formControlName", "title", 1, "form-control", "mb-3"], [1, "btn", "btn-secondary", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"]], template: function AddFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0623\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0627\u0648 \u0641\u064A\u062F\u064A\u0648");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddFileComponent_Template_form_ngSubmit_3_listener() { return ctx.addFile(ctx.addFileForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0627\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0627\u0648 \u0641\u064A\u062F\u064A\u0648");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddFileComponent_Template_input_change_6_listener($event) { return ctx.selectImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0648 \u0641\u064A\u062F\u064A\u0648");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " \u062A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddFileComponent_i_12_Template, 1, 0, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addFileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.addFileForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "14CZ":
/*!*********************************************************************!*\
  !*** ./src/app/screens/dashboard/components/live/live.component.ts ***!
  \*********************************************************************/
/*! exports provided: LiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveComponent", function() { return LiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-facebook */ "vEIf");
/* harmony import */ var _services_live_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/live.service */ "XlhB");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");












function LiveComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
function LiveComponent_ng_template_1_ng_container_3_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function LiveComponent_ng_template_1_ng_container_3_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fb-video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r9.htmlContainer);
} }
function LiveComponent_ng_template_1_ng_container_3_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r10.htmlContainer)("height", 250)("width", 500);
} }
function LiveComponent_ng_template_1_ng_container_3_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r11.htmlContainer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function LiveComponent_ng_template_1_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LiveComponent_ng_template_1_ng_container_3_div_5_div_1_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LiveComponent_ng_template_1_ng_container_3_div_5_div_2_Template, 2, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LiveComponent_ng_template_1_ng_container_3_div_5_div_3_Template, 1, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.liveType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.liveType == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.liveType == 1);
} }
function LiveComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LiveComponent_ng_template_1_ng_container_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.deleteLive(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u062D\u0630\u0641 \u0627\u0644\u0628\u062B \u0627\u0644\u0645\u0628\u0627\u0634\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LiveComponent_ng_template_1_ng_container_3_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LiveComponent_ng_template_1_ng_container_3_div_5_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.deleteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.deleteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.htmlContainer);
} }
function LiveComponent_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u062B \u0645\u0628\u0627\u0634\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_ng_template_1_form_6_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LiveComponent_ng_template_1_form_6_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function LiveComponent_ng_template_1_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LiveComponent_ng_template_1_form_6_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.addLive(ctx_r16.AddLiveForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LiveComponent_ng_template_1_form_6_p_3_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0623\u0636\u0627\u0641\u0629 \u0628\u062B \u0645\u0628\u0627\u0634\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LiveComponent_ng_template_1_form_6_i_6_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.AddLiveForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r6.AddLiveForm.controls.url == null ? null : ctx_r6.AddLiveForm.controls.url.errors) != null && ctx_r6.AddLiveForm.controls.url.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.AddLiveForm.invalid || ctx_r6.addLiveLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.addLiveLoading);
} }
function LiveComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0628\u062B \u0627\u0644\u0645\u0628\u0627\u0634\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LiveComponent_ng_template_1_ng_container_3_Template, 6, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LiveComponent_ng_template_1_ng_template_4_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LiveComponent_ng_template_1_form_6_Template, 7, 4, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.htmlContainer)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.htmlContainer);
} }
class LiveComponent {
    constructor(fb, platformId, toastr, sanitizer, fbb, liveService) {
        this.fb = fb;
        this.platformId = platformId;
        this.toastr = toastr;
        this.sanitizer = sanitizer;
        this.fbb = fbb;
        this.liveService = liveService;
        this.loading = true;
        this.addLiveLoading = false;
        this.htmlContainer = "";
        this.deleteLoading = false;
    }
    ngOnInit() {
        this.AddLiveForm = this.fb.group({
            url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]]
        });
        this.getLive();
    }
    getLive() {
        this.loading = true;
        this.liveService.getLive().subscribe((res) => {
            var _a, _b, _c, _d;
            this.loading = false;
            console.log(res);
            if ((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.length) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
                    this.htmlContainer = (_b = res === null || res === void 0 ? void 0 : res.data[0]) === null || _b === void 0 ? void 0 : _b.url.trim();
                    if (((_c = this.htmlContainer) === null || _c === void 0 ? void 0 : _c.length) < 20)
                        this.liveType = 0;
                    else if (this.htmlContainer.includes('<blockquote'))
                        this.liveType = 1;
                    else
                        this.liveType = 2;
                    this.liveID = (_d = res === null || res === void 0 ? void 0 : res.data[0]) === null || _d === void 0 ? void 0 : _d._id;
                    let initParams = {
                        xfbml: true,
                        version: 'v2.8'
                    };
                    setTimeout((() => this.fbb.init(initParams)), 200);
                    setTimeout((() => twttr.widgets.load()), 200);
                }
            }
            else {
                this.htmlContainer = '';
            }
        }, err => {
            this.loading = false;
        });
    }
    addLive(formValue) {
        if (this.AddLiveForm.valid) {
            this.addLiveLoading = true;
            let formData = new FormData();
            formData.append("url", formValue.url.trim());
            this.liveService.addLive(formData).subscribe(res => {
                this.addLiveLoading = false;
                this.toastr.success("تم");
                this.AddLiveForm.reset();
                this.getLive();
            }, err => {
            });
        }
    }
    deleteLive() {
        this.deleteLoading = true;
        this.liveService.deleteLive(this.liveID).subscribe(res => {
            this.deleteLoading = false;
            this.toastr.success("تم");
            this.getLive();
        }, err => {
            this.deleteLoading = false;
        });
    }
    bypassSecurityTrustHtml(object) {
        if (object) {
            return this.sanitizer.bypassSecurityTrustHtml(object);
        }
    }
}
LiveComponent.ɵfac = function LiveComponent_Factory(t) { return new (t || LiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_facebook__WEBPACK_IMPORTED_MODULE_6__["FacebookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_live_service__WEBPACK_IMPORTED_MODULE_7__["LiveService"])); };
LiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LiveComponent, selectors: [["app-live"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "Live", "pb-5"], [1, "mb-5"], ["noLive", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "mb-2"], [1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["style", "width: 70%;margin:20px auto;", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], [2, "width", "70%", "margin", "20px auto"], [4, "ngIf"], [3, "innerHtml", 4, "ngIf"], ["suggestedQuality", "highres", 3, "videoId", "height", "width"], [3, "innerHtml"], [1, "py-4"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "url", 1, "form-control"], ["class", "text-danger py-2", 4, "ngIf"], [1, "mt-3", "btn", "btn-secondary", 3, "disabled"], [1, "text-danger", "py-2"]], template: function LiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LiveComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LiveComponent_ng_template_1_Template, 7, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_facebook__WEBPACK_IMPORTED_MODULE_6__["FBVideoComponent"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_8__["YouTubePlayer"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "51N/":
/*!***************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/writers/writers.component.ts ***!
  \***************************************************************************/
/*! exports provided: WritersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritersComponent", function() { return WritersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_writers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/writers.service */ "uGeA");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_writer_search_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/writer-search.pipe */ "L+Uw");







function WritersComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
function WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
} }
function WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.error);
} }
function WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u063A\u064A\u064A\u0631 \u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u062A\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r13.modalRef == null ? null : ctx_r13.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const writer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.editWriter({ name: _r10.value }, writer_r7 == null ? null : writer_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_i_11_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_p_12_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const writer_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", writer_r7 == null ? null : writer_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.error);
} }
function WritersComponent_ng_template_1_ng_container_10_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WritersComponent_ng_template_1_ng_container_10_li_2_ng_template_1_Template, 13, 3, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WritersComponent_ng_template_1_ng_container_10_li_2_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.openModal(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WritersComponent_ng_template_1_ng_container_10_li_2_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const writer_r7 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.deleteWriter(writer_r7 == null ? null : writer_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const writer_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", writer_r7 == null ? null : writer_r7.name, "");
} }
function WritersComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WritersComponent_ng_template_1_ng_container_10_li_2_Template, 6, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "writerSearch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r3.writers, ctx_r3.searchValue));
} }
function WritersComponent_ng_template_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0643\u062A\u0627\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WritersComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0643\u062A\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0627\u0636\u0627\u0641\u0629 \u0643\u0627\u062A\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WritersComponent_ng_template_1_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WritersComponent_ng_template_1_ng_container_10_Template, 4, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WritersComponent_ng_template_1_ng_template_11_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.writers == null ? null : ctx_r2.writers.length)("ngIfElse", _r4);
} }
class WritersComponent {
    constructor(writersService, modalService) {
        this.writersService = writersService;
        this.modalService = modalService;
        this.loading = true;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.getAllWriters();
    }
    getAllWriters() {
        this.writersService.getAllWriters().subscribe((res) => {
            this.loading = false;
            this.writers = res === null || res === void 0 ? void 0 : res.data;
            console.log(res);
        }, err => {
            this.loading = false;
        });
    }
    editWriter(obj, id) {
        if (obj.name.trim().length > 0) {
            this.loading = true;
            this.writersService.editWriter(obj, id).subscribe(res => {
                this.modalService.hide();
                this.getAllWriters();
            }, err => {
                var _a;
                this.loading = false;
                this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
            });
        }
    }
    deleteWriter(id) {
        this.loading = true;
        this.writersService.deleteWriter(id).subscribe(res => {
            this.getAllWriters();
        }, err => {
            this.loading = false;
            this.modalRef.hide();
        });
    }
}
WritersComponent.ɵfac = function WritersComponent_Factory(t) { return new (t || WritersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_writers_service__WEBPACK_IMPORTED_MODULE_1__["WritersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"])); };
WritersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WritersComponent, selectors: [["app-writers"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "categories"], [1, "mb-5"], [1, "d-sm-flex", "mb-5"], [1, "btn", "btn-secondary", "ms-2"], ["routerLink", "/dashboard-page/main/add-writer", 1, "text-white"], [1, "fas", "fa-plus"], ["type", "\u0628\u062D\u062B", "placeholder", "search", 1, "form-control", "my-2", "my-sm-0", 3, "ngModel", "ngModelChange"], ["noWriters", ""], [1, "writers"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], ["editWriterr", ""], [1, "far", "fa-edit", 3, "click"], [1, "far", "fa-trash-alt", "px-3", 3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], ["type", "text", 1, "form-control", "mb-3", 3, "value"], ["newWriterName", ""], [1, "btn", "btn-secondary", 3, "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "my-3 text-danger", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "my-3", "text-danger"], [1, "my-5"]], template: function WritersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WritersComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WritersComponent_ng_template_1_Template, 13, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_pipes_writer_search_pipe__WEBPACK_IMPORTED_MODULE_6__["WriterSearchPipe"]], styles: [".writers[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n  .modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHdyaXRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FBQVI7O0FBSUk7RUFDSSwrQ0FBQTtBQURSIiwiZmlsZSI6IndyaXRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JpdGVycyB7XHJcbiAgICBpIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAgIC5tb2RhbC1oZWFkZXIgLmJ0bi1jbG9zZSB7XHJcbiAgICAgICAgbWFyZ2luOiAtMC41cmVtIGF1dG8gLTAuNXJlbSAtMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "560U":
/*!***********************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-article/add-article.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddArticleComponent", function() { return AddArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-facebook */ "vEIf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_writers_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/writers.service */ "uGeA");
/* harmony import */ var _services_artilce_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/artilce.service */ "lWuh");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");




















const _c0 = ["articleTitleInput"];
const _c1 = ["articleContentInput"];
const _c2 = ["articleTitleInputForList"];
const _c3 = ["youtubeInput"];
const _c4 = ["fbVideoInput"];
const _c5 = ["fbImageInput"];
const _c6 = ["twitterInput"];
const _c7 = ["imageTitleInput"];
function AddArticleComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LOADING...........\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_li_13_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const item_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r30.currentContetnt = item_r29 == null ? null : item_r29.status; ctx_r30.updateListItem = -1; ctx_r30.updateMainContentItemIndex = -1; return ctx_r30.getImagesOnChange(item_r29 == null ? null : item_r29.status); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r3.currentContetnt == (item_r29 == null ? null : item_r29.status) ? "#FF4C3B" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r29 == null ? null : item_r29.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r29 == null ? null : item_r29.title, " ");
} }
function AddArticleComponent_section_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0642\u0631\u0629 (\u0623\u062E\u062A\u064A\u0627\u0631\u064A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0645\u062D\u062A\u0648\u064A \u0627\u0644\u0641\u0642\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_16_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.pragraphContent(_r32, _r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.updateMainContentItemIndex == -1 ? "\u0627\u0636\u0627\u0641\u0629" : "\u062A\u0639\u062F\u064A\u0644", " ");
} }
function AddArticleComponent_section_1_ng_container_17_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_17_li_12_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const i_r40 = ctx.index; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.deleteListItem(i_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_17_li_12_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const i_r40 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.editListItem(i_r40, _r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddArticleComponent_section_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0642\u0631\u0629 (\u0623\u062E\u062A\u064A\u0627\u0631\u064A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 49, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0627\u0644\u0642\u0627\u0626\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AddArticleComponent_section_1_ng_container_17_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.pragraphList(_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_17_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.pragraphList(_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0623\u0636\u0641 \u0627\u0644\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddArticleComponent_section_1_ng_container_17_li_12_Template, 6, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_17_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.addlistToContent(_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.articleList);
} }
function AddArticleComponent_section_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0641\u064A\u062F\u064A\u0648 \u0645\u0646 \u064A\u0648\u062A\u064A\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_18_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.addYoutubeVideo(_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.updateMainContentItemIndex == -1 ? "\u0627\u0636\u0627\u0641\u0629" : "\u062A\u0639\u062F\u064A\u0644", " ");
} }
function AddArticleComponent_section_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0641\u064A\u062F\u064A\u0648 \u0645\u0646 \u0641\u064A\u0633\u0633\u0628\u0648\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_19_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.addFacebookVideo(_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.updateMainContentItemIndex == -1 ? "\u0627\u0636\u0627\u0641\u0629" : "\u062A\u0639\u062F\u064A\u0644", " ");
} }
function AddArticleComponent_section_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0646\u0635 \u0627\u0648 \u0635\u0648\u0631\u0629 \u0645\u0646 \u0641\u064A\u0633\u0633\u0628\u0648\u0643 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.addFacebookImage(_r54); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.updateMainContentItemIndex == -1 ? "\u0627\u0636\u0627\u0641\u0629" : "\u062A\u0639\u062F\u064A\u0644", " ");
} }
function AddArticleComponent_section_1_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0645\u062D\u062A\u0648\u064A \u0645\u0646 \u062A\u0648\u064A\u062A\u0631 \u0627\u0648 \u0627\u0646\u0633\u062A\u062C\u0631\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_21_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.addtwitter(_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.updateMainContentItemIndex == -1 ? "\u0627\u0636\u0627\u0641\u0629" : "\u062A\u0639\u062F\u064A\u0644", " ");
} }
function AddArticleComponent_section_1_ng_container_22_div_2_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_22_div_2_div_1_div_7_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const colIndex_r66 = ctx.index; const rowsIndex_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r67.deleteColumn(rowsIndex_r63, colIndex_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colIndex_r66 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", colIndex_r66);
} }
function AddArticleComponent_section_1_ng_container_22_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_22_div_2_div_1_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const rowsIndex_r63 = ctx.index; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r70.deleteRow(rowsIndex_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddArticleComponent_section_1_ng_container_22_div_2_div_1_div_7_Template, 5, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_22_div_2_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const rowsIndex_r63 = ctx.index; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r72.addColumn(rowsIndex_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0627\u0636\u0627\u0641\u0629 \u0639\u0645\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowsIndex_r63 = ctx.index;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0627\u0644\u0635\u0641 \u0631\u0642\u0645 ", rowsIndex_r63 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", rowsIndex_r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r61.getColumns(rowsIndex_r63).controls);
} }
function AddArticleComponent_section_1_ng_container_22_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_ng_container_22_div_2_div_1_Template, 10, 3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_22_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r73.addRow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0623\u0636\u0627\u0641\u0629 \u0635\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r60.getRows().controls);
} }
function AddArticleComponent_section_1_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddArticleComponent_section_1_ng_container_22_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r75.submitTable(ctx_r75.tableForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddArticleComponent_section_1_ng_container_22_div_2_Template, 4, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r10.tableForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.getRows().controls == null ? null : ctx_r10.getRows().controls.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.tableForm.invalid);
} }
function AddArticleComponent_section_1_ng_container_23_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_23_div_8_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const item_r84 = ctx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r85.selectImage(item_r84 == null ? null : item_r84.file == null ? null : item_r84.file.src, item_r84 == null ? null : item_r84._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r84 == null ? null : item_r84.file == null ? null : item_r84.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_container_23_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_ng_container_23_div_8_div_1_Template, 3, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r79.allImages);
} }
function AddArticleComponent_section_1_ng_container_23_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading.....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_ng_container_23_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function AddArticleComponent_section_1_ng_container_23_div_11_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r87.pageChanged($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r81.totalCount)("maxSize", ctx_r81.maxSize);
} }
function AddArticleComponent_section_1_ng_container_23_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u064A \u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631\u0647\u0627 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r82.contentImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0648\u0631\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddArticleComponent_section_1_ng_container_23_Template_input_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r89.getPageOneOnBlur(_r78.value); })("keyup.enter", function AddArticleComponent_section_1_ng_container_23_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r91.searchImages(_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddArticleComponent_section_1_ng_container_23_div_8_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddArticleComponent_section_1_ng_container_23_p_9_Template, 2, 0, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddArticleComponent_section_1_ng_container_23_div_11_Template, 2, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddArticleComponent_section_1_ng_container_23_div_12_Template, 4, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_23_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r92.addImgaeToArtcleContent(_r77); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.totalCount > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.contentImageUrl);
} }
function AddArticleComponent_section_1_ng_container_24_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_24_div_4_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); const item_r99 = ctx.$implicit; const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r100.selectVideo(item_r99 == null ? null : item_r99.file == null ? null : item_r99.file.src, item_r99 == null ? null : item_r99._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r99 == null ? null : item_r99.file == null ? null : item_r99.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_container_24_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_ng_container_24_div_4_div_1_Template, 7, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r94.allvideos);
} }
function AddArticleComponent_section_1_ng_container_24_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading.....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_ng_container_24_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function AddArticleComponent_section_1_ng_container_24_div_7_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.videoPageChanged($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r96.totalCountVideos)("maxSize", ctx_r96.maxSize);
} }
function AddArticleComponent_section_1_ng_container_24_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0627\u0644\u0630\u064A \u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631\u0647 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "video", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "source", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r97.contentVideoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 107, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddArticleComponent_section_1_ng_container_24_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r104.getVideoOneOnBlur(_r93.value); })("keyup.enter", function AddArticleComponent_section_1_ng_container_24_Template_input_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r106.searchVideo(_r93); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddArticleComponent_section_1_ng_container_24_div_4_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddArticleComponent_section_1_ng_container_24_p_5_Template, 2, 0, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddArticleComponent_section_1_ng_container_24_div_7_Template, 2, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddArticleComponent_section_1_ng_container_24_div_8_Template, 6, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.videosLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.videosLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.totalCountVideos > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.contentVideoUrl);
} }
function AddArticleComponent_section_1_ng_container_25_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_25_div_4_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r115); const item_r113 = ctx.$implicit; const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r114.selectAlbumImage(item_r113 == null ? null : item_r113.file == null ? null : item_r113.file.src, item_r113 == null ? null : item_r113._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r113 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r113 == null ? null : item_r113.file == null ? null : item_r113.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_container_25_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_ng_container_25_div_4_div_1_Template, 3, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r108.allImages);
} }
function AddArticleComponent_section_1_ng_container_25_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading.....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_ng_container_25_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function AddArticleComponent_section_1_ng_container_25_div_7_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.pageChanged($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r110.totalCount)("maxSize", ctx_r110.maxSize);
} }
function AddArticleComponent_section_1_ng_container_25_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_25_div_8_div_4_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const i_r120 = ctx.index; const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r121.deleteSelectedAlbumImage(i_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r119 == null ? null : item_r119.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_container_25_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u062A\u064A \u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631\u0647\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddArticleComponent_section_1_ng_container_25_div_8_div_4_Template, 4, 1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r111.album);
} }
function AddArticleComponent_section_1_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddArticleComponent_section_1_ng_container_25_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r123.getPageOneOnBlur(_r107.value); })("keyup.enter", function AddArticleComponent_section_1_ng_container_25_Template_input_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r125.searchImages(_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddArticleComponent_section_1_ng_container_25_div_4_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddArticleComponent_section_1_ng_container_25_p_5_Template, 2, 0, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddArticleComponent_section_1_ng_container_25_div_7_Template, 2, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddArticleComponent_section_1_ng_container_25_div_8_Template, 5, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_container_25_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r126.doneAlbum(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.totalCount > 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.album == null ? null : ctx_r13.album.length);
} }
function AddArticleComponent_section_1_div_28_h2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 126);
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r127 == null ? null : item_r127.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddArticleComponent_section_1_div_28_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 127);
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r127 == null ? null : item_r127.desc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddArticleComponent_section_1_div_28_ul_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", li_r143, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddArticleComponent_section_1_div_28_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_div_28_ul_7_li_1_Template, 4, 1, "li", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r127 == null ? null : item_r127.ul);
} }
function AddArticleComponent_section_1_div_28_youtube_player_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "youtube-player", 134);
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", item_r127 == null ? null : item_r127.youtubeLink)("height", 250)("width", 500)("startSeconds", 0);
} }
function AddArticleComponent_section_1_div_28_fb_video_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fb-video");
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r127 == null ? null : item_r127.facebookVideoLink);
} }
function AddArticleComponent_section_1_div_28_fb_post_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fb-post");
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r127 == null ? null : item_r127.facebookImageLink);
} }
function AddArticleComponent_section_1_div_28_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 62);
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r127 == null ? null : item_r127.twitterOrInstagramHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddArticleComponent_section_1_div_28_table_13_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 62);
} if (rf & 2) {
    const item_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r152 == null ? null : item_r152.column, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddArticleComponent_section_1_div_28_table_13_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_div_28_table_13_tr_2_td_1_Template, 1, 1, "td", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r150 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r150);
} }
function AddArticleComponent_section_1_div_28_table_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddArticleComponent_section_1_div_28_table_13_tr_2_Template, 2, 1, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r127 == null ? null : item_r127.table);
} }
function AddArticleComponent_section_1_div_28_div_14_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 139);
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r127 == null ? null : item_r127.image == null ? null : item_r127.image.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AddArticleComponent_section_1_div_28_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddArticleComponent_section_1_div_28_div_14_p_2_Template, 1, 1, "p", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r127 == null ? null : item_r127.image == null ? null : item_r127.image.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.image == null ? null : item_r127.image.title);
} }
function AddArticleComponent_section_1_div_28_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r127 == null ? null : item_r127.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_div_28_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const albumImage_r159 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", albumImage_r159 == null ? null : albumImage_r159.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_div_28_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AddArticleComponent_section_1_div_28_div_16_div_2_Template, 3, 1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r127 == null ? null : item_r127.album);
} }
function AddArticleComponent_section_1_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_div_28_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r162); const i_r128 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r161.editMainContentItem(i_r128, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_div_28_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r162); const i_r128 = ctx.index; const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r163.deleteMainContentItem(i_r128); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddArticleComponent_section_1_div_28_h2_5_Template, 1, 1, "h2", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddArticleComponent_section_1_div_28_p_6_Template, 1, 1, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddArticleComponent_section_1_div_28_ul_7_Template, 2, 1, "ul", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddArticleComponent_section_1_div_28_youtube_player_8_Template, 1, 4, "youtube-player", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddArticleComponent_section_1_div_28_fb_video_9_Template, 1, 1, "fb-video", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddArticleComponent_section_1_div_28_fb_post_10_Template, 1, 1, "fb-post", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddArticleComponent_section_1_div_28_div_11_Template, 1, 1, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddArticleComponent_section_1_div_28_table_13_Template, 3, 1, "table", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddArticleComponent_section_1_div_28_div_14_Template, 3, 2, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddArticleComponent_section_1_div_28_div_15_Template, 4, 1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddArticleComponent_section_1_div_28_div_16_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r127 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.ul == null ? null : item_r127.ul.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.youtubeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.facebookVideoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.facebookImageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.twitterOrInstagramHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.table == null ? null : item_r127.table.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.image == null ? null : item_r127.image.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.videoFromHisDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r127 == null ? null : item_r127.album == null ? null : item_r127.album.length);
} }
function AddArticleComponent_section_1_li_39_Template(rf, ctx) { if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_li_39_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r167); const i_r165 = ctx.index; const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r166.deletekeyWordtem(i_r165); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r164 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r164, " ");
} }
function AddArticleComponent_section_1_ng_container_41_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r172 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r172 == null ? null : item_r172._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r172 == null ? null : item_r172.title);
} }
function AddArticleComponent_section_1_ng_container_41_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_ng_container_41_div_10_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r174 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r174 == null ? null : item_r174._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r174 == null ? null : item_r174.title);
} }
function AddArticleComponent_section_1_ng_container_41_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddArticleComponent_section_1_ng_container_41_div_10_option_6_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r171.subCategoriesSelectBox);
} }
function AddArticleComponent_section_1_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 144, 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddArticleComponent_section_1_ng_container_41_Template_select_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r176); const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r175.fillSubSelectBox(_r168); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddArticleComponent_section_1_ng_container_41_option_8_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddArticleComponent_section_1_ng_container_41_p_9_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddArticleComponent_section_1_ng_container_41_div_10_Template, 7, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.categoriesSelectBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r17.mainForm.controls.catId == null ? null : ctx_r17.mainForm.controls.catId.errors) != null && ctx_r17.mainForm.controls.catId.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.subCategoriesSelectBox == null ? null : ctx_r17.subCategoriesSelectBox.length);
} }
function AddArticleComponent_section_1_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r177 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r177 == null ? null : item_r177._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r177 == null ? null : item_r177.name);
} }
function AddArticleComponent_section_1_p_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u064A \u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631\u0647\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r21.mainSmallImage.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_template_81_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_template_81_div_9_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r185); const item_r183 = ctx.$implicit; const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r184.selectMainImageSmallSize(item_r183 == null ? null : item_r183.file == null ? null : item_r183.file.src, item_r183 == null ? null : item_r183._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r183 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r183 == null ? null : item_r183.file == null ? null : item_r183.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_template_81_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_ng_template_81_div_9_div_1_Template, 3, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r179.allImages);
} }
function AddArticleComponent_section_1_ng_template_81_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading.....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_ng_template_81_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function AddArticleComponent_section_1_ng_template_81_div_12_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r187); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r186.pageChanged($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r181.totalCount)("maxSize", ctx_r181.maxSize);
} }
function AddArticleComponent_section_1_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0623\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0645\u0642\u0627\u0633 \u0635\u063A\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_template_81_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r188.modalRef == null ? null : ctx_r188.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddArticleComponent_section_1_ng_template_81_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189); const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r190.getPageOneOnBlur(_r178.value); })("keyup.enter", function AddArticleComponent_section_1_ng_template_81_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189); const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r191.searchImages(_r178); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddArticleComponent_section_1_ng_template_81_div_9_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddArticleComponent_section_1_ng_template_81_p_10_Template, 2, 0, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddArticleComponent_section_1_ng_template_81_div_12_Template, 2, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r23.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.totalCount > 10);
} }
function AddArticleComponent_section_1_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u064A \u062A\u0645 \u0627\u062E\u062A\u064A\u0627\u0631\u0647\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r24.mainBigImage.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_template_88_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_template_88_div_9_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r199); const item_r197 = ctx.$implicit; const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r198.selectMainImageBigSize(item_r197 == null ? null : item_r197.file == null ? null : item_r197.file.src, item_r197 == null ? null : item_r197._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r197 == null ? null : item_r197.file == null ? null : item_r197.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AddArticleComponent_section_1_ng_template_88_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_ng_template_88_div_9_div_1_Template, 3, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r193.allImages);
} }
function AddArticleComponent_section_1_ng_template_88_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading.....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddArticleComponent_section_1_ng_template_88_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function AddArticleComponent_section_1_ng_template_88_div_12_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r201); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r200.pageChanged($event, _r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r195.totalCount)("maxSize", ctx_r195.maxSize);
} }
function AddArticleComponent_section_1_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    const _r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0623\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0645\u0642\u0627\u0633 \u0643\u0628\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_ng_template_88_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r202.modalRef == null ? null : ctx_r202.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 88, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AddArticleComponent_section_1_ng_template_88_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r204.getPageOneOnBlur(_r192.value); })("keyup.enter", function AddArticleComponent_section_1_ng_template_88_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r203); const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r205.searchImages(_r192); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddArticleComponent_section_1_ng_template_88_div_9_Template, 2, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddArticleComponent_section_1_ng_template_88_p_10_Template, 2, 0, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddArticleComponent_section_1_ng_template_88_div_12_Template, 2, 2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r26.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.totalCount > 10);
} }
function AddArticleComponent_section_1_i_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 155);
} }
function AddArticleComponent_section_1_p_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r28.error, " ");
} }
function AddArticleComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0641\u0642\u0631\u0627\u062A \u0627\u0644\u0645\u0642\u0627\u0644\u0629:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddArticleComponent_section_1_li_13_Template, 3, 5, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddArticleComponent_section_1_ng_container_16_Template, 11, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddArticleComponent_section_1_ng_container_17_Template, 15, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddArticleComponent_section_1_ng_container_18_Template, 7, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddArticleComponent_section_1_ng_container_19_Template, 7, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddArticleComponent_section_1_ng_container_20_Template, 7, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AddArticleComponent_section_1_ng_container_21_Template, 7, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddArticleComponent_section_1_ng_container_22_Template, 5, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddArticleComponent_section_1_ng_container_23_Template, 15, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddArticleComponent_section_1_ng_container_24_Template, 9, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddArticleComponent_section_1_ng_container_25_Template, 11, 4, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddArticleComponent_section_1_div_28_Template, 17, 11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0627\u0644\u0627\u0633\u0627\u0633\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0643\u0644\u0645\u0627\u062A \u062F\u0644\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function AddArticleComponent_section_1_Template_input_keyup_enter_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r206.addarticlekeys(_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r208.addarticlekeys(_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0627\u0636\u0641 \u0643\u0644\u0645\u0627\u062A \u062F\u0644\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddArticleComponent_section_1_li_39_Template, 3, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddArticleComponent_section_1_Template_form_ngSubmit_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r209.submitMainForm(ctx_r209.mainForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddArticleComponent_section_1_ng_container_41_Template, 11, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0644\u0644\u0645\u0642\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AddArticleComponent_section_1_p_46_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u062A\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0627\u062E\u062A\u0631 \u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u062A\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddArticleComponent_section_1_option_53_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AddArticleComponent_section_1_p_54_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u0638\u0647\u0648\u0631 \u0641\u064A \u0639\u0627\u062C\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u0638\u0647\u0648\u0631 \u0641\u064A \u0627\u062E\u0628\u0627\u0631 \u0644\u0627 \u062A\u0641\u0648\u062A\u0643 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " \u0638\u0647\u0648\u0631 \u0641\u064A \u0633\u0644\u0627\u064A\u062F\u0631 \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u0638\u0647\u0648\u0631 \u0641\u064A \u0633\u0644\u0627\u064A\u062F\u0631 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u0639\u0646\u0648\u0627\u0646 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_Template_button_click_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r210.openModal(_r22); return ctx_r210.getImages(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u0623\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0627\u0648 \u0635\u0648\u0631\u0629 \u0627\u0644\u0643\u0627\u062A\u0628 \u0645\u0642\u0627\u0633 \u0635\u063A\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, AddArticleComponent_section_1_div_79_Template, 4, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, AddArticleComponent_section_1_ng_template_81_Template, 13, 3, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddArticleComponent_section_1_Template_button_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r207); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](89); const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r211.openModal(_r25); return ctx_r211.getImages(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0623\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0645\u0642\u0627\u0633 \u0643\u0628\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, AddArticleComponent_section_1_div_86_Template, 4, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, AddArticleComponent_section_1_ng_template_88_Template, 13, 3, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Meta keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AddArticleComponent_section_1_i_104_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, AddArticleComponent_section_1_p_105_Template, 2, 1, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.articleId ? "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0629" : "\u0627\u0636\u0627\u0641\u0629 \u0645\u0642\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.linkExample);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tooles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "youtube");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "fbvideo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "fbimage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentContetnt == "album");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.articleContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.articleKeyWords);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.articleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.mainForm.controls.mainArticleTitle == null ? null : ctx_r1.mainForm.controls.mainArticleTitle.errors) != null && ctx_r1.mainForm.controls.mainArticleTitle.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.writers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.mainForm.controls.writerName == null ? null : ctx_r1.mainForm.controls.writerName.errors) != null && ctx_r1.mainForm.controls.writerName.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mainSmallImage.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mainBigImage.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.mainForm.invalid || !ctx_r1.mainBigImage.url || !(ctx_r1.mainSmallImage == null ? null : ctx_r1.mainSmallImage.url) || (ctx_r1.articleContent == null ? null : ctx_r1.articleContent.length) < 1 || ctx_r1.addArticleLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.articleId ? "\u062A\u0639\u062F\u064A\u0644" : "\u0627\u0636\u0627\u0641\u0629", " \u0627\u0644\u0645\u0642\u0627\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.addArticleLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.error);
} }
class AddArticleComponent {
    constructor(categoriesSerrvice, fb, modalService, toastr, router, sanitizer, authService, fbb, http, platformId, writersService, activatedRoute, articleservice, cd) {
        this.categoriesSerrvice = categoriesSerrvice;
        this.fb = fb;
        this.modalService = modalService;
        this.toastr = toastr;
        this.router = router;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.fbb = fbb;
        this.http = http;
        this.platformId = platformId;
        this.writersService = writersService;
        this.activatedRoute = activatedRoute;
        this.articleservice = articleservice;
        this.cd = cd;
        this.update = false;
        this.addArticleLoading = false;
        this.currentContetnt = 'text';
        this.articleContent = [];
        this.articleList = [];
        this.updateListItem = -1;
        this.updateMainContentItemIndex = -1;
        this.table = [];
        this.allImages = [];
        this.linkExample = '<a target="_blank" href="URL HERE" >TITLE HERE</a>';
        this.tooles = [
            {
                title: ' أضافة نص',
                icon: 'fas fa-file-alt',
                status: 'text'
            },
            {
                title: 'أضافة جدول',
                icon: 'fas fa-table',
                status: 'table'
            },
            {
                title: ' أضافة قائمة',
                icon: 'fas fa-list-ul',
                status: 'ul'
            },
            {
                title: 'أضافة صورة',
                icon: 'fas fa-image',
                status: 'image'
            },
            {
                title: 'أضافة فيديو',
                icon: 'fas fa-video',
                status: 'video'
            },
            {
                title: 'أضافة فيديو من يوتيوب',
                icon: 'fab fa-youtube',
                status: 'youtube'
            },
            {
                title: 'أضافة فيديو من فيسبوك',
                icon: 'fab fa-facebook-square',
                status: 'fbvideo'
            },
            {
                title: 'أضافة نص او صورة من فيسبوك',
                icon: 'fab fa-facebook-square',
                status: 'fbimage'
            },
            {
                title: '  أضافة محتوي من تويتر او انستجرام',
                icon: 'fab fa-twitter',
                status: 'twitter'
            },
            {
                title: 'أضافة ألبوم',
                icon: 'fas fa-images',
                status: 'album'
            },
        ];
        this.maxSize = 5;
        this.totalCount = 0;
        this.imagesLoading = true;
        this.album = [];
        this.articleKeyWords = [];
        this.mainArticleImage = '';
        this.mainArticleImageBigSize = '';
        this.categoriesSelectBox = [];
        this.subCategoriesSelectBox = [];
        this.mainBigImage = {
            id: "",
            url: ''
        };
        this.mainSmallImage = {
            id: "",
            url: ''
        };
        this.getArticleByIdLoading = true;
    }
    ngOnInit() {
        this.returnMainForm();
        this.tableForm = this.createTableForm('init');
        this.addRow();
        this.addColumn(0);
        this.getWriters();
        this.activatedRoute.queryParams.subscribe(params => {
            if (this.activatedRoute.snapshot.queryParams['id']) {
                console.log(params === null || params === void 0 ? void 0 : params.id);
                this.articleId = params === null || params === void 0 ? void 0 : params.id;
                this.mainForm.get('catId').clearValidators();
                this.mainForm.get('catId').updateValueAndValidity();
                this.articleservice.articleById(this.articleId).subscribe((res) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34;
                    console.log(res);
                    this.articleContent = res === null || res === void 0 ? void 0 : res.content;
                    for (let i = 0; i < ((_a = this.articleContent) === null || _a === void 0 ? void 0 : _a.length); i++) {
                        if ((_e = (_d = (_c = (_b = this.articleContent[i]) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.file) === null || _e === void 0 ? void 0 : _e.src) {
                            let obj = {
                                image: {
                                    title: (_g = (_f = this.articleContent[i]) === null || _f === void 0 ? void 0 : _f.image) === null || _g === void 0 ? void 0 : _g.title,
                                    image: (_k = (_j = (_h = this.articleContent[i]) === null || _h === void 0 ? void 0 : _h.image) === null || _j === void 0 ? void 0 : _j.image) === null || _k === void 0 ? void 0 : _k._id,
                                    url: (_p = (_o = (_m = (_l = this.articleContent[i]) === null || _l === void 0 ? void 0 : _l.image) === null || _m === void 0 ? void 0 : _m.image) === null || _o === void 0 ? void 0 : _o.file) === null || _p === void 0 ? void 0 : _p.src
                                }
                            };
                            this.articleContent[i] = obj;
                        }
                        if ((_s = (_r = (_q = this.articleContent[i]) === null || _q === void 0 ? void 0 : _q.videoFromHisDevice) === null || _r === void 0 ? void 0 : _r.file) === null || _s === void 0 ? void 0 : _s.src) {
                            let obj = {
                                videoFromHisDevice: (_u = (_t = this.articleContent[i]) === null || _t === void 0 ? void 0 : _t.videoFromHisDevice) === null || _u === void 0 ? void 0 : _u._id,
                                url: (_x = (_w = (_v = this.articleContent[i]) === null || _v === void 0 ? void 0 : _v.videoFromHisDevice) === null || _w === void 0 ? void 0 : _w.file) === null || _x === void 0 ? void 0 : _x.src
                            };
                            this.articleContent[i] = obj;
                        }
                        if (((_y = this.articleContent[i]) === null || _y === void 0 ? void 0 : _y.facebookVideoLink) || ((_z = this.articleContent[i]) === null || _z === void 0 ? void 0 : _z.facebookImageLink)) {
                            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
                                let initParams = {
                                    xfbml: true,
                                    version: 'v2.8'
                                };
                                setTimeout((() => this.fbb.init(initParams)), 200);
                            }
                        }
                        if ((_0 = this.articleContent[i]) === null || _0 === void 0 ? void 0 : _0.twitterOrInstagramHtml) {
                            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
                                setTimeout(() => {
                                    twttr.widgets.load();
                                    this.processEmbeddedInstagramPosts();
                                }, 200);
                            }
                        }
                        if ((_2 = (_1 = this.articleContent[i]) === null || _1 === void 0 ? void 0 : _1.album) === null || _2 === void 0 ? void 0 : _2.length) {
                            for (let j = 0; j < ((_4 = (_3 = this.articleContent[i]) === null || _3 === void 0 ? void 0 : _3.album) === null || _4 === void 0 ? void 0 : _4.length); j++) {
                                let obj = {
                                    id: (_6 = (_5 = this.articleContent[i]) === null || _5 === void 0 ? void 0 : _5.album[j]) === null || _6 === void 0 ? void 0 : _6._id,
                                    url: (_9 = (_8 = (_7 = this.articleContent[i]) === null || _7 === void 0 ? void 0 : _7.album[j]) === null || _8 === void 0 ? void 0 : _8.file) === null || _9 === void 0 ? void 0 : _9.src
                                };
                                this.album.push(obj);
                            }
                            this.articleContent[i].album = this.album;
                        }
                    }
                    console.log(this.articleContent);
                    this.articleKeyWords = res === null || res === void 0 ? void 0 : res.keywords;
                    this.mainSmallImage.url = (_13 = (_12 = (_11 = (_10 = res === null || res === void 0 ? void 0 : res.main) === null || _10 === void 0 ? void 0 : _10.image) === null || _11 === void 0 ? void 0 : _11.image) === null || _12 === void 0 ? void 0 : _12.file) === null || _13 === void 0 ? void 0 : _13.src;
                    this.mainSmallImage.id = (_16 = (_15 = (_14 = res === null || res === void 0 ? void 0 : res.main) === null || _14 === void 0 ? void 0 : _14.image) === null || _15 === void 0 ? void 0 : _15.image) === null || _16 === void 0 ? void 0 : _16._id;
                    this.mainBigImage.url = (_20 = (_19 = (_18 = (_17 = res === null || res === void 0 ? void 0 : res.main) === null || _17 === void 0 ? void 0 : _17.image) === null || _18 === void 0 ? void 0 : _18.imageBigSize) === null || _19 === void 0 ? void 0 : _19.file) === null || _20 === void 0 ? void 0 : _20.src;
                    this.mainBigImage.id = (_23 = (_22 = (_21 = res === null || res === void 0 ? void 0 : res.main) === null || _21 === void 0 ? void 0 : _21.image) === null || _22 === void 0 ? void 0 : _22.imageBigSize) === null || _23 === void 0 ? void 0 : _23._id;
                    this.mainForm.patchValue({
                        mainArticleTitle: (_24 = res === null || res === void 0 ? void 0 : res.main) === null || _24 === void 0 ? void 0 : _24.title,
                        writerName: (_25 = res === null || res === void 0 ? void 0 : res.writer) === null || _25 === void 0 ? void 0 : _25._id,
                        metaTitle: (_26 = res === null || res === void 0 ? void 0 : res.metaData) === null || _26 === void 0 ? void 0 : _26.title,
                        metaDesc: (_27 = res === null || res === void 0 ? void 0 : res.metaData) === null || _27 === void 0 ? void 0 : _27.desc,
                        metaKey: (_28 = res === null || res === void 0 ? void 0 : res.metaData) === null || _28 === void 0 ? void 0 : _28.keywords,
                        mainImageTitle: (_30 = (_29 = res === null || res === void 0 ? void 0 : res.main) === null || _29 === void 0 ? void 0 : _29.image) === null || _30 === void 0 ? void 0 : _30.title
                    });
                    if ((_31 = res === null || res === void 0 ? void 0 : res.categories) === null || _31 === void 0 ? void 0 : _31.length) {
                        this.mainForm.patchValue({
                            catId: res === null || res === void 0 ? void 0 : res.categories[0]._id
                        });
                    }
                    if ((_32 = res === null || res === void 0 ? void 0 : res.subcategories) === null || _32 === void 0 ? void 0 : _32.length) {
                        this.mainForm.patchValue({
                            subId: res === null || res === void 0 ? void 0 : res.subcategories[0]._id
                        });
                    }
                    if ((_33 = res === null || res === void 0 ? void 0 : res.positions) === null || _33 === void 0 ? void 0 : _33.length) {
                        for (let i = 0; i < ((_34 = res === null || res === void 0 ? void 0 : res.positions) === null || _34 === void 0 ? void 0 : _34.length); i++) {
                            if ((res === null || res === void 0 ? void 0 : res.positions[i]) == 'urgent') {
                                this.mainForm.patchValue({
                                    urgent: 'true'
                                });
                            }
                            else if ((res === null || res === void 0 ? void 0 : res.positions[i]) == 'homeSlider') {
                                this.mainForm.patchValue({
                                    homeSlider: 'true'
                                });
                            }
                            else if ((res === null || res === void 0 ? void 0 : res.positions[i]) == 'noMissIt') {
                                this.mainForm.patchValue({
                                    miss: 'true'
                                });
                            }
                            else if ((res === null || res === void 0 ? void 0 : res.positions[i]) == 'categorySlider') {
                                this.mainForm.patchValue({
                                    catSlider: 'true'
                                });
                            }
                        }
                    }
                    this.getArticleByIdLoading = false;
                });
            }
            else {
                this.getArticleByIdLoading = false;
                this.articleId = '';
                this.mainForm.get('catId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.mainForm.get('catId').updateValueAndValidity();
                this.categoriesSerrvice.getCategories().subscribe((res) => {
                    this.categoriesSelectBox = res === null || res === void 0 ? void 0 : res.data;
                });
            }
        });
    }
    getImagesOnChange(status) {
        if (status == 'image' || status == 'album')
            this.getImages(1);
        else if (status == 'video')
            this.getVideos(1);
    }
    selectMainImageBigSize(src, id) {
        this.mainBigImage.id = id;
        this.mainBigImage.url = src;
        this.modalService.hide();
    }
    selectMainImageSmallSize(src, id) {
        this.mainSmallImage.id = id;
        this.mainSmallImage.url = src;
        this.modalService.hide();
    }
    fillSubSelectBox(catSelectBox) {
        let item = this.categoriesSelectBox.filter(arrayItem => arrayItem._id == catSelectBox.value);
        this.subCategoriesSelectBox = item[0].subcategories;
    }
    getImages(page) {
        this.imagesLoading = true;
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}file?page=${page}&type=image&sort=createdAt:-1`).subscribe((res) => {
            console.log(res);
            this.allImages = res === null || res === void 0 ? void 0 : res.data;
            this.totalCount = res === null || res === void 0 ? void 0 : res.totalCount;
            this.imagesLoading = false;
        });
    }
    getPageOneOnBlur(value) {
        if (value.length == 0) {
            this.getImages(1);
        }
    }
    getVideoOneOnBlur(value) {
        if (value.length == 0) {
            this.getVideos(1);
        }
    }
    searchImages(input) {
        if (input.value && input.value.trim().length > 0) {
            this.imagesLoading = true;
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}file?limit=10000&type=image&keyword=${input.value}`).subscribe((res) => {
                console.log(res);
                this.allImages = res === null || res === void 0 ? void 0 : res.data;
                this.totalCount = 0;
                this.imagesLoading = false;
            });
        }
    }
    getWriters() {
        this.writersService.getAllWriters().subscribe((res) => {
            this.writers = res === null || res === void 0 ? void 0 : res.data;
        });
    }
    getVideos(page) {
        this.videosLoading = true;
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}file?page=${page}&type=video&sort=createdAt:-1`).subscribe((res) => {
            console.log(res);
            this.allvideos = res === null || res === void 0 ? void 0 : res.data;
            this.totalCountVideos = res === null || res === void 0 ? void 0 : res.totalCount;
            this.videosLoading = false;
        });
    }
    searchVideo(videoTitleInput) {
        if (videoTitleInput.value && videoTitleInput.value.trim().length > 0) {
            this.videosLoading = true;
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}file?limit=10000&type=video&keyword=${videoTitleInput.value}`).subscribe((res) => {
                console.log(res);
                this.allvideos = res === null || res === void 0 ? void 0 : res.data;
                this.totalCountVideos = 0;
                this.videosLoading = false;
            });
        }
    }
    pageChanged(event, el) {
        this.page = event.page;
        this.getImages(this.page);
    }
    videoPageChanged(event, el) {
        this.videosPage = event.page;
        this.getVideos(this.videosPage);
    }
    pragraphContent(title, content) {
        if ((content.value && content.value.trim().length > 0) || (title.value && title.value.trim().length > 0)) {
            let obj = {
                title: title.value,
                desc: content.value
            };
            if (this.updateMainContentItemIndex == -1)
                this.articleContent.push(obj);
            else
                this.articleContent[this.updateMainContentItemIndex] = obj;
            title.value = '';
            content.value = '';
            this.updateMainContentItemIndex = -1;
            console.log(this.articleContent);
        }
    }
    pragraphList(articleList) {
        if (articleList.value && articleList.value.trim().length > 0) {
            if (this.updateListItem == -1)
                this.articleList.push(articleList.value);
            else
                this.articleList[this.updateListItem] = articleList.value;
            articleList.value = '';
        }
    }
    addlistToContent(contentTitle) {
        var _a;
        if ((_a = this.articleList) === null || _a === void 0 ? void 0 : _a.length) {
            let obj = {
                ul: this.articleList,
                title: contentTitle.value
            };
            if (this.updateMainContentItemIndex == -1)
                this.articleContent.push(obj);
            else
                this.articleContent[this.updateMainContentItemIndex] = obj;
            this.articleList = [];
            contentTitle.value = '';
            this.updateListItem = -1;
            this.updateMainContentItemIndex = -1;
        }
    }
    deleteListItem(i) {
        this.articleList.splice(i, 1);
    }
    editListItem(i, articleListInput) {
        this.updateListItem = i;
        articleListInput.value = this.articleList[i];
    }
    addYoutubeVideo(youtubeLink) {
        if (this.updateMainContentItemIndex == -1)
            this.articleContent.push({ youtubeLink: youtubeLink.value });
        else
            this.articleContent[this.updateMainContentItemIndex] = { youtubeLink: youtubeLink.value };
        this.updateMainContentItemIndex = -1;
        youtubeLink.value = '';
    }
    addFacebookVideo(fbVideoInput) {
        if (this.updateMainContentItemIndex == -1)
            this.articleContent.push({ facebookVideoLink: fbVideoInput.value });
        else
            this.articleContent[this.updateMainContentItemIndex] = { facebookVideoLink: fbVideoInput.value };
        this.updateMainContentItemIndex = -1;
        fbVideoInput.value = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            let initParams = {
                xfbml: true,
                version: 'v2.8'
            };
            setTimeout((() => this.fbb.init(initParams)), 200);
        }
    }
    addFacebookImage(fbImageInput) {
        if (this.updateMainContentItemIndex == -1)
            this.articleContent.push({ facebookImageLink: fbImageInput.value });
        else
            this.articleContent[this.updateMainContentItemIndex] = { facebookImageLink: fbImageInput.value };
        this.updateMainContentItemIndex = -1;
        fbImageInput.value = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            let initParams = {
                xfbml: true,
                version: 'v2.8'
            };
            setTimeout((() => this.fbb.init(initParams)), 200);
        }
    }
    addtwitter(twitterInput) {
        if (this.updateMainContentItemIndex == -1)
            this.articleContent.push({ twitterOrInstagramHtml: twitterInput.value });
        else
            this.articleContent[this.updateMainContentItemIndex] = { twitterOrInstagramHtml: twitterInput.value };
        this.updateMainContentItemIndex = -1;
        twitterInput.value = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            setTimeout(() => {
                twttr.widgets.load();
                this.processEmbeddedInstagramPosts();
            }, 200);
        }
    }
    getRows() {
        return this.tableForm.get("rows");
    }
    addRow() {
        this.getRows().push(this.createTableForm('row'));
    }
    deleteRow(i) {
        if (this.getRows().controls.length > 1) {
            this.getRows().removeAt(i);
        }
        else {
            this.toastr.error("صف واحد علي الاقل");
        }
    }
    getColumns(i) {
        return this.getRows().at(i).get("row");
    }
    addColumn(i) {
        this.getColumns(i).push(this.createTableForm('column'));
    }
    deleteColumn(tableIndex, i) {
        if (this.getColumns(tableIndex).controls.length > 1) {
            this.getColumns(tableIndex).removeAt(i);
        }
    }
    submitTable(value) {
        if (this.tableForm.valid) {
            let arr = [];
            for (let i = 0; i < value.rows.length; i++) {
                arr.push(value.rows[i].row);
            }
            console.log(value);
            if (this.updateMainContentItemIndex == -1)
                this.articleContent.push({ table: arr });
            else
                this.articleContent[this.updateMainContentItemIndex] = { table: arr };
            this.getRows().clear();
            this.addRow();
            this.addColumn(0);
        }
    }
    createTableForm(itemType) {
        let formItem = this.fb.group({});
        switch (itemType) {
            case "init":
                formItem = this.fb.group({
                    rows: this.fb.array([]),
                });
                break;
            case 'row':
                formItem = this.fb.group({
                    row: this.fb.array([]),
                });
                break;
            case 'column':
                formItem = this.fb.group({
                    column: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
                });
                break;
        }
        return formItem;
    }
    selectImage(imageUrl, imageId) {
        this.contentImageUrl = imageUrl;
        this.contentImageID = imageId;
        this.toastr.success('تم اختيار الصورة');
    }
    selectVideo(videoUrl, videoId) {
        this.contentVideoUrl = videoUrl;
        this.contentVideoID = videoId;
        if (this.contentVideoID && this.contentVideoUrl) {
            let obj = {
                videoFromHisDevice: this.contentVideoID,
                url: this.contentVideoUrl
            };
            if (this.updateMainContentItemIndex == -1)
                this.articleContent.push(obj);
            else
                this.articleContent[this.updateMainContentItemIndex] = obj;
            this.contentVideoID = '';
            this.contentVideoUrl = '';
        }
        this.toastr.success('تم اختيار الفيديو');
    }
    addImgaeToArtcleContent(imageTitleInput) {
        if (this.contentImageID && this.contentImageUrl) {
            let obj = {
                image: {
                    title: imageTitleInput.value,
                    image: this.contentImageID,
                    url: this.contentImageUrl
                }
            };
            if (this.updateMainContentItemIndex == -1)
                this.articleContent.push(obj);
            else
                this.articleContent[this.updateMainContentItemIndex] = obj;
            imageTitleInput.value = '';
            this.contentImageID = '';
            this.contentImageUrl = '';
        }
    }
    selectAlbumImage(url, id) {
        let obj = {
            id,
            url
        };
        this.album.push(obj);
        this.toastr.success("تم اختيار الصورة");
    }
    deleteSelectedAlbumImage(i) {
        this.album.splice(i, 1);
    }
    doneAlbum() {
        var _a;
        if ((_a = this.album) === null || _a === void 0 ? void 0 : _a.length) {
            let obj = {
                album: Array.from(this.album)
            };
            if (this.updateMainContentItemIndex == -1)
                this.articleContent.push(obj);
            else
                this.articleContent[this.updateMainContentItemIndex] = obj;
            this.album = [];
            console.log(this.articleContent);
        }
    }
    deleteMainContentItem(i) {
        this.articleContent.splice(i, 1);
    }
    editMainContentItem(i, el) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        el.scrollIntoView();
        this.updateMainContentItemIndex = i;
        if ((_a = this.articleContent[i]) === null || _a === void 0 ? void 0 : _a.desc) {
            this.currentContetnt = 'text';
            this.cd.detectChanges();
            this.articleContentInput.nativeElement.value = (_b = this.articleContent[i]) === null || _b === void 0 ? void 0 : _b.desc;
            this.articleTitleInput.nativeElement.value = (_c = this.articleContent[i]) === null || _c === void 0 ? void 0 : _c.title;
        }
        else if ((_e = (_d = this.articleContent[i]) === null || _d === void 0 ? void 0 : _d.ul) === null || _e === void 0 ? void 0 : _e.length) {
            this.currentContetnt = 'ul';
            this.cd.detectChanges();
            this.articleList = (_f = this.articleContent[i]) === null || _f === void 0 ? void 0 : _f.ul;
            this.articleTitleInputForList.nativeElement.value = (_g = this.articleContent[i]) === null || _g === void 0 ? void 0 : _g.title;
        }
        else if ((_h = this.articleContent[i]) === null || _h === void 0 ? void 0 : _h.youtubeLink) {
            this.currentContetnt = 'youtube';
            this.cd.detectChanges();
            this.youtubeInput.nativeElement.value = (_j = this.articleContent[i]) === null || _j === void 0 ? void 0 : _j.youtubeLink;
        }
        else if ((_k = this.articleContent[i]) === null || _k === void 0 ? void 0 : _k.facebookVideoLink) {
            this.currentContetnt = 'fbvideo';
            this.cd.detectChanges();
            this.fbVideoInput.nativeElement.value = (_l = this.articleContent[i]) === null || _l === void 0 ? void 0 : _l.facebookVideoLink;
        }
        else if ((_m = this.articleContent[i]) === null || _m === void 0 ? void 0 : _m.facebookImageLink) {
            this.currentContetnt = 'fbimage';
            this.cd.detectChanges();
            this.fbImageInput.nativeElement.value = (_o = this.articleContent[i]) === null || _o === void 0 ? void 0 : _o.facebookImageLink;
        }
        else if ((_p = this.articleContent[i]) === null || _p === void 0 ? void 0 : _p.twitterOrInstagramHtml) {
            this.currentContetnt = 'twitter';
            this.cd.detectChanges();
            this.twitterInput.nativeElement.value = (_q = this.articleContent[i]) === null || _q === void 0 ? void 0 : _q.twitterOrInstagramHtml;
        }
        else if ((_s = (_r = this.articleContent[i]) === null || _r === void 0 ? void 0 : _r.image) === null || _s === void 0 ? void 0 : _s.image) {
            this.getImages(1);
            this.currentContetnt = 'image';
            this.cd.detectChanges();
            this.contentImageID = (_u = (_t = this.articleContent[i]) === null || _t === void 0 ? void 0 : _t.image) === null || _u === void 0 ? void 0 : _u.image;
            this.contentImageUrl = (_w = (_v = this.articleContent[i]) === null || _v === void 0 ? void 0 : _v.image) === null || _w === void 0 ? void 0 : _w.url;
            this.imageTitleInput.nativeElement.value = (_y = (_x = this.articleContent[i]) === null || _x === void 0 ? void 0 : _x.image) === null || _y === void 0 ? void 0 : _y.title;
        }
        else if ((_z = this.articleContent[i]) === null || _z === void 0 ? void 0 : _z.videoFromHisDevice) {
            this.getVideos(1);
            this.currentContetnt = 'video';
            this.cd.detectChanges();
            this.contentVideoID = (_0 = this.articleContent[i]) === null || _0 === void 0 ? void 0 : _0.videoFromHisDevice;
            this.contentVideoUrl = (_1 = this.articleContent[i]) === null || _1 === void 0 ? void 0 : _1.url;
        }
        else if ((_3 = (_2 = this.articleContent[i]) === null || _2 === void 0 ? void 0 : _2.album) === null || _3 === void 0 ? void 0 : _3.length) {
            this.getImages(1);
            this.currentContetnt = 'album';
            this.cd.detectChanges();
            this.album = Array.from((_4 = this.articleContent[i]) === null || _4 === void 0 ? void 0 : _4.album);
        }
        else if ((_6 = (_5 = this.articleContent[i]) === null || _5 === void 0 ? void 0 : _5.table) === null || _6 === void 0 ? void 0 : _6.length) {
            this.currentContetnt = 'table';
            this.cd.detectChanges();
            this.table = (_7 = this.articleContent[i]) === null || _7 === void 0 ? void 0 : _7.table;
            let frm = {
                rows: []
            };
            for (let j = 0; j < ((_8 = this.articleContent[i]) === null || _8 === void 0 ? void 0 : _8.table.length); j++) {
                let obj = { row: [] };
                obj.row = (_9 = this.articleContent[i]) === null || _9 === void 0 ? void 0 : _9.table[j];
                frm.rows.push(obj);
            }
            console.log(frm);
            this.getRows().clear();
            this.createTableForm('init');
            for (let i = 0; i < frm.rows.length; i++) {
                this.addRow();
                for (let j = 0; j < frm.rows[i].row.length; j++)
                    this.addColumn(i);
            }
            this.tableForm.patchValue(frm);
        }
    }
    processEmbeddedInstagramPosts() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            console.log("any");
            if (window['instgrm']) {
                instgrm.Embeds.process();
            }
        }
    }
    returnMainForm() {
        return this.mainForm = this.fb.group({
            catId: [''],
            subId: [''],
            urgent: [''],
            homeSlider: [''],
            miss: [''],
            catSlider: [''],
            mainArticleTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
            writerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mainImageTitle: [''],
            metaTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
            metaDesc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
            metaKey: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    deletekeyWordtem(i) {
        this.articleKeyWords.splice(i, 1);
    }
    addarticlekeys(articlekeysInput) {
        if (articlekeysInput.value && articlekeysInput.value.trim().length > 0) {
            this.articleKeyWords.push(articlekeysInput.value.trim());
            articlekeysInput.value = '';
        }
    }
    submitMainForm(value) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        if (this.mainForm.valid && this.mainSmallImage.url && this.mainBigImage.url && ((_a = this.articleContent) === null || _a === void 0 ? void 0 : _a.length)) {
            this.addArticleLoading = true;
            for (let i = 0; i < this.articleContent.length; i++) {
                if ((_c = (_b = this.articleContent[i]) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.image) {
                    (_e = (_d = this.articleContent[i]) === null || _d === void 0 ? void 0 : _d.image) === null || _e === void 0 ? true : delete _e.url;
                }
                else if ((_f = this.articleContent[i]) === null || _f === void 0 ? void 0 : _f.videoFromHisDevice) {
                    (_g = this.articleContent[i]) === null || _g === void 0 ? true : delete _g.url;
                }
                else if ((_j = (_h = this.articleContent[i]) === null || _h === void 0 ? void 0 : _h.album) === null || _j === void 0 ? void 0 : _j.length) {
                    for (let j = 0; j < ((_l = (_k = this.articleContent[i]) === null || _k === void 0 ? void 0 : _k.album) === null || _l === void 0 ? void 0 : _l.length); j++) {
                        this.articleContent[i].album[j] = (_m = this.articleContent[i]) === null || _m === void 0 ? void 0 : _m.album[j].id;
                    }
                }
            }
            let positions = [];
            if (value.urgent)
                positions.push('urgent');
            if (value.homeSlider)
                positions.push('homeSlider');
            if (value.miss)
                positions.push('noMissIt');
            if (value.catSlider)
                positions.push('categorySlider');
            let body = {
                main: {
                    title: value.mainArticleTitle,
                    image: {
                        title: value.mainImageTitle,
                    },
                },
                content: this.articleContent,
                writer: value.writerName,
                metaData: {
                    title: value.metaTitle,
                    desc: value.metaDesc,
                    keywords: value.metaKey
                },
                positions: positions
            };
            if (this.mainSmallImage.id)
                body.main.image.image = this.mainSmallImage.id;
            if (this.mainBigImage.id)
                body.main.image.imageBigSize = this.mainBigImage.id;
            if (value.catId)
                body.categories = [value.catId];
            if (value.subId)
                body.subcategories = [value.subId];
            if ((_o = this.mainBigImage) === null || _o === void 0 ? void 0 : _o.id)
                body.main.image.imgaeBigSize = (_p = this.mainBigImage) === null || _p === void 0 ? void 0 : _p.id;
            if ((_q = this.articleKeyWords) === null || _q === void 0 ? void 0 : _q.length)
                body.keywords = this.articleKeyWords;
            console.log(body);
            if (this.articleId) {
                this.articleservice.editArticle(this.articleId, body).subscribe(res => {
                    console.log(res);
                    this.addArticleLoading = false;
                    this.toastr.success('تم التعديل بنجاح');
                    this.router.navigate(["/dashboard-page/main/categories"]);
                }, err => {
                    var _a;
                    this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
                    this.addArticleLoading = false;
                });
            }
            else {
                this.articleservice.addArticle(body).subscribe(res => {
                    console.log(res);
                    this.addArticleLoading = false;
                    this.toastr.success('تم الاضافة بنجاح');
                    this.router.navigate(["/dashboard-page/main/categories"]);
                }, err => {
                    var _a;
                    this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
                    this.addArticleLoading = false;
                });
            }
        }
    }
}
AddArticleComponent.ɵfac = function AddArticleComponent_Factory(t) { return new (t || AddArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FacebookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_writers_service__WEBPACK_IMPORTED_MODULE_13__["WritersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artilce_service__WEBPACK_IMPORTED_MODULE_14__["ArtilceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AddArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddArticleComponent, selectors: [["app-add-article"]], viewQuery: function AddArticleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.articleTitleInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.articleContentInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.articleTitleInputForList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.youtubeInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fbVideoInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fbImageInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.twitterInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageTitleInput = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "text-center p-5", "style", "font-weight: bold;direction: ltr;", 4, "ngIf"], ["class", "add-category container-fluid", 4, "ngIf"], [1, "text-center", "p-5", 2, "font-weight", "bold", "direction", "ltr"], [1, "add-category", "container-fluid"], [1, "mb-5"], [1, "row", "article-content", "mb-5"], ["toolsElement", ""], [1, "col-12", "mb-3"], [1, "text-white", "my-2", "bg-secondary", "p-2", 2, "text-align", "left", "direction", "ltr"], [1, "col-md-4", "mb-3"], [1, "list-unstyled", "p-0"], ["style", "cursor: pointer;", 3, "color", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8", "mb-5"], [4, "ngIf"], [1, "col-12"], [1, "showContent"], ["class", "mb-4", 4, "ngFor", "ngForOf"], [1, "mb-4"], [1, "mb-3"], ["for", ""], ["type", "text", 1, "form-control", 3, "keyup.enter"], ["articlekeysInput", ""], ["type", "button", 1, "btn", "btn-secondary", "my-3", 3, "click"], [4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], ["formControlName", "mainArticleTitle", "type", "text", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "writerName", "aria-label", "Default select example", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-check"], ["formControlName", "urgent", "type", "checkbox", "value", "true", "id", "flexCheckDefault", 1, "form-check-input"], [1, "form-check-label"], ["formControlName", "miss", "type", "checkbox", "value", "true", "id", "flexCheckDefault", 1, "form-check-input"], ["formControlName", "homeSlider", "type", "checkbox", "value", "true", "id", "flexCheckDefault", 1, "form-check-input"], ["formControlName", "catSlider", "type", "checkbox", "value", "true", "id", "flexCheckDefault", 1, "form-check-input"], ["formControlName", "mainImageTitle", "type", "text", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", "mb-3", 3, "click"], ["class", "mb-3", 4, "ngIf"], ["mainImageSmallModal", ""], [1, "mb-3", 2, "max-height", "400px", "overflow", "auto"], ["mainImageBigModal", ""], ["formControlName", "metaTitle", "type", "text", 1, "form-control"], ["formControlName", "metaKey", "type", "text", 1, "form-control"], ["formControlName", "metaDesc", "name", "", "id", "", "cols", "30", "rows", "5", 1, "form-control"], [1, "btn", "btn-secondary", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "text-danger py-3", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["type", "text", "placeholder", "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0641\u0642\u0631\u0629", 1, "form-control", "mb-3"], ["articleTitleInput", ""], ["name", "", "placeholder", "\u0645\u062D\u062A\u0648\u064A \u0627\u0644\u0641\u0642\u0631\u0629", "id", "", "cols", "30", "rows", "10", 1, "form-control", "mb-3"], ["articleContentInput", ""], [1, "btn", "btn-secondary", 3, "click"], ["articleTitleInputForList", ""], ["type", "text", "placeholder", "\u0627\u0644\u0642\u0627\u0626\u0645\u0629", 1, "form-control", "mb-3", 3, "keyup.enter"], ["articleListInput", ""], [1, "btn", "btn-secondary", "mb-2", 3, "click"], [1, "mb-3", "p-0", "list-unstyled"], [1, "fas", "fa-trash", 2, "cursor", "pointer", 3, "click"], [1, "mx-2", "d-inline-block"], [1, "fas", "fa-edit", 2, "cursor", "pointer", 3, "click"], [3, "innerHtml"], ["type", "text", "placeholder", "\u0641\u064A\u062F\u064A\u0648 \u0645\u0646 \u064A\u0648\u062A\u064A\u0648\u0628", 1, "form-control", "mb-3"], ["youtubeInput", ""], ["type", "text", "placeholder", "\u0641\u064A\u062F\u064A\u0648 \u0645\u0646 \u0641\u064A\u0633\u0628\u0648\u0643", 1, "form-control", "mb-3"], ["fbVideoInput", ""], ["type", "text", "placeholder", "\u0646\u0635 \u0627\u0648 \u0635\u0648\u0631\u0629 \u0645\u0646 \u0641\u064A\u0633\u0628\u0648\u0643", 1, "form-control", "mb-3"], ["fbImageInput", ""], ["type", "text", "placeholder", "\u0645\u062D\u062A\u0648\u064A \u0645\u0646 \u062A\u0648\u064A\u062A\u0631 \u0627\u0648 \u0627\u0646\u0633\u062A\u062C\u0631\u0627\u0645", 1, "form-control", "mb-3"], ["twitterInput", ""], ["formArrayName", "rows", 4, "ngIf"], [1, "btn", "btn-secondary", "mt-3", "w-100", 3, "disabled"], ["formArrayName", "rows"], ["class", "mb-3", "style", "border: 1px solid rgb(216, 214, 214);border-radius: 10px;position: relative;padding: 20px;", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "mb-3", 2, "border", "1px solid rgb(216, 214, 214)", "border-radius", "10px", "position", "relative", "padding", "20px"], [1, "fas", "fa-times", "bg-secondary", "text-white", "p-2", "rounded", 2, "cursor", "pointer", 3, "click"], [1, "mx-2"], [3, "formGroupName"], ["formArrayName", "row", 1, ""], ["type", "button", 1, "btn", "btn-secondary", "mt-2", 3, "click"], [1, "d-flex", "align-items-center", "my-3", 3, "formGroupName"], [1, "fas", "fa-times", 2, "cursor", "pointer", 3, "click"], ["formControlName", "column", "type", "text", 1, "form-control"], [2, "height", "400px", "overflow", "auto"], ["type", "text", "placeholder", "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0635\u0648\u0631\u0629", 1, "form-control", "mb-3"], ["imageTitleInput", ""], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0635\u0648\u0631\u0629", 1, "form-control", "mb-3", 3, "keyup", "keyup.enter"], ["inputSearchForImage", ""], ["class", "row", 4, "ngIf"], ["style", "text-align:center;font-weight: bold;", 4, "ngIf"], [1, "row", 2, "text-align", "left", "direction", "ltr"], ["class", "col-xs-12 col-12", 4, "ngIf"], ["class", "my-3", 4, "ngIf"], [1, "btn", "w-100", "btn-secondary", 3, "click"], [1, "row"], ["class", "col-md-4 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-2"], [1, "text-center"], ["alt", "", 1, "img-fluid", 2, "height", "200px", "object-fit", "cover", "cursor", "pointer", 3, "src", "click"], [2, "text-align", "center", "font-weight", "bold"], [1, "col-xs-12", "col-12"], [3, "totalItems", "maxSize", "pageChanged"], [1, "my-3"], ["alt", "", 1, "img-fluid", 2, "height", "200px", "object-fit", "cover", 3, "src"], [2, "max-height", "400px", "overflow", "auto"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0641\u064A\u062F\u064A\u0648", 1, "form-control", "mb-3", 3, "keyup", "keyup.enter"], ["inputSearchForVideo", ""], ["controls", "", 2, "width", "100%", "height", "100px"], ["type", "video/mp4", 3, "src"], ["controls", "", 2, "width", "200px", "height", "100px"], [1, "btn", "btn-secondary", "w-100", "my-3", 3, "click"], ["class", "col-md-4 mb-3", 4, "ngFor", "ngForOf"], [2, "position", "relative"], [1, "fas", "fa-times", "bg-secondary", "text-white", "p-2", "mb-2", "rounded", 2, "cursor", "pointer", "position", "absolute", "top", "10px", "right", "10px", 3, "click"], [1, "mb-2"], [1, "d-inline-block", "mx-2"], ["style", "font-size: large;\n                    font-weight: 700;\n                    border-bottom: 1px solid #dcdcdc;\n                    padding-bottom: 5px;\n                    color: #de2323;", 3, "innerHtml", 4, "ngIf"], ["style", "text-align: justify;font-size: 18px;\n                    line-height: 1.9;", "class", "m-0 content", 3, "innerHtml", 4, "ngIf"], ["class", "list-unstyled p-0 m-0", 4, "ngIf"], ["suggestedQuality", "highres", 3, "videoId", "height", "width", "startSeconds", 4, "ngIf"], [3, "innerHtml", 4, "ngIf"], [2, "overflow", "auto"], ["class", "table table-bordered", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [2, "font-size", "large", "font-weight", "700", "border-bottom", "1px solid #dcdcdc", "padding-bottom", "5px", "color", "#de2323", 3, "innerHtml"], [1, "m-0", "content", 2, "text-align", "justify", "font-size", "18px", "line-height", "1.9", 3, "innerHtml"], [1, "list-unstyled", "p-0", "m-0"], ["style", "margin-bottom: 10px;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "10px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-dot", 2, "margin-top", "5px"], ["d", "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"], [2, "font-size", "18px", 3, "innerHtml"], ["suggestedQuality", "highres", 3, "videoId", "height", "width", "startSeconds"], [1, "table", "table-bordered"], [3, "innerHtml", 4, "ngFor", "ngForOf"], ["alt", "", 1, "img-fluid", 2, "max-height", "400px", "object-fit", "cover", 3, "src"], ["class", "m-0 text-center", 3, "innerHtml", 4, "ngIf"], [1, "m-0", "text-center", 3, "innerHtml"], ["height", "240", "controls", "", 2, "width", "100%"], ["class", "col-md-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-3"], ["alt", "", 2, "object-fit", "cover", "height", "300px", "width", "100%", 3, "src"], ["formControlName", "catId", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["catSelectBox", ""], [3, "value"], [1, "text-danger"], ["formControlName", "subId", "aria-label", "Default select example", 1, "form-select"], ["alt", "", 2, "height", "200px", "object-fit", "cover", "width", "200px", 3, "src"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body", 2, "max-height", "400px", "overflow", "auto"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "text-danger", "py-3"]], template: function AddArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddArticleComponent_p_0_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddArticleComponent_section_1_Template, 106, 26, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getArticleByIdLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getArticleByIdLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationComponent"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_16__["YouTubePlayer"], ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FBVideoComponent"], ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FBPostComponent"]], styles: [".article-content li {\n  margin-bottom: 15px;\n}\n  .article-content .content {\n  text-align: justify !important;\n}\n  .article-content .showContent a {\n  font-weight: bold !important;\n  color: #de2323 !important;\n  text-decoration: underline !important;\n}\n  .modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtRO0VBQ0ksbUJBQUE7QUFKWjtBQU1RO0VBQ0ksOEJBQUE7QUFKWjtBQU9ZO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0FBTGhCO0FBVUk7RUFDSSwrQ0FBQTtBQVJSIiwiZmlsZSI6ImFkZC1hcnRpY2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAgIC5hcnRpY2xlLWNvbnRlbnQge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaG93Q29udGVudCB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZGUyMzIzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAubW9kYWwtaGVhZGVyIC5idG4tY2xvc2Uge1xyXG4gICAgICAgIG1hcmdpbjogLTAuNXJlbSBhdXRvIC0wLjVyZW0gLTAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "60sm":
/*!**************************************************************!*\
  !*** ./src/app/screens/dashboard/pipes/table-filter.pipe.ts ***!
  \**************************************************************/
/*! exports provided: TableFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterPipe", function() { return TableFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TableFilterPipe {
    transform(users, value, searchValue) {
        if (!searchValue && value == -1)
            return users;
        if (searchValue)
            return users.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        else {
            if (value == "-1")
                return users;
            else
                return users.filter(item => (item === null || item === void 0 ? void 0 : item.role.type) == value);
        }
    }
}
TableFilterPipe.ɵfac = function TableFilterPipe_Factory(t) { return new (t || TableFilterPipe)(); };
TableFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "tableFilter", type: TableFilterPipe, pure: true });


/***/ }),

/***/ "6JcN":
/*!*************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/editor/editor.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function EditorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function EditorComponent_ng_template_1_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditorComponent_ng_template_1_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditorComponent_ng_template_1_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 15);
} }
function EditorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u062D\u0631\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditorComponent_ng_template_1_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.addEditor(ctx_r6.addEditorForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u0631\u0626\u064A\u0633 \u0645\u062C\u0644\u0633 \u0627\u0644\u0627\u062F\u0627\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, EditorComponent_ng_template_1_p_8_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u062D\u0631\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EditorComponent_ng_template_1_p_13_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditorComponent_ng_template_1_i_17_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.addEditorForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r2.addEditorForm.controls.chairmanOfBoardOfDirectors == null ? null : ctx_r2.addEditorForm.controls.chairmanOfBoardOfDirectors.errors) != null && ctx_r2.addEditorForm.controls.chairmanOfBoardOfDirectors.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r2.addEditorForm.controls.editor == null ? null : ctx_r2.addEditorForm.controls.editor.errors) != null && ctx_r2.addEditorForm.controls.editor.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.addEditorForm.invalid || ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.loading);
} }
class EditorComponent {
    constructor(fb, toastr, http) {
        this.fb = fb;
        this.toastr = toastr;
        this.http = http;
        this.loading = true;
    }
    ngOnInit() {
        this.addEditorForm = this.fb.group({
            chairmanOfBoardOfDirectors: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
            editor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]]
        });
        this.getNames();
    }
    addEditor(value) {
        if (this.addEditorForm.valid) {
            this.loading = true;
            this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}setting`, value).subscribe(res => {
                this.loading = false;
                console.log(res);
                this.getNames();
                this.toastr.success("تم");
            }, err => {
                this.loading = false;
                console.log(err);
            });
        }
    }
    getNames() {
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}setting`).subscribe((res) => {
            this.loading = false;
            console.log(res);
            this.addEditorForm.patchValue({
                chairmanOfBoardOfDirectors: res === null || res === void 0 ? void 0 : res.chairmanOfBoardOfDirectors,
                editor: res === null || res === void 0 ? void 0 : res.editor
            });
        }, err => {
            this.loading = false;
            console.log(err);
        });
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["Content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "add-category"], [1, "mt-5", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4"], [1, "mb-2"], ["formControlName", "chairmanOfBoardOfDirectors", "type", "text", "placeholder", "\u0631\u0626\u064A\u0633 \u0645\u062C\u0644\u0633 \u0627\u0644\u0627\u062F\u0627\u0631\u0629", 1, "form-control"], ["class", "my-2 text-danger", 4, "ngIf"], ["formControlName", "editor", "type", "text", "placeholder", "\u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u062D\u0631\u064A\u0631", 1, "form-control"], [1, "mt-5"], ["type", "submit", 1, "btn-secondary", "btn", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "my-2", "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditorComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditorComponent_ng_template_1_Template, 18, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "8LZc":
/*!*****************************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/dashboard-main/dashboard-main.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DashboardMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMainComponent", function() { return DashboardMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DashboardMainComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0636\u0627\u0641\u0629 \u0645\u0642\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0636\u0627\u0641\u0629 \u0635\u0648\u0631\u0629 \u0627\u0648 \u0641\u064A\u062F\u064A\u0648 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0627\u0644\u0628\u062B \u0627\u0644\u0645\u0628\u0627\u0634\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0627\u0633\u062A\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0644\u0631\u0627\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0631\u0626\u064A\u0633 \u0627\u0644\u062A\u062D\u0631\u064A\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0627\u0644\u0623\u0639\u0644\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062C\u0645\u064A\u0639 \u0627\u0644\u0643\u062A\u0627\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardMainComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardMainComponent_li_23_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.authService.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardMainComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
DashboardMainComponent.ɵfac = function DashboardMainComponent_Factory(t) { return new (t || DashboardMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
DashboardMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardMainComponent, selectors: [["app-dashboard-main"]], decls: 27, vars: 13, consts: [[1, "dashboard"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-3"], [1, "menu", "p-4", "sticky-top"], [1, "image", "text-center"], ["routerLink", "/", 1, "mb-2"], ["src", "assets/times.png", "alt", ""], [1, "text-secondary"], [1, "list-unstyled", "p-0", "mt-5"], [4, "ngIf"], [1, "col-12", "col-lg-9"], [1, "p-4", 2, "min-height", "100vh", "background-color", "#F8F8F8"], ["routerLink", "/dashboard-page/main/categories", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/add-article", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/add-file", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/live", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/users", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/question", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/editor", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/advertisment", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/writers", "routerLinkActive", "activeLink"], ["routerLink", "/dashboard-page/main/login", "routerLinkActive", "activeLink"], [3, "click"]], template: function DashboardMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DashboardMainComponent_li_13_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardMainComponent_li_14_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DashboardMainComponent_li_15_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardMainComponent_li_16_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardMainComponent_li_17_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardMainComponent_li_18_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardMainComponent_li_19_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardMainComponent_li_20_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardMainComponent_li_21_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardMainComponent_li_22_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DashboardMainComponent_li_23_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authService.userProfile == null ? null : ctx.authService.userProfile.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authService.userProfile == null ? null : ctx.authService.userProfile.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "writer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "writer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "admin" || (ctx.authService.userProfile == null ? null : ctx.authService.userProfile.role == null ? null : ctx.authService.userProfile.role.type) == "supervisor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.authService == null ? null : ctx.authService.isLogin()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService == null ? null : ctx.authService.isLogin());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".dashboard[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  background-color: #F8F8F8;\n}\n.dashboard[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.dashboard[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  cursor: pointer;\n}\n.dashboard[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 7px 0 0 0;\n  word-break: break-word;\n}\n.dashboard[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: black;\n  margin: 15px 0;\n  display: block;\n}\n.dashboard[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF4C3B !important;\n}\n.dashboard[_ngcontent-%COMP%]   .activeLink[_ngcontent-%COMP%] {\n  color: #FF4C3B !important;\n}\n@media only screen and (min-width: 992px) {\n  .dashboard[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    height: 100vh;\n    overflow: auto;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .dashboard[_ngcontent-%COMP%] {\n    background-color: #F8F8F8;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRhc2hib2FyZC1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0sseUJBQUE7QUFBVDtBQUNRO0VBQ0ksa0JBQUE7QUFDWjtBQUFZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFFaEI7QUFBWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUVoQjtBQUVRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFaO0FBQ1k7RUFDSSx5QkFBQTtBQUNoQjtBQUlJO0VBQWMseUJBQUE7QUFEbEI7QUFHQTtFQUVRO0lBQ0ssYUFBQTtJQUFjLGNBQUE7RUFBekI7QUFDRjtBQUdBO0VBQ0k7SUFDSSx5QkFBQTtFQUROO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkIHtcclxuICAgIC5tZW51IHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46N3B4IDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICB1bCB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrIDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNGRjRDM0IgIWltcG9ydGFudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmVMaW5rIHsgY29sb3I6I0ZGNEMzQiAhaW1wb3J0YW50fVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7b3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5kYXNoYm9hcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "A2ab":
/*!*****************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/category/category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var _pipes_search_category_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/search-category.pipe */ "iGyJ");










function CategoryComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
function CategoryComponent_ng_template_1_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0627\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
} }
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645 \u0648\u0645\u0627 \u064A\u062D\u062A\u0648\u064A\u0647 \u0645\u0646 \u0627\u0642\u0633\u0627\u0645 \u0641\u0631\u0639\u064A\u0629 \u0648\u0645\u0642\u0627\u0644\u0627\u062A \u061F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r16.modalRef == null ? null : ctx_r16.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r18.modalRef == null ? null : ctx_r18.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const category_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.deleteCategory(category_r8 == null ? null : category_r8._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_1_i_11_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r10.deleteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.deleteLoading);
} }
const _c0 = function (a0) { return { id: a0 }; };
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_7_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r21.openModal(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, category_r8 == null ? null : category_r8._id));
} }
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_container_3_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r29.openModal(_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, sub_r25 == null ? null : sub_r25._id));
} }
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_template_4_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
} }
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0645\u0633\u062D \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u064A \u0648\u0645\u0627 \u064A\u062D\u062A\u0648\u064A\u0647 \u0645\u0646 \u0645\u0642\u0627\u0644\u0627\u062A \u061F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_template_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r33.modalRef == null ? null : ctx_r33.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_template_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6); return ctx_r35.modalRef == null ? null : ctx_r35.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_template_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const sub_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r36.deleteSubCAt(sub_r25 == null ? null : sub_r25._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_template_4_i_11_Template, 1, 0, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r28.deleteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.deleteLoading);
} }
const _c1 = function (a1, a3) { return ["/dashboard-page/main/articles/", a1, true, a3]; };
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_container_3_Template, 3, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_ng_template_4_Template, 12, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, sub_r25 == null ? null : sub_r25._id, sub_r25 == null ? null : sub_r25.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r25 == null ? null : sub_r25.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r24.authService.userProfile == null ? null : ctx_r24.authService.userProfile.role == null ? null : ctx_r24.authService.userProfile.role.type) == "admin" || (ctx_r24.authService.userProfile == null ? null : ctx_r24.authService.userProfile.role == null ? null : ctx_r24.authService.userProfile.role.type) == "supervisor");
} }
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0627\u0642\u0633\u0627\u0645 \u0627\u0644\u0641\u0631\u0639\u064A\u0629 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_li_4_Template, 6, 6, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r8 == null ? null : category_r8.subcategories);
} }
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0642\u0633\u0627\u0645 \u0641\u0631\u0639\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1, a3) { return ["/dashboard-page/main/articles", a1, false, a3]; };
function CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "accordion-group", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_1_Template, 12, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0627\u0644\u0642\u0633\u0645 : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_7_Template, 3, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_container_8_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_ng_template_9_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", category_r8 == null ? null : category_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, category_r8 == null ? null : category_r8._id, category_r8 == null ? null : category_r8.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r8 == null ? null : category_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.authService.userProfile == null ? null : ctx_r7.authService.userProfile.role == null ? null : ctx_r7.authService.userProfile.role.type) == "admin" || (ctx_r7.authService.userProfile == null ? null : ctx_r7.authService.userProfile.role == null ? null : ctx_r7.authService.userProfile.role.type) == "supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r8 == null ? null : category_r8.subcategories == null ? null : category_r8.subcategories.length)("ngIfElse", _r13);
} }
function CategoryComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "accordion", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryComponent_ng_template_1_ng_container_7_accordion_group_2_Template, 11, 9, "accordion-group", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "searchCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r4.categories, ctx_r4.searchValue));
} }
function CategoryComponent_ng_template_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0642\u0633\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0627\u0642\u0633\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoryComponent_ng_template_1_button_4_Template, 4, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryComponent_ng_template_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CategoryComponent_ng_template_1_ng_container_7_Template, 4, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategoryComponent_ng_template_1_ng_template_8_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "admin" || (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categories == null ? null : ctx_r2.categories.length)("ngIfElse", _r5);
} }
class CategoryComponent {
    constructor(categoriesService, authService, modalService, toasterservice) {
        this.categoriesService = categoriesService;
        this.authService = authService;
        this.modalService = modalService;
        this.toasterservice = toasterservice;
        this.loading = true;
        this.deleteLoading = false;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.getCategoriesName();
    }
    getCategoriesName() {
        this.loading = true;
        this.categoriesService.getCategories().subscribe((categoriesNames) => {
            this.categories = categoriesNames.data;
            console.log(categoriesNames);
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }
    deleteCategory(id) {
        this.deleteLoading = true;
        this.categoriesService.deleteCategory(id).subscribe(res => {
            this.deleteLoading = false;
            this.getCategoriesName();
            this.modalRef.hide();
            this.toasterservice.success("تم الحذف بنجاح");
        }, err => {
            this.deleteLoading = false;
        });
    }
    deleteSubCAt(id) {
        this.deleteLoading = true;
        this.categoriesService.deleteSubCategory(id).subscribe(res => {
            this.deleteLoading = false;
            this.getCategoriesName();
            this.modalRef.hide();
            this.toasterservice.success("تم  بنجاح");
        }, err => {
            this.deleteLoading = false;
        });
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "categories"], [1, "mb-5"], [1, "d-sm-flex", "mb-2"], ["class", "btn btn-secondary ms-2", 4, "ngIf"], ["type", "\u0628\u062D\u062B", "placeholder", "search", 1, "form-control", "my-2", "my-sm-0", 3, "ngModel", "ngModelChange"], ["noCAtegories", ""], [1, "btn", "btn-secondary", "ms-2"], ["routerLink", "/dashboard-page/main/add-category", 1, "text-white"], [1, "fas", "fa-plus"], [3, "isAnimated"], ["class", "mb-2", 3, "heading", 4, "ngFor", "ngForOf"], [1, "mb-2", 3, "heading"], ["deleteCategoryModal", ""], [1, "d-inline-block", "ms-2", 3, "routerLink"], [4, "ngIf"], ["noSubs", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-secondary", "mx-3", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], ["routerLink", "/dashboard-page/main/add-category", 1, "far", "fa-edit", 3, "queryParams"], [1, "far", "fa-trash-alt", 3, "click"], [1, "subCategories", "list-unstyled", "p-2", "bg-light", "rounded"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "d-inline-block", "ms-3", 3, "routerLink"], ["deleteSub", ""], ["routerLink", "/dashboard-page/main/add-sub", 1, "far", "fa-edit", 3, "queryParams"], [1, "my-5"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryComponent_ng_template_1_Template, 10, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionPanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_pipes_search_category_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchCategoryPipe"]], styles: [".categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .categories[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n}\n.categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .categories[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #FF4C3B !important;\n}\n.categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n.categories[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:not(.fa-plus) {\n  margin-left: 10px;\n}\n  .modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUksZUFBQTtFQUNBLHFCQUFBO0FBRFI7QUFFUTtFQUNJLHlCQUFBO0FBQVo7QUFHSTtFQUFJLGdCQUFBO0FBQVI7QUFDSTtFQUFnQixpQkFBQTtBQUVwQjtBQUNJO0VBQ0ksK0NBQUE7QUFFUiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yaWVzIHtcclxuICAgIGEsaSB7XHJcbiAgICAgICBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjojRkY0QzNCICFpbXBvcnRhbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhIHsgbWluLXdpZHRoOiAxMDBweDt9XHJcbiAgICBpOm5vdCguZmEtcGx1cyl7bWFyZ2luLWxlZnQ6IDEwcHh9XHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAgIC5tb2RhbC1oZWFkZXIgLmJ0bi1jbG9zZSB7XHJcbiAgICAgICAgbWFyZ2luOiAtMC41cmVtIGF1dG8gLTAuNXJlbSAtMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "C6VX":
/*!*********************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-writer/add-writer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddWriterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWriterComponent", function() { return AddWriterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_writers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/writers.service */ "uGeA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddWriterComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddWriterComponent_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 11);
} }
function AddWriterComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
} }
class AddWriterComponent {
    constructor(fb, toastr, writeresService) {
        this.fb = fb;
        this.toastr = toastr;
        this.writeresService = writeresService;
        this.loading = false;
    }
    ngOnInit() {
        this.addWriterForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]]
        });
    }
    createWriter(value) {
        if (this.addWriterForm.valid) {
            this.loading = true;
            this.writeresService.addWriter(value).subscribe(res => {
                this.loading = false;
                this.error = '';
                this.toastr.success("تم الاضافة بنجاح");
                this.addWriterForm.reset();
            }, err => {
                var _a;
                this.loading = false;
                this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
            });
        }
    }
}
AddWriterComponent.ɵfac = function AddWriterComponent_Factory(t) { return new (t || AddWriterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_writers_service__WEBPACK_IMPORTED_MODULE_4__["WritersService"])); };
AddWriterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddWriterComponent, selectors: [["app-add-writer"]], decls: 14, vars: 5, consts: [[1, "add-category"], [1, "mt-5", 3, "formGroup", "ngSubmit"], [1, "form-group", "my-4"], ["for", "", 1, "mb-2"], ["formControlName", "name", "type", "text", 1, "form-control"], ["class", "my-2 text-danger", 4, "ngIf"], [1, "mt-5"], ["type", "submit", 1, "btn-secondary", "btn", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "my-3 text-danger", 4, "ngIf"], [1, "my-2", "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "my-3", "text-danger"]], template: function AddWriterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0623\u0636\u0627\u0641\u0629 \u0643\u0627\u062A\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddWriterComponent_Template_form_ngSubmit_3_listener() { return ctx.createWriter(ctx.addWriterForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u062A\u0628");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddWriterComponent_p_8_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u062A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AddWriterComponent_i_12_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AddWriterComponent_p_13_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.addWriterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.addWriterForm.controls.name == null ? null : ctx.addWriterForm.controls.name.errors) != null && ctx.addWriterForm.controls.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.addWriterForm.invalid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtd3JpdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "C6cR":
/*!***************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-sub/add-sub.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddSubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubComponent", function() { return AddSubComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AddSubComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AddSubComponent_ng_template_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddSubComponent_ng_template_1_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r10 == null ? null : item_r10._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.title);
} }
function AddSubComponent_ng_template_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddSubComponent_ng_template_1_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddSubComponent_ng_template_1_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddSubComponent_ng_template_1_i_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 23);
} }
function AddSubComponent_ng_template_1_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.error, " ");
} }
function AddSubComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddSubComponent_ng_template_1_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.createSubCategory(ctx_r11.addSubCategoryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AddSubComponent_ng_template_1_p_6_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0623\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AddSubComponent_ng_template_1_option_11_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddSubComponent_ng_template_1_p_16_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Meta Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AddSubComponent_ng_template_1_p_21_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AddSubComponent_ng_template_1_p_26_Template, 2, 0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddSubComponent_ng_template_1_i_30_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AddSubComponent_ng_template_1_p_31_Template, 2, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.update ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u064A" : "\u0627\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u0641\u0631\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.addSubCategoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addSubCategoryForm.controls.name == null ? null : ctx_r2.addSubCategoryForm.controls.name.errors) != null && ctx_r2.addSubCategoryForm.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.categoriesNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addSubCategoryForm.controls.title == null ? null : ctx_r2.addSubCategoryForm.controls.title.errors) != null && ctx_r2.addSubCategoryForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addSubCategoryForm.controls.keywords == null ? null : ctx_r2.addSubCategoryForm.controls.keywords.errors) != null && ctx_r2.addSubCategoryForm.controls.keywords.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addSubCategoryForm.controls.desc == null ? null : ctx_r2.addSubCategoryForm.controls.desc.errors) != null && ctx_r2.addSubCategoryForm.controls.desc.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.addSubCategoryForm.invalid || ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.error);
} }
class AddSubComponent {
    constructor(fb, categoryService, authService, actvatedRout, router, toasterService) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.authService = authService;
        this.actvatedRout = actvatedRout;
        this.router = router;
        this.toasterService = toasterService;
        this.getDataLoading = true;
        this.update = false;
        this.loading = false;
    }
    ngOnInit() {
        this.getAllCategories();
        this.crreateAddSubForm();
        this.actvatedRout.queryParamMap.subscribe((params) => {
            if (Object.keys(params.params).length) {
                this.update = true;
                this.subId = params.params.id;
                this.categoryService.getSubCategoryById(params.params.id).subscribe(res => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    console.log(res);
                    this.subById = res;
                    this.addSubCategoryForm.patchValue({
                        name: (_a = this.subById) === null || _a === void 0 ? void 0 : _a.title,
                        categories: (_c = (_b = this.subById) === null || _b === void 0 ? void 0 : _b.categories[0]) === null || _c === void 0 ? void 0 : _c._id,
                        title: (_e = (_d = this.subById) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.title,
                        keywords: (_g = (_f = this.subById) === null || _f === void 0 ? void 0 : _f.metaData) === null || _g === void 0 ? void 0 : _g.keywords,
                        desc: (_j = (_h = this.subById) === null || _h === void 0 ? void 0 : _h.metaData) === null || _j === void 0 ? void 0 : _j.desc
                    });
                    this.getDataLoading = false;
                }, err => {
                });
            }
            else {
                this.update = false;
                this.getDataLoading = false;
            }
        });
    }
    getAllCategories() {
        this.categoryService.getCategories().subscribe((res) => {
            console.log(res);
            this.categoriesNames = res === null || res === void 0 ? void 0 : res.data;
            this.getDataLoading = false;
        }, err => {
            console.log(err);
        });
    }
    crreateAddSubForm() {
        return this.addSubCategoryForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            keywords: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            categories: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    createSubCategory(value) {
        if (this.addSubCategoryForm.valid) {
            let subCategoryValue = {
                title: value.name,
                categories: [value.categories],
                metaData: {
                    title: value.title,
                    desc: value.desc,
                    keywords: value.keywords,
                }
            };
            this.loading = true;
            if (this.update) {
                this.categoryService.updateSubCategories(subCategoryValue, this.subId).subscribe(res => {
                    this.loading = false;
                    this.toasterService.success("تم التعديل بنجاح");
                    this.router.navigate(["/dashboard-page/main/categories"]);
                }, err => {
                    this.loading = false;
                });
            }
            else {
                this.categoryService.addSubCategory(subCategoryValue).subscribe(res => {
                    this.error = '';
                    this.loading = false;
                    this.toasterService.success("تم الاضافة بنجاح");
                    this.router.navigate(["/dashboard-page/main/categories"]);
                }, err => {
                    var _a;
                    this.loading = false;
                    this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
                });
            }
        }
    }
}
AddSubComponent.ɵfac = function AddSubComponent_Factory(t) { return new (t || AddSubComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AddSubComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddSubComponent, selectors: [["app-add-sub"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["catContent", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "add-category"], [1, "mt-5", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4"], ["formControlName", "name", "type", "text", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0641\u0631\u0639\u064A ", 1, "form-control"], ["class", "my-2 text-danger", 4, "ngIf"], ["for", ""], ["formControlName", "categories", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "my-4"], ["for", "", 1, "mb-2"], ["formControlName", "title", "type", "text", 1, "form-control"], ["formControlName", "keywords", "type", "text", 1, "form-control"], ["formControlName", "desc", "type", "text", 1, "form-control"], [1, "mt-5"], ["type", "submit", 1, "btn-secondary", "btn", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "text-danger my-3", 4, "ngIf"], [1, "my-2", "text-danger"], [3, "value"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "text-danger", "my-3"]], template: function AddSubComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddSubComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddSubComponent_ng_template_1_Template, 32, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getDataLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3ViLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "J14u":
/*!*******************************************************!*\
  !*** ./src/app/screens/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ "Xcqp");
/* harmony import */ var _components_dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard-main/dashboard-main.component */ "8LZc");
/* harmony import */ var _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-category/add-category.component */ "vSwq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/category/category.component */ "A2ab");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "+72H");
/* harmony import */ var _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/all-users/all-users.component */ "fLXO");
/* harmony import */ var _pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/table-filter.pipe */ "60sm");
/* harmony import */ var _pipes_search_category_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/search-category.pipe */ "iGyJ");
/* harmony import */ var _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-article/add-article.component */ "560U");
/* harmony import */ var _components_unaccepted_articles_unaccepted_articles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/unaccepted-articles/unaccepted-articles.component */ "cwqw");
/* harmony import */ var _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/article-details/article-details.component */ "PgAO");
/* harmony import */ var _components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/category-details/category-details.component */ "bsHT");
/* harmony import */ var _pipes_serach_article_title_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/serach-article-title.pipe */ "MxlZ");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "l62Z");
/* harmony import */ var _components_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-question/add-question.component */ "zaft");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/questions/questions.component */ "ONBp");
/* harmony import */ var _components_add_advertisment_add_advertisment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-advertisment/add-advertisment.component */ "y2/4");
/* harmony import */ var _components_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add-writer/add-writer.component */ "C6VX");
/* harmony import */ var _components_writers_writers_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/writers/writers.component */ "51N/");
/* harmony import */ var _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/ads/ads.component */ "Oumo");
/* harmony import */ var _components_live_live_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/live/live.component */ "14CZ");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-facebook */ "vEIf");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/editor/editor.component */ "6JcN");
/* harmony import */ var _components_add_sub_add_sub_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/add-sub/add-sub.component */ "C6cR");
/* harmony import */ var _pipes_writer_search_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/writer-search.pipe */ "L+Uw");
/* harmony import */ var _components_add_file_add_file_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/add-file/add-file.component */ "0yzQ");
/* harmony import */ var _components_all_files_all_files_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/all-files/all-files.component */ "WKf2");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ "fXoL");






































class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_25__["YouTubePlayerModule"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_26__["FacebookModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_32__["PaginationModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_components_dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_2__["DashboardMainComponent"],
        _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"],
        _components_category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
        _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
        _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_9__["AllUsersComponent"],
        _pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["TableFilterPipe"],
        _pipes_search_category_pipe__WEBPACK_IMPORTED_MODULE_11__["SearchCategoryPipe"],
        _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_12__["AddArticleComponent"],
        _components_unaccepted_articles_unaccepted_articles_component__WEBPACK_IMPORTED_MODULE_13__["UnacceptedArticlesComponent"],
        _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_14__["ArticleDetailsComponent"],
        _components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_15__["CategoryDetailsComponent"],
        _pipes_serach_article_title_pipe__WEBPACK_IMPORTED_MODULE_16__["SerachArticleTitlePipe"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
        _components_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_18__["AddQuestionComponent"],
        _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_19__["QuestionsComponent"],
        _components_add_advertisment_add_advertisment_component__WEBPACK_IMPORTED_MODULE_20__["AddAdvertismentComponent"],
        _components_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_21__["AddWriterComponent"],
        _components_writers_writers_component__WEBPACK_IMPORTED_MODULE_22__["WritersComponent"],
        _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_23__["AdsComponent"],
        _components_live_live_component__WEBPACK_IMPORTED_MODULE_24__["LiveComponent"],
        _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_27__["EditorComponent"],
        _components_add_sub_add_sub_component__WEBPACK_IMPORTED_MODULE_28__["AddSubComponent"],
        _pipes_writer_search_pipe__WEBPACK_IMPORTED_MODULE_29__["WriterSearchPipe"],
        _components_add_file_add_file_component__WEBPACK_IMPORTED_MODULE_30__["AddFileComponent"],
        _components_all_files_all_files_component__WEBPACK_IMPORTED_MODULE_31__["AllFilesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__["DashboardRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_25__["YouTubePlayerModule"], ngx_facebook__WEBPACK_IMPORTED_MODULE_26__["FacebookModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_32__["PaginationModule"]] }); })();


/***/ }),

/***/ "L+Uw":
/*!***************************************************************!*\
  !*** ./src/app/screens/dashboard/pipes/writer-search.pipe.ts ***!
  \***************************************************************/
/*! exports provided: WriterSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterSearchPipe", function() { return WriterSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WriterSearchPipe {
    transform(writers, searchValue) {
        if (!searchValue)
            return writers;
        return writers.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    }
}
WriterSearchPipe.ɵfac = function WriterSearchPipe_Factory(t) { return new (t || WriterSearchPipe)(); };
WriterSearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "writerSearch", type: WriterSearchPipe, pure: true });


/***/ }),

/***/ "MxlZ":
/*!**********************************************************************!*\
  !*** ./src/app/screens/dashboard/pipes/serach-article-title.pipe.ts ***!
  \**********************************************************************/
/*! exports provided: SerachArticleTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerachArticleTitlePipe", function() { return SerachArticleTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SerachArticleTitlePipe {
    transform(articles, searchValue) {
        if (!searchValue)
            return articles;
        return articles.filter(item => { var _a; return (_a = item === null || item === void 0 ? void 0 : item.main) === null || _a === void 0 ? void 0 : _a.title.includes(searchValue); });
    }
}
SerachArticleTitlePipe.ɵfac = function SerachArticleTitlePipe_Factory(t) { return new (t || SerachArticleTitlePipe)(); };
SerachArticleTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "serachArticleTitle", type: SerachArticleTitlePipe, pure: true });


/***/ }),

/***/ "ONBp":
/*!*******************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/questions/questions.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_add_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/add-question.service */ "lWWh");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");







function QuestionsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
function QuestionsComponent_ng_template_1_accordion_group_7_ng_template_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 23);
} }
function QuestionsComponent_ng_template_1_accordion_group_7_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062A\u0627\u0643\u064A\u062F \u062D\u0630\u0641 \u0627\u0633\u062A\u0637\u0644\u0627\u0639 \u0627\u0644\u0631\u0627\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_ng_template_1_accordion_group_7_ng_template_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.modalRef == null ? null : ctx_r10.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_ng_template_1_accordion_group_7_ng_template_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.modalRef == null ? null : ctx_r12.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_ng_template_1_accordion_group_7_ng_template_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.deleteQuestionMethod(item_r4 == null ? null : item_r4._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuestionsComponent_ng_template_1_accordion_group_7_ng_template_1_i_11_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.deleteLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.deleteLoading);
} }
function QuestionsComponent_ng_template_1_accordion_group_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0645 \u0627\u0644\u062D\u0630\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionsComponent_ng_template_1_accordion_group_7_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", answer_r15 == null ? null : answer_r15.title, " ", answer_r15 == null ? null : answer_r15.count, " ");
} }
function QuestionsComponent_ng_template_1_accordion_group_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "accordion-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionsComponent_ng_template_1_accordion_group_7_ng_template_1_Template, 12, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuestionsComponent_ng_template_1_accordion_group_7_span_5_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionsComponent_ng_template_1_accordion_group_7_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.openModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuestionsComponent_ng_template_1_accordion_group_7_li_8_Template, 2, 2, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("heading", item_r4 == null ? null : item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4 == null ? null : item_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4 == null ? null : item_r4.deleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4 == null ? null : item_r4.answers);
} }
function QuestionsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0633\u062A\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0644\u0631\u0627\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0627\u0636\u0627\u0641\u0629 \u0627\u0633\u062A\u0637\u0644\u0627\u0639 \u0631\u0627\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "accordion", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionsComponent_ng_template_1_accordion_group_7_Template, 9, 4, "accordion-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.questions);
} }
class QuestionsComponent {
    constructor(questionsService, toastrService, modalService) {
        this.questionsService = questionsService;
        this.toastrService = toastrService;
        this.modalService = modalService;
        this.loading = true;
        this.deleteLoading = false;
    }
    ngOnInit() {
        this.getQuestions();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    getQuestions() {
        this.questionsService.getQuestions().subscribe((res) => {
            this.loading = false;
            this.questions = res === null || res === void 0 ? void 0 : res.data;
            console.log(res);
        }, err => {
            this.loading = false;
        });
    }
    deleteQuestionMethod(id) {
        this.deleteLoading = true;
        this.questionsService.deleteQuestion(id).subscribe(res => {
            this.deleteLoading = false;
            this.toastrService.success("تم الحذف بنجاح");
            this.modalRef.hide();
            this.getQuestions();
        }, err => {
            this.deleteLoading = false;
        });
    }
}
QuestionsComponent.ɵfac = function QuestionsComponent_Factory(t) { return new (t || QuestionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_add_question_service__WEBPACK_IMPORTED_MODULE_1__["AddQuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"])); };
QuestionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionsComponent, selectors: [["app-questions"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "add-article"], [1, "mb-5"], [1, "btn", "btn-secondary", "mb-2"], ["routerLink", "/dashboard-page/main/add-question", 1, "text-white"], [3, "isAnimated"], ["class", "mb-2", 3, "heading", 4, "ngFor", "ngForOf"], [1, "mb-2", 3, "heading"], ["deleteQuestion", ""], ["class", "bg-dark text-white p-1 rounded", 4, "ngIf"], [1, "fas", "fa-trash-alt", "d-inline-block", "me-3", 2, "cursor", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-secondary", "mx-3", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "bg-dark", "text-white", "p-1", "rounded"]], template: function QuestionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuestionsComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuestionsComponent_ng_template_1_Template, 8, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionPanelComponent"]], styles: [".modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLCtDQUFBO0FBQVIiLCJmaWxlIjoicXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIC5tb2RhbC1oZWFkZXIgLmJ0bi1jbG9zZSB7XHJcbiAgICAgICAgbWFyZ2luOiAtMC41cmVtIGF1dG8gLTAuNXJlbSAtMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Oumo":
/*!*******************************************************************!*\
  !*** ./src/app/screens/dashboard/components/ads/ads.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/addvertisment.service */ "cY7r");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AdsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
function AdsComponent_ng_template_1_ng_container_8_div_2_ng_template_6_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 27);
} }
function AdsComponent_ng_template_1_ng_container_8_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062A\u0623\u0643\u064A\u062F \u062D\u0630\u0641 \u0627\u0644\u0627\u0639\u0644\u0627\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdsComponent_ng_template_1_ng_container_8_div_2_ng_template_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r11.modalRef == null ? null : ctx_r11.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdsComponent_ng_template_1_ng_container_8_div_2_ng_template_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r13.modalRef == null ? null : ctx_r13.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdsComponent_ng_template_1_ng_container_8_div_2_ng_template_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.deleteAD(item_r7 == null ? null : item_r7._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdsComponent_ng_template_1_ng_container_8_div_2_ng_template_6_i_11_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.deleteAdLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.deleteAdLoading);
} }
const _c0 = function (a0) { return { id: a0 }; };
function AdsComponent_ng_template_1_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdsComponent_ng_template_1_ng_container_8_div_2_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.openModal(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdsComponent_ng_template_1_ng_container_8_div_2_ng_template_6_Template, 12, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r7 == null ? null : item_r7._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7 == null ? null : item_r7.image == null ? null : item_r7.image.file == null ? null : item_r7.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AdsComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdsComponent_ng_template_1_ng_container_8_div_2_Template, 8, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.ads);
} }
function AdsComponent_ng_template_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0639\u0644\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u0627\u0639\u0644\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0627\u0636\u0627\u0641\u0629 \u0627\u0639\u0644\u0627\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdsComponent_ng_template_1_ng_container_8_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdsComponent_ng_template_1_ng_template_9_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.ads == null ? null : ctx_r2.ads.length)("ngIfElse", _r4);
} }
class AdsComponent {
    constructor(adsService, modalService) {
        this.adsService = adsService;
        this.modalService = modalService;
        this.loading = true;
        this.deleteAdLoading = false;
    }
    ngOnInit() {
        this.getAllAds();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    getAllAds() {
        this.loading = true;
        this.adsService.getAds().subscribe((res) => {
            this.loading = false;
            this.ads = res === null || res === void 0 ? void 0 : res.data;
            console.log(res);
        }, err => {
            this.loading = false;
        });
    }
    deleteAD(id) {
        this.deleteAdLoading = true;
        this.adsService.deleteAd(id).subscribe(res => {
            this.deleteAdLoading = false;
            this.modalRef.hide();
            this.getAllAds();
        }, err => {
            this.deleteAdLoading = false;
        });
    }
}
AdsComponent.ɵfac = function AdsComponent_Factory(t) { return new (t || AdsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_1__["AddvertismentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"])); };
AdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdsComponent, selectors: [["app-ads"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "categories"], [1, "mb-5"], [1, "d-sm-flex", "mb-5"], [1, "btn", "btn-secondary", "ms-2"], ["routerLink", "/dashboard-page/main/add-advertisment", 1, "text-white"], [1, "fas", "fa-plus"], ["noAds", ""], [1, "row"], ["class", "col-md-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-4"], [1, "mb-2"], ["routerLink", "/dashboard-page/main/add-advertisment", 1, "far", "ms-2", "fa-edit", 2, "cursor", "pointer", 3, "queryParams"], [1, "far", "fa-trash-alt", 2, "cursor", "pointer", 3, "click"], ["alt", "", 2, "width", "200px", "height", "200px", "object-fit", "cover", 3, "src"], ["deleteAd", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-secondary", "mx-3", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "my-5"]], template: function AdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdsComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdsComponent_ng_template_1_Template, 11, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLCtDQUFBO0FBQVIiLCJmaWxlIjoiYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAgIC5tb2RhbC1oZWFkZXIgLmJ0bi1jbG9zZSB7XHJcbiAgICAgICAgbWFyZ2luOiAtMC41cmVtIGF1dG8gLTAuNXJlbSAtMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "PgAO":
/*!*******************************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/article-details/article-details.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ArticleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailsComponent", function() { return ArticleDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_artilce_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/artilce.service */ "lWuh");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-facebook */ "vEIf");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var src_app_screens_article_details_services_comments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/screens/article-details/services/comments.service */ "8o2U");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");













function ArticleDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ArticleDetailsComponent_ng_template_1_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_1_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx_r15.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0642\u0628\u0648\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_ng_template_1_div_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u062A\u0645 \u0642\u0628\u0648\u0644 \u0647\u0630\u0647 \u0627\u0644\u0645\u0642\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleDetailsComponent_ng_template_1_div_4_button_1_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_template_1_div_4_p_2_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r7.categoryDetails == null ? null : ctx_r7.categoryDetails.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.categoryDetails == null ? null : ctx_r7.categoryDetails.status);
} }
function ArticleDetailsComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_1_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.scroll(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0647\u0630\u0647 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_ng_template_1_div_24_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 42);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r19 == null ? null : item_r19.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 43);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r19 == null ? null : item_r19.desc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const li_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", li_r35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleDetailsComponent_ng_template_1_div_24_ul_3_li_1_Template, 4, 1, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r19 == null ? null : item_r19.ul);
} }
function ArticleDetailsComponent_ng_template_1_div_24_youtube_player_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "youtube-player", 50);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", item_r19 == null ? null : item_r19.youtubeLink)("height", 250)("width", 500)("startSeconds", 0);
} }
function ArticleDetailsComponent_ng_template_1_div_24_fb_video_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fb-video");
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r19 == null ? null : item_r19.facebookVideoLink);
} }
function ArticleDetailsComponent_ng_template_1_div_24_fb_post_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fb-post");
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r19 == null ? null : item_r19.facebookImageLink);
} }
function ArticleDetailsComponent_ng_template_1_div_24_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 51);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r19 == null ? null : item_r19.twitterOrInstagramHtml, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_table_9_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 51);
} if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r44 == null ? null : item_r44.column, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_table_9_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleDetailsComponent_ng_template_1_div_24_table_9_tr_2_td_1_Template, 1, 1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r42);
} }
function ArticleDetailsComponent_ng_template_1_div_24_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_template_1_div_24_table_9_tr_2_Template, 2, 1, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r19 == null ? null : item_r19.table);
} }
function ArticleDetailsComponent_ng_template_1_div_24_div_10_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 18);
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r19 == null ? null : item_r19.image == null ? null : item_r19.image.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_template_1_div_24_div_10_p_2_Template, 1, 1, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r19 == null ? null : item_r19.image == null ? null : item_r19.image.image == null ? null : item_r19.image.image.file == null ? null : item_r19.image.image.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.image == null ? null : item_r19.image.title);
} }
function ArticleDetailsComponent_ng_template_1_div_24_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r19 == null ? null : item_r19.videoFromHisDevice == null ? null : item_r19.videoFromHisDevice.file == null ? null : item_r19.videoFromHisDevice.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const albumImage_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", albumImage_r51 == null ? null : albumImage_r51.file == null ? null : albumImage_r51.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ArticleDetailsComponent_ng_template_1_div_24_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_template_1_div_24_div_12_div_2_Template, 3, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r19 == null ? null : item_r19.album);
} }
function ArticleDetailsComponent_ng_template_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleDetailsComponent_ng_template_1_div_24_h2_1_Template, 1, 1, "h2", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_template_1_div_24_p_2_Template, 1, 1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleDetailsComponent_ng_template_1_div_24_ul_3_Template, 2, 1, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleDetailsComponent_ng_template_1_div_24_youtube_player_4_Template, 1, 4, "youtube-player", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArticleDetailsComponent_ng_template_1_div_24_fb_video_5_Template, 1, 1, "fb-video", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleDetailsComponent_ng_template_1_div_24_fb_post_6_Template, 1, 1, "fb-post", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArticleDetailsComponent_ng_template_1_div_24_div_7_Template, 1, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ArticleDetailsComponent_ng_template_1_div_24_table_9_Template, 3, 1, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ArticleDetailsComponent_ng_template_1_div_24_div_10_Template, 3, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ArticleDetailsComponent_ng_template_1_div_24_div_11_Template, 4, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ArticleDetailsComponent_ng_template_1_div_24_div_12_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.ul == null ? null : item_r19.ul.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.youtubeLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.facebookVideoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.facebookImageLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.twitterOrInstagramHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.table == null ? null : item_r19.table.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.image == null ? null : item_r19.image.image == null ? null : item_r19.image.image.file == null ? null : item_r19.image.image.file.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.videoFromHisDevice == null ? null : item_r19.videoFromHisDevice.file == null ? null : item_r19.videoFromHisDevice.file.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r19 == null ? null : item_r19.album == null ? null : item_r19.album.length);
} }
const _c0 = function (a1) { return ["/main/search", a1]; };
function ArticleDetailsComponent_ng_template_1_ul_25_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, key_r54));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r54);
} }
function ArticleDetailsComponent_ng_template_1_ul_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_template_1_ul_25_li_2_Template, 3, 4, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.categoryDetails == null ? null : ctx_r10.categoryDetails.keywords);
} }
function ArticleDetailsComponent_ng_template_1_ng_container_28_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_1_ng_container_28_ng_container_3_li_2_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const item_r59 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r60.deleteComment(item_r59 == null ? null : item_r59._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0627\u0644\u0627\u0633\u0645 : ", item_r59 == null ? null : item_r59.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0627\u0644\u062A\u0639\u0644\u064A\u0642 : ", item_r59 == null ? null : item_r59.comment, "");
} }
function ArticleDetailsComponent_ng_template_1_ng_container_28_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_template_1_ng_container_28_ng_container_3_li_2_Template, 6, 2, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r55.comments);
} }
function ArticleDetailsComponent_ng_template_1_ng_container_28_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u062A\u0639\u0644\u064A\u0642\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ArticleDetailsComponent_ng_template_1_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleDetailsComponent_ng_template_1_ng_container_28_ng_container_3_Template, 3, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleDetailsComponent_ng_template_1_ng_container_28_ng_template_4_Template, 2, 0, "ng-template", null, 67, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.comments == null ? null : ctx_r12.comments.length)("ngIfElse", _r56);
} }
const _c1 = function (a0) { return { id: a0 }; };
function ArticleDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleDetailsComponent_ng_template_1_div_4_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArticleDetailsComponent_ng_template_1_div_5_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_1_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx_r62.openModal(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ArticleDetailsComponent_ng_template_1_div_24_Template, 13, 11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ArticleDetailsComponent_ng_template_1_ul_25_Template, 3, 1, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ArticleDetailsComponent_ng_template_1_ng_container_28_Template, 6, 2, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "admin" || (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "admin" || (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0639\u062F\u062F \u0627\u0644\u0632\u064A\u0627\u0631\u0627\u062A : ", ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.views, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.main == null ? null : ctx_r2.categoryDetails.main.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](15, 12, ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.updatedAt, "fullDate", undefined, "ar"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.main == null ? null : ctx_r2.categoryDetails.main.image == null ? null : ctx_r2.categoryDetails.main.image.imageBigSize == null ? null : ctx_r2.categoryDetails.main.image.imageBigSize.file == null ? null : ctx_r2.categoryDetails.main.image.imageBigSize.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.main == null ? null : ctx_r2.categoryDetails.main.image == null ? null : ctx_r2.categoryDetails.main.image.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0643\u062A\u0628 ", ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.writer == null ? null : ctx_r2.categoryDetails.writer.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoryDetails == null ? null : ctx_r2.categoryDetails.keywords == null ? null : ctx_r2.categoryDetails.keywords.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "admin" || (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "supervisor");
} }
function ArticleDetailsComponent_ng_template_3_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 79);
} }
function ArticleDetailsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062A\u0623\u0643\u064A\u062F \u0642\u0628\u0648\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.modalRef == null ? null : ctx_r65.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.modalRef == null ? null : ctx_r67.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.acceptArticlee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ArticleDetailsComponent_ng_template_3_i_11_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.deleteOrAcceptArticleLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.deleteOrAcceptArticleLoading);
} }
function ArticleDetailsComponent_ng_template_5_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 79);
} }
function ArticleDetailsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u062A\u0623\u0643\u064A\u062F \u062D\u0630\u0641 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.modalRef == null ? null : ctx_r70.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_5_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.modalRef == null ? null : ctx_r72.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleDetailsComponent_ng_template_5_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.deleteArtice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ArticleDetailsComponent_ng_template_5_i_11_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.deleteOrAcceptArticleLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.deleteOrAcceptArticleLoading);
} }
class ArticleDetailsComponent {
    constructor(articleservice, modalService, toastrservice, router, fbb, platformId, authService, commentsService, activatedRoute, sanitizer) {
        this.articleservice = articleservice;
        this.modalService = modalService;
        this.toastrservice = toastrservice;
        this.router = router;
        this.fbb = fbb;
        this.platformId = platformId;
        this.authService = authService;
        this.commentsService = commentsService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.loading = true;
        this.deleteOrAcceptArticleLoading = false;
        this.youtubeIframe = "false";
        this.fbimage = "false";
        this.fbvideo = "false";
        this.loadingDeleteComment = false;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe((res) => {
            this.articleId = res.id;
            this.getArticleDetails(res.id);
        }, err => { });
    }
    scroll(el) {
        el.scrollIntoView();
    }
    getArticleDetails(id) {
        this.loading = true;
        this.articleservice.articleById(id).subscribe((res) => {
            this.loading = false;
            this.categoryDetails = res;
            console.log(res);
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                let initParams = {
                    xfbml: true,
                    version: 'v2.8'
                };
                setTimeout((() => this.fbb.init(initParams)), 200);
            }
            this.getComments(id);
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                setTimeout(() => {
                    twttr.widgets.load();
                    this.processEmbeddedInstagramPosts();
                }, 2000);
            }
        }, err => {
            this.loading = false;
        });
    }
    deleteArtice() {
        this.deleteOrAcceptArticleLoading = true;
        this.articleservice.deleteArticle(this.articleId).subscribe(res => {
            this.deleteOrAcceptArticleLoading = false;
            this.toastrservice.success("تم حذف المقالة بنجاح");
            this.router.navigate(["/dashboard-page/main/categories"]);
            this.modalRef.hide();
        }, err => {
            this.deleteOrAcceptArticleLoading = false;
        });
    }
    acceptArticlee() {
        this.deleteOrAcceptArticleLoading = true;
        this.articleservice.editArticle(this.articleId, { status: true }).subscribe(res => {
            this.deleteOrAcceptArticleLoading = false;
            this.toastrservice.success("تم قبول المقالة بنجاح");
            this.modalRef.hide();
            this.getArticleDetails(this.articleId);
        });
    }
    processEmbeddedInstagramPosts() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            if (window['instgrm']) {
                instgrm.Embeds.process();
            }
        }
    }
    getComments(id) {
        this.commentsService.getComments(id).subscribe((res) => {
            this.comments = res === null || res === void 0 ? void 0 : res.data;
        }, err => {
        });
    }
    deleteComment(id) {
        this.loading = true;
        this.commentsService.deleteComment(id).subscribe((res) => {
            this.getComments(this.articleId);
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
                setTimeout(() => {
                    twttr.widgets.load();
                    this.processEmbeddedInstagramPosts();
                }, 2000);
            }
            this.loading = false;
        }, err => {
            this.loading = false;
        });
    }
}
ArticleDetailsComponent.ɵfac = function ArticleDetailsComponent_Factory(t) { return new (t || ArticleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artilce_service__WEBPACK_IMPORTED_MODULE_2__["ArtilceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_facebook__WEBPACK_IMPORTED_MODULE_6__["FacebookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_screens_article_details_services_comments_service__WEBPACK_IMPORTED_MODULE_8__["CommentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"])); };
ArticleDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleDetailsComponent, selectors: [["app-article-details"]], decls: 7, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], ["acceptArticle", ""], ["deleteArticle", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "articleDetails"], [1, "articleTitle", "mb-5"], [1, "control", "mb-3"], ["class", "mb-3", 4, "ngIf"], ["class", "my-4", 4, "ngIf"], [1, "mb-2", "icons"], ["routerLink", "/dashboard-page/main/add-article", 1, "far", "ms-2", "fa-edit", 3, "queryParams"], [1, "far", "fa-trash-alt", 3, "click"], [1, "fw-bold"], [1, "text-secondary", "fw-bold"], [1, "text-center", "articleImagee", "mb-3"], ["alt", "", 1, "img-fluid", 2, "max-height", "500px", "object-fit", "cover", 3, "src"], [1, "m-0", "text-center", 3, "innerHtml"], [1, "content", "mb-3"], [1, "mb-3"], [1, "text-danger", "fw-bold"], [1, "showContent"], ["class", "mb-4", 4, "ngFor", "ngForOf"], ["class", "list-unstyled p-0 mb-3 keyWords d-flex flex-wrap", 4, "ngIf"], ["section", ""], [4, "ngIf"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "text-primary fw-bold", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], [1, "text-primary", "fw-bold"], [1, "my-4"], [2, "cursor", "pointer", "color", "blue", 3, "click"], [1, "mb-4"], ["style", "font-size: large;\n                font-weight: 700;\n                border-bottom: 1px solid #dcdcdc;\n                padding-bottom: 5px;\n                color: #de2323;", 3, "innerHtml", 4, "ngIf"], ["style", "text-align: justify;font-size: 18px;\n                line-height: 1.9;", "class", "m-0 content", 3, "innerHtml", 4, "ngIf"], ["class", "list-unstyled p-0 m-0", 4, "ngIf"], ["suggestedQuality", "highres", 3, "videoId", "height", "width", "startSeconds", 4, "ngIf"], [3, "innerHtml", 4, "ngIf"], [2, "overflow", "auto"], ["style", "border-color:black", "class", "table table-bordered", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [2, "font-size", "large", "font-weight", "700", "border-bottom", "1px solid #dcdcdc", "padding-bottom", "5px", "color", "#de2323", 3, "innerHtml"], [1, "m-0", "content", 2, "text-align", "justify", "font-size", "18px", "line-height", "1.9", 3, "innerHtml"], [1, "list-unstyled", "p-0", "m-0"], ["style", "margin-bottom: 10px;", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "10px"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-dot", 2, "margin-top", "5px"], ["d", "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"], [2, "font-size", "18px", 3, "innerHtml"], ["suggestedQuality", "highres", 3, "videoId", "height", "width", "startSeconds"], [3, "innerHtml"], [1, "table", "table-bordered", 2, "border-color", "black"], [4, "ngFor", "ngForOf"], [3, "innerHtml", 4, "ngFor", "ngForOf"], [1, "text-center"], ["alt", "", 1, "img-fluid", 2, "max-height", "400px", "object-fit", "cover", 3, "src"], ["class", "m-0 text-center", 3, "innerHtml", 4, "ngIf"], ["height", "240", "controls", "", 2, "width", "100%"], ["type", "video/mp4", 3, "src"], [1, "row"], ["class", "col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-4"], ["alt", "", 2, "object-fit", "cover", "height", "300px", "width", "100%", 3, "src"], [1, "list-unstyled", "p-0", "mb-3", "keyWords", "d-flex", "flex-wrap"], [1, "text-danger", "m-2", "py-2", "fas", "fa-search"], [1, "text-white", "px-3", "py-1", "bg-secondary", 3, "routerLink"], ["noComments", ""], [1, "p-0"], [1, "far", "fa-trash-alt", 2, "cursor", "pointer", 3, "click"], [2, "word-break", "break-all", "margin", "0"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-secondary", "mx-3", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"]], template: function ArticleDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArticleDetailsComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArticleDetailsComponent_ng_template_1_Template, 29, 19, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArticleDetailsComponent_ng_template_3_Template, 12, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArticleDetailsComponent_ng_template_5_Template, 12, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YouTubePlayer"], ngx_facebook__WEBPACK_IMPORTED_MODULE_6__["FBVideoComponent"], ngx_facebook__WEBPACK_IMPORTED_MODULE_6__["FBPostComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".articleDetails[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.articleDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #de2323;\n  font-size: 26px;\n  line-height: 38px;\n}\n.articleDetails[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: black;\n  font-size: medium;\n  margin-left: 5px;\n}\n.articleDetails[_ngcontent-%COMP%]   .paragraph[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 15px;\n}\n.articleDetails[_ngcontent-%COMP%]   .sharee[_ngcontent-%COMP%] {\n  border: 1px solid #de2323;\n  border-radius: 20px;\n  padding: 2px 10px;\n  margin-left: 10px;\n}\n.articleDetails[_ngcontent-%COMP%]   .fcb[_ngcontent-%COMP%] {\n  background-color: #3E51A0;\n  color: white;\n  padding: 7px 11px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.articleDetails[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n.shareOnSocialMedia[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n}\n.keyWords[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 5px;\n  cursor: pointer;\n}\n.keyWords[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n  .modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n  .showContent a {\n  font-weight: bold !important;\n  color: #de2323 !important;\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFydGljbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFHLGVBQUE7QUFDUDtBQUFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRFE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUdaO0FBQUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksa0NBQUE7QUFFUjtBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUdJO0VBQ0ksK0NBQUE7QUFBUjtBQUlRO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBRloiLCJmaWxlIjoiYXJ0aWNsZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFydGljbGVEZXRhaWxzIHtcclxuICAgIGkge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgY29sb3I6I2RlMjMyMztcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGFyYWdyYXBoIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2hhcmVlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGUyMzIzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzoycHggMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIC5mY2Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTUxQTA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAxMXB4OyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcbn1cclxuLnNoYXJlT25Tb2NpYWxNZWRpYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ua2V5V29yZHMge1xyXG4gIGxpIHtcclxuICAgIG1hcmdpbjogMTBweCA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgICAubW9kYWwtaGVhZGVyIC5idG4tY2xvc2Uge1xyXG4gICAgICAgIG1hcmdpbjogLTAuNXJlbSBhdXRvIC0wLjVyZW0gLTAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaG93Q29udGVudCB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGUyMzIzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICAgICAgICBcclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "S8xs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js ***!
  \***********************************************************************************************/
/*! exports provided: AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return AccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return AccordionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "lUod");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");





/**
 * Configuration service, provides default values for the AccordionComponent.
 */




const _c0 = ["*"];
const _c1 = function (a0) { return { "text-muted": a0 }; };
function AccordionPanelComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r0.isDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.heading, " ");
} }
const _c2 = [[["", "accordion-heading", ""]], "*"];
const _c3 = ["[accordion-heading]", "*"];
class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
AccordionConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AccordionConfig_Factory() { return new AccordionConfig(); }, token: AccordionConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/** Displays collapsible content panels for presenting information in a limited amount of space. */
class AccordionComponent {
    constructor(config) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** if `true` expanding one item will close all others */
        this.closeOthers = false;
        this.groups = [];
        Object.assign(this, config);
    }
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    addGroup(group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    }
    removeGroup(group) {
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AccordionConfig)); };
AccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionComponent, selectors: [["accordion"]], hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"], hostVars: 1, hostBindings: function AccordionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", ctx.closeOthers);
    } }, inputs: { isAnimated: "isAnimated", closeOthers: "closeOthers" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });
AccordionComponent.ctorParameters = () => [
    { type: AccordionConfig }
];
AccordionComponent.propDecorators = {
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeOthers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'accordion',
                template: `<ng-content></ng-content>`,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist',
                    class: 'panel-group',
                    style: 'display: block'
                }
            }]
    }], function () { return [{ type: AccordionConfig }]; }, { isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOthers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
class AccordionPanelComponent {
    constructor(accordion) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** Provides an ability to use Bootstrap's contextual panel classes
         * (`panel-primary`, `panel-success`, `panel-info`, etc...).
         * List of all available classes [available here]
         * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
         */
        this.panelClass = 'panel-default';
        /** if <code>true</code> — disables accordion group */
        this.isDisabled = false;
        /** Emits when the opened state changes */
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /** Is accordion group open or closed. This property supports two-way binding */
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null)
                .then(() => {
                this.isOpenChange.emit(value);
            });
        }
    }
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    ngOnInit() {
        this.accordion.addGroup(this);
    }
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AccordionComponent)); };
AccordionPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostAttrs: [1, "panel", 2, "display", "block"], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("panel-open", ctx.isOpen);
    } }, inputs: { panelClass: "panelClass", isDisabled: "isDisabled", isOpen: "isOpen", heading: "heading" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c3, decls: 9, vars: 6, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionPanelComponent_Template_div_click_1_listener() { return ctx.toggleOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.panelClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseDirective"]], styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"] });
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [AccordionComponent,] }] }
];
AccordionPanelComponent.propDecorators = {
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.panel-open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    class: 'panel',
                    style: 'display: block'
                },
                styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]
            }]
    }], function () { return [{ type: AccordionComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [AccordionComponent]
            }] }]; }, { panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.panel-open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class AccordionModule {
    static forRoot() {
        return { ngModule: AccordionModule, providers: [] };
    }
}
AccordionModule.ɵfac = function AccordionModule_Factory(t) { return new (t || AccordionModule)(); };
AccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccordionModule });
AccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccordionModule, { declarations: function () { return [AccordionComponent, AccordionPanelComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]]; }, exports: function () { return [AccordionComponent, AccordionPanelComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-bootstrap-accordion.js.map

/***/ }),

/***/ "WKf2":
/*!*******************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/all-files/all-files.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AllFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFilesComponent", function() { return AllFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AllFilesComponent {
    constructor() { }
    ngOnInit() {
    }
}
AllFilesComponent.ɵfac = function AllFilesComponent_Factory(t) { return new (t || AllFilesComponent)(); };
AllFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllFilesComponent, selectors: [["app-all-files"]], decls: 2, vars: 0, template: function AllFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "all-files works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtZmlsZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Xcqp":
/*!***************************************************************!*\
  !*** ./src/app/screens/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_add_advertisment_add_advertisment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-advertisment/add-advertisment.component */ "y2/4");
/* harmony import */ var _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/add-article/add-article.component */ "560U");
/* harmony import */ var _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-category/add-category.component */ "vSwq");
/* harmony import */ var _components_add_file_add_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-file/add-file.component */ "0yzQ");
/* harmony import */ var _components_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-question/add-question.component */ "zaft");
/* harmony import */ var _components_add_sub_add_sub_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-sub/add-sub.component */ "C6cR");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "+72H");
/* harmony import */ var _components_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-writer/add-writer.component */ "C6VX");
/* harmony import */ var _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ads/ads.component */ "Oumo");
/* harmony import */ var _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/all-users/all-users.component */ "fLXO");
/* harmony import */ var _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/article-details/article-details.component */ "PgAO");
/* harmony import */ var _components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/category-details/category-details.component */ "bsHT");
/* harmony import */ var _components_category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/category/category.component */ "A2ab");
/* harmony import */ var _components_dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard-main/dashboard-main.component */ "8LZc");
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/editor/editor.component */ "6JcN");
/* harmony import */ var _components_live_live_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/live/live.component */ "14CZ");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "l62Z");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/questions/questions.component */ "ONBp");
/* harmony import */ var _components_writers_writers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/writers/writers.component */ "51N/");
/* harmony import */ var _guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./guard/admin.guard */ "mxpT");
/* harmony import */ var _guard_editor_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guard/editor.guard */ "tHNM");
/* harmony import */ var _guard_login_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guard/login.guard */ "ygoY");
/* harmony import */ var _guard_writer_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guard/writer.guard */ "e/eO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");


























const routes = [
    {
        path: 'main',
        component: _components_dashboard_main_dashboard_main_component__WEBPACK_IMPORTED_MODULE_14__["DashboardMainComponent"],
        children: [
            {
                path: 'add-category',
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]],
                component: _components_add_category_add_category_component__WEBPACK_IMPORTED_MODULE_3__["AddCategoryComponent"]
            },
            {
                path: 'add-sub',
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]],
                component: _components_add_sub_add_sub_component__WEBPACK_IMPORTED_MODULE_6__["AddSubComponent"]
            },
            {
                path: 'editor',
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]],
                component: _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_15__["EditorComponent"]
            },
            {
                path: 'add-article',
                canActivate: [_guard_editor_guard__WEBPACK_IMPORTED_MODULE_21__["EditorGuard"]],
                component: _components_add_article_add_article_component__WEBPACK_IMPORTED_MODULE_2__["AddArticleComponent"]
            },
            {
                path: 'add-file',
                canActivate: [_guard_editor_guard__WEBPACK_IMPORTED_MODULE_21__["EditorGuard"]],
                component: _components_add_file_add_file_component__WEBPACK_IMPORTED_MODULE_4__["AddFileComponent"]
            },
            {
                path: 'categories',
                canActivate: [_guard_writer_guard__WEBPACK_IMPORTED_MODULE_23__["WriterGuard"]],
                component: _components_category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"]
            },
            // {
            //   path:'accept-articles',
            //   canActivate:[WriterGuard],
            //   component:UnacceptedArticlesComponent     
            // },
            {
                path: 'article-details/:id',
                canActivate: [_guard_writer_guard__WEBPACK_IMPORTED_MODULE_23__["WriterGuard"]],
                component: _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_11__["ArticleDetailsComponent"]
            },
            {
                path: 'add-user',
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]],
                component: _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"]
            },
            {
                path: 'users',
                component: _components_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_10__["AllUsersComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'advertisment',
                component: _components_ads_ads_component__WEBPACK_IMPORTED_MODULE_9__["AdsComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'add-advertisment',
                component: _components_add_advertisment_add_advertisment_component__WEBPACK_IMPORTED_MODULE_1__["AddAdvertismentComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'add-writer',
                component: _components_add_writer_add_writer_component__WEBPACK_IMPORTED_MODULE_8__["AddWriterComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'writers',
                component: _components_writers_writers_component__WEBPACK_IMPORTED_MODULE_19__["WritersComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'live',
                component: _components_live_live_component__WEBPACK_IMPORTED_MODULE_16__["LiveComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'login',
                component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                canActivate: [_guard_login_guard__WEBPACK_IMPORTED_MODULE_22__["LoginGuard"]]
            },
            {
                path: 'articles/:id/:sub/:name',
                component: _components_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_12__["CategoryDetailsComponent"],
                canActivate: [_guard_writer_guard__WEBPACK_IMPORTED_MODULE_23__["WriterGuard"]]
            },
            {
                path: 'add-question',
                component: _components_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_5__["AddQuestionComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            },
            {
                path: 'question',
                component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_18__["QuestionsComponent"],
                canActivate: [_guard_admin_guard__WEBPACK_IMPORTED_MODULE_20__["AdminGuard"]]
            }
        ]
    },
    {
        path: '',
        redirectTo: 'main/categories'
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "bsHT":
/*!*********************************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/category-details/category-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CategoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function() { return CategoryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_artilce_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/artilce.service */ "lWuh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var _pipes_serach_article_title_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/serach-article-title.pipe */ "MxlZ");








function CategoryDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
const _c0 = function (a1) { return ["/dashboard-page/main/article-details", a1]; };
function CategoryDetailsComponent_ng_template_1_ng_container_10_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const articleIndex_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r8 == null ? null : item_r8._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](articleIndex_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r8 == null ? null : item_r8.main == null ? null : item_r8.main.title, " ");
} }
function CategoryDetailsComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoryDetailsComponent_ng_template_1_ng_container_10_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoryDetailsComponent_ng_template_1_ng_container_10_tr_11_Template, 5, 5, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "serachArticleTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function CategoryDetailsComponent_ng_template_1_ng_container_10_Template_pagination_pageChanged_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 4, ctx_r4.articles, ctx_r4.searchValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r4.totalCount)("maxSize", ctx_r4.maxSize);
} }
function CategoryDetailsComponent_ng_template_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0642\u0627\u0644\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CategoryDetailsComponent_ng_template_1_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.getByStatus(_r3.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0623\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u063A\u064A\u0631 \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0642\u0628\u0648\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoryDetailsComponent_ng_template_1_ng_container_10_Template, 16, 7, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoryDetailsComponent_ng_template_1_ng_template_11_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.categoryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.articles == null ? null : ctx_r2.articles.length)("ngIfElse", _r5);
} }
class CategoryDetailsComponent {
    constructor(articleService, platformId, activatedRoute) {
        this.articleService = articleService;
        this.platformId = platformId;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.AllParams = {};
        this.maxSize = 5;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.categoryName = params.name;
            if (params.sub == 'true')
                this.AllParams.subcategories = params === null || params === void 0 ? void 0 : params.id;
            else if (params.sub == 'false')
                this.AllParams.categories = params === null || params === void 0 ? void 0 : params.id;
            this.AllParams.status = false;
            this.AllParams.page = 1;
            this.AllParams.sort = 'createdAt:-1';
            console.log(params);
            this.getArticles(this.AllParams);
        });
    }
    getArticles(AllParams) {
        this.loading = true;
        this.articleService.getArticles(AllParams).subscribe((res) => {
            this.loading = false;
            this.articles = res === null || res === void 0 ? void 0 : res.data;
            this.totalCount = res === null || res === void 0 ? void 0 : res.totalCount;
        }, err => {
            this.loading = false;
        });
    }
    getByStatus(value) {
        this.AllParams.status = value;
        this.AllParams.page = 1;
        this.getArticles(this.AllParams);
    }
    pageChanged(event) {
        this.AllParams.page = event.page;
        this.getArticles(this.AllParams);
    }
}
CategoryDetailsComponent.ɵfac = function CategoryDetailsComponent_Factory(t) { return new (t || CategoryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artilce_service__WEBPACK_IMPORTED_MODULE_1__["ArtilceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CategoryDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryDetailsComponent, selectors: [["app-category-details"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "mb-5"], ["aria-label", "Default select example", 1, "form-select", "mb-3", 3, "change"], ["accept", ""], ["value", ""], ["value", "false"], ["value", "true"], ["noArticles", ""], [1, "accept-article"], ["type", "search", "placeholder", "\u0628\u062D\u062B", 1, "mb-3", "form-control", 3, "ngModel", "ngModelChange"], [1, "table"], [1, "table-dark"], ["scope", "col"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "row", 2, "text-align", "left", "direction", "ltr"], [1, "col-xs-12", "col-12"], [3, "totalItems", "maxSize", "pageChanged"], [3, "routerLink"], ["scope", "row"], [1, "my-5"]], template: function CategoryDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryDetailsComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryDetailsComponent_ng_template_1_Template, 13, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_pipes_serach_article_title_pipe__WEBPACK_IMPORTED_MODULE_6__["SerachArticleTitlePipe"]], styles: [".accept-article[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #dfdfdf;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFEWiIsImZpbGUiOiJjYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY2VwdC1hcnRpY2xlIHtcclxuICAgIHRyIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "cwqw":
/*!***************************************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/unaccepted-articles/unaccepted-articles.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UnacceptedArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnacceptedArticlesComponent", function() { return UnacceptedArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_artilce_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/artilce.service */ "lWuh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_serach_article_title_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/serach-article-title.pipe */ "MxlZ");






function UnacceptedArticlesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
const _c0 = function (a1) { return ["/dashboard-page/main/article-details", a1]; };
function UnacceptedArticlesComponent_ng_template_1_ng_container_2_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const articleIndex_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, item_r7 == null ? null : item_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](articleIndex_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 3, item_r7 == null ? null : item_r7.title, 0, 50), " .... \u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644");
} }
function UnacceptedArticlesComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UnacceptedArticlesComponent_ng_template_1_ng_container_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0642\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UnacceptedArticlesComponent_ng_template_1_ng_container_2_tr_12_Template, 6, 9, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "serachArticleTitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 2, ctx_r3.unAcceptedArticles, ctx_r3.searchValue));
} }
function UnacceptedArticlesComponent_ng_template_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UnacceptedArticlesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0642\u0628\u0648\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UnacceptedArticlesComponent_ng_template_1_ng_container_2_Template, 14, 5, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UnacceptedArticlesComponent_ng_template_1_ng_template_3_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.unAcceptedArticles == null ? null : ctx_r2.unAcceptedArticles.length)("ngIfElse", _r4);
} }
class UnacceptedArticlesComponent {
    constructor(articlesService) {
        this.articlesService = articlesService;
        this.loading = true;
    }
    ngOnInit() {
        this.getUnacceptedArticles();
    }
    getUnacceptedArticles() {
        // this.articlesService.getUnAcceptedArticles().subscribe(
        //   (res:any) => {
        //     this.unAcceptedArticles=res?.Data
        //     this.loading=false
        //   } , err => {
        //     this.loading=false
        //   }
        // )
    }
}
UnacceptedArticlesComponent.ɵfac = function UnacceptedArticlesComponent_Factory(t) { return new (t || UnacceptedArticlesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_artilce_service__WEBPACK_IMPORTED_MODULE_1__["ArtilceService"])); };
UnacceptedArticlesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnacceptedArticlesComponent, selectors: [["app-unaccepted-articles"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "mb-5"], ["noArticles", ""], [1, "accept-article"], ["type", "search", "placeholder", "\u0628\u062D\u062B", 1, "mb-3", "form-control", 3, "ngModel", "ngModelChange"], [1, "overflow-auto"], [1, "table"], [1, "table-dark"], ["scope", "col"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["scope", "row"], [1, "my-5"]], template: function UnacceptedArticlesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UnacceptedArticlesComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UnacceptedArticlesComponent_ng_template_1_Template, 5, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_pipes_serach_article_title_pipe__WEBPACK_IMPORTED_MODULE_5__["SerachArticleTitlePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".accept-article[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #dfdfdf;\n  cursor: pointer;\n}\n\ntable[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHVuYWNjZXB0ZWQtYXJ0aWNsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFEWjs7QUFLQTtFQUFPLGdCQUFBO0FBRFAiLCJmaWxlIjoidW5hY2NlcHRlZC1hcnRpY2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NlcHQtYXJ0aWNsZSB7XHJcbiAgICB0ciB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxudGFibGUge21pbi13aWR0aDogNzAwcHg7fSJdfQ== */"] });


/***/ }),

/***/ "e/eO":
/*!*********************************************************!*\
  !*** ./src/app/screens/dashboard/guard/writer.guard.ts ***!
  \*********************************************************/
/*! exports provided: WriterGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriterGuard", function() { return WriterGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7sxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class WriterGuard {
    constructor(atuhService, router) {
        this.atuhService = atuhService;
        this.router = router;
        let token = localStorage.getItem("userInfo");
        if (atuhService.isLogin()) {
            atuhService.userProfile = JSON.parse(token);
        }
    }
    canActivate(route, state) {
        var _a, _b, _c, _d, _e, _f;
        if (this.atuhService.isLogin() && (((_b = (_a = this.atuhService.userProfile) === null || _a === void 0 ? void 0 : _a.role) === null || _b === void 0 ? void 0 : _b.type) == 'admin' || ((_d = (_c = this.atuhService.userProfile) === null || _c === void 0 ? void 0 : _c.role) === null || _d === void 0 ? void 0 : _d.type) == 'supervisor' || ((_f = (_e = this.atuhService.userProfile) === null || _e === void 0 ? void 0 : _e.role) === null || _f === void 0 ? void 0 : _f.type) == 'editor'))
            return true;
        else {
            this.atuhService.logOut();
            this.router.navigate(['dashboard-page/main/login']);
            return false;
        }
    }
}
WriterGuard.ɵfac = function WriterGuard_Factory(t) { return new (t || WriterGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
WriterGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WriterGuard, factory: WriterGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fLXO":
/*!*******************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/all-users/all-users.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/table-filter.pipe */ "60sm");








function AllUsersComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
function AllUsersComponent_ng_template_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AllUsersComponent_ng_template_1_div_7_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r7.tableFilterValue = _r6.value; return ctx_r7.searchValue = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0627\u0644\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0623\u062F\u0645\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0645\u0634\u0631\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0643\u0627\u062A\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0645\u062D\u0631\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllUsersComponent_ng_template_1_div_7_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.searchValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.searchValue);
} }
function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_1_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
} }
function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0623\u0643\u064A\u062F \u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r20.modalRef == null ? null : ctx_r20.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r22.modalRef == null ? null : ctx_r22.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const user_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.deleteUserr(user_r11 == null ? null : user_r11._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_1_i_11_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.deleteUserLoading);
} }
function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_3_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
} }
function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062A\u0639\u062F\u064A\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r27.modalRef == null ? null : ctx_r27.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r29.modalRef == null ? null : ctx_r29.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const user_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.updateUserPassword(user_r11 == null ? null : user_r11._id, _r25.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u062A\u0623\u0643\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_3_i_13_Template, 1, 0, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.updateUserNameLoading);
} }
function AllUsersComponent_ng_template_1_table_9_tr_16_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.openModal(_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllUsersComponent_ng_template_1_table_9_tr_16_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllUsersComponent_ng_template_1_table_9_tr_16_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.openModal(_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllUsersComponent_ng_template_1_table_9_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_1_Template, 12, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AllUsersComponent_ng_template_1_table_9_tr_16_ng_template_3_Template, 14, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AllUsersComponent_ng_template_1_table_9_tr_16_i_14_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllUsersComponent_ng_template_1_table_9_tr_16_i_16_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-warning", user_r11 == null ? null : user_r11.banned);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r12 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r11 == null ? null : user_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r11 == null ? null : user_r11.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((user_r11 == null ? null : user_r11.role == null ? null : user_r11.role.type) == "admin" ? "\u0623\u062F\u0645\u0646" : (user_r11 == null ? null : user_r11.role == null ? null : user_r11.role.type) == "supervisor" ? "\u0645\u0634\u0631\u0641" : (user_r11 == null ? null : user_r11.role == null ? null : user_r11.role.type) == "writer" ? "\u0643\u0627\u062A\u0628" : (user_r11 == null ? null : user_r11.role == null ? null : user_r11.role.type) == "editor" ? "\u0645\u062D\u0631\u0631" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(user_r11 == null ? null : user_r11.banned));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(user_r11 == null ? null : user_r11.banned));
} }
function AllUsersComponent_ng_template_1_table_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0627\u0644\u0623\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0627\u0644\u0623\u064A\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u062A\u0639\u062F\u064A\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u062D\u0630\u0641 \u0627\u0644\u062D\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllUsersComponent_ng_template_1_table_9_tr_16_Template, 17, 8, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "tableFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](17, 1, ctx_r4.users, ctx_r4.tableFilterValue, ctx_r4.searchValue));
} }
function AllUsersComponent_ng_template_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AllUsersComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0627\u0636\u0627\u0641\u0629 \u0645\u0633\u062A\u062E\u062F\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AllUsersComponent_ng_template_1_div_7_Template, 16, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AllUsersComponent_ng_template_1_table_9_Template, 18, 5, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AllUsersComponent_ng_template_1_p_10_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.users == null ? null : ctx_r2.users.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.users == null ? null : ctx_r2.users.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r2.users == null ? null : ctx_r2.users.length));
} }
class AllUsersComponent {
    constructor(authservice, modalService, toastr) {
        this.authservice = authservice;
        this.modalService = modalService;
        this.toastr = toastr;
        this.loading = true;
        this.deleteUserLoading = false;
        this.tableFilterValue = "-1";
        this.updateUserNameLoading = false;
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    ngOnInit() {
        this.getAllUsers();
    }
    getAllUsers() {
        this.loading = true;
        this.authservice.getAllUsers().subscribe((res) => {
            console.log(res);
            this.users = res === null || res === void 0 ? void 0 : res.data;
            this.loading = false;
            this.deleteUserLoading = false;
            this.updateUserNameLoading = false;
        }, err => {
            this.loading = false;
            this.deleteUserLoading = false;
            this.updateUserNameLoading = false;
        });
    }
    deleteUserr(id) {
        this.deleteUserLoading = true;
        this.authservice.deleteUser(id).subscribe(res => {
            this.toastr.success("تم الحذف بنجاح");
            this.getAllUsers();
            this.modalRef.hide();
        }, err => {
            this.deleteUserLoading = false;
        });
    }
    updateUserPassword(userId, password) {
        if ((password.trim().length > 0)) {
            this.updateUserNameLoading = true;
            this.updateUser(userId, { password });
        }
        else {
            this.toastr.error('أدخل كلمة المرور');
        }
    }
    updateUser(id, value) {
        this.authservice.updateUser(id, value).subscribe(res => {
            this.toastr.success('تم التعديل بنجاح');
            this.updateUserNameLoading = false;
            this.modalRef.hide();
        }, err => {
            this.updateUserNameLoading = false;
        });
    }
}
AllUsersComponent.ɵfac = function AllUsersComponent_Factory(t) { return new (t || AllUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AllUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllUsersComponent, selectors: [["app-all-users"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "all-users"], [1, "mb-5"], [1, "btn", "btn-secondary", "mb-2"], ["routerLink", "/dashboard-page/main/add-user", 1, "text-white"], [1, "fas", "fa-plus"], ["class", "d-flex mb-2", 4, "ngIf"], [1, "overflow-auto"], ["class", "table", 4, "ngIf"], ["class", "my-5", 4, "ngIf"], [1, "d-flex", "mb-2"], [1, "form-group"], [1, "form-select", 3, "change"], ["select", ""], ["value", "-1"], ["value", "admin"], ["value", "supervisor"], ["value", "writer"], ["value", "editor"], ["placeholder", "\u0628\u062D\u062B \u0628\u0627\u0644\u0627\u0633\u0645", "type", "search", 1, "mx-3", "form-control", 3, "ngModel", "ngModelChange"], [1, "table"], [1, "table-dark"], ["scope", "col"], [3, "table-warning", 4, "ngFor", "ngForOf"], ["deleteUser", ""], ["updatePassword", ""], ["scope", "row"], ["class", "far fa-edit", 3, "click", 4, "ngIf"], ["class", "far fa-trash-alt", 3, "click", 4, "ngIf"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body"], [1, "btn", "btn-light", 3, "click"], [1, "btn", "btn-secondary", "mx-3", 3, "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "fas", "fa-circle-notch", "fa-spin"], ["type", "text", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629", 1, "mb-3", "form-control"], ["pass", ""], [1, "far", "fa-edit", 3, "click"], [1, "far", "fa-trash-alt", 3, "click"], [1, "my-5"]], template: function AllUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllUsersComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllUsersComponent_ng_template_1_Template, 11, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_pipes_table_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["TableFilterPipe"]], styles: ["table[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: #FF4C3B;\n}\ntable[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n  .modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFsbC11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUFBUjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBR0E7RUFBTyxnQkFBQTtBQUNQO0FBQ0k7RUFDSSwrQ0FBQTtBQUVSIiwiZmlsZSI6ImFsbC11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgaSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNEMzQjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxudGFibGUge21pbi13aWR0aDogNzAwcHg7fVxyXG46Om5nLWRlZXAge1xyXG4gICAgLm1vZGFsLWhlYWRlciAuYnRuLWNsb3NlIHtcclxuICAgICAgICBtYXJnaW46IC0wLjVyZW0gYXV0byAtMC41cmVtIC0wLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "iGyJ":
/*!*****************************************************************!*\
  !*** ./src/app/screens/dashboard/pipes/search-category.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: SearchCategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCategoryPipe", function() { return SearchCategoryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchCategoryPipe {
    transform(categories, searchValue) {
        if (!searchValue)
            return categories;
        return categories.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
}
SearchCategoryPipe.ɵfac = function SearchCategoryPipe_Factory(t) { return new (t || SearchCategoryPipe)(); };
SearchCategoryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchCategory", type: SearchCategoryPipe, pure: true });


/***/ }),

/***/ "l62Z":
/*!***********************************************************************!*\
  !*** ./src/app/screens/dashboard/components/login/login.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function LoginComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0628\u0631\u062C\u0627\u0621 \u0627\u062F\u062E\u0627\u0621 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0628\u0631\u062C\u0627\u0621 \u0627\u062F\u062E\u0627\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 11);
} }
function LoginComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r3.error), " ");
} }
class LoginComponent {
    constructor(fb, toastrService, authService) {
        this.fb = fb;
        this.toastrService = toastrService;
        this.authService = authService;
        this.loading = false;
    }
    ngOnInit() {
        this.returnLoginForm();
    }
    returnLoginForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]]
        });
    }
    login(value) {
        this.loading = true;
        this.authService.login(value).subscribe((res) => {
            this.loading = false;
            this.error = '';
            localStorage.setItem('timesToken', res === null || res === void 0 ? void 0 : res.token);
            localStorage.setItem('userInfo', JSON.stringify(res));
            this.authService.userProfile = res;
            this.loginForm.reset();
            this.toastrService.success("تم تسجيل الدخول بنجاح");
            console.log(res);
        }, (err) => {
            var _a;
            this.loading = false;
            this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
            console.log(err);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 6, consts: [[1, "login"], [1, "mb-5"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4"], ["formControlName", "email", "type", "text", "placeholder", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", 1, "form-control"], ["class", "mt-1 text-danger", 4, "ngIf"], ["formControlName", "password", "type", "password", "placeholder", "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", 1, "form-control"], [1, "btn", "btn-secondary", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "text-danger py-3", 4, "ngIf"], [1, "mt-1", "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "text-danger", "py-3"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.login(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LoginComponent_p_6_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LoginComponent_p_9_Template, 2, 0, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, LoginComponent_i_13_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, LoginComponent_p_14_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.invalidContetn) || (ctx.loginForm.controls.email == null ? null : ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.required)) && ctx.loginForm.controls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors.invalidContetn) || (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors.required)) && ctx.loginForm.controls.password.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "mxpT":
/*!********************************************************!*\
  !*** ./src/app/screens/dashboard/guard/admin.guard.ts ***!
  \********************************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7sxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminGuard {
    constructor(atuhService, router) {
        this.atuhService = atuhService;
        this.router = router;
        // let token = localStorage.getItem("userInfo")
        // if(atuhService.isLogin()) {
        //   atuhService.userProfile=JSON.parse(token)
        // }
    }
    canActivate(route, state) {
        var _a, _b, _c, _d;
        if (this.atuhService.isLogin() && (((_b = (_a = this.atuhService.userProfile) === null || _a === void 0 ? void 0 : _a.role) === null || _b === void 0 ? void 0 : _b.type) == 'admin' || ((_d = (_c = this.atuhService.userProfile) === null || _c === void 0 ? void 0 : _c.role) === null || _d === void 0 ? void 0 : _d.type) == 'supervisor'))
            return true;
        else {
            this.atuhService.logOut();
            this.router.navigate(['dashboard-page/main/login']);
            return false;
        }
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tHNM":
/*!*********************************************************!*\
  !*** ./src/app/screens/dashboard/guard/editor.guard.ts ***!
  \*********************************************************/
/*! exports provided: EditorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorGuard", function() { return EditorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7sxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class EditorGuard {
    constructor(atuhService, router) {
        this.atuhService = atuhService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.atuhService.isLogin())
            return true;
        else {
            this.atuhService.logOut();
            this.router.navigate(['dashboard-page/main/login']);
            return false;
        }
    }
}
EditorGuard.ɵfac = function EditorGuard_Factory(t) { return new (t || EditorGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditorGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditorGuard, factory: EditorGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uGeA":
/*!***************************************************************!*\
  !*** ./src/app/screens/dashboard/services/writers.service.ts ***!
  \***************************************************************/
/*! exports provided: WritersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritersService", function() { return WritersService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WritersService {
    constructor(http) {
        this.http = http;
    }
    addWriter(body) {
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}writer`, body);
    }
    editWriter(body, id) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}writer/${id}`, body);
    }
    getAllWriters() {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}writer?limit=10000`);
    }
    deleteWriter(id) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}writer/${id}`);
    }
}
WritersService.ɵfac = function WritersService_Factory(t) { return new (t || WritersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
WritersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WritersService, factory: WritersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vSwq":
/*!*************************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-category/add-category.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "7sxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AddCategoryComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AddCategoryComponent_ng_template_1_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u0627\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u0641\u0631\u0639\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_ng_template_1_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_ng_template_1_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r11 == null ? null : item_r11.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r11 == null ? null : item_r11.name);
} }
function AddCategoryComponent_ng_template_1_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_ng_template_1_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_ng_template_1_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AddCategoryComponent_ng_template_1_i_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 28);
} }
function AddCategoryComponent_ng_template_1_p_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.error, " ");
} }
function AddCategoryComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AddCategoryComponent_ng_template_1_button_4_Template, 4, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddCategoryComponent_ng_template_1_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.createCategory(ctx_r12.addCategoryForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddCategoryComponent_ng_template_1_p_8_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AddCategoryComponent_ng_template_1_option_11_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Meta Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AddCategoryComponent_ng_template_1_p_18_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Meta Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AddCategoryComponent_ng_template_1_p_23_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Meta Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, AddCategoryComponent_ng_template_1_p_28_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AddCategoryComponent_ng_template_1_i_32_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, AddCategoryComponent_ng_template_1_p_33_Template, 2, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.update ? "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0642\u0633\u0645" : "\u0627\u0636\u0627\u0641\u0629 \u0642\u0633\u0645 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "admin" || (ctx_r2.authService.userProfile == null ? null : ctx_r2.authService.userProfile.role == null ? null : ctx_r2.authService.userProfile.role.type) == "supervisor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.addCategoryForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addCategoryForm.controls.name == null ? null : ctx_r2.addCategoryForm.controls.name.errors) != null && ctx_r2.addCategoryForm.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.selectboxOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addCategoryForm.controls.title == null ? null : ctx_r2.addCategoryForm.controls.title.errors) != null && ctx_r2.addCategoryForm.controls.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addCategoryForm.controls.keywords == null ? null : ctx_r2.addCategoryForm.controls.keywords.errors) != null && ctx_r2.addCategoryForm.controls.keywords.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.addCategoryForm.controls.desc == null ? null : ctx_r2.addCategoryForm.controls.desc.errors) != null && ctx_r2.addCategoryForm.controls.desc.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.addCategoryForm.invalid || ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.error);
} }
class AddCategoryComponent {
    constructor(fb, categoryService, authService, actvatedRout, router, toasterService) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.authService = authService;
        this.actvatedRout = actvatedRout;
        this.router = router;
        this.toasterService = toasterService;
        this.selectboxOptions = [
            { type: "", name: "نوع القسم" },
            { type: "1", name: "أخبار" },
            { type: "2", name: "سياسة" },
            { type: "3", name: "حوادث" },
            { type: "4", name: "رياضة" },
            { type: "5", name: "فن" },
            { type: "6", name: "اخبار العالم" },
            { type: "7", name: "العالم العربي" },
            { type: "8", name: "التايمز EG" },
            { type: "9", name: "مقالات الرأي" },
            { type: "10", name: "فيديو" },
            { type: "11", name: "محافظات" },
            { type: "12", name: "اقتصاد وبورصة" },
            { type: "13", name: "تحقيقات وتقارير" },
            { type: "14", name: "مشاهير العالم" },
            { type: "15", name: "تلفزيون" },
            { type: "16", name: "صحة وطب" },
            { type: "17", name: "مرأة ومنوعات" },
            { type: "18", name: "البومات التايمز" },
            { type: "19", name: "تعليم" },
            { type: "20", name: "دين وفتوي" },
            { type: "21", name: "تكنولوجيا وسيارات" },
            { type: "22", name: "منوعات" },
            { type: "23", name: "اخري" },
        ];
        this.getDataLoading = true;
        this.update = false;
        this.loading = false;
    }
    ngOnInit() {
        this.createAddCategoryForm();
        this.actvatedRout.queryParamMap.subscribe((params) => {
            if (Object.keys(params.params).length) {
                this.update = true;
                this.categoryId = params.params.id;
                this.categoryService.getCategoryById(params.params.id).subscribe(res => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    console.log(res);
                    this.categoryById = res;
                    this.addCategoryForm.patchValue({
                        name: (_a = this.categoryById) === null || _a === void 0 ? void 0 : _a.title,
                        seqHomepage: (_b = this.categoryById) === null || _b === void 0 ? void 0 : _b.seqHomepage,
                        seq: (_c = this.categoryById) === null || _c === void 0 ? void 0 : _c.seq,
                        title: (_e = (_d = this.categoryById) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.title,
                        keywords: (_g = (_f = this.categoryById) === null || _f === void 0 ? void 0 : _f.metaData) === null || _g === void 0 ? void 0 : _g.keywords,
                        desc: (_j = (_h = this.categoryById) === null || _h === void 0 ? void 0 : _h.metaData) === null || _j === void 0 ? void 0 : _j.desc
                    });
                    this.getDataLoading = false;
                }, err => {
                });
            }
            else {
                this.update = false;
                this.getDataLoading = false;
            }
        });
    }
    createAddCategoryForm() {
        return this.addCategoryForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            keywords: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_1__["emptyContent"]]],
            seqHomepage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            seq: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    createCategory(value) {
        if (this.addCategoryForm.valid) {
            let categoryValue = {
                title: value.name,
                seq: value.seq,
                seqHomepage: value.seqHomepage,
                type: 'all',
                metaData: {
                    title: value.title,
                    desc: value.desc,
                    keywords: value.keywords,
                }
            };
            this.loading = true;
            if (this.update) {
                this.categoryService.updateCategories(categoryValue, this.categoryId).subscribe(res => {
                    this.loading = false;
                    this.toasterService.success("تم التعديل بنجاح");
                    this.router.navigate(["/dashboard-page/main/categories"]);
                }, err => {
                    this.loading = false;
                });
            }
            else {
                this.categoryService.addCategories(categoryValue).subscribe(res => {
                    this.error = '';
                    this.loading = false;
                    this.toasterService.success("تم الاضافة بنجاح");
                    this.router.navigate(["/dashboard-page/main/categories"]);
                }, err => {
                    var _a;
                    this.loading = false;
                    this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
                });
            }
        }
    }
}
AddCategoryComponent.ɵfac = function AddCategoryComponent_Factory(t) { return new (t || AddCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AddCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddCategoryComponent, selectors: [["app-add-category"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["catContent", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "add-category"], [1, "my-3"], ["class", "btn btn-secondary ms-2", 4, "ngIf"], [1, "mt-5", 3, "formGroup", "ngSubmit"], [1, "form-group", "mb-4"], ["formControlName", "name", "type", "text", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0642\u0633\u0645", 1, "form-control"], ["class", "my-2 text-danger", 4, "ngIf"], ["formControlName", "seqHomepage", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "1", "placeholder", "\u062A\u0631\u062A\u064A\u0628 \u0638\u0647\u0648\u0631 \u0627\u0644\u0642\u0633\u0645 \u0641\u064A \u0627\u0644\u0642\u0627\u0626\u0645\u0629 ", "formControlName", "seq", 1, "form-control"], [1, "form-group", "my-4"], ["for", "", 1, "mb-2"], ["formControlName", "title", "type", "text", 1, "form-control"], ["formControlName", "keywords", "type", "text", 1, "form-control"], ["formControlName", "desc", "type", "text", 1, "form-control"], [1, "mt-5"], ["type", "submit", 1, "btn-secondary", "btn", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "text-danger my-3", 4, "ngIf"], [1, "btn", "btn-secondary", "ms-2"], ["routerLink", "/dashboard-page/main/add-sub", 1, "text-white"], [1, "fas", "fa-plus"], [1, "my-2", "text-danger"], [3, "value"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "text-danger", "my-3"]], template: function AddCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AddCategoryComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AddCategoryComponent_ng_template_1_Template, 34, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getDataLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "y2/4":
/*!*********************************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-advertisment/add-advertisment.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddAdvertismentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdvertismentComponent", function() { return AddAdvertismentComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/emptyInput */ "6ktk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _services_addvertisment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/addvertisment.service */ "cY7r");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");













function AddAdvertismentComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AddAdvertismentComponent_ng_template_1_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddAdvertismentComponent_ng_template_1_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddAdvertismentComponent_ng_template_1_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0647\u0630\u0627 \u0627\u0644\u062D\u0642\u0644 \u0645\u0637\u0644\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddAdvertismentComponent_ng_template_1_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 34);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r8.adImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddAdvertismentComponent_ng_template_1_ng_container_35_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddAdvertismentComponent_ng_template_1_ng_container_35_div_1_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const i_r14 = ctx.index; const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r16.selectCategory(_r15.value, i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", item_r13 == null ? null : item_r13.checked)("value", item_r13 == null ? null : item_r13._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r13 == null ? null : item_r13.title, " ");
} }
function AddAdvertismentComponent_ng_template_1_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddAdvertismentComponent_ng_template_1_ng_container_35_div_1_Template, 5, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.categories);
} }
function AddAdvertismentComponent_ng_template_1_i_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 38);
} }
function AddAdvertismentComponent_ng_template_1_p_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r11.error), " ");
} }
function AddAdvertismentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0623\u0636\u0627\u0641\u0629 \u0623\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AddAdvertismentComponent_ng_template_1_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.submitAdvertismentForm(ctx_r18.addAdvertismentForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u0644\u064A\u0646\u0643 \u0627\u0644\u0627\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddAdvertismentComponent_ng_template_1_p_8_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u062A\u0627\u0631\u064A\u062E \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0627\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AddAdvertismentComponent_ng_template_1_p_13_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u062A\u0627\u0631\u064A\u062E \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0627\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddAdvertismentComponent_ng_template_1_p_18_Template, 2, 0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddAdvertismentComponent_ng_template_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); ctx_r20.openModal(_r3); return ctx_r20.getImages(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u0635\u0648\u0631\u0629 \u0627\u0644\u0627\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AddAdvertismentComponent_ng_template_1_img_23_Template, 1, 1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0627\u0644\u0635\u0641\u062D\u0627\u062A \u0627\u0644\u062A\u064A \u0633\u064A\u0638\u0647\u0631 \u0641\u064A\u0647\u0627 \u0627\u0644\u0627\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " \u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " \u0635\u0641\u062D\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0642\u0627\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddAdvertismentComponent_ng_template_1_ng_container_35_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u0627\u0645\u0627\u0643\u0646 \u0638\u0647\u0648\u0631 \u0627\u0644\u0627\u0639\u0644\u0627\u0646 \u062F\u0627\u062E\u0644 \u0627\u0644\u0635\u0641\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " \u0627\u0644\u062C\u0627\u0646\u0628 \u0627\u0644\u0627\u064A\u0633\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " \u0627\u0644\u062C\u0627\u0646\u0628 \u0627\u0644\u0627\u064A\u0645\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " \u0628\u062C\u0627\u0646\u0628 \u0627\u0644\u0644\u0648\u062C\u0648 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0631\u0642\u0645 \u0648\u0627\u062D\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0631\u0642\u0645 \u0627\u062A\u0646\u064A\u0646 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0631\u0642\u0645 \u062A\u0644\u0627\u062A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, " \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0631\u0642\u0645 \u0627\u0631\u0628\u0639\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0631\u0642\u0645 \u062E\u0645\u0633\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0631\u0642\u0645 \u0633\u062A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0631\u0642\u0645 \u0633\u0628\u0639\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " \u062A\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, AddAdvertismentComponent_ng_template_1_i_81_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, AddAdvertismentComponent_ng_template_1_p_82_Template, 3, 3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.addAdvertismentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r2.addAdvertismentForm.controls.link == null ? null : ctx_r2.addAdvertismentForm.controls.link.errors) != null && ctx_r2.addAdvertismentForm.controls.link.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r2.addAdvertismentForm.controls.start == null ? null : ctx_r2.addAdvertismentForm.controls.start.errors) != null && ctx_r2.addAdvertismentForm.controls.start.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r2.addAdvertismentForm.controls.end == null ? null : ctx_r2.addAdvertismentForm.controls.end.errors) != null && ctx_r2.addAdvertismentForm.controls.end.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.adImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.categories == null ? null : ctx_r2.categories.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.addAdvertismentForm.invalid || !ctx_r2.adImageId || ctx_r2.createAdLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.createAdLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.error);
} }
function AddAdvertismentComponent_ng_template_3_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddAdvertismentComponent_ng_template_3_div_9_div_1_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const item_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r27.selectAdImeg(item_r26 == null ? null : item_r26.file == null ? null : item_r26.file.src, item_r26 == null ? null : item_r26._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r26 == null ? null : item_r26.file == null ? null : item_r26.file.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function AddAdvertismentComponent_ng_template_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddAdvertismentComponent_ng_template_3_div_9_div_1_Template, 3, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r22.allImages);
} }
function AddAdvertismentComponent_ng_template_3_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading.....");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddAdvertismentComponent_ng_template_3_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "pagination", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChanged", function AddAdvertismentComponent_ng_template_3_div_12_Template_pagination_pageChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r29.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("totalItems", ctx_r24.totalCount)("maxSize", ctx_r24.maxSize);
} }
function AddAdvertismentComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0623\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0627\u0644\u0627\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddAdvertismentComponent_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.modalRef == null ? null : ctx_r31.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function AddAdvertismentComponent_ng_template_3_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.getPageOneOnBlur(_r21.value); })("keyup.enter", function AddAdvertismentComponent_ng_template_3_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.searchImages(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddAdvertismentComponent_ng_template_3_div_9_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddAdvertismentComponent_ng_template_3_p_10_Template, 2, 0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddAdvertismentComponent_ng_template_3_div_12_Template, 2, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.imagesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.totalCount > 10);
} }
class AddAdvertismentComponent {
    constructor(fb, activatedRoute, modalService, datePipe, http, router, toastr, categoriesService, adService) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.categoriesService = categoriesService;
        this.adService = adService;
        this.imgLoading = false;
        this.createAdLoading = false;
        this.categories = [];
        this.chosenCategories = [];
        this.types = [];
        this.seq = [];
        this.all = false;
        this.loading = true;
        this.update = false;
        this.imagesLoading = false;
        this.maxSize = 5;
    }
    ngOnInit() {
        this.advertismentForm();
        this.activatedRoute.queryParams.subscribe(params => {
            if (this.activatedRoute.snapshot.queryParams['id']) {
                this.loading = true;
                this.adId = params === null || params === void 0 ? void 0 : params.id;
                this.adService.getAdById(this.adId).subscribe((res) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                    if ((_a = res === null || res === void 0 ? void 0 : res.categories) === null || _a === void 0 ? void 0 : _a.length) {
                        for (let i = 0; i < ((_b = res === null || res === void 0 ? void 0 : res.categories) === null || _b === void 0 ? void 0 : _b.length); i++) {
                            this.chosenCategories.push((_c = res === null || res === void 0 ? void 0 : res.categories[i]) === null || _c === void 0 ? void 0 : _c._id);
                        }
                    }
                    console.log(this.chosenCategories);
                    if ((_d = res === null || res === void 0 ? void 0 : res.types) === null || _d === void 0 ? void 0 : _d.length) {
                        for (let i = 0; i < ((_e = res === null || res === void 0 ? void 0 : res.types) === null || _e === void 0 ? void 0 : _e.length); i++) {
                            if ((res === null || res === void 0 ? void 0 : res.types[i]) == 'homepage') {
                                this.addAdvertismentForm.patchValue({
                                    homepage: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.types[i]) == 'articledetails') {
                                this.addAdvertismentForm.patchValue({
                                    articleDetails: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.types[i]) == 'left') {
                                this.addAdvertismentForm.patchValue({
                                    left: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.types[i]) == 'right') {
                                this.addAdvertismentForm.patchValue({
                                    right: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.types[i]) == 'logo') {
                                this.addAdvertismentForm.patchValue({
                                    logo: true
                                });
                            }
                        }
                    }
                    if ((_f = res === null || res === void 0 ? void 0 : res.seq) === null || _f === void 0 ? void 0 : _f.length) {
                        for (let i = 0; i < ((_g = res === null || res === void 0 ? void 0 : res.seq) === null || _g === void 0 ? void 0 : _g.length); i++) {
                            if ((res === null || res === void 0 ? void 0 : res.seq[i]) == 1) {
                                this.addAdvertismentForm.patchValue({
                                    areaone: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.seq[i]) == 2) {
                                this.addAdvertismentForm.patchValue({
                                    areatwo: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.seq[i]) == 3) {
                                this.addAdvertismentForm.patchValue({
                                    areathree: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.seq[i]) == 4) {
                                this.addAdvertismentForm.patchValue({
                                    areafour: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.seq[i]) == 5) {
                                this.addAdvertismentForm.patchValue({
                                    areafive: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.seq[i]) == 6) {
                                this.addAdvertismentForm.patchValue({
                                    areasix: true
                                });
                            }
                            if ((res === null || res === void 0 ? void 0 : res.seq[i]) == 7) {
                                this.addAdvertismentForm.patchValue({
                                    areaseven: true
                                });
                            }
                        }
                    }
                    this.getCategoriesName();
                    this.addAdvertismentForm.patchValue({
                        link: res === null || res === void 0 ? void 0 : res.link,
                        start: this.datePipe.transform(res === null || res === void 0 ? void 0 : res.start, 'yyy-MM-dd'),
                        end: this.datePipe.transform(res === null || res === void 0 ? void 0 : res.end, 'yyy-MM-dd'),
                    });
                    this.adImageUrl = (_j = (_h = res === null || res === void 0 ? void 0 : res.image) === null || _h === void 0 ? void 0 : _h.file) === null || _j === void 0 ? void 0 : _j.src;
                    this.adImageId = (_k = res === null || res === void 0 ? void 0 : res.image) === null || _k === void 0 ? void 0 : _k._id;
                    console.log(res);
                }, err => {
                    console.log(err);
                    this.loading = false;
                });
            }
            else {
                this.getCategoriesName();
                this.loading = false;
            }
        });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    getImages(page) {
        this.imagesLoading = true;
        this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}file?page=${page}&type=image&sort=createdAt:-1`).subscribe((res) => {
            console.log(res);
            this.allImages = res === null || res === void 0 ? void 0 : res.data;
            this.totalCount = res === null || res === void 0 ? void 0 : res.totalCount;
            this.imagesLoading = false;
        });
    }
    pageChanged(event) {
        this.page = event.page;
        this.getImages(this.page);
    }
    selectAdImeg(imageSrc, imageId) {
        this.adImageId = imageId;
        this.adImageUrl = imageSrc;
        this.modalRef.hide();
    }
    searchImages(input) {
        if (input.value && input.value.trim().length > 0) {
            this.imagesLoading = true;
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}file?limit=10000&type=image&keyword=${input.value}`).subscribe((res) => {
                console.log(res);
                this.allImages = res === null || res === void 0 ? void 0 : res.data;
                this.totalCount = 0;
                this.imagesLoading = false;
            });
        }
    }
    getPageOneOnBlur(value) {
        if (value.length == 0) {
            this.getImages(1);
        }
    }
    getCategoriesName() {
        this.categoriesService.getCategories().subscribe((categoriesNames) => {
            var _a, _b, _c, _d, _e;
            this.categories = categoriesNames.data;
            if ((_a = this.categories) === null || _a === void 0 ? void 0 : _a.length) {
                for (let i = 0; i < ((_b = this.categories) === null || _b === void 0 ? void 0 : _b.length); i++) {
                    if ((_c = this.chosenCategories) === null || _c === void 0 ? void 0 : _c.length) {
                        for (let j = 0; j < ((_d = this.chosenCategories) === null || _d === void 0 ? void 0 : _d.length); j++) {
                            if (((_e = this.categories[i]) === null || _e === void 0 ? void 0 : _e._id) == this.chosenCategories[j]) {
                                this.categories[i].checked = true;
                                break;
                            }
                            else {
                                this.categories[i].checked = false;
                            }
                        }
                    }
                }
            }
            this.loading = false;
            console.log(categoriesNames);
        }, err => { });
    }
    selectCategory(id, index) {
        var _a, _b;
        let exisit = false;
        if ((_a = this.chosenCategories) === null || _a === void 0 ? void 0 : _a.length) {
            for (let i = 0; i < ((_b = this.chosenCategories) === null || _b === void 0 ? void 0 : _b.length); i++) {
                if (this.chosenCategories[i] == id) {
                    exisit = true;
                    this.chosenCategories.splice(i, 1);
                    this.categories[index].checked = false;
                    break;
                }
            }
        }
        if (!exisit) {
            this.chosenCategories.push(id);
            this.categories[index].checked = true;
        }
        console.log(this.chosenCategories);
    }
    advertismentForm() {
        return this.addAdvertismentForm = this.fb.group({
            link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _validators_emptyInput__WEBPACK_IMPORTED_MODULE_2__["emptyContent"]]],
            start: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            end: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            homepage: [''],
            articleDetails: [''],
            left: [''],
            right: [''],
            logo: [''],
            areaone: [''],
            areatwo: [''],
            areathree: [''],
            areafour: [''],
            areafive: [''],
            areasix: [''],
            areaseven: [''],
        });
    }
    submitAdvertismentForm(value) {
        if (this.addAdvertismentForm.valid && this.adImageId) {
            this.createAdLoading = true;
            if (value.homepage == true)
                this.types.push('homepage');
            if (value.articleDetails == true)
                this.types.push('articledetails');
            if (value.left == true)
                this.types.push('left');
            if (value.right == true)
                this.types.push('right');
            if (value.logo == true)
                this.types.push('logo');
            if (value.areaone == true)
                this.seq.push(1);
            if (value.areatwo == true)
                this.seq.push(2);
            if (value.areathree == true)
                this.seq.push(3);
            if (value.areafour == true)
                this.seq.push(4);
            if (value.areafive == true)
                this.seq.push(5);
            if (value.areasix == true)
                this.seq.push(6);
            if (value.areaseven == true)
                this.seq.push(7);
            let body = {
                link: value.link,
                seq: this.seq,
                types: this.types,
                categories: this.chosenCategories,
                start: value.start,
                end: value.end
            };
            if (this.adImageId)
                body.image = this.adImageId;
            if (this.adId) {
                this.adService.editAdvertisment(this.adId, body).subscribe(res => {
                    console.log(res);
                    this.error = '';
                    this.toastr.success("تم التعديل");
                    this.router.navigate(['/dashboard-page/main/advertisment']);
                }, err => {
                    var _a;
                    this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
                    this.createAdLoading = false;
                });
            }
            else {
                this.adService.addAdvertisment(body).subscribe(res => {
                    console.log(res);
                    this.error = '';
                    this.toastr.success("تم الاضافة");
                    this.router.navigate(['/dashboard-page/main/advertisment']);
                }, err => {
                    var _a;
                    this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
                    this.createAdLoading = false;
                });
            }
        }
    }
}
AddAdvertismentComponent.ɵfac = function AddAdvertismentComponent_Factory(t) { return new (t || AddAdvertismentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_addvertisment_service__WEBPACK_IMPORTED_MODULE_10__["AddvertismentService"])); };
AddAdvertismentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddAdvertismentComponent, selectors: [["app-add-advertisment"]], decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["content", ""], ["adImageModal", ""], [1, "d-flex", "my-5", "justify-content-center"], [1, "lds-ring"], [1, "add-category"], [1, "mb-5"], [3, "formGroup", "ngSubmit"], [1, "mb-4"], ["for", ""], ["formControlName", "link", "placeholder", "\u0644\u064A\u0646\u0643 \u0627\u0644\u0627\u0639\u0644\u0627\u0646", "type", "text", 1, "form-control"], ["class", "text-danger py-2", 4, "ngIf"], ["formControlName", "start", "placeholder", "\u062A\u0627\u0631\u064A\u062E \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0627\u0639\u0644\u0627\u0646", "type", "date", 1, "form-control"], ["formControlName", "end", "placeholder", "\u062A\u0627\u0631\u064A\u062E \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0627\u0639\u0644\u0627\u0646", "type", "date", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["style", "width: 200px;object-fit: cover;", "alt", "", 3, "src", 4, "ngIf"], [1, "form-check"], ["formControlName", "homepage", "type", "checkbox", "value", "true", 1, "form-check-input"], [1, "form-check-label"], ["formControlName", "articleDetails", "type", "checkbox", "value", "true", 1, "form-check-input"], [4, "ngIf"], ["formControlName", "left", "type", "checkbox", "value", "true", 1, "form-check-input"], ["formControlName", "right", "type", "checkbox", "value", "true", 1, "form-check-input"], ["formControlName", "logo", "type", "checkbox", "value", "true", 1, "form-check-input"], ["formControlName", "areaone", "type", "checkbox", "value", "true", 1, "form-check-input"], ["formControlName", "areatwo", "type", "checkbox", "value", "", 1, "form-check-input"], ["formControlName", "areathree", "type", "checkbox", "value", "reue", 1, "form-check-input"], ["formControlName", "areafour", "type", "checkbox", "value", "true", 1, "form-check-input"], ["formControlName", "areafive", "type", "checkbox", "value", "true", 1, "form-check-input"], ["formControlName", "areasix", "type", "checkbox", "value", "true", 1, "form-check-input"], ["formControlName", "areaseven", "type", "checkbox", "value", "true", 1, "form-check-input"], [1, "btn", "btn-secondary", "w-100", 3, "disabled"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], [1, "text-danger", "py-2"], ["alt", "", 2, "width", "200px", "object-fit", "cover", 3, "src"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "value", "click"], ["catInput", ""], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", "pull-right", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "modal-body", 2, "max-height", "400px", "overflow", "auto"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0639\u0646 \u0635\u0648\u0631\u0629", 1, "form-control", "mb-3", 3, "keyup", "keyup.enter"], ["inputSearchForImage", ""], ["class", "row", 4, "ngIf"], ["style", "text-align:center;font-weight: bold;", 4, "ngIf"], [1, "row", 2, "text-align", "left", "direction", "ltr"], ["class", "col-xs-12 col-12", 4, "ngIf"], [1, "row"], ["class", "col-md-4 mb-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-2"], [1, "text-center"], ["alt", "", 1, "img-fluid", 2, "height", "200px", "object-fit", "cover", "cursor", "pointer", 3, "src", "click"], [2, "text-align", "center", "font-weight", "bold"], [1, "col-xs-12", "col-12"], [3, "totalItems", "maxSize", "pageChanged"]], template: function AddAdvertismentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddAdvertismentComponent_ng_container_0_Template, 7, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddAdvertismentComponent_ng_template_1_Template, 83, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddAdvertismentComponent_ng_template_3_Template, 13, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: [".chkBox[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border: 1px solid gray;\n  border-radius: 3px;\n  background: white;\n}\n\n  .modal-header .btn-close {\n  margin: -0.5rem auto -0.5rem -0.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1hZHZlcnRpc21lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNEOztBQUdJO0VBQ0ksK0NBQUE7QUFBUiIsImZpbGUiOiJhZGQtYWR2ZXJ0aXNtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoa0JveCB7XHJcbiB3aWR0aDogMTVweDtcclxuIGhlaWdodDogMTVweDtcclxuIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiBiYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbn1cclxuOjpuZy1kZWVwIHtcclxuXHJcbiAgICAubW9kYWwtaGVhZGVyIC5idG4tY2xvc2Uge1xyXG4gICAgICAgIG1hcmdpbjogLTAuNXJlbSBhdXRvIC0wLjVyZW0gLTAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "ygoY":
/*!********************************************************!*\
  !*** ./src/app/screens/dashboard/guard/login.guard.ts ***!
  \********************************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "7sxU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginGuard {
    constructor(atuhService, router) {
        this.atuhService = atuhService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.atuhService.isLogin()) {
            this.router.navigate(['/dashboard-page/main/add-article']);
            return false;
        }
        else {
            return true;
        }
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zaft":
/*!*************************************************************************************!*\
  !*** ./src/app/screens/dashboard/components/add-question/add-question.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_add_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/add-question.service */ "lWWh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AddQuestionComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_li_11_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteAnswer(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.value);
} }
function AddQuestionComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function AddQuestionComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.error, " ");
} }
class AddQuestionComponent {
    constructor(toastrService, router, questionService) {
        this.toastrService = toastrService;
        this.router = router;
        this.questionService = questionService;
        this.loading = false;
        this.answers = [];
    }
    ngOnInit() {
    }
    addAnswer(input) {
        var _a;
        if (input.value && ((_a = input.value) === null || _a === void 0 ? void 0 : _a.trim().length) > 0) {
            let obj = {
                title: input.value, value: input.value
            };
            this.answers.push(obj);
            input.value = '';
        }
    }
    deleteAnswer(index) {
        this.answers.splice(index, 1);
    }
    addQuestion() {
        var _a;
        if (this.title && ((_a = this.title) === null || _a === void 0 ? void 0 : _a.trim().length) > 0 && this.answers.length) {
            let value = {
                title: this.title,
                answers: this.answers
            };
            this.loading = true;
            this.questionService.addQuestion(value).subscribe(res => {
                this.loading = false;
                this.error = '';
                this.toastrService.success("تم اضافة استطلاع الراي");
                this.router.navigate(['/dashboard-page/main/question']);
            }, err => {
                var _a;
                this.loading = false;
                this.error = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message;
            });
        }
    }
}
AddQuestionComponent.ɵfac = function AddQuestionComponent_Factory(t) { return new (t || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_add_question_service__WEBPACK_IMPORTED_MODULE_3__["AddQuestionService"])); };
AddQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddQuestionComponent, selectors: [["app-add-question"]], decls: 17, vars: 5, consts: [[1, "add-question"], [1, "mb-5"], ["type", "text", "placeholder", "\u0627\u0644\u0633\u0624\u0627\u0644", 1, "form-control", "mb-3", 3, "ngModel", "ngModelChange"], ["titleInput", ""], ["type", "text", "placeholder", "\u0627\u0644\u0627\u062C\u0627\u0628\u0629", 1, "form-control", "mb-3"], ["answerInput", ""], [1, "mb-3"], [1, "btn", "btn-secondary", 3, "click"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-secondary", "w-100", 3, "disabled", "click"], ["class", "fas fa-circle-notch fa-spin", 4, "ngIf"], ["class", "my-3 text-danger", 4, "ngIf"], [1, "far", "fa-trash-alt", "px-3", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-circle-notch", "fa-spin"], [1, "my-3", "text-danger"]], template: function AddQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0623\u0636\u0627\u0641\u0629 \u0627\u0633\u062A\u0637\u0644\u0627\u0639 \u0631\u0623\u064A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddQuestionComponent_Template_input_ngModelChange_3_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.addAnswer(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0623\u0636\u0627\u0641\u0629 \u0623\u062C\u0627\u0628\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddQuestionComponent_li_11_Template, 4, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_Template_button_click_13_listener() { return ctx.addQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u062A\u0645 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AddQuestionComponent_i_15_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddQuestionComponent_p_16_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.value || (_r0 == null ? null : _r0.value == null ? null : _r0.value.trim().length) < 1 || ctx.answers.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src-app-screens-dashboard-dashboard-module.js.map