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

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://app/./styles/styles.scss?");

/***/ }),

/***/ "./scr/date.js":
/*!*********************!*\
  !*** ./scr/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initMinDate\": () => (/* binding */ initMinDate),\n/* harmony export */   \"changeCalendarValue\": () => (/* binding */ changeCalendarValue)\n/* harmony export */ });\nlet currentFirstDate = document.getElementById(\"firstDate\");\r\nlet currentSecondDate = document.getElementById(\"secondDate\");\r\n\r\nfunction initMinDate() {\r\n  currentFirstDate = document.getElementById(\"firstDate\");\r\n  currentSecondDate = document.getElementById(\"secondDate\");\r\n  currentFirstDate.setAttribute(\"min\", getCurrentDate());\r\n  currentSecondDate.setAttribute(\"min\", getCurrentDate());\r\n}\r\n\r\nfunction getCurrentDate() {\r\n  let today = new Date();\r\n  let dayIsToday = today.getDate();\r\n  let monthIsToday = today.getMonth() + 1;\r\n  const yearIsToday = today.getFullYear();\r\n  if (dayIsToday < 10) {\r\n    dayIsToday = \"0\" + dayIsToday;\r\n  }\r\n  if (monthIsToday < 10) {\r\n    monthIsToday = \"0\" + monthIsToday;\r\n  }\r\n  return yearIsToday + \"-\" + monthIsToday + \"-\" + dayIsToday;\r\n}\r\n\r\nfunction changeCalendarValue(e) {\r\n  if (e.target === currentFirstDate) {\r\n    const currentDate = currentFirstDate.value;\r\n\r\n    if (new Date(currentSecondDate.value) < new Date(currentFirstDate.value)) {\r\n      currentSecondDate.value = currentDate;\r\n    }\r\n    currentSecondDate.setAttribute(\"min\", currentDate);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://app/./scr/date.js?");

/***/ }),

/***/ "./scr/functions.js":
/*!**************************!*\
  !*** ./scr/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearForm\": () => (/* binding */ clearForm),\n/* harmony export */   \"deleteHistoryItem\": () => (/* binding */ deleteHistoryItem),\n/* harmony export */   \"backToMainWithParameters\": () => (/* binding */ backToMainWithParameters),\n/* harmony export */   \"initCitiesSelector\": () => (/* binding */ initCitiesSelector)\n/* harmony export */ });\n/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ \"./scr/renderPage.js\");\n/* harmony import */ var _workWithApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workWithApi */ \"./scr/workWithApi.js\");\n\r\n\r\n\r\nfunction clearForm(e) {\r\n  if (e.target.id === \"clearAll\") {\r\n    const $form = document.querySelector(\".edited-form\");\r\n    const $inputs = $form.querySelectorAll(\".form-input\");\r\n\r\n    $inputs.forEach((element) => {\r\n      element.value = \"\";\r\n    });\r\n  }\r\n}\r\n\r\nfunction deleteHistoryItem(e) {\r\n  if (e.target.classList.contains(\"delete-list-item\")) {\r\n    const listItem = e.target.closest(\".history-list-item\");\r\n    const currentStorage = window.localStorage.getItem(\"history\");\r\n    const jsonCurrentStorage = JSON.parse(currentStorage);\r\n    const newStorage = jsonCurrentStorage.filter((elem) => elem.id != listItem.dataset.id);\r\n    window.localStorage.setItem(\"history\", JSON.stringify(newStorage));\r\n    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.renderMainPage)(\"searchHistory\");\r\n  }\r\n}\r\n\r\nfunction backToMainWithParameters(e) {\r\n  if (e.target.classList.contains(\"list-item-text\")) {\r\n    const listItem = e.target.closest(\".history-list-item\");\r\n    const currentStorage = window.localStorage.getItem(\"history\");\r\n    const jsonCurrentStorage = JSON.parse(currentStorage);\r\n    const idObject = jsonCurrentStorage.filter((elem) => elem.id === listItem.dataset.id)[0];\r\n    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.renderMainPage)(\"search\", idObject);\r\n  }\r\n}\r\n\r\nfunction initCitiesSelector(e) {\r\n  if (e.target.classList.contains(\"country\")) {\r\n    const value = e.target.value;\r\n    const container = e.target.closest(\".location-form-container\");\r\n    const citypicker = container.querySelectorAll(\".city-picker\");\r\n    (0,_workWithApi__WEBPACK_IMPORTED_MODULE_1__.fillCities)(value, citypicker);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://app/./scr/functions.js?");

