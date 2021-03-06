webpackJsonp([3],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		402,
		2
	],
	"../pages/cork/cork.module": [
		403,
		1
	],
	"../pages/counter/counter.module": [
		186
	],
	"../pages/impress/impress.module": [
		404,
		0
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
webpackAsyncContext.id = 185;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterPageModule", function() { return CounterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__counter__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CounterPageModule = (function () {
    function CounterPageModule() {
    }
    return CounterPageModule;
}());
CounterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__counter__["a" /* CounterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__counter__["a" /* CounterPage */]),
        ],
    })
], CounterPageModule);

//# sourceMappingURL=counter.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(289);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_insomnia__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__firebase_credentials__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_counter_counter_module__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* CriticalCounterApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* CriticalCounterApp */], {}, {
                links: [
                    { loadChildren: '../pages/counter/counter.module#CounterPageModule', name: 'CounterPage', segment: 'counter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cork/cork.module#CorkPageModule', name: 'CorkPage', segment: 'cork', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/impress/impress.module#ImpressPageModule', name: 'ImpressPage', segment: 'impress', priority: 'low', defaultHistory: [] }
                ]
            }),
            // Initialize AngularFireModule
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_13__pages_counter_counter_module__["CounterPageModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* CriticalCounterApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_insomnia__["a" /* Insomnia */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_insomnia__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CounterPage = (function () {
    function CounterPage(navCtrl, navParams, db, geoLocation, insomnia, uniqueDeviceID, nativeGeoCoder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.geoLocation = geoLocation;
        this.insomnia = insomnia;
        this.uniqueDeviceID = uniqueDeviceID;
        this.nativeGeoCoder = nativeGeoCoder;
        // Tells the app if native geocoding is avaible or not.
        this.geoCodingAvaible = false;
        // If we have native geocoding, the location
        // will be stored in here.
        this.locationName = 'unknown';
        // Keeps the count of bikes local, to prevent hickups
        // with bad internet connection
        this.localCount = 0;
        // saves the last geolocation in order to compare if
        // counting device has moved
        this.lastGeopoint = { lat: 52.520007, long: 13.404954 };
        // For each entry into the database, create a unique id
        this.entryId = '';
        this.bikesRef = this.db.list('bike-list');
        this.bikesRef.subscribe();
        this.watch = this.geoLocation.watchPosition();
        this.watch.subscribe(function (data) {
            // Debugging output, please leave
            console.log(data);
            _this.location = data;
            if (_this.geoCodingAvaible) {
                _this.getGeoCode(_this.location.coords.latitude, _this.location.coords.longitude).then(function (res) {
                    _this.locationName = res.administrativeArea;
                });
            }
        });
    }
    // Taken from https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
    // and adapted to give metres instead of kilometres
    CounterPage.prototype.getDistanceFromLatLonInM = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // this.deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c * 1000; // Distance in m
        return d;
    };
    CounterPage.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    CounterPage.prototype.resetCounter = function () {
        this.localCount = 0;
        this.generateEntryId();
    };
    // Saves current count object to the database
    CounterPage.prototype.saveData = function (obj) {
        return this.bikesRef.update(this.entryId, obj);
    };
    // Tries to get a unique device ID.
    CounterPage.prototype.generateDeviceId = function () {
        return this.uniqueDeviceID.get()
            .then(function (uuid) {
            return uuid;
        })
            .catch(function (error) {
            console.log(error);
            return Math.floor(Math.random() * (1123581321 - 1)) + 1;
        });
    };
    // Generates a unique id for the counting entry
    CounterPage.prototype.generateEntryId = function () {
        this.entryId = 'entry_' + this.deviceId + '__' + Math.floor(Math.random() * (1123581321 - 1)) + 1;
    };
    // Kind of self explaining function name. :)
    CounterPage.prototype.checkDistance = function (currentLat, currentLong) {
        if (this.getDistanceFromLatLonInM(currentLat, currentLong, this.lastGeopoint.lat, this.lastGeopoint.long) > 500) {
            return true;
        }
        else {
            return false;
        }
    };
    // Tries to get a location name based on Coordinates
    // Only works on iOS and Android
    CounterPage.prototype.getGeoCode = function (lat, long) {
        var _this = this;
        return this.nativeGeoCoder.reverseGeocode(lat, long)
            .then(function (res) {
            _this.geoCodingAvaible = true;
            return res;
        })
            .catch(function (err) {
            console.log(err);
            _this.geoCodingAvaible = false;
        });
    };
    // Adds a new bike to the current count
    // Only avaible if device has a location,
    // so no error handling required.
    // Also only resets the counter after having moved more than
    // 100m and also clicking to re-count
    CounterPage.prototype.addBike = function () {
        if (this.checkDistance(this.location.coords.latitude, this.location.coords.longitude)) {
            console.log('Distance is huuuge!');
            this.resetCounter();
        }
        this.lastGeopoint = {
            lat: this.location.coords.latitude,
            long: this.location.coords.longitude,
        };
        this.localCount++;
        this.bikes = {
            reporterId: this.deviceId,
            count: this.localCount,
            lastCoords: {
                locationName: this.locationName,
                accuracy: this.location.coords.accuracy,
                latitude: this.location.coords.latitude,
                longitude: this.location.coords.longitude,
            },
            // FIXME: Only updates if location changes.
            lastTime: this.location.timestamp,
            canceled: false,
        };
        console.log('Adding bike ... ', this.bikes);
        this.saveData(this.bikes);
    };
    // Navigates to a page. Who would have guessed? ;)
    CounterPage.prototype.navigateTo = function (page) {
        this.navCtrl.push(page + 'Page');
    };
    CounterPage.prototype.cancelCurrent = function () {
        var _this = this;
        this.bikes.canceled = true;
        this.saveData(this.bikes)
            .then(function (res) { return _this.resetCounter(); });
    };
    CounterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.generateDeviceId()
            .then(function (res) {
            _this.deviceId = res;
            _this.generateEntryId();
        });
        // Prevents device from falling asleep
        this.insomnia.keepAwake()
            .then(function () { return console.log('Device got Espresso!'); }, function () { return console.log('Device is still sleepy. :('); });
    };
    return CounterPage;
}());
CounterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicPage */])({
        segment: 'counter'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-counter',template:/*ion-inline-start:"/Users/juz/private/dev/CriticalCount/src/pages/counter/counter.html"*/'<!--\n  Generated template for the CounterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="navigateTo(\'About\')">\n        <ion-icon name="help"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Critical Counter</ion-title>\n    <ion-buttons end>\n      \n      <button ion-button icon-only (click)="cancelCurrent()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="cc-waitForSignal" *ngIf="!location">\n    <h1>Searching for <br />GPS signal ...</h1>\n  </div>\n  <div class="cc-countArea" (click)="addBike()" *ngIf="location" >\n    <div class="location" *ngIf="locationName">{{ locationName }}</div>\n    <div class="cc-currentCount">\n      {{ localCount }}\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/juz/private/dev/CriticalCount/src/pages/counter/counter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_insomnia__["a" /* Insomnia */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], CounterPage);

//# sourceMappingURL=counter.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyAwmCVx0tGcxmE1qgiA7OTEhpKfsqf095c",
    authDomain: "criticalcounter-ed141.firebaseapp.com",
    databaseURL: "https://criticalcounter-ed141.firebaseio.com",
    projectId: "criticalcounter-ed141",
    storageBucket: "criticalcounter-ed141.appspot.com",
    messagingSenderId: "703784311828"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriticalCounterApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriticalCounterApp = (function () {
    function CriticalCounterApp(platform, statusBar, splashScreen) {
        this.rootPage = 'CounterPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return CriticalCounterApp;
}());
CriticalCounterApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/juz/private/dev/CriticalCount/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/juz/private/dev/CriticalCount/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], CriticalCounterApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[272]);
//# sourceMappingURL=main.js.map