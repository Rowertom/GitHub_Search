/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project__search/./src/scss/base.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Api.js */ \"./src/js/Api.js\");\n/* harmony import */ var _js_Log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Log.js */ \"./src/js/Log.js\");\n/* harmony import */ var _js_Search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Search.js */ \"./src/js/Search.js\");\n/* harmony import */ var _js_View_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/View.js */ \"./src/js/View.js\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n\n\n\n\n\n\nnew _js_Search_js__WEBPACK_IMPORTED_MODULE_2__.Search(new _js_View_js__WEBPACK_IMPORTED_MODULE_3__.View(), new _js_Log_js__WEBPACK_IMPORTED_MODULE_1__.Log(), new _js_Api_js__WEBPACK_IMPORTED_MODULE_0__.Api());\n\n\n//# sourceURL=webpack://project__search/./src/app.js?");

/***/ }),

/***/ "./src/js/Api.js":
/*!***********************!*\
  !*** ./src/js/Api.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Api\": () => (/* binding */ Api)\n/* harmony export */ });\nconst REPOS_ON_PAGE = 10;\nconst URL = 'https://api.github.com/';\n\nclass Api {\n\n    constructor() {\n    }\n\n    async loadRepos(searchValue) {\n        return await fetch(`${URL}search/repositories?q=${searchValue}&per_page=${REPOS_ON_PAGE}`);\n    }\n}\n\n\n//# sourceURL=webpack://project__search/./src/js/Api.js?");

/***/ }),

/***/ "./src/js/Log.js":
/*!***********************!*\
  !*** ./src/js/Log.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Log\": () => (/* binding */ Log)\n/* harmony export */ });\nclass Log {\n    constructor() {\n    }\n\n    counterMessage(reposCount) {\n        return (reposCount > 0) ? `Найдено ${reposCount} репозиториев` : 'По вашему запросу репозиториев не найдено';\n    }\n}\n\n//# sourceURL=webpack://project__search/./src/js/Log.js?");

/***/ }),

/***/ "./src/js/Search.js":
/*!**************************!*\
  !*** ./src/js/Search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Search\": () => (/* binding */ Search)\n/* harmony export */ });\nclass Search {\n    constructor(view, log, api) {\n\n        this.view = view;\n        this.log = log;\n        this.api = api;\n\n        this.searchInput = document.getElementById('search__text');\n\n        this.searchInput.addEventListener('keyup', this.debounce(this.searchRepos.bind(this), 500));\n    }\n\n    searchRepos() {\n        if (this.searchInput.value) {\n            if(this.searchInput.value.length > 10){\n\n                this.api.loadRepos(this.searchInput.value).then(response => {\n                    let repos;\n                    let reposCount;\n                    if (response.ok) {\n                        this.view.clearRepos();\n                        response.json().then((res) => {\n                            if (res.items) {\n                                repos = res.items;\n                                reposCount = res.total_count;\n                                repos.forEach(repo => this.view.createRepos(repo));\n                            } else {\n                                this.view.clearRepos();\n                            }\n                            this.view.setRepoCounter(this.log.counterMessage(reposCount));\n                        });\n                    } else {\n                        alert('Error 1' + response.status);\n                    }\n                })\n            }else {\n                this.view.clearRepos();\n                this.view.setRepoCounter('');\n                this.view.setShortSearch(`Short question search ${this.searchInput.value.length} symbols , need 10 and more symbols`);\n            }\n        }else {\n            location.reload();\n        }\n    }\n\n    debounce(func, wait, immediate) {\n        let timeout;\n        return function() {\n            const context = this, args = arguments;\n            const later = function() {\n                timeout = null;\n                if (!immediate) func.apply(context, args);\n            };\n            const callNow = immediate && !timeout;\n            clearTimeout(timeout);\n            timeout = setTimeout(later, wait);\n            if (callNow) func.apply(context, args);\n        };\n    }\n}\n\n\n//# sourceURL=webpack://project__search/./src/js/Search.js?");

/***/ }),

/***/ "./src/js/View.js":
/*!************************!*\
  !*** ./src/js/View.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"View\": () => (/* binding */ View)\n/* harmony export */ });\nclass View {\n    constructor() {\n        this.searchList = document.getElementById('searchList');\n        this.header = document.getElementById('header');\n\n        this.repoBlock = this.createElement('div', 'contentBlock')\n        this.repoCounter = this.createElement('span', 'counter');\n        this.shortSearch = this.createElement('span', 'shortMessage');\n        this.header.append(this.repoBlock);\n        this.repoBlock.append(this.shortSearch);\n        this.repoBlock.append(this.repoCounter);\n    }\n\n    createElement(elementTag, elementClass) {\n        const element = document.createElement(elementTag);\n        if (elementClass) {\n            element.classList.add(elementClass);\n        }\n        return element;\n    }\n\n    createRepos(repoData) {\n        const repoElement = this.createElement('div', 'main__searchList__repo');\n        repoElement.innerHTML = `<a href=${repoData.html_url} class='main__searchList__repo__link' target='_blank'>${repoData.description}</a>\n        <span class='main__searchList__repo__content'>Создал <b>${repoData.owner.login}</b></span>\n        <a href=${repoData.owner.html_url}class='main__searchList__repo__contentUser>Репозитории создателя ${repoData.owner.html_url}</a>`;\n\n        this.searchList.append(repoElement);\n    }\n\n    clearRepos() {\n        this.searchList.innerHTML = '';\n    }\n\n    clearRepoBlock() {\n        this.repoBlock.removeChild(this.shortSearch);\n    }\n    setRepoCounter(message) {\n        this.repoCounter.textContent = message;\n    }\n\n    setShortSearch(message) {\n        this.shortSearch.textContent = message;\n    }\n}\n\n//# sourceURL=webpack://project__search/./src/js/View.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;