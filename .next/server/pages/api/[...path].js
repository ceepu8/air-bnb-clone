"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/[...path]";
exports.ids = ["pages/api/[...path]"];
exports.modules = {

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "http-proxy":
/*!*****************************!*\
  !*** external "http-proxy" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("http-proxy");

/***/ }),

/***/ "(api)/./pages/api/[...path].ts":
/*!********************************!*\
  !*** ./pages/api/[...path].ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-proxy */ \"http-proxy\");\n/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst proxy = http_proxy__WEBPACK_IMPORTED_MODULE_0___default().createProxyServer();\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nfunction handler(req, res) {\n    return new Promise((resolve)=>{\n        const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res);\n        const token = cookies.get(\"token\");\n        if (token) {}\n        //don't send cookie to API Server\n        req.headers.cookie = \"\";\n        proxy.web(req, res, {\n            target: process.env.API_URL,\n            changeOrigin: true,\n            selfHandleResponse: false\n        });\n        proxy.once(\"proxyRes\", ()=>{\n            resolve(true);\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvWy4uLnBhdGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtQztBQUNMO0FBRTlCLE1BQU1FLEtBQUssR0FBR0YsbUVBQTJCLEVBQUU7QUFFcEMsTUFBTUksTUFBTSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDO0FBRWEsU0FBU0MsT0FBTyxDQUM3QkMsR0FBbUIsRUFDbkJDLEdBQXlCLEVBQ3pCO0lBQ0EsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQzlCLE1BQU1DLE9BQU8sR0FBRyxJQUFJWCxnREFBTyxDQUFDTyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztRQUNyQyxNQUFNSSxLQUFLLEdBQUdELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJRCxLQUFLLEVBQUUsRUFDVjtRQUNELGlDQUFpQztRQUNqQ0wsR0FBRyxDQUFDTyxPQUFPLENBQUNDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFeEJkLEtBQUssQ0FBQ2UsR0FBRyxDQUFDVCxHQUFHLEVBQUVDLEdBQUcsRUFBRTtZQUNsQlMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTztZQUMzQkMsWUFBWSxFQUFFLElBQUk7WUFDbEJDLGtCQUFrQixFQUFFLEtBQUs7U0FDMUIsQ0FBQyxDQUFDO1FBRUhyQixLQUFLLENBQUNzQixJQUFJLENBQUMsVUFBVSxFQUFFLElBQU07WUFDM0JiLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNmLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL1suLi5wYXRoXS50cz9mZWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgaHR0cFByb3h5IGZyb20gXCJodHRwLXByb3h5XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwiY29va2llc1wiO1xuXG5jb25zdCBwcm94eSA9IGh0dHBQcm94eS5jcmVhdGVQcm94eVNlcnZlcigpO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHtcbiAgICBib2R5UGFyc2VyOiBmYWxzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPGFueT5cbikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLCByZXMpO1xuICAgIGNvbnN0IHRva2VuID0gY29va2llcy5nZXQoXCJ0b2tlblwiKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICB9XG4gICAgLy9kb24ndCBzZW5kIGNvb2tpZSB0byBBUEkgU2VydmVyXG4gICAgcmVxLmhlYWRlcnMuY29va2llID0gXCJcIjtcblxuICAgIHByb3h5LndlYihyZXEsIHJlcywge1xuICAgICAgdGFyZ2V0OiBwcm9jZXNzLmVudi5BUElfVVJMLFxuICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgc2VsZkhhbmRsZVJlc3BvbnNlOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHByb3h5Lm9uY2UoXCJwcm94eVJlc1wiLCAoKSA9PiB7XG4gICAgICByZXNvbHZlKHRydWUpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJodHRwUHJveHkiLCJDb29raWVzIiwicHJveHkiLCJjcmVhdGVQcm94eVNlcnZlciIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjb29raWVzIiwidG9rZW4iLCJnZXQiLCJoZWFkZXJzIiwiY29va2llIiwid2ViIiwidGFyZ2V0IiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJjaGFuZ2VPcmlnaW4iLCJzZWxmSGFuZGxlUmVzcG9uc2UiLCJvbmNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/[...path].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[...path].ts"));
module.exports = __webpack_exports__;

})();