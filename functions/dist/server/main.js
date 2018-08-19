(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */
        this.isOpen = false;
        /**
           * Emits an event when the info window is closed.
           */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    /**
       * Opens the info window.
       */
    AgmInfoWindow.prototype.open = /**
       * Opens the info window.
       */
    function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    /**
       * Closes the info window.
       */
    AgmInfoWindow.prototype.close = /**
       * Closes the info window.
       */
    function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.toString = /** @internal */
    function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = /** @internal */
    function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmInfoWindow.ctorParameters = function () { return [
        { type: _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    AgmInfoWindow.propDecorators = {
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableAutoPan": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zIndex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "infoWindowClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.ngfactory.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.ngfactory.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");
var i2 = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var styles_AgmInfoWindow = [];
var RenderType_AgmInfoWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_AgmInfoWindow, data: {} });
exports.RenderType_AgmInfoWindow = RenderType_AgmInfoWindow;
function View_AgmInfoWindow_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "agm-info-window-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_AgmInfoWindow_0 = View_AgmInfoWindow_0;
function View_AgmInfoWindow_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "agm-info-window", [], null, null, null, View_AgmInfoWindow_0, RenderType_AgmInfoWindow)), i0.ɵdid(1, 770048, null, 0, i1.AgmInfoWindow, [i2.InfoWindowManager, i0.ElementRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AgmInfoWindow_Host_0 = View_AgmInfoWindow_Host_0;
var AgmInfoWindowNgFactory = i0.ɵccf("agm-info-window", i1.AgmInfoWindow, View_AgmInfoWindow_Host_0, { latitude: "latitude", longitude: "longitude", disableAutoPan: "disableAutoPan", zIndex: "zIndex", maxWidth: "maxWidth", isOpen: "isOpen" }, { infoWindowClose: "infoWindowClose" }, ["*"]);
exports.AgmInfoWindowNgFactory = AgmInfoWindowNgFactory;


/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");









/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           */
        this.fitBounds = null;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            changes['fitBounds'] == null) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if (changes['fitBounds'] && this.fitBounds != null) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(this.fitBounds);
            return;
        }
        this._mapsWrapper.fitBounds(this.fitBounds);
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__["PolylineManager"],
                        _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__["DataLayerManager"]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "latitude": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "minZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "maxZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disableDefaultUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scrollwheel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "backgroundColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggableCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "draggingCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "keyboardShortcuts": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "zoomControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "styles": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "usePanning": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "streetViewControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fitBounds": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "scaleControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "panControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "rotateControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fullscreenControlOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapTypeId": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "clickableIcons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "gestureHandling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "mapClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapRightClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapDblClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "centerChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "boundsChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapTypeIdChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "idle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "zoomChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapReady": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.ngfactory.js":
/*!************************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
var i2 = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var i3 = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var i4 = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
var i5 = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
var i6 = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
var i7 = __webpack_require__(/*! ../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
var i8 = __webpack_require__(/*! ../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
var i9 = __webpack_require__(/*! ../services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var i10 = __webpack_require__(/*! ./map */ "./node_modules/@agm/core/directives/map.js");
var styles_AgmMap = [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"];
var RenderType_AgmMap = i0.ɵcrt({ encapsulation: 0, styles: styles_AgmMap, data: {} });
exports.RenderType_AgmMap = RenderType_AgmMap;
function View_AgmMap_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "agm-map-container-inner sebm-google-map-container-inner"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "agm-map-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
exports.View_AgmMap_0 = View_AgmMap_0;
function View_AgmMap_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 9, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, View_AgmMap_0, RenderType_AgmMap)), i0.ɵprd(4608, null, i1.MarkerManager, i1.MarkerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i3.InfoWindowManager, i3.InfoWindowManager, [i2.GoogleMapsAPIWrapper, i0.NgZone, i1.MarkerManager]), i0.ɵprd(4608, null, i4.CircleManager, i4.CircleManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i5.PolylineManager, i5.PolylineManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i6.PolygonManager, i6.PolygonManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i7.KmlLayerManager, i7.KmlLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(4608, null, i8.DataLayerManager, i8.DataLayerManager, [i2.GoogleMapsAPIWrapper, i0.NgZone]), i0.ɵprd(512, null, i2.GoogleMapsAPIWrapper, i2.GoogleMapsAPIWrapper, [i9.MapsAPILoader, i0.NgZone]), i0.ɵdid(9, 770048, null, 0, i10.AgmMap, [i0.ElementRef, i2.GoogleMapsAPIWrapper], null, null)], function (_ck, _v) { _ck(_v, 9, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
exports.View_AgmMap_Host_0 = View_AgmMap_Host_0;
var AgmMapNgFactory = i0.ɵccf("agm-map", i10.AgmMap, View_AgmMap_Host_0, { longitude: "longitude", latitude: "latitude", zoom: "zoom", minZoom: "minZoom", maxZoom: "maxZoom", draggable: "mapDraggable", disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", keyboardShortcuts: "keyboardShortcuts", zoomControl: "zoomControl", zoomControlOptions: "zoomControlOptions", styles: "styles", usePanning: "usePanning", streetViewControl: "streetViewControl", streetViewControlOptions: "streetViewControlOptions", fitBounds: "fitBounds", scaleControl: "scaleControl", scaleControlOptions: "scaleControlOptions", mapTypeControl: "mapTypeControl", mapTypeControlOptions: "mapTypeControlOptions", panControl: "panControl", panControlOptions: "panControlOptions", rotateControl: "rotateControl", rotateControlOptions: "rotateControlOptions", fullscreenControl: "fullscreenControl", fullscreenControlOptions: "fullscreenControlOptions", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", gestureHandling: "gestureHandling" }, { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady" }, ["*"]);
exports.AgmMapNgFactory = AgmMapNgFactory;


/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@angular/material/button/typings/index.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/button/typings/index.ngfactory.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i4 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i5 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i6 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i7 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var MatButtonModuleNgFactory = i0.ɵcmf(i1.MatButtonModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.BidiModule, i3.BidiModule, []), i0.ɵmpd(1073742336, i4.MatCommonModule, i4.MatCommonModule, [[2, i4.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(1073742336, i5.PlatformModule, i5.PlatformModule, []), i0.ɵmpd(1073742336, i4.MatRippleModule, i4.MatRippleModule, []), i0.ɵmpd(1073742336, i1.MatButtonModule, i1.MatButtonModule, [])]); });
exports.MatButtonModuleNgFactory = MatButtonModuleNgFactory;
var styles_MatButton = [".mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:1}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]{box-shadow:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-flat-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-fab::-moz-focus-inner{border:0}.mat-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-fab[disabled]{box-shadow:none}.mat-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-mini-fab[disabled]{box-shadow:none}.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"];
var RenderType_MatButton = i0.ɵcrt({ encapsulation: 2, styles: styles_MatButton, data: {} });
exports.RenderType_MatButton = RenderType_MatButton;
function View_MatButton_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { ripple: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), i0.ɵdid(4, 212992, [[1, 4]], 0, i4.MatRipple, [i0.ElementRef, i0.NgZone, i5.Platform, [2, i4.MAT_RIPPLE_GLOBAL_OPTIONS], [2, i6.ANIMATION_MODULE_TYPE]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = i0.ɵnov(_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
exports.View_MatButton_0 = View_MatButton_0;
function View_MatButton_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, View_MatButton_0, RenderType_MatButton)), i0.ɵdid(1, 180224, null, 0, i1.MatButton, [i0.ElementRef, i5.Platform, i7.FocusMonitor, [2, i6.ANIMATION_MODULE_TYPE]], null, null)], null, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).disabled || null); var currVal_1 = (i0.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
exports.View_MatButton_Host_0 = View_MatButton_Host_0;
var MatButtonNgFactory = i0.ɵccf("button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]", i1.MatButton, View_MatButton_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color" }, {}, ["*"]);
exports.MatButtonNgFactory = MatButtonNgFactory;
var styles_MatAnchor = [".mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:1}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-raised-button:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-raised-button[disabled]{box-shadow:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-flat-button:not([class*=mat-elevation-z]){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-fab::-moz-focus-inner{border:0}.mat-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-fab[disabled]{box-shadow:none}.mat-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:88px;line-height:36px;padding:0 16px;border-radius:2px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:1}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mat-mini-fab[disabled]{box-shadow:none}.mat-mini-fab:not([class*=mat-elevation-z]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.mat-mini-fab:not([disabled]):active:not([class*=mat-elevation-z]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-focus-overlay{background-color:rgba(0,0,0,.12);border-radius:inherit;opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media screen and (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:rgba(255,255,255,.5)}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media screen and (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"];
var RenderType_MatAnchor = i0.ɵcrt({ encapsulation: 2, styles: styles_MatAnchor, data: {} });
exports.RenderType_MatAnchor = RenderType_MatAnchor;
function View_MatAnchor_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { ripple: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "mat-button-wrapper"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "mat-button-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-button-ripple-round", null], [2, "mat-ripple-unbounded", null]], null, null, null, null)), i0.ɵdid(4, 212992, [[1, 4]], 0, i4.MatRipple, [i0.ElementRef, i0.NgZone, i5.Platform, [2, i4.MAT_RIPPLE_GLOBAL_OPTIONS], [2, i6.ANIMATION_MODULE_TYPE]], { centered: [0, "centered"], disabled: [1, "disabled"], trigger: [2, "trigger"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 0, "div", [["class", "mat-button-focus-overlay"]], null, null, null, null, null))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.isIconButton; var currVal_3 = _co._isRippleDisabled(); var currVal_4 = _co._getHostElement(); _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.isRoundButton || _co.isIconButton); var currVal_1 = i0.ɵnov(_v, 4).unbounded; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
exports.View_MatAnchor_0 = View_MatAnchor_0;
function View_MatAnchor_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["mat-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_MatAnchor_0, RenderType_MatAnchor)), i0.ɵdid(1, 180224, null, 0, i1.MatAnchor, [i5.Platform, i7.FocusMonitor, i0.ElementRef, [2, i6.ANIMATION_MODULE_TYPE]], null, null)], null, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).disabled ? (0 - 1) : (i0.ɵnov(_v, 1).tabIndex || 0)); var currVal_1 = (i0.ɵnov(_v, 1).disabled || null); var currVal_2 = i0.ɵnov(_v, 1).disabled.toString(); var currVal_3 = (i0.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
exports.View_MatAnchor_Host_0 = View_MatAnchor_Host_0;
var MatAnchorNgFactory = i0.ɵccf("a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", i1.MatAnchor, View_MatAnchor_Host_0, { disabled: "disabled", disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex" }, {}, ["*"]);
exports.MatAnchorNgFactory = MatAnchorNgFactory;


/***/ }),

/***/ "./node_modules/@angular/material/menu/typings/index.ngfactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/menu/typings/index.ngfactory.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/material/menu */ "@angular/material/menu");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i4 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i5 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i6 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i7 = __webpack_require__(/*! @angular/cdk/portal */ "@angular/cdk/portal");
var i8 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i9 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i10 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var MatMenuModuleNgFactory = i0.ɵcmf(i1.MatMenuModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i3.Overlay, i3.Overlay, [i3.ScrollStrategyOptions, i3.OverlayContainer, i0.ComponentFactoryResolver, i3.OverlayPositionBuilder, i3.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i2.DOCUMENT, i4.Directionality]), i0.ɵmpd(5120, i3.ɵc, i3.ɵd, [i3.Overlay]), i0.ɵmpd(5120, i1.MAT_MENU_SCROLL_STRATEGY, i1.ɵd23, [i3.Overlay]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i4.BidiModule, i4.BidiModule, []), i0.ɵmpd(1073742336, i5.MatCommonModule, i5.MatCommonModule, [[2, i5.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(1073742336, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(1073742336, i5.MatRippleModule, i5.MatRippleModule, []), i0.ɵmpd(1073742336, i7.PortalModule, i7.PortalModule, []), i0.ɵmpd(1073742336, i8.ScrollDispatchModule, i8.ScrollDispatchModule, []), i0.ɵmpd(1073742336, i3.OverlayModule, i3.OverlayModule, []), i0.ɵmpd(1073742336, i1.MatMenuModule, i1.MatMenuModule, [])]); });
exports.MatMenuModuleNgFactory = MatMenuModuleNgFactory;
var styles_MatMenu = [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:2px;outline:0}.mat-menu-panel:not([class*=mat-elevation-z]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}@media screen and (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}@media screen and (-ms-high-contrast:active){.mat-menu-item-highlighted,.mat-menu-item.cdk-keyboard-focused,.mat-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}.mat-menu-panel.ng-animating .mat-menu-item-submenu-trigger{pointer-events:none}button.mat-menu-item{width:100%}.mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"];
var RenderType_MatMenu = i0.ɵcrt({ encapsulation: 2, styles: styles_MatMenu, data: { "animation": [{ type: 7, name: "transformMenu", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: { opacity: 0, transform: "scale(0.01, 0.01)" }, offset: null }, options: undefined }, { type: 1, expr: "void => enter", animation: { type: 2, steps: [{ type: 11, selector: ".mat-menu-content", animation: { type: 6, styles: { opacity: 0 }, offset: null }, options: null }, { type: 4, styles: { type: 6, styles: { opacity: 1, transform: "scale(1, 0.5)" }, offset: null }, timings: "100ms linear" }, { type: 3, steps: [{ type: 11, selector: ".mat-menu-content", animation: { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "400ms cubic-bezier(0.55, 0, 0.55, 0.2)" }, options: null }, { type: 4, styles: { type: 6, styles: { transform: "scale(1, 1)" }, offset: null }, timings: "300ms cubic-bezier(0.25, 0.8, 0.25, 1)" }], options: null }], options: null }, options: null }, { type: 1, expr: "* => void", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "150ms 50ms linear" }, options: null }], options: {} }, { type: 7, name: "fadeInItems", definitions: [{ type: 0, name: "showing", styles: { type: 6, styles: { opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "void => *", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: null, timings: "400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)" }], options: null }], options: {} }] } });
exports.RenderType_MatMenu = RenderType_MatMenu;
function View_MatMenu_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "mat-menu-panel"], ["role", "menu"], ["tabindex", "-1"]], [[24, "@transformMenu", 0]], [[null, "keydown"], [null, "click"], [null, "@transformMenu.start"], [null, "@transformMenu.done"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (_co._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.closed.emit("click") !== false);
        ad = (pd_1 && ad);
    } if (("@transformMenu.start" === en)) {
        var pd_2 = ((_co._isAnimating = true) !== false);
        ad = (pd_2 && ad);
    } if (("@transformMenu.done" === en)) {
        var pd_3 = (_co._onAnimationDone($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 1, "div", [["class", "mat-menu-content"]], null, null, null, null, null)), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "mat-menu-panel"; var currVal_2 = _co._classList; _ck(_v, 1, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co._panelAnimationState; _ck(_v, 0, 0, currVal_0); }); }
