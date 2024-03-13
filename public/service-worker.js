/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/service-worker.ts":
/*!*******************************!*\
  !*** ./app/service-worker.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n// import { defaultCache } from '@serwist/next/browser'\n// It enables powerful features of auto caching vast amount of data\n// to enhance performance on client side.\n// installSerwist({\n//     precacheEntries: undefined,\n//     skipWaiting: true,\n//     clientsClaim: true,\n//     navigationPreload: true,\n//     runtimeCaching: defaultCache,\n// })\nconst cacheName = \"about-intrinsic-nextjs\";\nconst offlinePage = \"offline.html\";\ncaches.open(cacheName).then((cache)=>{\n    cache.add(offlinePage);\n});\n// RespondWith must be called synchronously, but it accepts Promise resolving to Response object.\nself.addEventListener(\"fetch\", (e)=>{\n    e.respondWith(fetch(e.request).catch(async ()=>await caches.match(offlinePage)));\n});\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc2VydmljZS13b3JrZXIudHMiLCJtYXBwaW5ncyI6IjtBQUFBLHVEQUF1RDtBQVd2RCxtRUFBbUU7QUFDbkUseUNBQXlDO0FBQ3pDLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0MseUJBQXlCO0FBQ3pCLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFDL0Isb0NBQW9DO0FBQ3BDLEtBQUs7QUFFTCxNQUFNQSxZQUFZO0FBQ2xCLE1BQU1DLGNBQWM7QUFFcEJDLE9BQU9DLElBQUksQ0FBQ0gsV0FBV0ksSUFBSSxDQUFDLENBQUNDO0lBQ3pCQSxNQUFNQyxHQUFHLENBQUNMO0FBQ2Q7QUFFQSxpR0FBaUc7QUFDakdNLEtBQUtDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ0M7SUFDNUJBLEVBQUVDLFdBQVcsQ0FDVEMsTUFBTUYsRUFBRUcsT0FBTyxFQUFFQyxLQUFLLENBQ2xCLFVBQWEsTUFBTVgsT0FBT1ksS0FBSyxDQUFDYjtBQUc1QztBQWxDd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3NlcnZpY2Utd29ya2VyLnRzPzQ2NDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgZGVmYXVsdENhY2hlIH0gZnJvbSAnQHNlcndpc3QvbmV4dC9icm93c2VyJ1xyXG5pbXBvcnQgdHlwZSB7IFByZWNhY2hlRW50cnkgfSBmcm9tICdAc2Vyd2lzdC9wcmVjYWNoaW5nJ1xyXG4vLyBpbXBvcnQgeyBpbnN0YWxsU2Vyd2lzdCB9IGZyb20gJ0BzZXJ3aXN0L3N3J1xyXG5cclxuZGVjbGFyZSBjb25zdCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgJiB7XHJcbiAgICAvLyBDaGFuZ2UgdGhpcyBhdHRyaWJ1dGUncyBuYW1lIHRvIHlvdXIgYGluamVjdGlvblBvaW50YC5cclxuICAgIC8vIGBpbmplY3Rpb25Qb2ludGAgaXMgYW4gSW5qZWN0TWFuaWZlc3Qgb3B0aW9uLlxyXG4gICAgLy8gU2VlIGh0dHBzOi8vc2Vyd2lzdC5wYWdlcy5kZXYvZG9jcy9idWlsZC9pbmplY3QtbWFuaWZlc3QvY29uZmlndXJpbmdcclxuICAgIF9fU1dfTUFOSUZFU1Q6IChQcmVjYWNoZUVudHJ5IHwgc3RyaW5nKVtdIHwgdW5kZWZpbmVkXHJcbn1cclxuXHJcbi8vIEl0IGVuYWJsZXMgcG93ZXJmdWwgZmVhdHVyZXMgb2YgYXV0byBjYWNoaW5nIHZhc3QgYW1vdW50IG9mIGRhdGFcclxuLy8gdG8gZW5oYW5jZSBwZXJmb3JtYW5jZSBvbiBjbGllbnQgc2lkZS5cclxuLy8gaW5zdGFsbFNlcndpc3Qoe1xyXG4vLyAgICAgcHJlY2FjaGVFbnRyaWVzOiBzZWxmLl9fU1dfTUFOSUZFU1QsXHJcbi8vICAgICBza2lwV2FpdGluZzogdHJ1ZSxcclxuLy8gICAgIGNsaWVudHNDbGFpbTogdHJ1ZSxcclxuLy8gICAgIG5hdmlnYXRpb25QcmVsb2FkOiB0cnVlLFxyXG4vLyAgICAgcnVudGltZUNhY2hpbmc6IGRlZmF1bHRDYWNoZSxcclxuLy8gfSlcclxuXHJcbmNvbnN0IGNhY2hlTmFtZSA9ICdhYm91dC1pbnRyaW5zaWMtbmV4dGpzJ1xyXG5jb25zdCBvZmZsaW5lUGFnZSA9ICdvZmZsaW5lLmh0bWwnXHJcblxyXG5jYWNoZXMub3BlbihjYWNoZU5hbWUpLnRoZW4oKGNhY2hlKSA9PiB7XHJcbiAgICBjYWNoZS5hZGQob2ZmbGluZVBhZ2UpXHJcbn0pXHJcblxyXG4vLyBSZXNwb25kV2l0aCBtdXN0IGJlIGNhbGxlZCBzeW5jaHJvbm91c2x5LCBidXQgaXQgYWNjZXB0cyBQcm9taXNlIHJlc29sdmluZyB0byBSZXNwb25zZSBvYmplY3QuXHJcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoZTogRmV0Y2hFdmVudCkgPT4ge1xyXG4gICAgZS5yZXNwb25kV2l0aChcclxuICAgICAgICBmZXRjaChlLnJlcXVlc3QpLmNhdGNoKFxyXG4gICAgICAgICAgICBhc3luYyAoKSA9PiAoYXdhaXQgY2FjaGVzLm1hdGNoKG9mZmxpbmVQYWdlKSkgYXMgUmVzcG9uc2VcclxuICAgICAgICApXHJcbiAgICApXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJjYWNoZU5hbWUiLCJvZmZsaW5lUGFnZSIsImNhY2hlcyIsIm9wZW4iLCJ0aGVuIiwiY2FjaGUiLCJhZGQiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJyZXNwb25kV2l0aCIsImZldGNoIiwicmVxdWVzdCIsImNhdGNoIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/service-worker.ts\n"));

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/service-worker.ts");
/******/ 	
/******/ })()
;