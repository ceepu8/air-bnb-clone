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

/***/ "./redux/auth/authSaga.ts":
/*!********************************!*\
  !*** ./redux/auth/authSaga.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ authSaga; }\n/* harmony export */ });\n/* harmony import */ var _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ \"./redux/auth/authReducer.ts\");\n\nvar _marked = _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLoginFlow);\nvar _marked1 = _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(handleLogout);\nvar _marked2 = _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(handleLogin);\n\n\nfunction handleLogin(payload) {\n    return _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function handleLogin$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                console.log(payload);\n            case 1:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked2);\n// try {\n//   const result: ApiResponse<User> = yield authApi.signin(payload);\n//   console.log(result);\n//   yield put(loginSuccess(result.data));\n// } catch (error) {\n//   console.log(error);\n// }\n}\nfunction handleLogout() {\n    return _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function handleLogout$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                console.log(\"Handle Logout\");\n            case 1:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked1);\n}\nfunction watchLoginFlow() {\n    var action;\n    return _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLoginFlow$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                if (false) {}\n                _ctx.next = 3;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.take)(_authReducer__WEBPACK_IMPORTED_MODULE_2__.login.type);\n            case 3:\n                action = _ctx.sent;\n                _ctx.next = 6;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(handleLogin, action.payload);\n            case 6:\n                _ctx.next = 0;\n                break;\n            case 8:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _marked);\n}\nfunction authSaga() {\n    return _Users_macbookpro_Desktop_my_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function authSaga$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLoginFlow);\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, authSaga);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9hdXRoL2F1dGhTYWdhLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7MEpBd0JVQSxjQUFjOzJKQUpkQyxZQUFZOzJKQWJaQyxXQUFXO0FBSGlEO0FBQ1Y7QUFFNUQsU0FBVUEsV0FBVyxDQUFDSSxPQUFvQixFQUFFO2dLQUFsQ0osWUFBVzs7O2dCQUNuQkssT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7QUFFckIsUUFBUTtBQUNSLHFFQUFxRTtBQUNyRSx5QkFBeUI7QUFFekIsMENBQTBDO0FBQzFDLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsSUFBSTtDQUNMO0FBRUQsU0FBVUwsWUFBWSxHQUFHO2dLQUFmQSxhQUFZOzs7Z0JBQ3BCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7O0NBQzlCO0FBRUQsU0FBVVIsY0FBYyxHQUFHO1FBRWpCUyxNQUFNO2dLQUZOVCxlQUFjOzs7b0JBQ2YsS0FBSSxFQUFFOzt1QkFDc0NJLHdEQUFJLENBQUNDLG9EQUFVLENBQUM7O2dCQUEzREksTUFBTSxZQUFxRDs7dUJBQzNETix3REFBSSxDQUFDRCxXQUFXLEVBQUVPLE1BQU0sQ0FBQ0gsT0FBTyxDQUFDOzs7Ozs7Ozs7Q0FLMUM7QUFFYyxTQUFVSyxRQUFRLEdBQUc7Z0tBQVhBLFNBQVE7Ozs7dUJBQ3pCUix3REFBSSxDQUFDSCxjQUFjLENBQUM7Ozs7O09BREhXLFFBQVE7Q0FFaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYXV0aC9hdXRoU2FnYS50cz81NTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVJlc3BvbnNlLCBMb2dpblZhbHVlcyB9IGZyb20gXCJAL2ludGVyZmFjZXMvYXV0aFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL2ludGVyZmFjZXMvdXNlclwiO1xuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgYXV0aEFwaSBmcm9tIFwiYXBpLWNsaWVudC9hdXRoQXBpXCI7XG5pbXBvcnQgeyBmb3JrLCB0YWtlLCBjYWxsLCB0YWtlRXZlcnksIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB7IGxvZ2luLCBsb2dpblN1Y2Nlc3MsIGxvZ291dCB9IGZyb20gXCIuL2F1dGhSZWR1Y2VyXCI7XG5cbmZ1bmN0aW9uKiBoYW5kbGVMb2dpbihwYXlsb2FkOiBMb2dpblZhbHVlcykge1xuICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcblxuICAvLyB0cnkge1xuICAvLyAgIGNvbnN0IHJlc3VsdDogQXBpUmVzcG9uc2U8VXNlcj4gPSB5aWVsZCBhdXRoQXBpLnNpZ25pbihwYXlsb2FkKTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gIC8vICAgeWllbGQgcHV0KGxvZ2luU3VjY2VzcyhyZXN1bHQuZGF0YSkpO1xuICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiogaGFuZGxlTG9nb3V0KCkge1xuICBjb25zb2xlLmxvZyhcIkhhbmRsZSBMb2dvdXRcIik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ2luRmxvdygpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBhY3Rpb246IFBheWxvYWRBY3Rpb248TG9naW5WYWx1ZXM+ID0geWllbGQgdGFrZShsb2dpbi50eXBlKTtcbiAgICB5aWVsZCBmb3JrKGhhbmRsZUxvZ2luLCBhY3Rpb24ucGF5bG9hZCk7XG5cbiAgICAvLyB5aWVsZCB0YWtlKGxvZ291dC50eXBlKTtcbiAgICAvLyB5aWVsZCBjYWxsKGhhbmRsZUxvZ291dCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGF1dGhTYWdhKCkge1xuICB5aWVsZCBmb3JrKHdhdGNoTG9naW5GbG93KTtcbn1cbiJdLCJuYW1lcyI6WyJ3YXRjaExvZ2luRmxvdyIsImhhbmRsZUxvZ291dCIsImhhbmRsZUxvZ2luIiwiZm9yayIsInRha2UiLCJsb2dpbiIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiYWN0aW9uIiwidHlwZSIsImF1dGhTYWdhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/auth/authSaga.ts\n"));

/***/ })

});