function View_MatMenu_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { templateRef: 0 }), (_l()(), i0.ɵand(0, [[1, 2]], null, 0, null, View_MatMenu_1))], null, null); }
exports.View_MatMenu_0 = View_MatMenu_0;
function View_MatMenu_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "mat-menu", [], null, null, null, View_MatMenu_0, RenderType_MatMenu)), i0.ɵprd(6144, null, i1.ɵf23, null, [i1.MatMenu]), i0.ɵdid(2, 1294336, null, 2, i1.MatMenu, [i0.ElementRef, i0.NgZone, i1.MAT_MENU_DEFAULT_OPTIONS], null, null), i0.ɵqud(603979776, 1, { items: 1 }), i0.ɵqud(335544320, 2, { lazyContent: 0 })], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
exports.View_MatMenu_Host_0 = View_MatMenu_Host_0;
var MatMenuNgFactory = i0.ɵccf("mat-menu", i1.MatMenu, View_MatMenu_Host_0, { backdropClass: "backdropClass", xPosition: "xPosition", yPosition: "yPosition", overlapTrigger: "overlapTrigger", hasBackdrop: "hasBackdrop", panelClass: "class", classList: "classList" }, { closed: "closed", close: "close" }, ["*"]);
exports.MatMenuNgFactory = MatMenuNgFactory;
var styles_MatMenuItem = [];
var RenderType_MatMenuItem = i0.ɵcrt({ encapsulation: 2, styles: styles_MatMenuItem, data: {} });
exports.RenderType_MatMenuItem = RenderType_MatMenuItem;
function View_MatMenuItem_0(_l) { return i0.ɵvid(2, [i0.ɵncd(null, 0), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["class", "mat-menu-ripple mat-ripple"], ["matRipple", ""]], [[2, "mat-ripple-unbounded", null]], null, null, null, null)), i0.ɵdid(2, 212992, null, 0, i5.MatRipple, [i0.ElementRef, i0.NgZone, i6.Platform, [2, i5.MAT_RIPPLE_GLOBAL_OPTIONS], [2, i9.ANIMATION_MODULE_TYPE]], { disabled: [0, "disabled"], trigger: [1, "trigger"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.disableRipple || _co.disabled); var currVal_2 = _co._getHostElement(); _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).unbounded; _ck(_v, 1, 0, currVal_0); }); }
exports.View_MatMenuItem_0 = View_MatMenuItem_0;
function View_MatMenuItem_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "mat-menu-item"], ["mat-menu-item", ""], ["role", "menuitem"]], [[2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } return ad; }, View_MatMenuItem_0, RenderType_MatMenuItem)), i0.ɵdid(1, 180224, null, 0, i1.MatMenuItem, [i0.ElementRef, i2.DOCUMENT, i10.FocusMonitor, [2, i1.ɵf23]], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._highlighted; var currVal_1 = i0.ɵnov(_v, 1)._triggersSubmenu; var currVal_2 = i0.ɵnov(_v, 1)._getTabIndex(); var currVal_3 = i0.ɵnov(_v, 1).disabled.toString(); var currVal_4 = (i0.ɵnov(_v, 1).disabled || null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
exports.View_MatMenuItem_Host_0 = View_MatMenuItem_Host_0;
var MatMenuItemNgFactory = i0.ɵccf("[mat-menu-item]", i1.MatMenuItem, View_MatMenuItem_Host_0, { disabled: "disabled", disableRipple: "disableRipple" }, {}, ["*"]);
exports.MatMenuItemNgFactory = MatMenuItemNgFactory;


/***/ }),

