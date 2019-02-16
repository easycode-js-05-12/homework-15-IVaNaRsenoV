/******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _setElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setElements.js */ \"./js/setElements.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ \"./js/events.js\");\n/* harmony import */ var _dataSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataSet.js */ \"./js/dataSet.js\");\n // Styles\n\n\n\n\nvar setElem = new _setElements_js__WEBPACK_IMPORTED_MODULE_1__[\"SetElem\"]({});\nObject(_events_js__WEBPACK_IMPORTED_MODULE_2__[\"setEvents\"])(setElem);\nObject(_dataSet_js__WEBPACK_IMPORTED_MODULE_3__[\"dataSet\"])(setElem);\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/close.js":
/*!*********************!*\
  !*** ./js/close.js ***!
  \*********************/
/*! exports provided: clear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/**\r\n * @description - функция clear очищает блок в доходах и в расходах по нажатию на крестик\r\n * @param {e} e - элемент, на котором будет происходить событие\r\n * @return {undefined} - undefined\r\n */\nfunction clear(e) {\n  if (e.target.classList.contains('ion-ios-close-outline')) {\n    var id = e.target.closest('[data-id]').dataset.id; // Привязыеваем id к датасет родительского элемента\n\n    deleteTodoFromView(id); // удаляем родительский элемент по id\n  }\n}\n/**\r\n * @description - функция deleteTodoFromView удаляет блок в доходах и в расходах\r\n * @param {id} id - идентификатор\r\n * @return {undefined} - undefined\r\n */\n\nfunction deleteTodoFromView(id) {\n  var target = document.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\"));\n  target.parentElement.removeChild(target);\n}\n\n//# sourceURL=webpack:///./js/close.js?");

/***/ }),

/***/ "./js/condition.js":
/*!*************************!*\
  !*** ./js/condition.js ***!
  \*************************/
/*! exports provided: condition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"condition\", function() { return condition; });\n/**\r\n * @description - функция condition вставляет элемент в разметку\r\n * @param {elem} - этот параметр является экземпляром класса SetElem\r\n * @return {undefined} - undefined\r\n */\nfunction condition(elem) {\n  elem.contain.insertAdjacentHTML('beforebegin', alert());\n  deleteAlert(elem);\n}\nvar style = 'style=\"text-align:center; background:#fbff10a1; padding:10px; font-size:18px; width:70%; margin:0 auto; margin-top:10px; margin-bottom:10px; border-radius:15px;\"';\n/**\r\n * @description - функция alert выводит разметку для алерта\r\n * @return {markup} - markup\r\n */\n\nfunction alert() {\n  return \"\\n\\t<div \".concat(style, \" class=\\\"alert\\\"> <span>\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043F\\u043E\\u0436\\u0430\\u043B\\u0443\\u0439\\u0441\\u0442\\u0430 \\u043E\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u0435 !</span> </div>\\n    \");\n}\n/**\r\n * @description - функция deleteAlert удаляет окно алерт по истечению времени\r\n * @return {undefined} - undefined\r\n */\n\n\nfunction deleteAlert() {\n  setTimeout(function () {\n    var alert = document.querySelector('.alert');\n    alert.parentElement.removeChild(alert);\n  }, 5000);\n}\n\n//# sourceURL=webpack:///./js/condition.js?");

/***/ }),

/***/ "./js/dataSet.js":
/*!***********************!*\
  !*** ./js/dataSet.js ***!
  \***********************/
/*! exports provided: dataSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataSet\", function() { return dataSet; });\n/**\r\n * @description - функция dataSet необходима для установки даты, мясяца и года в нашу разметку\r\n * @param {elem} elem - сюда передаём экземпляр класса SetElem\r\n * @return {undefined} - undefined\r\n */\nfunction dataSet(elem) {\n  var mounths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  var data = new Date();\n  elem.dataSet.textContent = \"\".concat(data.getDate(), \" \").concat(mounths[Number(data.getMonth())], \" \").concat(data.getFullYear());\n}\n\n//# sourceURL=webpack:///./js/dataSet.js?");

/***/ }),

/***/ "./js/events.js":
/*!**********************!*\
  !*** ./js/events.js ***!
  \**********************/
