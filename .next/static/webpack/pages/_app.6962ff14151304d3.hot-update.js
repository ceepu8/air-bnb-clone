"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/rootReducer.ts":
/*!******************************!*\
  !*** ./redux/rootReducer.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _auth_authReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/authReducer */ \"./redux/auth/authReducer.ts\");\n/* harmony import */ var connected_next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-next-router */ \"./node_modules/connected-next-router/es/index.js\");\n\n\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n    router: connected_next_router__WEBPACK_IMPORTED_MODULE_1__.routerReducer,\n    authReducer: _auth_authReducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yb290UmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQXdDO0FBQ0s7QUFFUztBQUV0RCxJQUFNRyxXQUFXLEdBQUdILHNEQUFlLENBQUM7SUFDbENJLE1BQU0sRUFBRUYsZ0VBQWE7SUFDckJELFdBQVcsRUFBRUEseURBQVc7Q0FDekIsQ0FBQztBQUVGLCtEQUFlRSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcm9vdFJlZHVjZXIudHM/ZmYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBhdXRoUmVkdWNlciBmcm9tIFwiLi9hdXRoL2F1dGhSZWR1Y2VyXCI7XG5cbmltcG9ydCB7IHJvdXRlclJlZHVjZXIgfSBmcm9tIFwiY29ubmVjdGVkLW5leHQtcm91dGVyXCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgcm91dGVyOiByb3V0ZXJSZWR1Y2VyLFxuICBhdXRoUmVkdWNlcjogYXV0aFJlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY29tYmluZVJlZHVjZXJzIiwiYXV0aFJlZHVjZXIiLCJyb3V0ZXJSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJyb3V0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/rootReducer.ts\n"));

/***/ })

});