/***/ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/material/snack-bar */ "@angular/material/snack-bar");
var i2 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i3 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i4 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i5 = __webpack_require__(/*! @angular/cdk/portal */ "@angular/cdk/portal");
var i6 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i7 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i8 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i9 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i10 = __webpack_require__(/*! ../../button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
var i11 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i12 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var MatSnackBarModuleNgFactory = i0.ɵcmf(i1.MatSnackBarModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [MatSnackBarContainerNgFactory, SimpleSnackBarNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.Overlay, i2.Overlay, [i2.ScrollStrategyOptions, i2.OverlayContainer, i0.ComponentFactoryResolver, i2.OverlayPositionBuilder, i2.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i3.DOCUMENT, i4.Directionality]), i0.ɵmpd(5120, i2.ɵc, i2.ɵd, [i2.Overlay]), i0.ɵmpd(4608, i3.NgLocalization, i3.NgLocaleLocalization, [i0.LOCALE_ID, [2, i3.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i4.BidiModule, i4.BidiModule, []), i0.ɵmpd(1073742336, i5.PortalModule, i5.PortalModule, []), i0.ɵmpd(1073742336, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(1073742336, i7.ScrollDispatchModule, i7.ScrollDispatchModule, []), i0.ɵmpd(1073742336, i2.OverlayModule, i2.OverlayModule, []), i0.ɵmpd(1073742336, i3.CommonModule, i3.CommonModule, []), i0.ɵmpd(1073742336, i8.MatCommonModule, i8.MatCommonModule, [[2, i8.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(1073742336, i8.MatRippleModule, i8.MatRippleModule, []), i0.ɵmpd(1073742336, i9.MatButtonModule, i9.MatButtonModule, []), i0.ɵmpd(1073742336, i1.MatSnackBarModule, i1.MatSnackBarModule, [])]); });
exports.MatSnackBarModuleNgFactory = MatSnackBarModuleNgFactory;
var styles_MatSnackBarContainer = [".mat-snack-bar-container{border-radius:2px;box-sizing:border-box;display:block;margin:24px;max-width:568px;min-width:288px;padding:14px 24px;transform:translateY(100%) translateY(24px)}.mat-snack-bar-container.mat-snack-bar-center{margin:0;transform:translateY(100%)}.mat-snack-bar-container.mat-snack-bar-top{transform:translateY(-100%) translateY(-24px)}.mat-snack-bar-container.mat-snack-bar-top.mat-snack-bar-center{transform:translateY(-100%)}@media screen and (-ms-high-contrast:active){.mat-snack-bar-container{border:solid 1px}}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:0;max-width:inherit;width:100%}"];
var RenderType_MatSnackBarContainer = i0.ɵcrt({ encapsulation: 2, styles: styles_MatSnackBarContainer, data: { "animation": [{ type: 7, name: "state", definitions: [{ type: 0, name: "visible-top, visible-bottom", styles: { type: 6, styles: { transform: "translateY(0%)" }, offset: null }, options: undefined }, { type: 1, expr: "visible-top => hidden-top, visible-bottom => hidden-bottom", animation: { type: 4, styles: null, timings: "195ms cubic-bezier(0.4,0.0,1,1)" }, options: null }, { type: 1, expr: "void => visible-top, void => visible-bottom", animation: { type: 4, styles: null, timings: "225ms cubic-bezier(0.0,0.0,0.2,1)" }, options: null }], options: {} }] } });
exports.RenderType_MatSnackBarContainer = RenderType_MatSnackBarContainer;
function View_MatSnackBarContainer_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_MatSnackBarContainer_0(_l) { return i0.ɵvid(2, [i0.ɵqud(402653184, 1, { _portalOutlet: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MatSnackBarContainer_1)), i0.ɵdid(2, 212992, [[1, 4]], 0, i5.CdkPortalOutlet, [i0.ComponentFactoryResolver, i0.ViewContainerRef], { portal: [0, "portal"] }, null)], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 2, 0, currVal_0); }, null); }
exports.View_MatSnackBarContainer_0 = View_MatSnackBarContainer_0;
function View_MatSnackBarContainer_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "snack-bar-container", [["class", "mat-snack-bar-container"], ["role", "alert"]], [[40, "@state", 0]], [["component", "@state.done"]], function (_v, en, $event) { var ad = true; if (("component:@state.done" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1).onAnimationEnd($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_MatSnackBarContainer_0, RenderType_MatSnackBarContainer)), i0.ɵdid(1, 180224, null, 0, i1.MatSnackBarContainer, [i0.NgZone, i0.ElementRef, i0.ChangeDetectorRef, i1.MatSnackBarConfig], null, null)], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._animationState; _ck(_v, 0, 0, currVal_0); }); }
exports.View_MatSnackBarContainer_Host_0 = View_MatSnackBarContainer_Host_0;
var MatSnackBarContainerNgFactory = i0.ɵccf("snack-bar-container", i1.MatSnackBarContainer, View_MatSnackBarContainer_Host_0, {}, {}, []);
exports.MatSnackBarContainerNgFactory = MatSnackBarContainerNgFactory;
var styles_SimpleSnackBar = [".mat-simple-snackbar{display:flex;justify-content:space-between;line-height:20px;opacity:1}.mat-simple-snackbar-action{display:flex;flex-direction:column;flex-shrink:0;justify-content:space-around;margin:-8px 0 -8px 8px}.mat-simple-snackbar-action button{flex:1;max-height:36px}[dir=rtl] .mat-simple-snackbar-action{margin-left:0;margin-right:8px}"];
var RenderType_SimpleSnackBar = i0.ɵcrt({ encapsulation: 2, styles: styles_SimpleSnackBar, data: { "animation": [{ type: 7, name: "contentFade", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: "0" }, offset: null }, { type: 4, styles: null, timings: "375ms cubic-bezier(0.4,0.0,0.2,1)" }], options: null }], options: {} }] } });
exports.RenderType_SimpleSnackBar = RenderType_SimpleSnackBar;
function View_SimpleSnackBar_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["class", "mat-simple-snackbar-action"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.action() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_MatButton_0, i10.RenderType_MatButton)), i0.ɵdid(2, 180224, null, 0, i9.MatButton, [i0.ElementRef, i6.Platform, i11.FocusMonitor, [2, i12.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i0.ɵted(3, 0, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (i0.ɵnov(_v, 2).disabled || null); var currVal_1 = (i0.ɵnov(_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.data.action; _ck(_v, 3, 0, currVal_2); }); }
function View_SimpleSnackBar_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_SimpleSnackBar_1)), i0.ɵdid(3, 16384, null, 0, i3.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.hasAction; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.data.message; _ck(_v, 1, 0, currVal_0); }); }
exports.View_SimpleSnackBar_0 = View_SimpleSnackBar_0;
function View_SimpleSnackBar_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "simple-snack-bar", [["class", "mat-simple-snackbar"]], [[40, "@contentFade", 0]], null, null, View_SimpleSnackBar_0, RenderType_SimpleSnackBar)), i0.ɵdid(1, 49152, null, 0, i1.SimpleSnackBar, [i1.MatSnackBarRef, i1.MAT_SNACK_BAR_DATA], null, null)], null, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
exports.View_SimpleSnackBar_Host_0 = View_SimpleSnackBar_Host_0;
var SimpleSnackBarNgFactory = i0.ɵccf("simple-snack-bar", i1.SimpleSnackBar, View_SimpleSnackBar_Host_0, {}, {}, []);
exports.SimpleSnackBarNgFactory = SimpleSnackBarNgFactory;


/***/ }),

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵEmptyOutletComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵEmptyOutletComponent = [];
var RenderType_ɵEmptyOutletComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵEmptyOutletComponent, data: {} });
exports.RenderType_ɵEmptyOutletComponent = RenderType_ɵEmptyOutletComponent;
function View_ɵEmptyOutletComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵEmptyOutletComponent_0 = View_ɵEmptyOutletComponent_0;
function View_ɵEmptyOutletComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵEmptyOutletComponent_0, RenderType_ɵEmptyOutletComponent)), i0.ɵdid(1, 49152, null, 0, i1.ɵEmptyOutletComponent, [], null, null)], null, null); }
exports.View_ɵEmptyOutletComponent_Host_0 = View_ɵEmptyOutletComponent_Host_0;
var ɵEmptyOutletComponentNgFactory = i0.ɵccf("ng-component", i1.ɵEmptyOutletComponent, View_ɵEmptyOutletComponent_Host_0, {}, {}, []);
exports.ɵEmptyOutletComponentNgFactory = ɵEmptyOutletComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ./menu/menu.component.ngfactory */ "./src/app/menu/menu.component.ngfactory.js");
var i3 = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
var i4 = __webpack_require__(/*! ./services/notifications.service */ "./src/app/services/notifications.service.ts");
var i5 = __webpack_require__(/*! ./window-ref.service */ "./src/app/window-ref.service.ts");
var i6 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i7 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i8 = __webpack_require__(/*! ./services/snack-bar.service */ "./src/app/services/snack-bar.service.ts");
var i9 = __webpack_require__(/*! @angular/service-worker */ "@angular/service-worker");
var i10 = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
var i11 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "header", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 3, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵeld(2, 0, null, null, 1, "menu", [], [[2, "contextual", null]], null, null, i2.View_MenuComponent_0, i2.RenderType_MenuComponent)), i1.ɵdid(3, 114688, null, 0, i3.MenuComponent, [i4.Notifications, i5.WindowRef], { contextual: [0, "contextual"] }, null), (_l()(), i1.ɵted(-1, null, [" Kerala Flood Rescue "])), (_l()(), i1.ɵeld(5, 0, null, null, 1, "menu", [], [[2, "contextual", null]], null, null, i2.View_MenuComponent_0, i2.RenderType_MenuComponent)), i1.ɵdid(6, 114688, null, 0, i3.MenuComponent, [i4.Notifications, i5.WindowRef], { contextual: [0, "contextual"] }, null), (_l()(), i1.ɵeld(7, 0, null, null, 2, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), i1.ɵeld(8, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(9, 212992, null, 0, i6.RouterOutlet, [i6.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null)], function (_ck, _v) { var currVal_1 = true; _ck(_v, 3, 0, currVal_1); var currVal_3 = false; _ck(_v, 6, 0, currVal_3); _ck(_v, 9, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 3).contextual; _ck(_v, 2, 0, currVal_0); var currVal_2 = i1.ɵnov(_v, 6).contextual; _ck(_v, 5, 0, currVal_2); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 114688, null, 0, i7.AppComponent, [i1.PLATFORM_ID, i8.SnackBar, i5.WindowRef, i9.SwUpdate, i10.TranslateService, i11.Title, i11.Meta, i6.Router], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i7.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: darkorange;\n  font-size: 32px !important;\n  width: 100%;\n  margin: 16px 0 7px !important; }\n\nheader[_ngcontent-%COMP%] {\n  background-color: #222837;\n  text-align: center;\n  position: fixed;\n  width: 100%;\n  z-index: 100; }\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px; }\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column; }\n\nmenu.contextual[_ngcontent-%COMP%] {\n  float: left; }\n\n@media (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    padding-top: 100px; } }\n\n@media (min-width: 768px) {\n  header[_ngcontent-%COMP%] {\n    height: 105px; }\n  .content[_ngcontent-%COMP%] {\n    padding-top: 136px; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var service_worker_1 = __webpack_require__(/*! @angular/service-worker */ "@angular/service-worker");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var snack_bar_service_1 = __webpack_require__(/*! ./services/snack-bar.service */ "./src/app/services/snack-bar.service.ts");
var window_ref_service_1 = __webpack_require__(/*! ./window-ref.service */ "./src/app/window-ref.service.ts");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var AppComponent = /** @class */ (function () {
    function AppComponent(platformId, snackBarService, windowRef, swUpdate, translate, titleService, metaService, router) {
        this.platformId = platformId;
        this.snackBarService = snackBarService;
        this.windowRef = windowRef;
        this.swUpdate = swUpdate;
        this.translate = translate;
        this.titleService = titleService;
        this.metaService = metaService;
        this.router = router;
        this.title = this.titleService.getTitle();
        this.metaDescription = this.metaService.getTag('name=description').content;
        this.translate.setDefaultLang(this.translate.getBrowserLang());
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; })).subscribe(function (event) {
            var snapshot = _this.router.routerState.snapshot.root.firstChild;
            var title = snapshot.data['title'];
            _this.titleService.setTitle(_this.title + ' | ' + title);
            var description = snapshot.data['description'];
            _this.metaService.updateTag({ name: 'description', content: _this.metaDescription + ' ' + description }, 'name=description');
        });
        if (!common_1.isPlatformBrowser(this.platformId)) {
            return;
        }
        if (this.swUpdate.isEnabled) {
            // this.swUpdate.activated.filter(() => !localStorage.getItem('cached')).subscribe(() => {
            //     localStorage.setItem('cached', 'displayed');
            //     this.snackBarService.displayNotification({
            //         message: 'Content is cached', action: 'Ok'
            //     } as SnackBarNotification);
            // });
            this.swUpdate.available.subscribe(function (evt) {
                _this.snackBarService.displayNotification({
                    message: 'New version of app is available!',
                    action: 'Launch',
                    force: true,
                    callback: function () {
                        _this.windowRef.nativeWindow.location.reload(true);
                    }
                });
            });
            this.swUpdate.checkForUpdate().then(function () {
                // noop
            }).catch(function (err) {
                console.error('error when checking for update', err);
            });
        }
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ɵ0 = { title: 'Home', description: 'Homepage - quick overview.' }, ɵ1 = {
    title: 'Donors',
    description: 'List of donations. Became a donor!'
}, ɵ2 = { title: 'Lazy module', description: 'Lazy module example.' }, ɵ3 = {
    title: 'Transfer state (API)',
    description: 'Angular TransferState example.'
};
exports.ɵ0 = ɵ0;
exports.ɵ1 = ɵ1;
exports.ɵ2 = ɵ2;
exports.ɵ3 = ɵ3;
// import { PrebootModule } from 'preboot';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
var i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var i3 = __webpack_require__(/*! ../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
var i4 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i5 = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
var i6 = __webpack_require__(/*! ./donors/donors.component.ngfactory */ "./src/app/donors/donors.component.ngfactory.js");
var i7 = __webpack_require__(/*! ./transfer-state/transfer-state.component.ngfactory */ "./src/app/transfer-state/transfer-state.component.ngfactory.js");
var i8 = __webpack_require__(/*! ./transfer-state/with-transfer-state.component.ngfactory */ "./src/app/transfer-state/with-transfer-state.component.ngfactory.js");
var i9 = __webpack_require__(/*! ./transfer-state/without-transfer-state.component.ngfactory */ "./src/app/transfer-state/without-transfer-state.component.ngfactory.js");
var i10 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
var i11 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i12 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var i13 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
var i14 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
var i15 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i16 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i17 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i18 = __webpack_require__(/*! @angular/material/menu */ "@angular/material/menu");
var i19 = __webpack_require__(/*! angularfire2 */ "angularfire2");
var i20 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var i21 = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
var i22 = __webpack_require__(/*! @agm/core/utils/browser-globals */ "@agm/core/utils/browser-globals");
var i23 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i24 = __webpack_require__(/*! @agm/core/services/maps-api-loader/lazy-maps-api-loader */ "@agm/core/services/maps-api-loader/lazy-maps-api-loader");
var i25 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i26 = __webpack_require__(/*! ./services/snack-bar.service */ "./src/app/services/snack-bar.service.ts");
var i27 = __webpack_require__(/*! @angular/material/snack-bar */ "@angular/material/snack-bar");
var i28 = __webpack_require__(/*! ./window-ref.service */ "./src/app/window-ref.service.ts");
var i29 = __webpack_require__(/*! ./services/notifications.service */ "./src/app/services/notifications.service.ts");
var i30 = __webpack_require__(/*! ./services/exampleApi.service */ "./src/app/services/exampleApi.service.ts");
var i31 = __webpack_require__(/*! ./services/resolvers/hitWithTransferState.resolver */ "./src/app/services/resolvers/hitWithTransferState.resolver.ts");
var i32 = __webpack_require__(/*! ./services/resolvers/hitWithoutTransferState.resolver */ "./src/app/services/resolvers/hitWithoutTransferState.resolver.ts");
var i33 = __webpack_require__(/*! @angular/http */ "@angular/http");
var i34 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
var i35 = __webpack_require__(/*! @angular/service-worker */ "@angular/service-worker");
var i36 = __webpack_require__(/*! ./services/swUpdate-server.mock.service */ "./src/app/services/swUpdate-server.mock.service.ts");
var i37 = __webpack_require__(/*! ./services/swPush-server.mock.service */ "./src/app/services/swPush-server.mock.service.ts");
var i38 = __webpack_require__(/*! @angular/material/core */ "@angular/material/core");
var i39 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i40 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i41 = __webpack_require__(/*! @angular/cdk/portal */ "@angular/cdk/portal");
var i42 = __webpack_require__(/*! @angular/cdk/scrolling */ "@angular/cdk/scrolling");
var i43 = __webpack_require__(/*! @agm/core/core.module */ "@agm/core/core.module");
var i44 = __webpack_require__(/*! @nguniversal/module-map-ngfactory-loader */ "@nguniversal/module-map-ngfactory-loader");
var i45 = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var i46 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var i47 = __webpack_require__(/*! ./donors/donors.component */ "./src/app/donors/donors.component.ts");
var i48 = __webpack_require__(/*! ./transfer-state/transfer-state.component */ "./src/app/transfer-state/transfer-state.component.ts");
var i49 = __webpack_require__(/*! ./transfer-state/with-transfer-state.component */ "./src/app/transfer-state/with-transfer-state.component.ts");
var i50 = __webpack_require__(/*! ./transfer-state/without-transfer-state.component */ "./src/app/transfer-state/without-transfer-state.component.ts");
var i51 = __webpack_require__(/*! ./services/service-worker.mock.module */ "./src/app/services/service-worker.mock.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.MatSnackBarContainerNgFactory, i3.SimpleSnackBarNgFactory, i4.ɵEmptyOutletComponentNgFactory, i5.HomeComponentNgFactory, i6.DonorsComponentNgFactory, i7.TransferStateComponentNgFactory, i8.WithTransferStateComponentNgFactory, i9.WithoutTransferStateComponentNgFactory, i10.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_k, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i11.NgLocalization, i11.NgLocaleLocalization, [i0.LOCALE_ID, [2, i11.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_i, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_j, []), i0.ɵmpd(4608, i12.DomSanitizer, i12.ɵDomSanitizerImpl, [i11.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i12.DomSanitizer]), i0.ɵmpd(4608, i12.HAMMER_GESTURE_CONFIG, i12.HammerGestureConfig, []), i0.ɵmpd(5120, i12.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i12.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i12.ɵKeyEventsPlugin(p1_0), new i12.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i13.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i11.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i11.DOCUMENT, i11.DOCUMENT, i12.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i12.HAMMER_LOADER], i12.DOCUMENT]), i0.ɵmpd(4608, i12.EventManager, i12.EventManager, [i12.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i12.ɵDomSharedStylesHost, i12.ɵDomSharedStylesHost, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.ɵDomRendererFactory2, i12.ɵDomRendererFactory2, [i12.EventManager, i12.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i13.ɵangular_packages_platform_server_platform_server_c, i13.ɵangular_packages_platform_server_platform_server_c, [i12.DOCUMENT, [2, i12.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i12.ɵSharedStylesHost, null, [i13.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i13.ɵServerRendererFactory2, i13.ɵServerRendererFactory2, [i12.EventManager, i0.NgZone, i12.DOCUMENT, i12.ɵSharedStylesHost]), i0.ɵmpd(4608, i14.AnimationDriver, i14.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i14.ɵAnimationStyleNormalizer, i15.ɵangular_packages_platform_browser_animations_animations_c, []), i0.ɵmpd(4608, i14.ɵAnimationEngine, i15.ɵangular_packages_platform_browser_animations_animations_a, [i11.DOCUMENT, i14.AnimationDriver, i14.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i13.ɵangular_packages_platform_server_platform_server_a, [i13.ɵServerRendererFactory2, i14.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i16.Overlay, i16.Overlay, [i16.ScrollStrategyOptions, i16.OverlayContainer, i0.ComponentFactoryResolver, i16.OverlayPositionBuilder, i16.OverlayKeyboardDispatcher, i0.Injector, i0.NgZone, i11.DOCUMENT, i17.Directionality]), i0.ɵmpd(5120, i16.ɵc, i16.ɵd, [i16.Overlay]), i0.ɵmpd(5120, i18.MAT_MENU_SCROLL_STRATEGY, i18.ɵd23, [i16.Overlay]), i0.ɵmpd(5120, i19.FirebaseApp, i19._firebaseAppFactory, [i19.FirebaseOptionsToken, [2, i19.FirebaseNameOrConfigToken]]), i0.ɵmpd(4608, i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_g, [i11.DOCUMENT, i0.PLATFORM_ID, i20.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_h, i20.ɵangular_packages_common_http_http_h, [i20.HttpXsrfTokenExtractor, i20.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i20.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i20.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i20.XhrFactory, i13.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i20.HttpXhrBackend, i20.HttpXhrBackend, [i20.XhrFactory]), i0.ɵmpd(6144, i20.HttpBackend, null, [i20.HttpXhrBackend]), i0.ɵmpd(5120, i20.HttpHandler, i13.ɵangular_packages_platform_server_platform_server_h, [i20.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i20.HttpClient, i20.HttpClient, [i20.HttpHandler]), i0.ɵmpd(4608, i20.ɵangular_packages_common_http_http_d, i20.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(5120, i21.TranslateLoader, i1.universalLoader, []), i0.ɵmpd(4608, i21.TranslateCompiler, i21.TranslateFakeCompiler, []), i0.ɵmpd(4608, i21.TranslateParser, i21.TranslateDefaultParser, []), i0.ɵmpd(4608, i21.MissingTranslationHandler, i21.FakeMissingTranslationHandler, []), i0.ɵmpd(4608, i21.TranslateStore, i21.TranslateStore, []), i0.ɵmpd(4608, i21.TranslateService, i21.TranslateService, [i21.TranslateStore, i21.TranslateLoader, i21.TranslateCompiler, i21.TranslateParser, i21.MissingTranslationHandler, i21.USE_DEFAULT_LANG, i21.USE_STORE]), i0.ɵmpd(4608, i22.WindowRef, i22.WindowRef, []), i0.ɵmpd(4608, i22.DocumentRef, i22.DocumentRef, []), i0.ɵmpd(4608, i23.MapsAPILoader, i24.LazyMapsAPILoader, [[2, i24.LAZY_MAPS_API_CONFIG], i22.WindowRef, i22.DocumentRef]), i0.ɵmpd(5120, i25.ActivatedRoute, i25.ɵangular_packages_router_router_g, [i25.Router]), i0.ɵmpd(4608, i25.NoPreloading, i25.NoPreloading, []), i0.ɵmpd(6144, i25.PreloadingStrategy, null, [i25.NoPreloading]), i0.ɵmpd(135680, i25.RouterPreloader, i25.RouterPreloader, [i25.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i25.PreloadingStrategy]), i0.ɵmpd(4608, i25.PreloadAllModules, i25.PreloadAllModules, []), i0.ɵmpd(4608, i11.ViewportScroller, i11.ɵNullViewportScroller, []), i0.ɵmpd(5120, i25.ɵangular_packages_router_router_n, i25.ɵangular_packages_router_router_c, [i25.Router, i11.ViewportScroller, i25.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i25.ROUTER_INITIALIZER, i25.ɵangular_packages_router_router_j, [i25.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i25.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i26.SnackBar, i26.SnackBar, [i27.MatSnackBar]), i0.ɵmpd(4608, i28.WindowRef, i28.WindowRef, [i0.PLATFORM_ID, i0.Injector]), i0.ɵmpd(4608, i29.Notifications, i29.Notifications, [i28.WindowRef, i0.PLATFORM_ID, i20.HttpClient, i0.ApplicationRef, i0.Injector]), i0.ɵmpd(4608, i30.ExampleApi, i30.ExampleApi, [i20.HttpClient]), i0.ɵmpd(4608, i12.TransferState, i12.TransferState, []), i0.ɵmpd(4608, i31.HitWithTransferStateResolver, i31.HitWithTransferStateResolver, [i30.ExampleApi, i12.TransferState, i0.PLATFORM_ID]), i0.ɵmpd(4608, i32.HitWithoutTransferStateResolver, i32.HitWithoutTransferStateResolver, [i30.ExampleApi]), i0.ɵmpd(4608, i12.Title, i12.Title, [i11.DOCUMENT]), i0.ɵmpd(4608, i12.Meta, i12.Meta, [i11.DOCUMENT]), i0.ɵmpd(4608, i33.BrowserXhr, i13.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i33.ResponseOptions, i33.BaseResponseOptions, []), i0.ɵmpd(4608, i33.XSRFStrategy, i13.ɵangular_packages_platform_server_platform_server_f, []), i0.ɵmpd(4608, i33.XHRBackend, i33.XHRBackend, [i33.BrowserXhr, i33.ResponseOptions, i33.XSRFStrategy]), i0.ɵmpd(4608, i33.RequestOptions, i33.BaseRequestOptions, []), i0.ɵmpd(5120, i33.Http, i13.ɵangular_packages_platform_server_platform_server_g, [i33.XHRBackend, i33.RequestOptions]), i0.ɵmpd(4608, i34.AnimationBuilder, i15.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i12.DOCUMENT]), i0.ɵmpd(5120, i13.BEFORE_APP_SERIALIZED, function (p0_0, p0_1, p0_2) { return [i13.ɵangular_packages_platform_server_platform_server_b(p0_0, p0_1, p0_2)]; }, [i12.DOCUMENT, i0.APP_ID, i12.TransferState]), i0.ɵmpd(4608, i35.SwUpdate, i36.SwUpdateServerMock, []), i0.ɵmpd(4608, i35.SwPush, i37.SwPushServerMock, []), i0.ɵmpd(1073742336, i11.CommonModule, i11.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i12.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i25.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i25.ɵangular_packages_router_router_h, i25.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "app-root", []), i0.ɵmpd(2048, i12.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i12.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i25.ɵangular_packages_router_router_i(p1_0), i12.ɵangular_packages_platform_browser_platform_browser_h(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i25.ɵangular_packages_router_router_h, i12.ɵTRANSITION_ID, i11.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i12.BrowserModule, i12.BrowserModule, [[3, i12.BrowserModule]]), i0.ɵmpd(1073742336, i17.BidiModule, i17.BidiModule, []), i0.ɵmpd(1073742336, i38.MatCommonModule, i38.MatCommonModule, [[2, i38.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(1073742336, i39.PlatformModule, i39.PlatformModule, []), i0.ɵmpd(1073742336, i38.MatRippleModule, i38.MatRippleModule, []), i0.ɵmpd(1073742336, i40.MatButtonModule, i40.MatButtonModule, []), i0.ɵmpd(1073742336, i41.PortalModule, i41.PortalModule, []), i0.ɵmpd(1073742336, i42.ScrollDispatchModule, i42.ScrollDispatchModule, []), i0.ɵmpd(1073742336, i16.OverlayModule, i16.OverlayModule, []), i0.ɵmpd(1073742336, i27.MatSnackBarModule, i27.MatSnackBarModule, []), i0.ɵmpd(1073742336, i18.MatMenuModule, i18.MatMenuModule, []), i0.ɵmpd(1073742336, i21.TranslateModule, i21.TranslateModule, []), i0.ɵmpd(1073742336, i19.AngularFireModule, i19.AngularFireModule, []), i0.ɵmpd(1073742336, i43.AgmCoreModule, i43.AgmCoreModule, []), i0.ɵmpd(1024, i25.ɵangular_packages_router_router_a, i25.ɵangular_packages_router_router_e, [[3, i25.Router]]), i0.ɵmpd(512, i25.UrlSerializer, i25.DefaultUrlSerializer, []), i0.ɵmpd(512, i25.ChildrenOutletContexts, i25.ChildrenOutletContexts, []), i0.ɵmpd(256, i25.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i11.LocationStrategy, i25.ɵangular_packages_router_router_d, [i11.PlatformLocation, [2, i11.APP_BASE_HREF], i25.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i11.Location, i11.Location, [i11.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i44.ModuleMapNgFactoryLoader, [i0.Compiler, i44.MODULE_MAP]), i0.ɵmpd(1024, i25.ROUTES, function () { return [[{ path: "", component: i45.HomeComponent, data: i46.ɵ0 }, { path: "donors", component: i47.DonorsComponent, data: i46.ɵ1 }, { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule", data: i46.ɵ2 }, { path: "transferState", data: i46.ɵ3, children: [{ path: "", component: i48.TransferStateComponent }, { path: "with", component: i49.WithTransferStateComponent, resolve: { hits: i31.HitWithTransferStateResolver } }, { path: "without", component: i50.WithoutTransferStateComponent, resolve: { hits: i32.HitWithoutTransferStateResolver } }] }]]; }, []), i0.ɵmpd(1024, i25.Router, i25.ɵangular_packages_router_router_f, [i0.ApplicationRef, i25.UrlSerializer, i25.ChildrenOutletContexts, i11.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i25.ROUTES, i25.ROUTER_CONFIGURATION, [2, i25.UrlHandlingStrategy], [2, i25.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i25.RouterModule, i25.RouterModule, [[2, i25.ɵangular_packages_router_router_a], [2, i25.Router]]), i0.ɵmpd(1073742336, i20.HttpClientXsrfModule, i20.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i20.HttpClientModule, i20.HttpClientModule, []), i0.ɵmpd(1073742336, i46.AppModule, i46.AppModule, []), i0.ɵmpd(1073742336, i33.HttpModule, i33.HttpModule, []), i0.ɵmpd(1073742336, i15.NoopAnimationsModule, i15.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i13.ServerModule, i13.ServerModule, []), i0.ɵmpd(1073742336, i44.ModuleMapLoaderModule, i44.ModuleMapLoaderModule, []), i0.ɵmpd(1073742336, i13.ServerTransferStateModule, i13.ServerTransferStateModule, []), i0.ɵmpd(1073742336, i51.ServiceWorkerModuleMock, i51.ServiceWorkerModuleMock, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i19.FirebaseOptionsToken, { apiKey: "AIzaSyA4d00nt-C9EJ2VLtMoZTr5avzgtUbZ3e0", authDomain: "keralarescue-95468.firebaseapp.com", databaseURL: "https://keralarescue-95468.firebaseio.com", projectId: "keralarescue-95468", storageBucket: "keralarescue-95468.appspot.com", messagingSenderId: "463184367063" }, []), i0.ɵmpd(256, i19.FirebaseNameOrConfigToken, undefined, []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i20.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i21.USE_STORE, undefined, []), i0.ɵmpd(256, i21.USE_DEFAULT_LANG, undefined, []), i0.ɵmpd(256, i24.LAZY_MAPS_API_CONFIG, { apiKey: "AIzaSyA4d00nt-C9EJ2VLtMoZTr5avzgtUbZ3e0" }, []), i0.ɵmpd(256, i15.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @ngx-translate/core */ "@ngx-translate/core");
var fs = __webpack_require__(/*! fs */ "fs");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
function universalLoader() {
    return {
        getTranslation: function (lang) {
            return rxjs_1.Observable.create(function (observer) {
                observer.next(JSON.parse(fs.readFileSync("./dist/assets/i18n/" + lang + ".json", 'utf8')));
                observer.complete();
            });
        }
    };
}
exports.universalLoader = universalLoader;
var AppServerModule = /** @class */ (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/donors/donors.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/donors/donors.component.ngfactory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./donors.component */ "./src/app/donors/donors.component.ts");
var styles_DonorsComponent = ["div.wrapper[_ngcontent-%COMP%] {display: flex; flex-direction: row}\n        .wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {flex: 1;}\n        .wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { padding: 5px; }"];
var RenderType_DonorsComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_DonorsComponent, data: {} });
exports.RenderType_DonorsComponent = RenderType_DonorsComponent;
function View_DonorsComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Donors"])), (_l()(), i0.ɵeld(2, 0, null, null, 63, "div", [["class", "wrapper"]], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 44, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["This project is my 'after-hours' work. I am devoting my private time and resources for its "])), (_l()(), i0.ɵeld(6, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), i0.ɵeld(7, 0, null, null, 1, "i", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["continuous"])), (_l()(), i0.ɵted(-1, null, [" evolution."])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Here is the of donations made by the community. I am thanking for all of them:"])), (_l()(), i0.ɵeld(12, 0, null, null, 35, "ul", [], null, null, null, null, null)), (_l()(), i0.ɵeld(13, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(14, 0, null, null, 1, "a", [["href", "https://www.linkedin.com/in/omrinavot/"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Omri Navot"])), (_l()(), i0.ɵted(-1, null, [" - 50 USD"])), (_l()(), i0.ɵeld(17, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(18, 0, null, null, 1, "a", [["href", "https://github.com/martinambrus"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Martin Ambrus"])), (_l()(), i0.ɵted(-1, null, [" - 15 USD + 5 USD (monthly)"])), (_l()(), i0.ɵeld(21, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(22, 0, null, null, 1, "a", [["href", "https://twitter.com/bjeaurn"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Bjorn 'Bjeaurn'"])), (_l()(), i0.ɵted(-1, null, [" - 5 USD + 5 USD (monthly)"])), (_l()(), i0.ɵeld(25, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(26, 0, null, null, 1, "a", [["href", "https://twitter.com/WebWhizJim"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Jim Lynch"])), (_l()(), i0.ɵted(-1, null, [" - 2 USD (monthly)"])), (_l()(), i0.ɵeld(29, 0, null, null, 10, "li", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Nice French Angular trainers: "])), (_l()(), i0.ɵeld(31, 0, null, null, 8, "ul", [], null, null, null, null, null)), (_l()(), i0.ɵeld(32, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(33, 0, null, null, 1, "a", [["href", "https://www.linkedin.com/in/christophegueroult/"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Christophe Gueroult"])), (_l()(), i0.ɵted(-1, null, [" - 15 USD (yearly)"])), (_l()(), i0.ɵeld(36, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(37, 0, null, null, 1, "a", [["href", "https://www.linkedin.com/in/pierren\u00E9d\u00E9lec/"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Pierre N\u00E9d\u00E9lec"])), (_l()(), i0.ɵted(-1, null, [" - 15 USD (yearly)"])), (_l()(), i0.ɵeld(40, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(41, 0, null, null, 1, "a", [["href", "https://twitter.com/vogloblinsky"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Vincent Oglobinsky"])), (_l()(), i0.ɵted(-1, null, [" - 10 USD"])), (_l()(), i0.ɵeld(44, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(45, 0, null, null, 1, "a", [["href", "https://twitter.com/Ramesh_Mavuluri"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Ramesh Mavuluri"])), (_l()(), i0.ɵted(-1, null, [" - 10 USD"])), (_l()(), i0.ɵeld(48, 0, null, null, 17, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(49, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Don't be shy and become one of donors!"])), (_l()(), i0.ɵeld(51, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Here is the list of pages where you can donor this project:"])), (_l()(), i0.ɵeld(53, 0, null, null, 12, "ul", [], null, null, null, null, null)), (_l()(), i0.ɵeld(54, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(55, 0, null, null, 1, "a", [["href", "https://opencollective.com/ng-toolkit"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Open Collective"])), (_l()(), i0.ɵeld(57, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(58, 0, null, null, 1, "a", [["href", "https://donorbox.org/ng-toolkit"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Donorbox"])), (_l()(), i0.ɵeld(60, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(61, 0, null, null, 1, "a", [["href", "https://liberapay.com/maciejtreder/donate"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Liberapay"])), (_l()(), i0.ɵeld(63, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i0.ɵeld(64, 0, null, null, 1, "a", [["href", "https://www.paypal.me/ngtoolkit"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Paypal.me"]))], null, null); }
exports.View_DonorsComponent_0 = View_DonorsComponent_0;
function View_DonorsComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_DonorsComponent_0, RenderType_DonorsComponent)), i0.ɵdid(1, 49152, null, 0, i1.DonorsComponent, [], null, null)], null, null); }
exports.View_DonorsComponent_Host_0 = View_DonorsComponent_Host_0;
var DonorsComponentNgFactory = i0.ɵccf("ng-component", i1.DonorsComponent, View_DonorsComponent_Host_0, {}, {}, []);
exports.DonorsComponentNgFactory = DonorsComponentNgFactory;


