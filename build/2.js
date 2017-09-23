webpackJsonp([2],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/juz/private/dev/CriticalCount/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About Critical Counter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4>If you don\'t know what a Critical Mass is, please refer to the <a>tutorial</a>.</h4>\n\n  <p>\n    Knowing how many people have been at your CriticalMass is a memory, cool for the stats nerds and also helps you to decide where to go. Also you are able to see live statistics about your current mass.\n  </p>\n  <p>\n    This App aims to automate everything but counting. Every time you start the counter, it checks your location and saves the number of bikes you counted into a database.\n  </p>\n  <p>\n    That allows you to see where and when you counted how many bikes.\n  </p>\n  <p>\n    In the future I might collaborate with Malte from criticalmass.in and give him access to the data.\n  </p>\n  <h3>\n    Q: What kind of data do you store?\n  </h3>\n  <p>\n    A: I want to store only the data neccessary for the service. So here is what is stored:\n  </p>\n  <ul>\n    <li>\n      A bike was counted (acutally: Someone clicked on the app)\n    </li>\n    <li>\n      Date, time and location of that event\n    </li>\n    <li>\n      What phone counted the bike. Actually I generate one anonymous identifier which is used to not get your count confused with others. I don\'t know who you are, what device you use, or what you look like. And I really don\'t care. :)\n    </li>\n  </ul>\n  <h3>\n    Q: I can\'t find any statistics?\n  </h3>\n  <p>\n    A: Yes, this is very much work in progress. Head right to the next question, if you want to help out.\n  </p>\n  <h3>\n    Q: Cool project, can I participate?\n  </h3>\n  <p>\n    A: Of course! Just head right over to <a href="https://github.com/zeidlos/CriticalCounter">Github</a>.\n  </p>\n  <h3>\n      Q: I have a project and want to use your data! How?\n    </h3>\n    <p>\n      A: Right now I have not implemented an API for you to use. But if you can code, you could help, since I\'d love to share. :)\n    </p>\n  <h3>\n    Q: I can\'t code, but want to say thank you!\n  </h3>\n  <p>\n    A: No problem! If you are in Hamburg, you can buy me a coffee on the next Mass. If you\'re not from Hamburg, go and buy someone else a coffee. Spread the love!\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/juz/private/dev/CriticalCount/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=2.js.map