/*! exports provided: setEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setEvents\", function() { return setEvents; });\n/* harmony import */ var _markup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup.js */ \"./js/markup.js\");\n/* harmony import */ var _close_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close.js */ \"./js/close.js\");\n/* harmony import */ var _workWithValues_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workWithValues.js */ \"./js/workWithValues.js\");\n/* harmony import */ var _reset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.js */ \"./js/reset.js\");\n\n\n\n\nvar markupAdd = new _markup_js__WEBPACK_IMPORTED_MODULE_0__[\"Markup\"]();\n/**\r\n * @description - функция setEvents необходима для работы с событиями\r\n * @param {elem} elem - передаём экземпляр класса SetElem (где мы назначали классы переменным)\r\n *  @returns {undefined} - undefined\r\n */\n\nfunction setEvents(elem) {\n  elem.select.addEventListener('change', function () {\n    return elem._shoiceOptions();\n  }); // Тут происходит реагирование на изменение селекта\n\n  elem.getBtn.addEventListener('click', function () {\n    return markupAdd.addMarkup('description', elem._shoiceOptions());\n  }); // Тут добавляется разметка\n\n  elem.contain.addEventListener('click', function (e) {\n    return Object(_close_js__WEBPACK_IMPORTED_MODULE_1__[\"clear\"])(e);\n  }); // Тут очищается разметка\n\n  document.querySelector('body').addEventListener('click', function (e) {\n    return Object(_workWithValues_js__WEBPACK_IMPORTED_MODULE_2__[\"workWithValues\"])(e);\n  }); // Тут происходит работа с таблом\n\n  elem.getBtn.addEventListener('click', function () {\n    return Object(_reset_js__WEBPACK_IMPORTED_MODULE_3__[\"resetValue\"])(elem);\n  }); // Обнуляем данные в полях ввода описания и значения после нажатия на кнопку\n}\n\n//# sourceURL=webpack:///./js/events.js?");

/***/ }),

/***/ "./js/markup.js":
/*!**********************!*\
  !*** ./js/markup.js ***!
  \**********************/
/*! exports provided: Markup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Markup\", function() { return Markup; });\n/* harmony import */ var _setElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setElements.js */ \"./js/setElements.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar elements = new _setElements_js__WEBPACK_IMPORTED_MODULE_0__[\"SetElem\"]({});\nvar Markup =\n/*#__PURE__*/\nfunction () {\n  function Markup() {\n    _classCallCheck(this, Markup);\n\n    this.expenses = elements.expense;\n    this.income = elements.income;\n    this.description = elements.description.value;\n    this.value = elements.addValue;\n  }\n  /**\r\n   * @description - метод addMarkup добавляет разметку в зависимости от значения селекта\r\n   * @param {task} task - передаёться массив со значениями id, description, value\r\n   * @param {elem} elem - передаётся знак (плюс или минус)\r\n   * @return {undefined} - undefined\r\n   */\n\n\n  _createClass(Markup, [{\n    key: \"addMarkup\",\n    value: function addMarkup(task, znak) {\n      // this.newAddTask = task;\n      // console.log(task);\n      if (znak === '+') {\n        this.income.insertAdjacentHTML('afterbegin', this.markupElem(task, '+'));\n      } else if (znak === '-') {\n        this.expenses.insertAdjacentHTML('afterbegin', this.markupElem(task, '-'));\n      }\n\n      ;\n    }\n    /**\r\n     * @description - метод markupElem возвращает гипертекстовую разметку\r\n     * @param {task} task - передаёться массив со значениями id, description, value\r\n     * @param {znak} znak - передаётся знак (плюс или минус)\r\n     * @return {markup} - markup\r\n     */\n\n  }, {\n    key: \"markupElem\",\n    value: function markupElem(task, znak) {\n      this.value.value < 0 ? this.value.value *= -1 : this.value.value *= 1;\n      return \"\\n        <div class=\\\"item clearfix\\\" data-id=\\\"\".concat(Date.now(), \"\\\">\\n        <div class=\\\"item__description\\\">\").concat(document.querySelector('.add__description').value, \"</div>\\n        <div class=\\\"right clearfix\\\">\\n    <div class=\\\"item__value\\\">\").concat(znak).concat(this.value.value, \"</div>\\n            <div class=\\\"item__delete\\\">\\n                <button class=\\\"item__delete--btn\\\"><i class=\\\"ion-ios-close-outline\\\"></i></button>\\n            </div>\\n        </div>\\n    </div>    \");\n    }\n  }]);\n\n  return Markup;\n}();\n\n//# sourceURL=webpack:///./js/markup.js?");

/***/ }),

/***/ "./js/reset.js":
/*!*********************!*\
  !*** ./js/reset.js ***!
  \*********************/