/***/ }),

/***/ "./src/app/donors/donors.component.ts":
/*!********************************************!*\
  !*** ./src/app/donors/donors.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DonorsComponent = /** @class */ (function () {
    function DonorsComponent() {
    }
    return DonorsComponent;
}());
exports.DonorsComponent = DonorsComponent;


/***/ }),

/***/ "./src/app/geo-query/geo-query.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/geo-query/geo-query.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["agm-map[_ngcontent-%COMP%] {\n  height: 500px;\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/geo-query/geo-query.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/geo-query/geo-query.component.ngfactory.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./geo-query.component.css.shim.ngstyle */ "./src/app/geo-query/geo-query.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../node_modules/@agm/core/directives/map.ngfactory */ "./node_modules/@agm/core/directives/map.ngfactory.js");
var i3 = __webpack_require__(/*! @agm/core/services/managers/circle-manager */ "@agm/core/services/managers/circle-manager");
var i4 = __webpack_require__(/*! @agm/core/services/google-maps-api-wrapper */ "@agm/core/services/google-maps-api-wrapper");
var i5 = __webpack_require__(/*! @agm/core/services/managers/polyline-manager */ "@agm/core/services/managers/polyline-manager");
var i6 = __webpack_require__(/*! @agm/core/services/managers/polygon-manager */ "@agm/core/services/managers/polygon-manager");
var i7 = __webpack_require__(/*! @agm/core/services/managers/kml-layer-manager */ "@agm/core/services/managers/kml-layer-manager");
var i8 = __webpack_require__(/*! @agm/core/services/managers/data-layer-manager */ "@agm/core/services/managers/data-layer-manager");
var i9 = __webpack_require__(/*! @agm/core/services/maps-api-loader/maps-api-loader */ "@agm/core/services/maps-api-loader/maps-api-loader");
var i10 = __webpack_require__(/*! @agm/core/directives/map */ "@agm/core/directives/map");
var i11 = __webpack_require__(/*! @agm/core/services/managers/marker-manager */ "@agm/core/services/managers/marker-manager");
var i12 = __webpack_require__(/*! @agm/core/services/managers/info-window-manager */ "@agm/core/services/managers/info-window-manager");
var i13 = __webpack_require__(/*! @agm/core/directives/marker */ "@agm/core/directives/marker");
var i14 = __webpack_require__(/*! ../../../node_modules/@agm/core/directives/info-window.ngfactory */ "./node_modules/@agm/core/directives/info-window.ngfactory.js");
var i15 = __webpack_require__(/*! @agm/core/directives/info-window */ "@agm/core/directives/info-window");
var i16 = __webpack_require__(/*! ./geo-query.component */ "./src/app/geo-query/geo-query.component.ts");
var styles_GeoQueryComponent = [i0.styles];
var RenderType_GeoQueryComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_GeoQueryComponent, data: {} });
exports.RenderType_GeoQueryComponent = RenderType_GeoQueryComponent;
function View_GeoQueryComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, "agm-map", [], [[2, "sebm-google-map-container", null]], null, null, i2.View_AgmMap_0, i2.RenderType_AgmMap)), i1.ɵprd(4608, null, i3.CircleManager, i3.CircleManager, [i4.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i5.PolylineManager, i5.PolylineManager, [i4.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i6.PolygonManager, i6.PolygonManager, [i4.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i7.KmlLayerManager, i7.KmlLayerManager, [i4.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(4608, null, i8.DataLayerManager, i8.DataLayerManager, [i4.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(512, null, i4.GoogleMapsAPIWrapper, i4.GoogleMapsAPIWrapper, [i9.MapsAPILoader, i1.NgZone]), i1.ɵdid(7, 770048, null, 0, i10.AgmMap, [i1.ElementRef, i4.GoogleMapsAPIWrapper], { longitude: [0, "longitude"], latitude: [1, "latitude"] }, null), i1.ɵprd(512, null, i11.MarkerManager, i11.MarkerManager, [i4.GoogleMapsAPIWrapper, i1.NgZone]), i1.ɵprd(512, null, i12.InfoWindowManager, i12.InfoWindowManager, [i4.GoogleMapsAPIWrapper, i1.NgZone, i11.MarkerManager]), (_l()(), i1.ɵeld(10, 0, null, 0, 7, "agm-marker", [], null, null, null, null, null)), i1.ɵdid(11, 1720320, null, 1, i13.AgmMarker, [i11.MarkerManager], { latitude: [0, "latitude"], longitude: [1, "longitude"] }, null), i1.ɵqud(603979776, 1, { infoWindow: 1 }), (_l()(), i1.ɵeld(13, 0, null, null, 4, "agm-info-window", [], null, null, null, i14.View_AgmInfoWindow_0, i14.RenderType_AgmInfoWindow)), i1.ɵdid(14, 770048, [[1, 4]], 0, i15.AgmInfoWindow, [i12.InfoWindowManager, i1.ElementRef], null, null), (_l()(), i1.ɵeld(15, 0, null, 0, 2, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵeld(16, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" You're here "]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.lng; var currVal_2 = _co.lat; _ck(_v, 7, 0, currVal_1, currVal_2); var currVal_3 = _co.lat; var currVal_4 = _co.lng; _ck(_v, 11, 0, currVal_3, currVal_4); _ck(_v, 14, 0); }, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
exports.View_GeoQueryComponent_0 = View_GeoQueryComponent_0;
function View_GeoQueryComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-geo-query", [], null, null, null, View_GeoQueryComponent_0, RenderType_GeoQueryComponent)), i1.ɵdid(1, 114688, null, 0, i16.GeoQueryComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_GeoQueryComponent_Host_0 = View_GeoQueryComponent_Host_0;
var GeoQueryComponentNgFactory = i1.ɵccf("app-geo-query", i16.GeoQueryComponent, View_GeoQueryComponent_Host_0, {}, {}, []);
exports.GeoQueryComponentNgFactory = GeoQueryComponentNgFactory;


/***/ }),

/***/ "./src/app/geo-query/geo-query.component.ts":
/*!**************************************************!*\
  !*** ./src/app/geo-query/geo-query.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var GeoQueryComponent = /** @class */ (function () {
    function GeoQueryComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GeoQueryComponent.prototype.ngOnInit = function () {
        this.getUserLocation();
    };
    GeoQueryComponent.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    GeoQueryComponent.prototype.seedDatabase = function () {
        var dummyPoints = [
            [37.9, -122.1],
            [38.7, -122.2],
            [38.1, -122.3],
            [38.3, -122.0],
            [38.7, -122.1]
        ];
        dummyPoints.forEach(function (val, idx) {
            var name = "dummy-location-" + idx;
            console.log(idx);
            // this.geo.setLocation(name, val);
        });
    };
    return GeoQueryComponent;
}());
exports.GeoQueryComponent = GeoQueryComponent;


/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ../geo-query/geo-query.component.ngfactory */ "./src/app/geo-query/geo-query.component.ngfactory.js");
var i2 = __webpack_require__(/*! ../geo-query/geo-query.component */ "./src/app/geo-query/geo-query.component.ts");
var i3 = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
var styles_HomeComponent = ["pre[_ngcontent-%COMP%] {background: lightgray; color: black}"];
var RenderType_HomeComponent = i0.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
exports.RenderType_HomeComponent = RenderType_HomeComponent;
function View_HomeComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-geo-query", [], null, null, null, i1.View_GeoQueryComponent_0, i1.RenderType_GeoQueryComponent)), i0.ɵdid(1, 114688, null, 0, i2.GeoQueryComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_HomeComponent_0 = View_HomeComponent_0;
function View_HomeComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "home-view", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i0.ɵdid(1, 49152, null, 0, i3.HomeComponent, [], null, null)], null, null); }
exports.View_HomeComponent_Host_0 = View_HomeComponent_Host_0;
var HomeComponentNgFactory = i0.ɵccf("home-view", i3.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
exports.HomeComponentNgFactory = HomeComponentNgFactory;


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/lazy/lazy.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/lazy/lazy.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./lazy.component */ "./src/app/lazy/lazy.component.ts");
var styles_LazyComponent = [];
var RenderType_LazyComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_LazyComponent, data: {} });
exports.RenderType_LazyComponent = RenderType_LazyComponent;
function View_LazyComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Lazy loading"])), (_l()(), i0.ɵeld(2, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i0.ɵeld(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Lazy loading"])), (_l()(), i0.ɵted(-1, null, [" is a design pattern used to defer initialization time of an web application."])), (_l()(), i0.ɵeld(6, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Thanks to Angular @NgModule we are able to load pieces of our apps on demand. That helps us decrease the startup time, because application doesn't need to load everything at once. Lazily loaded modules will only be downloaded when user navigates to their routes."]))], null, null); }
exports.View_LazyComponent_0 = View_LazyComponent_0;
function View_LazyComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "lazy-view", [], null, null, null, View_LazyComponent_0, RenderType_LazyComponent)), i0.ɵdid(1, 49152, null, 0, i1.LazyComponent, [], null, null)], null, null); }
exports.View_LazyComponent_Host_0 = View_LazyComponent_Host_0;
var LazyComponentNgFactory = i0.ɵccf("lazy-view", i1.LazyComponent, View_LazyComponent_Host_0, {}, {}, []);
exports.LazyComponentNgFactory = LazyComponentNgFactory;