/***/ }),

/***/ "./scr/inputs.js":
/*!***********************!*\
  !*** ./scr/inputs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInputs\": () => (/* binding */ getInputs)\n/* harmony export */ });\nfunction getInputs($form) {\r\n  const $inputs = $form.querySelectorAll(\".form-input\");\r\n\r\n  $inputs.forEach(($input) => {\r\n    if ($input.dataset.validators) {\r\n      $input.validators = _createInputValidators($input);\r\n    }\r\n  });\r\n\r\n  return $inputs;\r\n}\r\n\r\nfunction _createInputValidators($input) {\r\n  const validators = [];\r\n\r\n  $input.dataset.validators.split(\",\").map((validator) => {\r\n    const validatorStr = validator.trim();\r\n    const name = validatorStr.split(\"(\")[0];\r\n\r\n    validators.push({\r\n      name,\r\n    });\r\n  });\r\n\r\n  return validators;\r\n}\r\n\n\n//# sourceURL=webpack://app/./scr/inputs.js?");

/***/ }),

/***/ "./scr/pages.js":
/*!**********************!*\
  !*** ./scr/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pages\": () => (/* binding */ pages)\n/* harmony export */ });\nconst pages = {\r\n  flightsEditForm() {\r\n    return `<form id=\"flightsEditForm\" class=\"edited-form\" enctype=\"multipart/form-data\">\r\n                <section class=\"user-selected-dates\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"calendar_container\">\r\n                            <label>Start Date</label>\r\n                            <input type=\"date\" class=\"form-input\" id=\"firstDate\" name=\"firstDate\"\r\n                                data-validators=\"requiered\">\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"calendar_container\">\r\n                            <label>Start Date</label>\r\n                            <input type=\"date\" class=\"form-input\" id=\"secondDate\" name=\"secondDate\"\r\n                                data-validators=\"requiered\">\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n\r\n                <p class=\"location-label\">From</p>\r\n                <section class=\"location-form-container\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"countryFromPicker\" class=\"country country-picker form-input\" name=\"countryFrom\"\r\n                                data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"cityFromPicker\" class=\"city-picker form-input\" name=\"cityFrom\"\r\n                                data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <p class=\"location-label\">To</p>\r\n                <section class=\"location-form-container\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"countryToPicker\" class=\"country country-picker form-input\" name=\"countryTo\"\r\n                                data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"cityToPicker\" class=\"city-picker form-input\" name=\"cityTo\"\r\n                                data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <section class=\"buttons\">\r\n                    <button id='clearAll'>Clear</button>\r\n                    <input type=\"submit\" value=\"Search\" id='submitForm'>\r\n                </section>\r\n            </form>`;\r\n  },\r\n  hotelsEditForm() {\r\n    return `<form id=\"hotelsEditForm\" class=\"edited-form\" enctype=\"multipart/form-data\">\r\n                <section class=\"user-selected-dates\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"calendar_container\">\r\n                            <label>Start Date</label>\r\n                            <input type=\"date\" class=\"form-input\" id=\"firstDate\" name=\"firstDate\"\r\n                                data-validators=\"requiered\">\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"calendar_container\">\r\n                            <label>Start Date</label>\r\n                            <input type=\"date\" class=\"form-input\" id=\"secondDate\" name=\"secondDate\"\r\n                                data-validators=\"requiered\">\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n                <div class=\"form-group\">\r\n                    <div class=\"amenities_container\">\r\n                    <label>Amenities:</label>\r\n                    <select class=\"form-input\" id=\"amenities\" name=\"amenities\" data-validators=\"requiered\">\r\n                        <option selected value=\"\"></option>\r\n                        <option value=\"1*\">1*</option>\r\n                        <option value=\"2*\">2*</option>\r\n                        <option value=\"3*\">3*</option>\r\n                        <option value=\"4*\">4*</option>\r\n                        <option value=\"5*\">5*</option>\r\n                    </select>\r\n                    <div class=\"form-group--error-container\">\r\n                        <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                    </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <section class=\"location-form-container\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"countryFromPicker\" class=\"country country-picker form-input\" name=\"countryFrom\"\r\n                                data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"cityFromPicker\" class=\"city-picker form-input\" name=\"cityFrom\" data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n\r\n               <section class=\"buttons\">\r\n                    <button>Clear</button>\r\n                    <input type=\"submit\" value=\"Search\">\r\n                </section>\r\n            </form>`;\r\n  },\r\n  carsEditForm() {\r\n    return `<form id=\"carsEditForm\" class=\"edited-form\" enctype=\"multipart/form-data\">\r\n                <section class=\"user-selected-dates\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"calendar_container\">\r\n                            <label>Start Date</label>\r\n                            <input type=\"date\" class=\"form-input\" id=\"firstDate\" name=\"firstDate\" data-validators=\"requiered\">\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"calendar_container\">\r\n                            <label>Start Date</label>\r\n                            <input type=\"date\" class=\"form-input\" id=\"secondDate\" name=\"secondDate\" data-validators=\"requiered\">\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n            \r\n                <div class=\"form-group\">\r\n                    <div class=\"choose-car-container\">\r\n                        <label>Class:</label>\r\n                        <select class=\"form-input\" id=\"carClass\" name=\"carClass\" data-validators=\"requiered\">\r\n                            <option selected value=\"\"></option>\r\n                            <option value=\"economy\">economy</option>\r\n                            <option value=\"business\">business</option>\r\n                        </select>\r\n                        <div class=\"form-group--error-container\">\r\n                            <span class=\"error-message error-message--requiered\">Select start date</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            \r\n                <section class=\"location-form-container\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"countryFromPicker\" class=\"country country-picker form-input\" name=\"countryFrom\"\r\n                                data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"country-picker-container\">\r\n                            <label>Choose country:</label>\r\n                            <select id=\"cityFromPicker\" class=\"city-picker form-input\" name=\"cityFrom\"\r\n                                data-validators=\"requiered\">\r\n                            </select>\r\n                            <div class=\"form-group--error-container\">\r\n                                <span class=\"error-message error-message--requiered\">Select location</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n            \r\n              <section class=\"buttons\">\r\n                    <button>Clear</button>\r\n                    <input type=\"submit\" value=\"Search\">\r\n                </section>\r\n            </form>`;\r\n  },\r\n\r\n  search() {\r\n    return `<aside class=\"sidebar\">\r\n            <ul class=\"sidebar-list\" id=\"sidebar-list\">\r\n                <li class=\"sidebar-list-item active\" data-page=\"flightsEditForm\">Flights</li>\r\n                <li class=\"sidebar-list-item\" data-page=\"hotelsEditForm\">Hotels</li>\r\n                <li class=\"sidebar-list-item\" data-page=\"carsEditForm\">Cars</li>\r\n            </ul>\r\n        </aside>\r\n        <div id=\"page_container\">          \r\n\r\n        </div> `;\r\n  },\r\n  searchHistory() {\r\n    const history = JSON.parse(window.localStorage.getItem(\"history\"));\r\n    let divs = \"<ul class='history-list'>\";\r\n    if (history && history.length > 0) {\r\n      history.forEach((element) => {\r\n        let historyItem = historyElements[element.type](element);\r\n        divs += historyItem;\r\n      });\r\n      divs += \"</ul>\";\r\n    }\r\n\r\n    return `<div class=\"searchHistory\" id=searchHistoryPage>\r\n        ${divs}\r\n    </div>`;\r\n  },\r\n};\r\n\r\nconst historyElements = {\r\n  flightsEditForm(element) {\r\n    const firstDate = new Date(element.firstDate);\r\n    const secondDate = new Date(element.secondDate);\r\n\r\n    return `<li class=\"history-list-item\" data-id=\"${element.id}\">\r\n        <p class=\"list-item-text\">Flight ${firstDate.toDateString().substr(3)} - ${secondDate\r\n      .toDateString()\r\n      .substr(3)}  ${element.cityFrom} - ${element.cityTo} </p><button class=\"delete-list-item\">Delete</button>\r\n    </li>`;\r\n  },\r\n  hotelsEditForm(element) {\r\n    const firstDate = new Date(element.firstDate);\r\n    const secondDate = new Date(element.secondDate);\r\n\r\n    return `<li class=\"history-list-item\" data-id=\"${element.id}\">\r\n        <p class=\"list-item-text\"> Hotel ${firstDate.toDateString().substr(3)} - ${secondDate\r\n      .toDateString()\r\n      .substr(3)}  ${element.cityFrom} - ${element.amenities} </p><button class=\"delete-list-item\">Delete</button>\r\n    </li>`;\r\n  },\r\n  carsEditForm(element) {\r\n    const firstDate = new Date(element.firstDate);\r\n    const secondDate = new Date(element.secondDate);\r\n\r\n    return `<li class=\"history-list-item\" data-id=\"${element.id}\">\r\n        <p class=\"list-item-text\"> Car ${firstDate.toDateString().substr(3)} - ${secondDate\r\n      .toDateString()\r\n      .substr(3)}  ${element.cityFrom} - ${element.carClass} </p><button class=\"delete-list-item\">Delete</button>\r\n    </li>`;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://app/./scr/pages.js?");

/***/ }),

/***/ "./scr/renderPage.js":
/*!***************************!*\
  !*** ./scr/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMainPage\": () => (/* binding */ renderMainPage),\n/* harmony export */   \"renderPageComponent\": () => (/* binding */ renderPageComponent)\n/* harmony export */ });\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ \"./scr/pages.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./scr/script.js\");\n\r\n\r\n\r\nfunction renderMainPage(page, object) {\r\n  const $mainPage = document.getElementById(\"mainPage\");\r\n\r\n  $mainPage.innerHTML = _pages_js__WEBPACK_IMPORTED_MODULE_0__.pages[page]();\r\n\r\n  if (page === \"search\") {\r\n    if (object) {\r\n      renderPageComponent(object.type);\r\n      (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.initPage)();\r\n      const $inputs = $mainPage.querySelectorAll(\".form-input\");\r\n      const keys = Object.keys(object);\r\n      const newKeys = keys.filter((el) => el != \"id\");\r\n\r\n      newKeys.forEach((element) => {\r\n        $inputs.forEach((input) => {\r\n          if (input.name === element) {\r\n            setTimeout(() => {\r\n              input.value = object[element];\r\n            }, 500);\r\n          }\r\n        });\r\n      });\r\n    } else {\r\n      renderPageComponent(\"flightsEditForm\");\r\n      (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.initPage)();\r\n    }\r\n  }\r\n}\r\n\r\nfunction renderPageComponent(componentName) {\r\n  const pagecontainer = document.getElementById(\"page_container\");\r\n  pagecontainer.innerHTML = _pages_js__WEBPACK_IMPORTED_MODULE_0__.pages[componentName]();\r\n}\r\n\n\n//# sourceURL=webpack://app/./scr/renderPage.js?");