/*! exports provided: resetValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetValue\", function() { return resetValue; });\n/* harmony import */ var _condition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./condition.js */ \"./js/condition.js\");\n\n/**\r\n * @description - функция resetValue служит для обнуления данных после нажатия на кнопку\r\n * @param {elem} - elem, это параметр в который будет вставлен экземпляр класса setElem\r\n * @return {undefined} - undefined\r\n */\n\nfunction resetValue(elem) {\n  if (elem.description.value === '') {\n    Object(_condition_js__WEBPACK_IMPORTED_MODULE_0__[\"condition\"])(elem);\n  }\n\n  elem.description.value = ''; // Обнуляем данные описания\n\n  elem.addValue.value = ''; // Обнуляем данные значения\n}\n\n//# sourceURL=webpack:///./js/reset.js?");

/***/ }),

/***/ "./js/setElements.js":
/*!***************************!*\
  !*** ./js/setElements.js ***!
  \***************************/
/*! exports provided: SetElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SetElem\", function() { return SetElem; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SetElem =\n/*#__PURE__*/\nfunction () {\n  function SetElem() {\n    _classCallCheck(this, SetElem);\n\n    this.addValue = document.querySelector('.add__value');\n    this.btn = document.querySelector(\".add__btn\");\n    this.budgetValue = document.querySelector('.budget__value');\n    this.budgetIncomeValue = document.querySelector('.budget__income--value');\n    this.budgetExpensesValue = document.querySelector('.budget__expenses--value');\n    this.container = document.querySelector(\".add__container #getBtn\");\n    this.contain = document.querySelector(\".container\");\n    this.description = document.querySelector(\".add__description\");\n    this.dataSet = document.querySelector('.budget__title--month');\n    this.expense = document.querySelector(\".expenses__list\");\n    this.income1 = document.querySelector(\".add\");\n    this.income = document.querySelector(\".income__list\");\n    this.options = document.querySelector('select').options;\n    this.select = document.querySelector(\"select\");\n    this.getBtn = document.querySelector('.ion-ios-checkmark-outline');\n  }\n\n  _createClass(SetElem, [{\n    key: \"_shoiceOptions\",\n    value: function _shoiceOptions() {\n      return this.selectVal = this.options[this.select.selectedIndex].text;\n    }\n  }]);\n\n  return SetElem;\n}();\n\n//# sourceURL=webpack:///./js/setElements.js?");

/***/ }),

/***/ "./js/workWithValues.js":
/*!******************************!*\
  !*** ./js/workWithValues.js ***!
  \******************************/
/*! exports provided: workWithValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workWithValues\", function() { return workWithValues; });\n/* harmony import */ var _setElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setElements.js */ \"./js/setElements.js\");\n\nvar element = new _setElements_js__WEBPACK_IMPORTED_MODULE_0__[\"SetElem\"]();\n/**\r\n * @description - функция workWithValues необходима для того, чтобы считать цифры на табло и в полях формы income и expense\r\n * @param {e} e - элемент, на котором было произведено событие\r\n * @return {undefined} - undefined\r\n */\n\nfunction workWithValues(e) {\n  // Найдем элемент галочку и крестик на странице, привяжем их к событию\n  if (e.target.classList.contains('ion-ios-checkmark-outline') || e.target.classList.contains('ion-ios-close-outline')) {\n    var itemValue = document.querySelectorAll('.item__value');\n    var sumIncome = 0; // Наш счётчик для доходов\n\n    var sumExpense = 0; // Наш счётчик для расходов\n\n    for (var i = 0; i < itemValue.length; i++) {\n      // Будем проводить проверку на наличие родителя инкам по родительскому элементу income__list и для expense__list, если\n      // элементов нет, то обнулим наш счётчик доходов и расходов\n      if (itemValue[i].closest('.income__list')) {\n        sumIncome += Number(itemValue[i].textContent);\n        console.log(sumIncome + ' sumIncome');\n      } else if (itemValue[i].closest('.expenses__list')) {\n        sumExpense += Number(itemValue[i].textContent);\n        console.log(sumExpense + ' sumExpense');\n      } else if (element.income.children.length === 0 || element.expense.children.length === 0) {\n        sumIncome = 0;\n        sumExpense = 0;\n      }\n    }\n\n    element.budgetIncomeValue.textContent = '+' + sumIncome + ' $'; // Выведем значения на табло для доходов\n\n    element.budgetExpensesValue.textContent = sumExpense + ' $'; // Выведем значения на табло для расходов\n\n    element.budgetValue.textContent = sumIncome + sumExpense + ' $'; // Выведем значения на табло общей суммы доходов с расходами\n  }\n}\n\n//# sourceURL=webpack:///./js/workWithValues.js?");

/***/ })

/******/ });