/***/ }),

/***/ "./src/app/lazy/lazy.component.ts":
/*!****************************************!*\
  !*** ./src/app/lazy/lazy.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LazyComponent = /** @class */ (function () {
    function LazyComponent() {
    }
    return LazyComponent;
}());
exports.LazyComponent = LazyComponent;


/***/ }),

/***/ "./src/app/lazy/lazy.module.ngfactory.js":
/*!***********************************************!*\
  !*** ./src/app/lazy/lazy.module.ngfactory.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i1 = __webpack_require__(/*! ./lazy.module */ "./src/app/lazy/lazy.module.ts");
var i2 = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
var i3 = __webpack_require__(/*! ./lazy.component.ngfactory */ "./src/app/lazy/lazy.component.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i5 = __webpack_require__(/*! ./lazy.component */ "./src/app/lazy/lazy.component.ts");
var LazyModuleNgFactory = i0.ɵcmf(i1.LazyModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.ɵEmptyOutletComponentNgFactory, i3.LazyComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i4.RouterModule, i4.RouterModule, [[2, i4.ɵangular_packages_router_router_a], [2, i4.Router]]), i0.ɵmpd(1073742336, i1.LazyModule, i1.LazyModule, []), i0.ɵmpd(1024, i4.ROUTES, function () { return [[{ path: "", component: i5.LazyComponent, pathMatch: "full" }]]; }, [])]); });
exports.LazyModuleNgFactory = LazyModuleNgFactory;


/***/ }),

/***/ "./src/app/lazy/lazy.module.ts":
/*!*************************************!*\
  !*** ./src/app/lazy/lazy.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LazyModule = /** @class */ (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
exports.LazyModule = LazyModule;


/***/ }),

/***/ "./src/app/menu/menu.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/menu/menu.component.ngfactory.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./menu.component.scss.shim.ngstyle */ "./src/app/menu/menu.component.scss.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
var i3 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i4 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i5 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i6 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i7 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i8 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i9 = __webpack_require__(/*! @angular/material/menu */ "@angular/material/menu");
var i10 = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
var i11 = __webpack_require__(/*! @angular/cdk/bidi */ "@angular/cdk/bidi");
var i12 = __webpack_require__(/*! ../../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
var i13 = __webpack_require__(/*! ./menu.component */ "./src/app/menu/menu.component.ts");
var i14 = __webpack_require__(/*! ../services/notifications.service */ "./src/app/services/notifications.service.ts");
var i15 = __webpack_require__(/*! ../window-ref.service */ "./src/app/window-ref.service.ts");
var styles_MenuComponent = [i0.styles];
var RenderType_MenuComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_MenuComponent, data: {} });
exports.RenderType_MenuComponent = RenderType_MenuComponent;
function View_MenuComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "a", [["mat-raised-button", ""], ["rel", "noopener"], ["target", "_blank"]], [[8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_MatAnchor_0, i2.RenderType_MatAnchor)), i1.ɵdid(1, 180224, null, 0, i3.MatAnchor, [i4.Platform, i5.FocusMonitor, i1.ElementRef, [2, i6.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i1.ɵeld(2, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵted(4, 0, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.link, ""); var currVal_1 = (i1.ɵnov(_v, 1).disabled ? (0 - 1) : (i1.ɵnov(_v, 1).tabIndex || 0)); var currVal_2 = (i1.ɵnov(_v, 1).disabled || null); var currVal_3 = i1.ɵnov(_v, 1).disabled.toString(); var currVal_4 = (i1.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _v.parent.context.$implicit.icon; _ck(_v, 3, 0, currVal_5); var currVal_6 = _v.parent.context.$implicit.text; _ck(_v, 4, 0, currVal_6); }); }
function View_MenuComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i2.View_MatAnchor_0, i2.RenderType_MatAnchor)), i1.ɵdid(1, 180224, null, 0, i3.MatAnchor, [i4.Platform, i5.FocusMonitor, i1.ElementRef, [2, i6.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(2, 671744, null, 0, i7.RouterLinkWithHref, [i7.Router, i7.ActivatedRoute, i8.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵted(5, 0, [" ", ""]))], function (_ck, _v) { var currVal_6 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.link, ""); _ck(_v, 2, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = (i1.ɵnov(_v, 1).disabled ? (0 - 1) : (i1.ɵnov(_v, 1).tabIndex || 0)); var currVal_1 = (i1.ɵnov(_v, 1).disabled || null); var currVal_2 = i1.ɵnov(_v, 1).disabled.toString(); var currVal_3 = (i1.ɵnov(_v, 1)._animationMode === "NoopAnimations"); var currVal_4 = i1.ɵnov(_v, 2).target; var currVal_5 = i1.ɵnov(_v, 2).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_7 = _v.parent.context.$implicit.icon; _ck(_v, 4, 0, currVal_7); var currVal_8 = _v.parent.context.$implicit.text; _ck(_v, 5, 0, currVal_8); }); }
function View_MenuComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_3)), i1.ɵdid(2, 16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["standard", 2]], null, 0, null, View_MenuComponent_4))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.link.startsWith("http"); var currVal_1 = i1.ɵnov(_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_MenuComponent_5(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleSubscription() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i2.View_MatAnchor_0, i2.RenderType_MatAnchor)), i1.ɵdid(1, 180224, null, 0, i3.MatAnchor, [i4.Platform, i5.FocusMonitor, i1.ElementRef, [2, i6.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i1.ɵeld(2, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["message"])), (_l()(), i1.ɵted(4, 0, [" ", " "])), i1.ɵpid(131072, i8.AsyncPipe, [i1.ChangeDetectorRef])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (i1.ɵnov(_v, 1).disabled ? (0 - 1) : (i1.ɵnov(_v, 1).tabIndex || 0)); var currVal_1 = (i1.ɵnov(_v, 1).disabled || null); var currVal_2 = i1.ɵnov(_v, 1).disabled.toString(); var currVal_3 = (i1.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = i1.ɵunv(_v, 4, 0, i1.ɵnov(_v, 5).transform(_co.subscribeText)); _ck(_v, 4, 0, currVal_4); }); }
function View_MenuComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 15, null, null, null, null, null, null, null)), (_l()(), i1.ɵeld(1, 16777216, null, null, 4, "button", [["aria-haspopup", "true"], ["class", "menu-button open-nav"], ["mat-mini-fab", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (i1.ɵnov(_v, 3)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i1.ɵnov(_v, 3)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (i1.ɵnov(_v, 3)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, i2.View_MatButton_0, i2.RenderType_MatButton)), i1.ɵdid(2, 180224, null, 0, i3.MatButton, [i1.ElementRef, i4.Platform, i5.FocusMonitor, [2, i6.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(3, 1196032, null, 0, i9.MatMenuTrigger, [i10.Overlay, i1.ElementRef, i1.ViewContainerRef, i9.MAT_MENU_SCROLL_STRATEGY, [2, i9.MatMenu], [8, null], [2, i11.Directionality], i5.FocusMonitor], { menu: [0, "menu"] }, null), (_l()(), i1.ɵeld(4, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["menu"])), (_l()(), i1.ɵeld(6, 0, null, null, 9, "mat-menu", [], null, null, null, i12.View_MatMenu_0, i12.RenderType_MatMenu)), i1.ɵprd(6144, null, i9.ɵf23, null, [i9.MatMenu]), i1.ɵdid(8, 1294336, [["appMenu", 4]], 2, i9.MatMenu, [i1.ElementRef, i1.NgZone, i9.MAT_MENU_DEFAULT_OPTIONS], null, null), i1.ɵqud(603979776, 1, { items: 1 }), i1.ɵqud(335544320, 2, { lazyContent: 0 }), (_l()(), i1.ɵand(16777216, null, 0, 1, null, View_MenuComponent_2)), i1.ɵdid(12, 278528, null, 0, i8.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵand(16777216, null, 0, 2, null, View_MenuComponent_5)), i1.ɵdid(14, 16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), i1.ɵpid(131072, i8.AsyncPipe, [i1.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_3 = i1.ɵnov(_v, 8); _ck(_v, 3, 0, currVal_3); _ck(_v, 8, 0); var currVal_4 = _co.menuElements; _ck(_v, 12, 0, currVal_4); var currVal_5 = i1.ɵunv(_v, 14, 0, i1.ɵnov(_v, 15).transform(_co.isRegistrationAvailable())); _ck(_v, 14, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = (i1.ɵnov(_v, 2).disabled || null); var currVal_1 = (i1.ɵnov(_v, 2)._animationMode === "NoopAnimations"); var currVal_2 = (i1.ɵnov(_v, 3).menuOpen || null); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }); }
function View_MenuComponent_8(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, "a", [["mat-raised-button", ""], ["rel", "noopener"], ["target", "_blank"]], [[8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i2.View_MatAnchor_0, i2.RenderType_MatAnchor)), i1.ɵdid(1, 180224, null, 0, i3.MatAnchor, [i4.Platform, i5.FocusMonitor, i1.ElementRef, [2, i6.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i1.ɵeld(2, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ["", ""])), (_l()(), i1.ɵted(4, 0, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.link, ""); var currVal_1 = (i1.ɵnov(_v, 1).disabled ? (0 - 1) : (i1.ɵnov(_v, 1).tabIndex || 0)); var currVal_2 = (i1.ɵnov(_v, 1).disabled || null); var currVal_3 = i1.ɵnov(_v, 1).disabled.toString(); var currVal_4 = (i1.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _v.parent.context.$implicit.icon; _ck(_v, 3, 0, currVal_5); var currVal_6 = _v.parent.context.$implicit.text; _ck(_v, 4, 0, currVal_6); }); }
function View_MenuComponent_9(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i2.View_MatAnchor_0, i2.RenderType_MatAnchor)), i1.ɵdid(1, 180224, null, 0, i3.MatAnchor, [i4.Platform, i5.FocusMonitor, i1.ElementRef, [2, i6.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(2, 671744, null, 0, i7.RouterLinkWithHref, [i7.Router, i7.ActivatedRoute, i8.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵeld(3, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(4, null, ["", ""])), (_l()(), i1.ɵted(5, 0, [" ", ""]))], function (_ck, _v) { var currVal_6 = i1.ɵinlineInterpolate(1, "", _v.parent.context.$implicit.link, ""); _ck(_v, 2, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = (i1.ɵnov(_v, 1).disabled ? (0 - 1) : (i1.ɵnov(_v, 1).tabIndex || 0)); var currVal_1 = (i1.ɵnov(_v, 1).disabled || null); var currVal_2 = i1.ɵnov(_v, 1).disabled.toString(); var currVal_3 = (i1.ɵnov(_v, 1)._animationMode === "NoopAnimations"); var currVal_4 = i1.ɵnov(_v, 2).target; var currVal_5 = i1.ɵnov(_v, 2).href; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_7 = _v.parent.context.$implicit.icon; _ck(_v, 4, 0, currVal_7); var currVal_8 = _v.parent.context.$implicit.text; _ck(_v, 5, 0, currVal_8); }); }
function View_MenuComponent_7(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_8)), i1.ɵdid(2, 16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["standard", 2]], null, 0, null, View_MenuComponent_9))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.link.startsWith("http"); var currVal_1 = i1.ɵnov(_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_MenuComponent_10(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 1)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.toggleSubscription() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i2.View_MatAnchor_0, i2.RenderType_MatAnchor)), i1.ɵdid(1, 180224, null, 0, i3.MatAnchor, [i4.Platform, i5.FocusMonitor, i1.ElementRef, [2, i6.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i1.ɵeld(2, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["message"])), (_l()(), i1.ɵted(4, 0, [" ", " "])), i1.ɵpid(131072, i8.AsyncPipe, [i1.ChangeDetectorRef])], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (i1.ɵnov(_v, 1).disabled ? (0 - 1) : (i1.ɵnov(_v, 1).tabIndex || 0)); var currVal_1 = (i1.ɵnov(_v, 1).disabled || null); var currVal_2 = i1.ɵnov(_v, 1).disabled.toString(); var currVal_3 = (i1.ɵnov(_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = i1.ɵunv(_v, 4, 0, i1.ɵnov(_v, 5).transform(_co.subscribeText)); _ck(_v, 4, 0, currVal_4); }); }
function View_MenuComponent_6(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_7)), i1.ɵdid(2, 278528, null, 0, i8.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i1.ɵeld(3, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 2, null, View_MenuComponent_10)), i1.ɵdid(5, 16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), i1.ɵpid(131072, i8.AsyncPipe, [i1.ChangeDetectorRef])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.menuElements; _ck(_v, 2, 0, currVal_0); var currVal_1 = i1.ɵunv(_v, 5, 0, i1.ɵnov(_v, 6).transform(_co.isRegistrationAvailable())); _ck(_v, 5, 0, currVal_1); }, null); }
function View_MenuComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_MenuComponent_1)), i1.ɵdid(1, 16384, null, 0, i8.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), i1.ɵand(0, [["horizontal", 2]], null, 0, null, View_MenuComponent_6))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contextual; var currVal_1 = i1.ɵnov(_v, 2); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
exports.View_MenuComponent_0 = View_MenuComponent_0;
function View_MenuComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "menu", [], [[2, "contextual", null]], null, null, View_MenuComponent_0, RenderType_MenuComponent)), i1.ɵdid(1, 114688, null, 0, i13.MenuComponent, [i14.Notifications, i15.WindowRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 1).contextual; _ck(_v, 0, 0, currVal_0); }); }
exports.View_MenuComponent_Host_0 = View_MenuComponent_Host_0;
var MenuComponentNgFactory = i1.ɵccf("menu", i13.MenuComponent, View_MenuComponent_Host_0, { contextual: "contextual" }, {}, []);
exports.MenuComponentNgFactory = MenuComponentNgFactory;


