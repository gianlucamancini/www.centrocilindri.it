/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// import 'flowbite';\n\nvar showMenuButton = document.getElementById('show-menu-button');\nvar closeMenuButton = document.getElementById('hide-menu-button');\nvar navMenu = document.getElementById('nav-menu');\nvar toggleNav = function toggleNav(event) {\n  navMenu.classList.toggle('hidden');\n};\nshowMenuButton.addEventListener('click', toggleNav);\ncloseMenuButton.addEventListener('click', toggleNav);\nvar editables = document.querySelectorAll('[data-editable]');\neditables.forEach(function (elem) {\n  elem.addEventListener('click', function (event) {\n    var el = event.target;\n    var sign = prompt(\"Indirizzo dell'immagine\", el.src);\n    if (sign) {\n      el.setAttribute('src', sign);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;