(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"center\">{{ title }}</h1>\n  <app-departure-board></app-departure-board>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MBTA Commuter Rail Departure Board';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _departure_board_departure_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./departure-board/departure-board.component */ "./src/app/departure-board/departure-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _departure_board_departure_board_component__WEBPACK_IMPORTED_MODULE_4__["DepartureBoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/departure-board/departure-board.component.css":
/*!***************************************************************!*\
  !*** ./src/app/departure-board/departure-board.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table, th, td {\n    border: 1px solid black;\n}\n\ntable {\n    border-collapse: collapse;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nth, td {\n    padding: 5px;\n}\n\n.left {\n    text-align: left;\n}\n\n.center {\n    text-align: center;\n}\n\n.right {\n    text-align: right;\n}"

/***/ }),

/***/ "./src/app/departure-board/departure-board.component.html":
/*!****************************************************************!*\
  !*** ./src/app/departure-board/departure-board.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"center\">Current Time: {{ currentDateTime | date:\"EEEE M/d/yyyy h:mm a\" }}</p>\n<table>\n  <tr>\n    <th>Destination</th>\n    <th>Scheduled Time</th>\n    <th>Station</th>\n    <th>Platform</th>\n    <th>Status</th>\n  </tr>\n  <tr *ngFor=\"let departure of departures\">\n    <td class=\"left\">{{ departure.destination }}</td>\n    <td class=\"center\">{{ departure.departureTime | date:\"h:mm a\" }}</td>\n    <td class=\"left\">{{ departure.station }}</td>\n    <td class=\"center\">{{ departure.trackNumber }}</td>\n    <td class=\"left\">{{ departure.boardingStatus }}</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/departure-board/departure-board.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/departure-board/departure-board.component.ts ***!
  \**************************************************************/
/*! exports provided: DepartureBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartureBoardComponent", function() { return DepartureBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _departure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../departure.service */ "./src/app/departure.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartureBoardComponent = /** @class */ (function () {
    function DepartureBoardComponent(departureService) {
        this.departureService = departureService;
    }
    DepartureBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshData();
        setInterval(function () { return _this.refreshData(); }, 30000); // refresh data every 30 seconds
    };
    DepartureBoardComponent.prototype.refreshData = function () {
        var _this = this;
        this.currentDateTime = new Date();
        this.departureService.getDepartures()
            .subscribe(function (departures) { return _this.departures = departures; });
    };
    DepartureBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-departure-board',
            template: __webpack_require__(/*! ./departure-board.component.html */ "./src/app/departure-board/departure-board.component.html"),
            styles: [__webpack_require__(/*! ./departure-board.component.css */ "./src/app/departure-board/departure-board.component.css")]
        }),
        __metadata("design:paramtypes", [_departure_service__WEBPACK_IMPORTED_MODULE_1__["DepartureService"]])
    ], DepartureBoardComponent);
    return DepartureBoardComponent;
}());



/***/ }),

/***/ "./src/app/departure.service.ts":
/*!**************************************!*\
  !*** ./src/app/departure.service.ts ***!
  \**************************************/