/***/ }),

/***/ "./src/app/menu/menu.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/menu/menu.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = [".contextual[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  color: cornflowerblue;\n  background-color: #2a2f3e;\n  margin: -5px 0 0 8px; }\n\n  .mat-menu-content {\n  padding: 0 !important; }\n\n  .mat-menu-content a {\n    display: block;\n    text-align: left;\n    padding: 10px;\n    box-shadow: none !important; }\n\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 6px;\n  padding: 0; }\n\nul[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: inline;\n  position: relative;\n  left: 0px; }\n\nli[_ngcontent-%COMP%] {\n  display: inline-block; }\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin: 0 3px; }\n\na[_ngcontent-%COMP%]:hover {\n  color: orange;\n  background-color: #222838 !important;\n  text-decoration: none; }\n\nspan[_ngcontent-%COMP%]:hover {\n  cursor: pointer; }\n\n  .mat-menu-panel {\n  background: #2a2f3e !important; }\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: #2a2f3e !important; }\n\n@media (max-width: 768px) {\n  .contextual[_nghost-%COMP%] {\n    display: block !important; }\n  [_nghost-%COMP%] {\n    display: none; } }\n\n@media (min-width: 768px) {\n  .contextual[_nghost-%COMP%] {\n    display: none; }\n  [_nghost-%COMP%] {\n    display: block; } }"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var window_ref_service_1 = __webpack_require__(/*! ../window-ref.service */ "./src/app/window-ref.service.ts");
var notifications_service_1 = __webpack_require__(/*! ../services/notifications.service */ "./src/app/services/notifications.service.ts");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(ns, window) {
        this.ns = ns;
        this.window = window;
        this.isSafari = false;
        this.subscribeText = new rxjs_1.ReplaySubject();
        this.menuElements = [
            { link: '/', icon: 'home', text: 'Relief camps nearby' }
            // { link: '/', icon: 'home', text: 'Volunteers' }
            // { link: '/home', icon: 'free_breakfast', text: 'Lazy module' }
        ];
        this.contextual = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSafari = !!this.window.nativeWindow['safari'];
        this.ns.isSubscribed().subscribe(function (registered) {
            registered
                ? _this.subscribeText.next('Unsubscribe from push')
                : _this.subscribeText.next('Subscribe to push');
            _this._isRegistered = registered;
        });
    };
    MenuComponent.prototype.isRegistrationAvailable = function () {
        if (this.isSafari) {
            return this.ns.isSubscribed().pipe(operators_1.map(function (registered) { return !registered; }));
        }
        else if (this.ns.isPushAvailable()) {
            return rxjs_1.of(true);
        }
        else {
            return rxjs_1.of(false);
        }
    };
    MenuComponent.prototype.toggleSubscription = function () {
        if (this._isRegistered) {
            this.ns.unsubscribeFromPush().subscribe();
        }
        else {
            this.ns.subscribeToPush().subscribe();
        }
    };
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;


/***/ }),

/***/ "./src/app/services/exampleApi.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/exampleApi.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var ExampleApi = /** @class */ (function () {
    function ExampleApi(http) {
        this.http = http;
        this.host = 'https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production';
    }
    ExampleApi.prototype.hit = function () {
        return this.http.get(this.host + '/hit', { responseType: 'text' });
    };
    return ExampleApi;
}());
exports.ExampleApi = ExampleApi;


/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var window_ref_service_1 = __webpack_require__(/*! ../window-ref.service */ "./src/app/window-ref.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
var service_worker_1 = __webpack_require__(/*! @angular/service-worker */ "@angular/service-worker");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
var Notifications = /** @class */ (function () {
    function Notifications(window, platformId, http, appRef, injector) {
        this.window = window;
        this.platformId = platformId;
        this.http = http;
        this.appRef = appRef;
        this.injector = injector;
        this.endpoint = 'https://api.angular-universal-pwa.maciejtreder.com/webpush';
        this.vapidSubscriptionEndpoint = this.endpoint + '/vapid';
        this.safariSubscriptionEndpoint = this.endpoint + '/safari';
        this.applicationServerKey = 'BKxp6BwVzRWy1Qbe63rHNbG46uwPTrl1RoeTJuyVBm42kvlUk0RuSkYk8NKoO0QK2GNV7eRhOLyV1KfmZhwU9Sc';
        try {
            this.swPush = injector.get(service_worker_1.SwPush);
            this.swPush.messages.subscribe(function (message) { return console.log(message); });
        }
        catch (err) {
            // workaround for https://github.com/angular/angular/issues/20407
        }
    }
    Notifications.prototype.isPushAvailable = function () {
        return common_1.isPlatformBrowser(this.platformId) && (this.isVapidPushAvaialable() || this.isSafariPushAvailable());
    };
    Notifications.prototype.isSubscribed = function () {
        var _this = this;
        if (this.isVapidPushAvaialable()) {
            return this.swPush.subscription.pipe(operators_1.map(function (subscription) { return !!subscription; }));
        }
        else if (this.isSafariPushAvailable()) {
            return rxjs_1.Observable.create(function (observer) {
                observer.next(_this.window.nativeWindow['safari'].pushNotification.permission('web.com.maciejtreder.angular-universal-pwa').permission === 'granted');
            });
        }
        else {
            return rxjs_1.of(false);
        }
    };
    Notifications.prototype.subscribeToPush = function () {
        if (!this.isPushAvailable()) {
            throw new Error('Push is not available for this browser!');
        }
        if (this.isVapidPushAvaialable()) {
            return this.registerVapid();
        }
        else {
            return this.registerSafari();
        }
    };
    Notifications.prototype.unsubscribeFromPush = function () {
        var _this = this;
        if (!this.isVapidPushAvaialable()) {
            throw new Error('Only VAPID push support programaticaly!');
        }
        var subscription;
        return this.swPush.subscription.pipe(operators_1.map(function (result) {
            return rxjs_1.from(subscription.unsubscribe());
        })).pipe(function () {
            return _this.http.post(_this.vapidSubscriptionEndpoint + '/unsubscribe', subscription, { headers: new http_1.HttpHeaders().set('content-type', 'application/json'), observe: 'response' }).pipe(operators_1.map(function (resp) { return resp.status === 202; }, function (err) { return err.status === 202; }));
        });
    };
    Notifications.prototype.registerVapid = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (subscriber) {
            _this.swPush.requestSubscription({ serverPublicKey: _this.applicationServerKey }).then(function (pushSubscription) {
                _this.http.post(_this.vapidSubscriptionEndpoint + '/subscribe', JSON.stringify(pushSubscription), { headers: new http_1.HttpHeaders().set('content-type', 'application/json'), observe: 'response' })
                    .subscribe(function (response) {
                    if (response.status !== 202) {
                        pushSubscription.unsubscribe();
                        subscriber.next(false);
                    }
                    else {
                        subscriber.next(true);
                    }
                }, function (err) {
                    if (err.status !== 202) {
                        pushSubscription.unsubscribe();
                        subscriber.next(false);
                    }
                    else {
                        subscriber.next(true);
                    }
                });
            });
        });
    };
    Notifications.prototype.registerSafari = function () {
        var _this = this;
        return rxjs_1.Observable.create(function (subscriber) {
            _this.window.nativeWindow['safari'].pushNotification.requestPermission(_this.safariSubscriptionEndpoint, 'web.com.maciejtreder.angular-universal-pwa', null, function (permission) {
                if (permission.permission === 'granted') {
                    subscriber.next(true);
                }
                else {
                    subscriber.next(false);
                }
                _this.appRef.tick();
            });
        });
    };
    Notifications.prototype.isVapidPushAvaialable = function () {
        return !this.window.nativeWindow['safari'] && !!this.window.nativeWindow['navigator'] && !!this.window.nativeWindow.navigator['serviceWorker'];
    };
    Notifications.prototype.isSafariPushAvailable = function () {
        return !!this.window.nativeWindow['safari'] && !!this.window.nativeWindow['safari'].pushNotification;
    };
    return Notifications;
}());
exports.Notifications = Notifications;


/***/ }),

/***/ "./src/app/services/resolvers/hitWithTransferState.resolver.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/resolvers/hitWithTransferState.resolver.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exampleApi_service_1 = __webpack_require__(/*! ../exampleApi.service */ "./src/app/services/exampleApi.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var HitWithTransferStateResolver = /** @class */ (function () {
    function HitWithTransferStateResolver(api, transferState, platformId) {
        this.api = api;
        this.transferState = transferState;
        this.platformId = platformId;
        this.key = platform_browser_1.makeStateKey('response');
    }
    HitWithTransferStateResolver.prototype.resolve = function (snapshot, state) {
        var _this = this;
        if (!this.transferState.hasKey(this.key)) {
            return this.api.hit().pipe(function (response) {
                response.subscribe(function (resp) {
                    if (common_1.isPlatformServer(_this.platformId)) {
                        _this.transferState.set(_this.key, resp);
                    }
                });
                return response;
            });
        }
        else {
            var value = this.transferState.get(this.key, 'error');
            this.transferState.remove(this.key);
            return rxjs_1.of(value);
        }
    };
    return HitWithTransferStateResolver;
}());
exports.HitWithTransferStateResolver = HitWithTransferStateResolver;


/***/ }),

/***/ "./src/app/services/resolvers/hitWithoutTransferState.resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/resolvers/hitWithoutTransferState.resolver.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exampleApi_service_1 = __webpack_require__(/*! ../exampleApi.service */ "./src/app/services/exampleApi.service.ts");
var HitWithoutTransferStateResolver = /** @class */ (function () {
    function HitWithoutTransferStateResolver(api) {
        this.api = api;
    }
    HitWithoutTransferStateResolver.prototype.resolve = function (snapshot, state) {
        return this.api.hit();
    };
    return HitWithoutTransferStateResolver;
}());
exports.HitWithoutTransferStateResolver = HitWithoutTransferStateResolver;


/***/ }),

/***/ "./src/app/services/service-worker.mock.module.ts":
/*!********************************************************!*\
  !*** ./src/app/services/service-worker.mock.module.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ServiceWorkerModuleMock = /** @class */ (function () {
    function ServiceWorkerModuleMock() {
    }
    return ServiceWorkerModuleMock;
}());
exports.ServiceWorkerModuleMock = ServiceWorkerModuleMock;


/***/ }),

/***/ "./src/app/services/snack-bar.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/snack-bar.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = __webpack_require__(/*! @angular/material */ "@angular/material");
var Queue_1 = __webpack_require__(/*! typescript-collections/dist/lib/Queue */ "typescript-collections/dist/lib/Queue");
var SnackBar = /** @class */ (function () {
    function SnackBar(snackBar) {
        this.snackBar = snackBar;
        this.snackBarNotificationsQueue = new Queue_1.default();
        this.snackBarNotificationsForceQueue = new Queue_1.default();
        this.actuallyDisplayedNotification = null;
        this.snackbarOpened = false;
    }
    SnackBar.prototype.displayNotification = function (notification) {
        if (notification.force) {
            this.snackBarNotificationsForceQueue.enqueue(notification);
        }
        else {
            this.snackBarNotificationsQueue.enqueue(notification);
        }
        this.runCarousel();
    };
    SnackBar.prototype.loadNotificationToDisplay = function () {
        if (this.snackBarNotificationsForceQueue.size() > 0) {
            this.actuallyDisplayedNotification = this.snackBarNotificationsForceQueue.dequeue();
        }
        else if (this.snackBarNotificationsQueue.size() > 0) {
            this.actuallyDisplayedNotification = this.snackBarNotificationsQueue.dequeue();
        }
        else {
            this.actuallyDisplayedNotification = null;
            return;
        }
    };
    SnackBar.prototype.runCarousel = function () {
        var _this = this;
        if (this.snackbarOpened) {
            if (!this.actuallyDisplayedNotification.force && this.snackBarNotificationsForceQueue.size() > 0) {
                this.snackBar.dismiss();
            }
            return;
        }
        this.loadNotificationToDisplay();
        if (this.actuallyDisplayedNotification == null) {
            return;
        }
        this.snackbarOpened = true;
        var config = new material_1.MatSnackBarConfig();
        config.duration = 1000 * this.actuallyDisplayedNotification.duration;
        var callback = this.actuallyDisplayedNotification.callback;
        this.snackBar.open(this.actuallyDisplayedNotification.message, this.actuallyDisplayedNotification.action, config).afterDismissed().subscribe(function () {
            if (callback) {
                callback();
            }
            _this.snackbarOpened = false;
            _this.runCarousel();
        });
    };
    return SnackBar;
}());
exports.SnackBar = SnackBar;


/***/ }),

/***/ "./src/app/services/swPush-server.mock.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/swPush-server.mock.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SwPushServerMock = /** @class */ (function () {
    function SwPushServerMock() {
    }
    SwPushServerMock.prototype.requestSubscription = function (options) {
        return new Promise(function (resolve) { return resolve(); });
    };
    SwPushServerMock.prototype.unsubscribe = function () {
        return new Promise(function (resolve) { return resolve(); });
    };
    return SwPushServerMock;
}());
exports.SwPushServerMock = SwPushServerMock;


/***/ }),

/***/ "./src/app/services/swUpdate-server.mock.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/swUpdate-server.mock.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
var SwUpdateServerMock = /** @class */ (function () {
    function SwUpdateServerMock() {
        this.available = new rxjs_1.Subject();
        this.activated = new rxjs_1.Subject();
        this.isEnabled = false;
    }
    SwUpdateServerMock.prototype.checkForUpdate = function () {
        return new Promise(function (resolve) { return resolve(); });
    };
    SwUpdateServerMock.prototype.activateUpdate = function () {
        return new Promise(function (resolve) { return resolve(); });
    };
    return SwUpdateServerMock;
}());
exports.SwUpdateServerMock = SwUpdateServerMock;


/***/ }),