/***/ }),

/***/ "./scr/script.js":
/*!***********************!*\
  !*** ./scr/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initPage\": () => (/* binding */ initPage)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/styles.scss */ \"./styles/styles.scss\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.js */ \"./scr/date.js\");\n/* harmony import */ var _workWithApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workWithApi.js */ \"./scr/workWithApi.js\");\n/* harmony import */ var _validateForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateForm.js */ \"./scr/validateForm.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions.js */ \"./scr/functions.js\");\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view.js */ \"./scr/view.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"click\", _view_js__WEBPACK_IMPORTED_MODULE_5__.checkCurrentPage);\r\ndocument.addEventListener(\"click\", _functions_js__WEBPACK_IMPORTED_MODULE_4__.backToMainWithParameters);\r\ndocument.addEventListener(\"click\", _functions_js__WEBPACK_IMPORTED_MODULE_4__.clearForm);\r\ndocument.addEventListener(\"click\", _functions_js__WEBPACK_IMPORTED_MODULE_4__.deleteHistoryItem);\r\ndocument.addEventListener(\"change\", _date_js__WEBPACK_IMPORTED_MODULE_1__.changeCalendarValue);\r\ndocument.addEventListener(\"submit\", _validateForm_js__WEBPACK_IMPORTED_MODULE_3__.onFormSubmit);\r\ndocument.addEventListener(\"change\", _functions_js__WEBPACK_IMPORTED_MODULE_4__.initCitiesSelector);\r\n\r\nfunction initPage() {\r\n  (0,_date_js__WEBPACK_IMPORTED_MODULE_1__.initMinDate)();\r\n  const countryField = document.querySelectorAll(\".country-picker\");\r\n  (0,_workWithApi_js__WEBPACK_IMPORTED_MODULE_2__.fillCountries)(countryField);\r\n}\r\n\r\ninitPage();\r\n\n\n//# sourceURL=webpack://app/./scr/script.js?");