/*! exports provided: DepartureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartureService", function() { return DepartureService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _departure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./departure */ "./src/app/departure.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DepartureService = /** @class */ (function () {
    function DepartureService(http) {
        this.http = http;
        this.url = 'https://api-v3.mbta.com/schedules';
    }
    DepartureService.prototype.extractData = function (res, runTime) {
        //console.log(res); // for debugging
        //Destination: schedule.relationships.trip.headsign
        //Departure Time: schedule.attributes.departure_time
        //Station: schedule.relationships.stop.data.id e.g. "South Station"
        //Track Number: schedule.relationships.prediction.relationships.stop.data.id e.g. "South Station-10"
        //Boarding Status: schedule.relationships.prediction.attributes.status
        // Create maps for included data
        var included = res.included;
        var tripIdHeadsignMap = new Map();
        var predictionIdMap = new Map();
        if (included != undefined) { // included section does not exist when data section is empty
            for (var j = 0; j < included.length; j++) {
                var type = included[j].type;
                var id = included[j].id;
                if (type === 'trip') {
                    var headsign = included[j].attributes.headsign;
                    tripIdHeadsignMap.set(id, headsign);
                }
                else if (type === 'prediction') {
                    var status_1 = included[j].attributes.status;
                    var stopId = included[j].relationships.stop.data.id;
                    predictionIdMap.set(id, { status: status_1, stopId: stopId });
                }
            }
        }
        // Loop through schedule data to create Departures
        var maxDeparturesToDisplay = 20;
        var departures;
        var departureCount = 0;
        var data = res.data;
        if (data == null) {
            departures = new _departure__WEBPACK_IMPORTED_MODULE_4__["Departure"][0];
            console.log('Error: ' + res);
        }
        else {
            for (var i = 0; i < data.length && departureCount < maxDeparturesToDisplay; i++) {
                var id = data[i].id;
                var tripId = data[i].relationships.trip.data.id;
                var destination = tripIdHeadsignMap.get(tripId);
                var departureTime = data[i].attributes.departure_time;
                var station = data[i].relationships.stop.data.id;
                var predictionId = data[i].relationships.prediction.data != null ? data[i].relationships.prediction.data.id : null;
                var predictionStopId = predictionIdMap.get(predictionId) && predictionIdMap.get(predictionId).stopId;
                // When track number is known, stop_id on prediction reflects that (e.g. 'South Station-10' instead of 'South Station').
                // platform_code on this stop's attributes also contains this data, but would require another roundtrip to the server to retrieve it.
                // Parse number from end of stopId and strip off leading zero. Default to 'TBD'.
                var trackNumber = predictionStopId && predictionStopId.indexOf('-') != -1 ?
                    Number(predictionStopId.substring(predictionStopId.indexOf('-') + 1)).toString() : 'TBD';
                // Use prediction status if prediction exists. Default to 'On time'.
                var boardingStatus = predictionIdMap.get(predictionId) != null ? predictionIdMap.get(predictionId).status : 'On time';
                // If scheduled time is less than current time, but a prediction exists, display it (train just departed or is late)
                // Otherwise, always display it
                if ((new Date(departureTime) < runTime && predictionId != null) || new Date(departureTime) >= runTime) {
                    if (departures == null) {
                        departures = new Array(Math.min(data.length - i, maxDeparturesToDisplay));
                    }
                    var departure = {
                        destination: destination,
                        departureTime: departureTime,
                        station: station,
                        trackNumber: trackNumber,
                        boardingStatus: boardingStatus
                    };
                    departures[departureCount] = departure;
                    departureCount++;
                }
            }
        }
        return departures;
    };
    DepartureService.prototype.getDepartures = function () {
        var _this = this;
        var now = new Date();
        // Retrieve data starting 2 hours prior to now in case there are late trains
        var hours = now.getHours() - 2;
        // If current time is between midnight and 3 am, use prior day, with hour + 24
        if (hours <= 3) {
            now.setDate(now.getDate() - 1);
            hours = hours + 24;
        }
        var hoursStr = hours < 10 ? '0' + hours.toString() : hours.toString();
        var dateFilter = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(now, 'yyyy-MM-dd', 'en-US');
        var minTimeFilter = hoursStr + ':' + Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"])(now, 'mm', 'en-US');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('filter[stop]', 'North Station,South Station')
            .set('filter[direction_id]', '0')
            .set('filter[date]', dateFilter)
            .set('filter[min_time]', minTimeFilter)
            .set('sort', 'departure_time')
            .set('include', 'prediction,trip');
        console.log(this.url + '?' + params.toString()); // for debugging
        return this.http.get(this.url, { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.extractData(res, now); }));
        //return of (DEPARTURES); // return mock data for testing
    };
    DepartureService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DepartureService);
    return DepartureService;
}());



/***/ }),

/***/ "./src/app/departure.ts":
/*!******************************!*\
  !*** ./src/app/departure.ts ***!
  \******************************/
/*! exports provided: Departure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Departure", function() { return Departure; });
var Departure = /** @class */ (function () {
    function Departure() {
    }
    return Departure;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/charlie/ng-apps/mbta-departure-board-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map