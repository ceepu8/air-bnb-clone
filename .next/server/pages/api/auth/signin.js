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
exports.id = "pages/api/auth/signin";
exports.ids = ["pages/api/auth/signin"];
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

/***/ "(api)/./pages/api/auth/signin.ts":
/*!**********************************!*\
  !*** ./pages/api/auth/signin.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-proxy */ \"http-proxy\");\n/* harmony import */ var http_proxy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_proxy__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst proxy = http_proxy__WEBPACK_IMPORTED_MODULE_0___default().createProxyServer();\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nfunction handler(req, res) {\n    return new Promise((resolve)=>{\n        const handleLoginResponse = (proxyRes, req, res)=>{\n            let body = \"\";\n            proxyRes.on(\"data\", (chunk)=>{\n                body += chunk;\n            });\n            proxyRes.on(\"end\", ()=>{\n                try {\n                    const { statusCode , content  } = JSON.parse(body);\n                    let message = JSON.parse(body).message;\n                    if (!message) {\n                        message = \"Login successfully!\";\n                    }\n                    const token = content.token;\n                    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res, {\n                        secure: \"development\" !== \"development\"\n                    });\n                    const tomorrow = new Date();\n                    tomorrow.setDate(tomorrow.getDate() + 1);\n                    cookies.set(\"token\", token, {\n                        httpOnly: true,\n                        sameSite: \"lax\",\n                        expires: tomorrow\n                    });\n                    res.status(200).json({\n                        statusCode,\n                        message,\n                        data: content\n                    });\n                } catch (error) {\n                    console.log(error);\n                    res.status(500).json({\n                        message: \"Something went wrong\"\n                    });\n                }\n                resolve(true);\n            });\n        };\n        proxy.once(\"proxyRes\", handleLoginResponse);\n        proxy.web(req, res, {\n            target: process.env.API_URL,\n            changeOrigin: true,\n            selfHandleResponse: true\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9zaWduaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3lEO0FBQzNCO0FBRTlCLE1BQU1FLEtBQUssR0FBR0YsbUVBQTJCLEVBQUU7QUFFcEMsTUFBTUksTUFBTSxHQUFHO0lBQ3BCQyxHQUFHLEVBQUU7UUFDSEMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7Q0FDRixDQUFDO0FBRWEsU0FBU0MsT0FBTyxDQUM3QkMsR0FBbUIsRUFDbkJDLEdBQXlCLEVBQ3pCO0lBQ0EsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQzlCLE1BQU1DLG1CQUFtQixHQUFxQixDQUFDQyxRQUFRLEVBQUVMLEdBQUcsRUFBRUMsR0FBRyxHQUFLO1lBQ3BFLElBQUlLLElBQUksR0FBRyxFQUFFO1lBQ2JELFFBQVEsQ0FBQ0UsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDQyxLQUFLLEdBQUs7Z0JBQzdCRixJQUFJLElBQUlFLEtBQUssQ0FBQzthQUNmLENBQUMsQ0FBQztZQUVISCxRQUFRLENBQUNFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBTTtnQkFDdkIsSUFBSTtvQkFDRixNQUFNLEVBQUVFLFVBQVUsR0FBRUMsT0FBTyxHQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixJQUFJLENBQUM7b0JBRWhELElBQUlPLE9BQU8sR0FBR0YsSUFBSSxDQUFDQyxLQUFLLENBQUNOLElBQUksQ0FBQyxDQUFDTyxPQUFPO29CQUV0QyxJQUFJLENBQUNBLE9BQU8sRUFBRTt3QkFDWkEsT0FBTyxHQUFHLHFCQUFxQixDQUFDO3FCQUNqQztvQkFFRCxNQUFNQyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0ksS0FBSztvQkFFM0IsTUFBTUMsT0FBTyxHQUFHLElBQUl0QixnREFBTyxDQUFDTyxHQUFHLEVBQUVDLEdBQUcsRUFBRTt3QkFDcENlLE1BQU0sRUFBRUMsYUFwQ1AsS0FvQ2dDLGFBQWE7cUJBQy9DLENBQUM7b0JBRUYsTUFBTUMsUUFBUSxHQUFHLElBQUlDLElBQUksRUFBRTtvQkFDM0JELFFBQVEsQ0FBQ0UsT0FBTyxDQUFDRixRQUFRLENBQUNHLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUV6Q04sT0FBTyxDQUFDTyxHQUFHLENBQUMsT0FBTyxFQUFFUixLQUFLLEVBQUU7d0JBQzFCUyxRQUFRLEVBQUUsSUFBSTt3QkFDZEMsUUFBUSxFQUFFLEtBQUs7d0JBQ2ZDLE9BQU8sRUFBRVAsUUFBUTtxQkFDbEIsQ0FBQyxDQUFDO29CQUVILEdBQUksQ0FDRFEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7d0JBQUVsQixVQUFVO3dCQUFFSSxPQUFPO3dCQUFFZSxJQUFJLEVBQUVsQixPQUFPO3FCQUFFLENBQUMsQ0FBQztpQkFDakQsQ0FBQyxPQUFPbUIsS0FBSyxFQUFFO29CQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7b0JBRW5CLEdBQUksQ0FDREgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7d0JBQUVkLE9BQU8sRUFBRSxzQkFBc0I7cUJBQUUsQ0FBQyxDQUFDO2lCQUM5QztnQkFDRFYsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7UUFFRFQsS0FBSyxDQUFDc0MsSUFBSSxDQUFDLFVBQVUsRUFBRTVCLG1CQUFtQixDQUFDLENBQUM7UUFFNUNWLEtBQUssQ0FBQ3VDLEdBQUcsQ0FBQ2pDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO1lBQ2xCaUMsTUFBTSxFQUFFakIsT0FBTyxDQUFDa0IsR0FBRyxDQUFDQyxPQUFPO1lBQzNCQyxZQUFZLEVBQUUsSUFBSTtZQUNsQkMsa0JBQWtCLEVBQUUsSUFBSTtTQUN6QixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9hdXRoL3NpZ25pbi50cz9jNGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgaHR0cFByb3h5LCB7IFByb3h5UmVzQ2FsbGJhY2sgfSBmcm9tIFwiaHR0cC1wcm94eVwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImNvb2tpZXNcIjtcblxuY29uc3QgcHJveHkgPSBodHRwUHJveHkuY3JlYXRlUHJveHlTZXJ2ZXIoKTtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpOiB7XG4gICAgYm9keVBhcnNlcjogZmFsc2UsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxhbnk+XG4pIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlTG9naW5SZXNwb25zZTogUHJveHlSZXNDYWxsYmFjayA9IChwcm94eVJlcywgcmVxLCByZXMpID0+IHtcbiAgICAgIGxldCBib2R5ID0gXCJcIjtcbiAgICAgIHByb3h5UmVzLm9uKFwiZGF0YVwiLCAoY2h1bmspID0+IHtcbiAgICAgICAgYm9keSArPSBjaHVuaztcbiAgICAgIH0pO1xuXG4gICAgICBwcm94eVJlcy5vbihcImVuZFwiLCAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlLCBjb250ZW50IH0gPSBKU09OLnBhcnNlKGJvZHkpO1xuXG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGJvZHkpLm1lc3NhZ2U7XG5cbiAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkxvZ2luIHN1Y2Nlc3NmdWxseSFcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRlbnQudG9rZW47XG5cbiAgICAgICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLCByZXMsIHtcbiAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXG4gICAgICAgICAgY29va2llcy5zZXQoXCJ0b2tlblwiLCB0b2tlbiwge1xuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICAgICAgICAgIGV4cGlyZXM6IHRvbW9ycm93LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgKHJlcyBhcyBOZXh0QXBpUmVzcG9uc2UpXG4gICAgICAgICAgICAuc3RhdHVzKDIwMClcbiAgICAgICAgICAgIC5qc29uKHsgc3RhdHVzQ29kZSwgbWVzc2FnZSwgZGF0YTogY29udGVudCB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgICAocmVzIGFzIE5leHRBcGlSZXNwb25zZSlcbiAgICAgICAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgICAgICAgLmpzb24oeyBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBwcm94eS5vbmNlKFwicHJveHlSZXNcIiwgaGFuZGxlTG9naW5SZXNwb25zZSk7XG5cbiAgICBwcm94eS53ZWIocmVxLCByZXMsIHtcbiAgICAgIHRhcmdldDogcHJvY2Vzcy5lbnYuQVBJX1VSTCxcbiAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgIHNlbGZIYW5kbGVSZXNwb25zZTogdHJ1ZSxcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiaHR0cFByb3h5IiwiQ29va2llcyIsInByb3h5IiwiY3JlYXRlUHJveHlTZXJ2ZXIiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiaGFuZGxlTG9naW5SZXNwb25zZSIsInByb3h5UmVzIiwiYm9keSIsIm9uIiwiY2h1bmsiLCJzdGF0dXNDb2RlIiwiY29udGVudCIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJ0b2tlbiIsImNvb2tpZXMiLCJzZWN1cmUiLCJwcm9jZXNzIiwidG9tb3Jyb3ciLCJEYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXQiLCJodHRwT25seSIsInNhbWVTaXRlIiwiZXhwaXJlcyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib25jZSIsIndlYiIsInRhcmdldCIsImVudiIsIkFQSV9VUkwiLCJjaGFuZ2VPcmlnaW4iLCJzZWxmSGFuZGxlUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/signin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/signin.ts"));
module.exports = __webpack_exports__;

})();