/***/ }),

/***/ "./scr/validateForm.js":
/*!*****************************!*\
  !*** ./scr/validateForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onFormSubmit\": () => (/* binding */ onFormSubmit)\n/* harmony export */ });\n/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ \"./scr/inputs.js\");\n/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator */ \"./scr/validator.js\");\n\r\n\r\n\r\nfunction onFormSubmit(e) {\r\n  e.preventDefault();\r\n\r\n  if (validateForm(e.target)) {\r\n    console.log(\"form is valid\");\r\n    const values = getValues(e.target);\r\n\r\n    //create some fetch to submit form\r\n\r\n    let myStorage = window.localStorage.getItem(\"history\");\r\n    if (myStorage) {\r\n      const array = JSON.parse(myStorage);\r\n      array.push(values);\r\n      localStorage.setItem(\"history\", JSON.stringify(array));\r\n    } else {\r\n      localStorage.setItem(\"history\", JSON.stringify([values]));\r\n    }\r\n  } else {\r\n    console.log(\"form is not valid\");\r\n  }\r\n}\r\n\r\nfunction getValues($form) {\r\n  const $inputs = $form.querySelectorAll(\".form-input\");\r\n\r\n  const valuesObject = {};\r\n  valuesObject.id = generateID();\r\n  valuesObject.type = $form.id;\r\n\r\n  $inputs.forEach((element) => {\r\n    valuesObject[element.name] = element.value;\r\n  });\r\n\r\n  return valuesObject;\r\n}\r\n\r\nfunction generateID() {\r\n  return \"_\" + Math.random().toString(36).substr(2, 9);\r\n}\r\n\r\nfunction validateForm($form) {\r\n  const $inputs = (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.getInputs)($form);\r\n\r\n  let isFormValid = true;\r\n\r\n  $inputs.forEach(($input) => {\r\n    const isInputValid = validateInput($input);\r\n\r\n    if (!isInputValid) {\r\n      isFormValid = false;\r\n    }\r\n  });\r\n\r\n  return isFormValid;\r\n}\r\n\r\nfunction validateInput($input) {\r\n  const $container = $input.closest(\".form-group\");\r\n  const value = $input.value;\r\n\r\n  let inputMessage = \"valid\";\r\n\r\n  if ($input.dataset.validators) {\r\n    $input.validators.forEach((validator) => {\r\n      if (_validator__WEBPACK_IMPORTED_MODULE_1__.VALIDATOR[validator.name](value)) {\r\n        inputMessage = `error--${validator.name}`;\r\n      }\r\n    });\r\n  }\r\n\r\n  if (inputMessage !== \"valid\") {\r\n    $container.classList.add(\"has-error\");\r\n    $container.classList.add(inputMessage);\r\n  } else {\r\n    $container.classList.remove(\"has-error\");\r\n  }\r\n\r\n  return inputMessage === \"valid\";\r\n}\r\n\n\n//# sourceURL=webpack://app/./scr/validateForm.js?");