/***/ "./src/app/transfer-state/transfer-state.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/transfer-state/transfer-state.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["div[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n    border: 1px dashed gray;\n}\ndiv[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    border: 0;\n    justify-content: center;\n    display: flex;\n}\ndiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n    margin: 0 10px;\n}\n.shake[_ngcontent-%COMP%] {\n    \n    -webkit-animation: shake 0.5s;\n            animation: shake 0.5s;\n    \n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n}\na.active[_ngcontent-%COMP%] {\n    background-color: grey;\n    cursor: default;\n}\n@-webkit-keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n@keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/transfer-state/transfer-state.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/transfer-state/transfer-state.component.ngfactory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./transfer-state.component.css.shim.ngstyle */ "./src/app/transfer-state/transfer-state.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i5 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i6 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i7 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ./transfer-state.component */ "./src/app/transfer-state/transfer-state.component.ts");
var styles_TransferStateComponent = [i0.styles];
var RenderType_TransferStateComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_TransferStateComponent, data: {} });
exports.RenderType_TransferStateComponent = RenderType_TransferStateComponent;
function View_TransferStateComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState"])), (_l()(), i1.ɵeld(2, 0, null, null, 36, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Choose one of the buttons below and start refreshing the page."])), (_l()(), i1.ɵeld(5, 0, null, null, 16, "div", [], null, null, null, null, null)), i1.ɵdid(6, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngClass: [0, "ngClass"] }, null), i1.ɵpod(7, { "shake": 0 }), (_l()(), i1.ɵeld(8, 0, null, null, 6, "a", [["mat-raised-button", ""], ["routerLink", "/transferState/with"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(9, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(10, 671744, [[2, 4]], 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(11, 1720320, null, 2, i8.RouterLinkActive, [i8.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, 0, ["Try with TransferState"])), (_l()(), i1.ɵeld(15, 0, null, null, 6, "a", [["mat-raised-button", ""], ["routerLink", "/transferState/without"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(16, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(17, 671744, [[4, 4]], 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(18, 1720320, null, 2, i8.RouterLinkActive, [i8.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 3, { links: 1 }), i1.ɵqud(603979776, 4, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, 0, ["Try without TransferState"])), (_l()(), i1.ɵeld(22, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Number of hits to the external API: "])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(25, null, ["", ""])), (_l()(), i1.ɵeld(26, 0, null, null, 2, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 27)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.performRequest() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(27, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i1.ɵted(-1, 0, ["Refresh page (perform request)"])), (_l()(), i1.ɵeld(29, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 4, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["To see "])), (_l()(), i1.ɵeld(32, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["factual"])), (_l()(), i1.ɵted(-1, null, [" number of requests, you need to get rid of PWA functionality. To do that hard refresh this page (ctrl + shift + f5) or unregister Service Worker in developer tools."])), (_l()(), i1.ɵeld(35, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Note:"])), (_l()(), i1.ɵted(-1, null, [" if multiple users uses this page in the same time, hitCount may be increasing by more then 1 or 2."])), (_l()(), i1.ɵeld(39, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Code example can be found here: "])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "a", [["href", "https://github.com/maciejtreder/angular-universal-pwa/pull/136/files#diff-da58e2cab6a926f6d564978cdffb83a4"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState example in Angular Universal"])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Most of the server-side rendered sites have one big problem. APIs are requested twice during initial load. Why? This is how user action flow looks like:"])), (_l()(), i1.ɵeld(45, 0, null, null, 20, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Request page; i.e.: https://www.angular-universal-pwa.maciejtreder.com/transferState/without"])), (_l()(), i1.ɵeld(48, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Request reaches back-end: "])), (_l()(), i1.ɵeld(50, 0, null, null, 5, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Back-end launches Angular and starts rendering the view"])), (_l()(), i1.ɵeld(53, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Back-end performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)"])), (_l()(), i1.ɵeld(56, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["HTML is sent back to the user"])), (_l()(), i1.ɵeld(58, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser renders the view from the given HTML and CSS "])), (_l()(), i1.ɵeld(60, 0, null, null, 5, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser launches JavaScript -> Angular comes into the game"])), (_l()(), i1.ɵeld(63, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)"])), (_l()(), i1.ɵeld(66, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" To avoid such repetitive requests, Angular 5 comes with "])), (_l()(), i1.ɵeld(68, 0, null, null, 1, "a", [["href", "https://angular.io/api/platform-browser/TransferState"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState"])), (_l()(), i1.ɵted(-1, null, [". This mechanism gives front-end and back-end a possibility to \"communicate\". In other words, front-end retrieves from the back-end collection of key -> value sets with the data which back-end already retrieved from external services.\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 7, 0, _co.shake); _ck(_v, 6, 0, currVal_0); var currVal_7 = "/transferState/with"; _ck(_v, 10, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 11, 0, currVal_8); var currVal_15 = "/transferState/without"; _ck(_v, 17, 0, currVal_15); var currVal_16 = "active"; _ck(_v, 18, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (i1.ɵnov(_v, 9).disabled ? (0 - 1) : (i1.ɵnov(_v, 9).tabIndex || 0)); var currVal_2 = (i1.ɵnov(_v, 9).disabled || null); var currVal_3 = i1.ɵnov(_v, 9).disabled.toString(); var currVal_4 = (i1.ɵnov(_v, 9)._animationMode === "NoopAnimations"); var currVal_5 = i1.ɵnov(_v, 10).target; var currVal_6 = i1.ɵnov(_v, 10).href; _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (i1.ɵnov(_v, 16).disabled ? (0 - 1) : (i1.ɵnov(_v, 16).tabIndex || 0)); var currVal_10 = (i1.ɵnov(_v, 16).disabled || null); var currVal_11 = i1.ɵnov(_v, 16).disabled.toString(); var currVal_12 = (i1.ɵnov(_v, 16)._animationMode === "NoopAnimations"); var currVal_13 = i1.ɵnov(_v, 17).target; var currVal_14 = i1.ɵnov(_v, 17).href; _ck(_v, 15, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = _co.hits; _ck(_v, 25, 0, currVal_17); var currVal_18 = (i1.ɵnov(_v, 27).disabled ? (0 - 1) : (i1.ɵnov(_v, 27).tabIndex || 0)); var currVal_19 = (i1.ɵnov(_v, 27).disabled || null); var currVal_20 = i1.ɵnov(_v, 27).disabled.toString(); var currVal_21 = (i1.ɵnov(_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 26, 0, currVal_18, currVal_19, currVal_20, currVal_21); }); }
exports.View_TransferStateComponent_0 = View_TransferStateComponent_0;
function View_TransferStateComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_TransferStateComponent_0, RenderType_TransferStateComponent)), i1.ɵdid(1, 49152, null, 0, i9.TransferStateComponent, [], null, null)], null, null); }
exports.View_TransferStateComponent_Host_0 = View_TransferStateComponent_Host_0;
var TransferStateComponentNgFactory = i1.ɵccf("ng-component", i9.TransferStateComponent, View_TransferStateComponent_Host_0, {}, {}, []);
exports.TransferStateComponentNgFactory = TransferStateComponentNgFactory;


/***/ }),

/***/ "./src/app/transfer-state/transfer-state.component.ts":
/*!************************************************************!*\
  !*** ./src/app/transfer-state/transfer-state.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TransferStateComponent = /** @class */ (function () {
    function TransferStateComponent() {
    }
    TransferStateComponent.prototype.performRequest = function () {
        var _this = this;
        this.shake = true;
        setTimeout(function () { return _this.shake = false; }, 500);
    };
    return TransferStateComponent;
}());
exports.TransferStateComponent = TransferStateComponent;


/***/ }),

/***/ "./src/app/transfer-state/with-transfer-state.component.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/transfer-state/with-transfer-state.component.ngfactory.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./transfer-state.component.css.shim.ngstyle */ "./src/app/transfer-state/transfer-state.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i5 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i6 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i7 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ./with-transfer-state.component */ "./src/app/transfer-state/with-transfer-state.component.ts");
var styles_WithTransferStateComponent = [i0.styles];
var RenderType_WithTransferStateComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_WithTransferStateComponent, data: {} });
exports.RenderType_WithTransferStateComponent = RenderType_WithTransferStateComponent;
function View_WithTransferStateComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState"])), (_l()(), i1.ɵeld(2, 0, null, null, 36, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Choose one of the buttons below and start refreshing the page."])), (_l()(), i1.ɵeld(5, 0, null, null, 16, "div", [], null, null, null, null, null)), i1.ɵdid(6, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngClass: [0, "ngClass"] }, null), i1.ɵpod(7, { "shake": 0 }), (_l()(), i1.ɵeld(8, 0, null, null, 6, "a", [["mat-raised-button", ""], ["routerLink", "/transferState/with"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(9, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(10, 671744, [[2, 4]], 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(11, 1720320, null, 2, i8.RouterLinkActive, [i8.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, 0, ["Try with TransferState"])), (_l()(), i1.ɵeld(15, 0, null, null, 6, "a", [["mat-raised-button", ""], ["routerLink", "/transferState/without"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(16, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(17, 671744, [[4, 4]], 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(18, 1720320, null, 2, i8.RouterLinkActive, [i8.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 3, { links: 1 }), i1.ɵqud(603979776, 4, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, 0, ["Try without TransferState"])), (_l()(), i1.ɵeld(22, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Number of hits to the external API: "])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(25, null, ["", ""])), (_l()(), i1.ɵeld(26, 0, null, null, 2, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 27)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.performRequest() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(27, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i1.ɵted(-1, 0, ["Refresh page (perform request)"])), (_l()(), i1.ɵeld(29, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 4, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["To see "])), (_l()(), i1.ɵeld(32, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["factual"])), (_l()(), i1.ɵted(-1, null, [" number of requests, you need to get rid of PWA functionality. To do that hard refresh this page (ctrl + shift + f5) or unregister Service Worker in developer tools."])), (_l()(), i1.ɵeld(35, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Note:"])), (_l()(), i1.ɵted(-1, null, [" if multiple users uses this page in the same time, hitCount may be increasing by more then 1 or 2."])), (_l()(), i1.ɵeld(39, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Code example can be found here: "])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "a", [["href", "https://github.com/maciejtreder/angular-universal-pwa/pull/136/files#diff-da58e2cab6a926f6d564978cdffb83a4"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState example in Angular Universal"])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Most of the server-side rendered sites have one big problem. APIs are requested twice during initial load. Why? This is how user action flow looks like:"])), (_l()(), i1.ɵeld(45, 0, null, null, 20, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Request page; i.e.: https://www.angular-universal-pwa.maciejtreder.com/transferState/without"])), (_l()(), i1.ɵeld(48, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Request reaches back-end: "])), (_l()(), i1.ɵeld(50, 0, null, null, 5, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Back-end launches Angular and starts rendering the view"])), (_l()(), i1.ɵeld(53, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Back-end performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)"])), (_l()(), i1.ɵeld(56, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["HTML is sent back to the user"])), (_l()(), i1.ɵeld(58, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser renders the view from the given HTML and CSS "])), (_l()(), i1.ɵeld(60, 0, null, null, 5, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser launches JavaScript -> Angular comes into the game"])), (_l()(), i1.ɵeld(63, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)"])), (_l()(), i1.ɵeld(66, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" To avoid such repetitive requests, Angular 5 comes with "])), (_l()(), i1.ɵeld(68, 0, null, null, 1, "a", [["href", "https://angular.io/api/platform-browser/TransferState"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState"])), (_l()(), i1.ɵted(-1, null, [". This mechanism gives front-end and back-end a possibility to \"communicate\". In other words, front-end retrieves from the back-end collection of key -> value sets with the data which back-end already retrieved from external services.\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 7, 0, _co.shake); _ck(_v, 6, 0, currVal_0); var currVal_7 = "/transferState/with"; _ck(_v, 10, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 11, 0, currVal_8); var currVal_15 = "/transferState/without"; _ck(_v, 17, 0, currVal_15); var currVal_16 = "active"; _ck(_v, 18, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (i1.ɵnov(_v, 9).disabled ? (0 - 1) : (i1.ɵnov(_v, 9).tabIndex || 0)); var currVal_2 = (i1.ɵnov(_v, 9).disabled || null); var currVal_3 = i1.ɵnov(_v, 9).disabled.toString(); var currVal_4 = (i1.ɵnov(_v, 9)._animationMode === "NoopAnimations"); var currVal_5 = i1.ɵnov(_v, 10).target; var currVal_6 = i1.ɵnov(_v, 10).href; _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (i1.ɵnov(_v, 16).disabled ? (0 - 1) : (i1.ɵnov(_v, 16).tabIndex || 0)); var currVal_10 = (i1.ɵnov(_v, 16).disabled || null); var currVal_11 = i1.ɵnov(_v, 16).disabled.toString(); var currVal_12 = (i1.ɵnov(_v, 16)._animationMode === "NoopAnimations"); var currVal_13 = i1.ɵnov(_v, 17).target; var currVal_14 = i1.ɵnov(_v, 17).href; _ck(_v, 15, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = _co.hits; _ck(_v, 25, 0, currVal_17); var currVal_18 = (i1.ɵnov(_v, 27).disabled ? (0 - 1) : (i1.ɵnov(_v, 27).tabIndex || 0)); var currVal_19 = (i1.ɵnov(_v, 27).disabled || null); var currVal_20 = i1.ɵnov(_v, 27).disabled.toString(); var currVal_21 = (i1.ɵnov(_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 26, 0, currVal_18, currVal_19, currVal_20, currVal_21); }); }
exports.View_WithTransferStateComponent_0 = View_WithTransferStateComponent_0;
function View_WithTransferStateComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_WithTransferStateComponent_0, RenderType_WithTransferStateComponent)), i1.ɵdid(1, 114688, null, 0, i9.WithTransferStateComponent, [i8.ActivatedRoute], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_WithTransferStateComponent_Host_0 = View_WithTransferStateComponent_Host_0;
var WithTransferStateComponentNgFactory = i1.ɵccf("ng-component", i9.WithTransferStateComponent, View_WithTransferStateComponent_Host_0, {}, {}, []);
exports.WithTransferStateComponentNgFactory = WithTransferStateComponentNgFactory;


/***/ }),

/***/ "./src/app/transfer-state/with-transfer-state.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/transfer-state/with-transfer-state.component.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var WithTransferStateComponent = /** @class */ (function () {
    function WithTransferStateComponent(route) {
        this.route = route;
        this.shake = false;
    }
    WithTransferStateComponent.prototype.ngOnInit = function () {
        this.hits = this.route.snapshot.data.hits;
    };
    WithTransferStateComponent.prototype.performRequest = function () {
        window.location.reload();
    };
    return WithTransferStateComponent;
}());
exports.WithTransferStateComponent = WithTransferStateComponent;


/***/ }),

/***/ "./src/app/transfer-state/without-transfer-state.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/transfer-state/without-transfer-state.component.ngfactory.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = __webpack_require__(/*! ./transfer-state.component.css.shim.ngstyle */ "./src/app/transfer-state/transfer-state.component.css.shim.ngstyle.js");
var i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var i2 = __webpack_require__(/*! @angular/common */ "@angular/common");
var i3 = __webpack_require__(/*! ../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
var i4 = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
var i5 = __webpack_require__(/*! @angular/cdk/platform */ "@angular/cdk/platform");
var i6 = __webpack_require__(/*! @angular/cdk/a11y */ "@angular/cdk/a11y");
var i7 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
var i8 = __webpack_require__(/*! @angular/router */ "@angular/router");
var i9 = __webpack_require__(/*! ./without-transfer-state.component */ "./src/app/transfer-state/without-transfer-state.component.ts");
var styles_WithoutTransferStateComponent = [i0.styles];
var RenderType_WithoutTransferStateComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_WithoutTransferStateComponent, data: {} });
exports.RenderType_WithoutTransferStateComponent = RenderType_WithoutTransferStateComponent;
function View_WithoutTransferStateComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState"])), (_l()(), i1.ɵeld(2, 0, null, null, 36, "div", [], null, null, null, null, null)), (_l()(), i1.ɵeld(3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Choose one of the buttons below and start refreshing the page."])), (_l()(), i1.ɵeld(5, 0, null, null, 16, "div", [], null, null, null, null, null)), i1.ɵdid(6, 278528, null, 0, i2.NgClass, [i1.IterableDiffers, i1.KeyValueDiffers, i1.ElementRef, i1.Renderer2], { ngClass: [0, "ngClass"] }, null), i1.ɵpod(7, { "shake": 0 }), (_l()(), i1.ɵeld(8, 0, null, null, 6, "a", [["mat-raised-button", ""], ["routerLink", "/transferState/with"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 9)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(9, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(10, 671744, [[2, 4]], 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(11, 1720320, null, 2, i8.RouterLinkActive, [i8.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 1, { links: 1 }), i1.ɵqud(603979776, 2, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, 0, ["Try with TransferState"])), (_l()(), i1.ɵeld(15, 0, null, null, 6, "a", [["mat-raised-button", ""], ["routerLink", "/transferState/without"], ["routerLinkActive", "active"]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 16)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (i1.ɵnov(_v, 17).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(16, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), i1.ɵdid(17, 671744, [[4, 4]], 0, i8.RouterLinkWithHref, [i8.Router, i8.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, "routerLink"] }, null), i1.ɵdid(18, 1720320, null, 2, i8.RouterLinkActive, [i8.Router, i1.ElementRef, i1.Renderer2, i1.ChangeDetectorRef], { routerLinkActive: [0, "routerLinkActive"] }, null), i1.ɵqud(603979776, 3, { links: 1 }), i1.ɵqud(603979776, 4, { linksWithHrefs: 1 }), (_l()(), i1.ɵted(-1, 0, ["Try without TransferState"])), (_l()(), i1.ɵeld(22, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Number of hits to the external API: "])), (_l()(), i1.ɵeld(24, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(25, null, ["", ""])), (_l()(), i1.ɵeld(26, 0, null, null, 2, "a", [["mat-raised-button", ""]], [[1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 27)._haltDisabledEvents($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.performRequest() !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_MatAnchor_0, i3.RenderType_MatAnchor)), i1.ɵdid(27, 180224, null, 0, i4.MatAnchor, [i5.Platform, i6.FocusMonitor, i1.ElementRef, [2, i7.ANIMATION_MODULE_TYPE]], null, null), (_l()(), i1.ɵted(-1, 0, ["Refresh page (perform request)"])), (_l()(), i1.ɵeld(29, 0, null, null, 5, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(30, 0, null, null, 4, "i", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["To see "])), (_l()(), i1.ɵeld(32, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["factual"])), (_l()(), i1.ɵted(-1, null, [" number of requests, you need to get rid of PWA functionality. To do that hard refresh this page (ctrl + shift + f5) or unregister Service Worker in developer tools."])), (_l()(), i1.ɵeld(35, 0, null, null, 3, "p", [], null, null, null, null, null)), (_l()(), i1.ɵeld(36, 0, null, null, 1, "u", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Note:"])), (_l()(), i1.ɵted(-1, null, [" if multiple users uses this page in the same time, hitCount may be increasing by more then 1 or 2."])), (_l()(), i1.ɵeld(39, 0, null, null, 3, "h2", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Code example can be found here: "])), (_l()(), i1.ɵeld(41, 0, null, null, 1, "a", [["href", "https://github.com/maciejtreder/angular-universal-pwa/pull/136/files#diff-da58e2cab6a926f6d564978cdffb83a4"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState example in Angular Universal"])), (_l()(), i1.ɵeld(43, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Most of the server-side rendered sites have one big problem. APIs are requested twice during initial load. Why? This is how user action flow looks like:"])), (_l()(), i1.ɵeld(45, 0, null, null, 20, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(46, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Request page; i.e.: https://www.angular-universal-pwa.maciejtreder.com/transferState/without"])), (_l()(), i1.ɵeld(48, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Request reaches back-end: "])), (_l()(), i1.ɵeld(50, 0, null, null, 5, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(51, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Back-end launches Angular and starts rendering the view"])), (_l()(), i1.ɵeld(53, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(54, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Back-end performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)"])), (_l()(), i1.ɵeld(56, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["HTML is sent back to the user"])), (_l()(), i1.ɵeld(58, 0, null, null, 7, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser renders the view from the given HTML and CSS "])), (_l()(), i1.ɵeld(60, 0, null, null, 5, "ol", [], null, null, null, null, null)), (_l()(), i1.ɵeld(61, 0, null, null, 1, "li", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser launches JavaScript -> Angular comes into the game"])), (_l()(), i1.ɵeld(63, 0, null, null, 2, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(64, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["The browser performs the request to the API to fetch data for component (https://2tvdln9i91.execute-api.eu-central-1.amazonaws.com/production/hit)"])), (_l()(), i1.ɵeld(66, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, [" To avoid such repetitive requests, Angular 5 comes with "])), (_l()(), i1.ɵeld(68, 0, null, null, 1, "a", [["href", "https://angular.io/api/platform-browser/TransferState"], ["target", "_blank"]], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["TransferState"])), (_l()(), i1.ɵted(-1, null, [". This mechanism gives front-end and back-end a possibility to \"communicate\". In other words, front-end retrieves from the back-end collection of key -> value sets with the data which back-end already retrieved from external services.\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 7, 0, _co.shake); _ck(_v, 6, 0, currVal_0); var currVal_7 = "/transferState/with"; _ck(_v, 10, 0, currVal_7); var currVal_8 = "active"; _ck(_v, 11, 0, currVal_8); var currVal_15 = "/transferState/without"; _ck(_v, 17, 0, currVal_15); var currVal_16 = "active"; _ck(_v, 18, 0, currVal_16); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (i1.ɵnov(_v, 9).disabled ? (0 - 1) : (i1.ɵnov(_v, 9).tabIndex || 0)); var currVal_2 = (i1.ɵnov(_v, 9).disabled || null); var currVal_3 = i1.ɵnov(_v, 9).disabled.toString(); var currVal_4 = (i1.ɵnov(_v, 9)._animationMode === "NoopAnimations"); var currVal_5 = i1.ɵnov(_v, 10).target; var currVal_6 = i1.ɵnov(_v, 10).href; _ck(_v, 8, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = (i1.ɵnov(_v, 16).disabled ? (0 - 1) : (i1.ɵnov(_v, 16).tabIndex || 0)); var currVal_10 = (i1.ɵnov(_v, 16).disabled || null); var currVal_11 = i1.ɵnov(_v, 16).disabled.toString(); var currVal_12 = (i1.ɵnov(_v, 16)._animationMode === "NoopAnimations"); var currVal_13 = i1.ɵnov(_v, 17).target; var currVal_14 = i1.ɵnov(_v, 17).href; _ck(_v, 15, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_17 = _co.hits; _ck(_v, 25, 0, currVal_17); var currVal_18 = (i1.ɵnov(_v, 27).disabled ? (0 - 1) : (i1.ɵnov(_v, 27).tabIndex || 0)); var currVal_19 = (i1.ɵnov(_v, 27).disabled || null); var currVal_20 = i1.ɵnov(_v, 27).disabled.toString(); var currVal_21 = (i1.ɵnov(_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 26, 0, currVal_18, currVal_19, currVal_20, currVal_21); }); }
exports.View_WithoutTransferStateComponent_0 = View_WithoutTransferStateComponent_0;
function View_WithoutTransferStateComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_WithoutTransferStateComponent_0, RenderType_WithoutTransferStateComponent)), i1.ɵdid(1, 114688, null, 0, i9.WithoutTransferStateComponent, [i8.ActivatedRoute], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_WithoutTransferStateComponent_Host_0 = View_WithoutTransferStateComponent_Host_0;
var WithoutTransferStateComponentNgFactory = i1.ɵccf("ng-component", i9.WithoutTransferStateComponent, View_WithoutTransferStateComponent_Host_0, {}, {}, []);
exports.WithoutTransferStateComponentNgFactory = WithoutTransferStateComponentNgFactory;


/***/ }),

/***/ "./src/app/transfer-state/without-transfer-state.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/transfer-state/without-transfer-state.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var WithoutTransferStateComponent = /** @class */ (function () {
    function WithoutTransferStateComponent(route) {
        this.route = route;
        this.shake = false;
    }
    WithoutTransferStateComponent.prototype.ngOnInit = function () {
        this.hits = this.route.snapshot.data.hits;
    };
    WithoutTransferStateComponent.prototype.performRequest = function () {
        window.location.reload();
    };
    return WithoutTransferStateComponent;
}());
exports.WithoutTransferStateComponent = WithoutTransferStateComponent;


/***/ }),

/***/ "./src/app/window-ref.service.ts":
/*!***************************************!*\
  !*** ./src/app/window-ref.service.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
var WindowRef = /** @class */ (function () {
    function WindowRef(platformId, injector) {
        this.injector = injector;
        if (!common_1.isPlatformBrowser(platformId)) {
            // const req: any = this.injector.get(this.injector.get(USERAGENTTOKEN));
            // this._window = {navigator: {userAgent: req.get('User-Agent')}};
            this._window = { navigator: { userAgent: 'fakeAgent' } };
        }
        else {
            this._window = window;
        }
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return this._window;
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
exports.WindowRef = WindowRef;
exports.USERAGENTTOKEN = new core_1.InjectionToken('requestToken');


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_server_module_ngfactory_1 = __webpack_require__(/*! ./app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
exports.AppServerModuleNgFactory = app_server_module_ngfactory_1.AppServerModuleNgFactory;
var __lazy_0__ = __webpack_require__(/*! ./app/lazy/lazy.module.ngfactory.js */ "./src/app/lazy/lazy.module.ngfactory.js");
var core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;
exports.LAZY_MODULE_MAP = { "./lazy/lazy.module#LazyModule": __lazy_0__.LazyModuleNgFactory };


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/main.server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/amalshehu/kerala-flood-rescue/src/main.server.ts */"./src/main.server.ts");


/***/ }),

/***/ "@agm/core/core.module":
/*!****************************************!*\
  !*** external "@agm/core/core.module" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/core.module");

/***/ }),

