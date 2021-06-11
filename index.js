/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./scripts/entry.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../icons/arrow.svg":
/*!**************************!*\
  !*** ../icons/arrow.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/arrow.svg");

/***/ }),

/***/ "../icons/menu 1.svg":
/*!***************************!*\
  !*** ../icons/menu 1.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/menu 1.svg");

/***/ }),

/***/ "../icons/shopping-cart 1.svg":
/*!************************************!*\
  !*** ../icons/shopping-cart 1.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/shopping-cart 1.svg");

/***/ }),

/***/ "../images/11954335252025281875red_cross_joshua_dwire_03.svg 1.png":
/*!*************************************************************************!*\
  !*** ../images/11954335252025281875red_cross_joshua_dwire_03.svg 1.png ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/11954335252025281875red_cross_joshua_dwire_03.svg 1.png");

/***/ }),

/***/ "../images/62507-200 1.png":
/*!*********************************!*\
  !*** ../images/62507-200 1.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/62507-200 1.png");

/***/ }),

/***/ "../images/dog-041 1.png":
/*!*******************************!*\
  !*** ../images/dog-041 1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/dog-041 1.png");

/***/ }),

/***/ "../images/funny-cat-names-4-Transparent-Images 1.png":
/*!************************************************************!*\
  !*** ../images/funny-cat-names-4-Transparent-Images 1.png ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/funny-cat-names-4-Transparent-Images 1.png");

/***/ }),

/***/ "../images/koshka 1.png":
/*!******************************!*\
  !*** ../images/koshka 1.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/koshka 1.png");

/***/ }),

/***/ "../images/labrador 1.png":
/*!********************************!*\
  !*** ../images/labrador 1.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/labrador 1.png");

/***/ }),

/***/ "../images/pngtree-question-icon-design-png-image_1010729 1.png":
/*!**********************************************************************!*\
  !*** ../images/pngtree-question-icon-design-png-image_1010729 1.png ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/pngtree-question-icon-design-png-image_1010729 1.png");

/***/ }),

/***/ "../images/popugay 1.png":
/*!*******************************!*\
  !*** ../images/popugay 1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/popugay 1.png");

/***/ }),

/***/ "../images/unnamed 1.png":
/*!*******************************!*\
  !*** ../images/unnamed 1.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "./images/unnamed 1.png");

/***/ }),

/***/ "./scripts/about.js":
/*!**************************!*\
  !*** ./scripts/about.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./scripts/hamburger.js");


/***/ }),

/***/ "./scripts/contacts.js":
/*!*****************************!*\
  !*** ./scripts/contacts.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./scripts/hamburger.js");


/***/ }),

/***/ "./scripts/entry.js":
/*!**************************!*\
  !*** ./scripts/entry.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/default.css */ "./styles/default.css");
/* harmony import */ var _styles_default_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_default_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/fonts.css */ "./styles/fonts.css");
/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.sass */ "./styles/index.sass");
/* harmony import */ var _styles_index_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_sass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_friends_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/friends.sass */ "./styles/friends.sass");
/* harmony import */ var _styles_friends_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_friends_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_contacts_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/contacts.sass */ "./styles/contacts.sass");
/* harmony import */ var _styles_contacts_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_contacts_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_about_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/about.sass */ "./styles/about.sass");
/* harmony import */ var _styles_about_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_about_sass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images */ "./scripts/images.js");
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hamburger */ "./scripts/hamburger.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "./scripts/index.js");
/* harmony import */ var _friends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./friends */ "./scripts/friends.js");
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacts */ "./scripts/contacts.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about */ "./scripts/about.js");













/***/ }),

/***/ "./scripts/friends.js":
/*!****************************!*\
  !*** ./scripts/friends.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./scripts/hamburger.js");


/***/ }),

/***/ "./scripts/hamburger.js":
/*!******************************!*\
  !*** ./scripts/hamburger.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function hamburger() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shouldHiding').hasClass('hide')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shouldHiding').removeClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#hamburger').removeClass('show');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shouldHiding').addClass('hide');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#hamburger').addClass('show');
  }
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()('#hamburgerTrigger').on('click', hamburger);

/***/ }),

/***/ "./scripts/images.js":
/*!***************************!*\
  !*** ./scripts/images.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_62507_200_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/62507-200 1.png */ "../images/62507-200 1.png");
/* harmony import */ var _images_11954335252025281875red_cross_joshua_dwire_03_svg_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/11954335252025281875red_cross_joshua_dwire_03.svg 1.png */ "../images/11954335252025281875red_cross_joshua_dwire_03.svg 1.png");
/* harmony import */ var _images_dog_041_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/dog-041 1.png */ "../images/dog-041 1.png");
/* harmony import */ var _images_funny_cat_names_4_Transparent_Images_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/funny-cat-names-4-Transparent-Images 1.png */ "../images/funny-cat-names-4-Transparent-Images 1.png");
/* harmony import */ var _images_koshka_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/koshka 1.png */ "../images/koshka 1.png");
/* harmony import */ var _images_labrador_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/labrador 1.png */ "../images/labrador 1.png");
/* harmony import */ var _images_pngtree_question_icon_design_png_image_1010729_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/pngtree-question-icon-design-png-image_1010729 1.png */ "../images/pngtree-question-icon-design-png-image_1010729 1.png");
/* harmony import */ var _images_popugay_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/popugay 1.png */ "../images/popugay 1.png");
/* harmony import */ var _images_unnamed_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/unnamed 1.png */ "../images/unnamed 1.png");
/* harmony import */ var _icons_arrow_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons/arrow.svg */ "../icons/arrow.svg");
/* harmony import */ var _icons_menu_1_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../icons/menu 1.svg */ "../icons/menu 1.svg");
/* harmony import */ var _icons_shopping_cart_1_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../icons/shopping-cart 1.svg */ "../icons/shopping-cart 1.svg");
// Images








 // Icons





/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ "./scripts/hamburger.js");


/***/ }),

/***/ "./styles/about.sass":
/*!***************************!*\
  !*** ./styles/about.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/contacts.sass":
/*!******************************!*\
  !*** ./styles/contacts.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/default.css":
/*!****************************!*\
  !*** ./styles/default.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/fonts.css":
/*!**************************!*\
  !*** ./styles/fonts.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/friends.sass":
/*!*****************************!*\
  !*** ./styles/friends.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./styles/index.sass":
/*!***************************!*\
  !*** ./styles/index.sass ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

/******/ });
//# sourceMappingURL=index.js.map