/***/ }),

/***/ "./scr/validator.js":
/*!**************************!*\
  !*** ./scr/validator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VALIDATOR\": () => (/* binding */ VALIDATOR)\n/* harmony export */ });\nconst VALIDATOR = {\r\n  \"requiered\": (value) => !!(value.length === 0),\r\n};\r\n\n\n//# sourceURL=webpack://app/./scr/validator.js?");

/***/ }),

/***/ "./scr/view.js":
/*!*********************!*\
  !*** ./scr/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCurrentPage\": () => (/* binding */ checkCurrentPage)\n/* harmony export */ });\n/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPage */ \"./scr/renderPage.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ \"./scr/script.js\");\n\r\n\r\n\r\nfunction checkCurrentPage(e) {\r\n  if (e.target.classList.contains(\"sidebar-list-item\")) {\r\n    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.renderPageComponent)(e.target.dataset.page);\r\n    const sidebarItemsList = document.querySelectorAll(\".sidebar-list-item\");\r\n    highliteActive(sidebarItemsList, e.target);\r\n    (0,_script__WEBPACK_IMPORTED_MODULE_1__.initPage)();\r\n  }\r\n\r\n  if (e.target.classList.contains(\"header_item\")) {\r\n    const headerItemsList = document.querySelectorAll(\".header_item\");\r\n    highliteActive(headerItemsList, e.target);\r\n    (0,_renderPage__WEBPACK_IMPORTED_MODULE_0__.renderMainPage)(e.target.dataset.page);\r\n    if (e.target.classList.contains(\"search\")) {\r\n      (0,_script__WEBPACK_IMPORTED_MODULE_1__.initPage)();\r\n    }\r\n  }\r\n}\r\n\r\nfunction highliteActive(sidebarList, $target) {\r\n  sidebarList.forEach((el) => {\r\n    if (el.classList.contains(\"active\")) {\r\n      el.classList.remove(\"active\");\r\n    }\r\n  });\r\n  $target.classList.add(\"active\");\r\n}\r\n\n\n//# sourceURL=webpack://app/./scr/view.js?");