/***/ "@agm/core/directives/info-window":
/*!***************************************************!*\
  !*** external "@agm/core/directives/info-window" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/info-window");

/***/ }),

/***/ "@agm/core/directives/map":
/*!*******************************************!*\
  !*** external "@agm/core/directives/map" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/map");

/***/ }),

/***/ "@agm/core/directives/marker":
/*!**********************************************!*\
  !*** external "@agm/core/directives/marker" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/directives/marker");

/***/ }),

/***/ "@agm/core/services/google-maps-api-wrapper":
/*!*************************************************************!*\
  !*** external "@agm/core/services/google-maps-api-wrapper" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/google-maps-api-wrapper");

/***/ }),

/***/ "@agm/core/services/managers/circle-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/circle-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/circle-manager");

/***/ }),

/***/ "@agm/core/services/managers/data-layer-manager":
/*!*****************************************************************!*\
  !*** external "@agm/core/services/managers/data-layer-manager" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/data-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/info-window-manager":
/*!******************************************************************!*\
  !*** external "@agm/core/services/managers/info-window-manager" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/info-window-manager");

/***/ }),

/***/ "@agm/core/services/managers/kml-layer-manager":
/*!****************************************************************!*\
  !*** external "@agm/core/services/managers/kml-layer-manager" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/kml-layer-manager");

/***/ }),

/***/ "@agm/core/services/managers/marker-manager":
/*!*************************************************************!*\
  !*** external "@agm/core/services/managers/marker-manager" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/marker-manager");

/***/ }),

/***/ "@agm/core/services/managers/polygon-manager":
/*!**************************************************************!*\
  !*** external "@agm/core/services/managers/polygon-manager" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polygon-manager");

/***/ }),

/***/ "@agm/core/services/managers/polyline-manager":
/*!***************************************************************!*\
  !*** external "@agm/core/services/managers/polyline-manager" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/managers/polyline-manager");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/lazy-maps-api-loader":
/*!**************************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/lazy-maps-api-loader" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/lazy-maps-api-loader");

/***/ }),

/***/ "@agm/core/services/maps-api-loader/maps-api-loader":
/*!*********************************************************************!*\
  !*** external "@agm/core/services/maps-api-loader/maps-api-loader" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/services/maps-api-loader/maps-api-loader");

/***/ }),

/***/ "@agm/core/utils/browser-globals":
/*!**************************************************!*\
  !*** external "@agm/core/utils/browser-globals" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@agm/core/utils/browser-globals");

/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/cdk/a11y":
/*!************************************!*\
  !*** external "@angular/cdk/a11y" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/a11y");

/***/ }),

/***/ "@angular/cdk/bidi":
/*!************************************!*\
  !*** external "@angular/cdk/bidi" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/bidi");

/***/ }),

/***/ "@angular/cdk/overlay":
/*!***************************************!*\
  !*** external "@angular/cdk/overlay" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/overlay");

/***/ }),

/***/ "@angular/cdk/platform":
/*!****************************************!*\
  !*** external "@angular/cdk/platform" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/platform");

/***/ }),

/***/ "@angular/cdk/portal":
/*!**************************************!*\
  !*** external "@angular/cdk/portal" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/portal");

/***/ }),

/***/ "@angular/cdk/scrolling":
/*!*****************************************!*\
  !*** external "@angular/cdk/scrolling" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/cdk/scrolling");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/http":
/*!********************************!*\
  !*** external "@angular/http" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/material":
/*!************************************!*\
  !*** external "@angular/material" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material");

/***/ }),

/***/ "@angular/material/button":
/*!*******************************************!*\
  !*** external "@angular/material/button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/button");

/***/ }),

/***/ "@angular/material/core":
/*!*****************************************!*\
  !*** external "@angular/material/core" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/core");

/***/ }),

/***/ "@angular/material/menu":
/*!*****************************************!*\
  !*** external "@angular/material/menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/menu");

/***/ }),

/***/ "@angular/material/snack-bar":
/*!**********************************************!*\
  !*** external "@angular/material/snack-bar" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/material/snack-bar");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@angular/service-worker":
/*!******************************************!*\
  !*** external "@angular/service-worker" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/service-worker");

/***/ }),

/***/ "@nguniversal/module-map-ngfactory-loader":
/*!***********************************************************!*\
  !*** external "@nguniversal/module-map-ngfactory-loader" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ }),

/***/ "@ngx-translate/core":
/*!**************************************!*\
  !*** external "@ngx-translate/core" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ngx-translate/core");

/***/ }),

/***/ "angularfire2":
/*!*******************************!*\
  !*** external "angularfire2" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("angularfire2");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "typescript-collections/dist/lib/Queue":
/*!********************************************************!*\
  !*** external "typescript-collections/dist/lib/Queue" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typescript-collections/dist/lib/Queue");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map