/***/ }),

/***/ "./scr/workWithApi.js":
/*!****************************!*\
  !*** ./scr/workWithApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillCities\": () => (/* binding */ fillCities),\n/* harmony export */   \"fillCountries\": () => (/* binding */ fillCountries)\n/* harmony export */ });\nlet countries = [];\r\n\r\nfunction fillCities(countryName, citypicker) {\r\n  fetch(\"https://restcountries.eu/rest/v2/all\")\r\n    .then((response) => {\r\n      if (response.ok) {\r\n        const data = response.json();\r\n        data.then((value) => {\r\n          const cyties = value.filter((el) => el.name === countryName).map((el) => el.capital);\r\n          renderCyties(cyties, citypicker);\r\n        });\r\n      }\r\n    })\r\n    .catch((err) => {\r\n      console.error(err);\r\n    });\r\n}\r\n\r\nfunction fillCountries(array) {\r\n  fetch(\"https://restcountries.eu/rest/v2/all\")\r\n    .then((response) => {\r\n      if (response.ok) {\r\n        const data = response.json();\r\n        data.then((value) => {\r\n          countries = value.map((el) => el.name);\r\n          renderCountries(array);\r\n        });\r\n      }\r\n    })\r\n    .catch((err) => {\r\n      console.error(err);\r\n    });\r\n}\r\n\r\nfunction renderCountries(array) {\r\n  array.forEach(($picker) => ($picker.innerHTML = createOptions(countries)));\r\n}\r\n\r\nfunction renderCyties(cyties, $element) {\r\n  $element.forEach(($picker) => ($picker.innerHTML = createOptions(cyties)));\r\n}\r\n\r\nfunction createOptions(items) {\r\n  let options = \"\";\r\n  options += `<option value=\"\"></option>`;\r\n  items.forEach((item) => {\r\n    options += `<option value=\"${item}\">${item}</option>`;\r\n  });\r\n\r\n  return options;\r\n}\r\n\n\n//# sourceURL=webpack://app/./scr/workWithApi.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./scr/script.js");
/******/ 	
/******/ })()
;