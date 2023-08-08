"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[category]/page",{

/***/ "(app-client)/./src/app/products/[category]/page.jsx":
/*!**********************************************!*\
  !*** ./src/app/products/[category]/page.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_listingPage_PageListCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/listingPage/PageListCards */ \"(app-client)/./src/components/listingPage/PageListCards.jsx\");\n/* harmony import */ var _lib_contentful_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/contentful/client */ \"(app-client)/./src/lib/contentful/client.js\");\n/* harmony import */ var _lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/commerceTools */ \"(app-client)/./src/lib/commerceTools/index.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductsCategoryPage = (param)=>{\n    let { params } = param;\n    _s();\n    console.log(\"params\", params);\n    const [categoryList, setHeroCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categoryDetails, setCategoryDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [productDetails, setProductDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [ourProductValue, setourProductValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [commerceData, setCommerceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cfulData, setCfulData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cfulFilterData, setCfulFilterData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getBigcomProducts = async ()=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"api/bigcomProducts\");\n        // console.log(\"bigcommerce products\", result);\n        setCommerceData(result.data.data);\n    };\n    const getCommerceProduct = async ()=>{\n        const response = await _lib_contentful_client__WEBPACK_IMPORTED_MODULE_3__.client.getEntries({\n            content_type: \"product\"\n        });\n        // console.log(\"contentful products\", response.items);\n        setCfulData(response.items);\n    };\n    const getUpdatedCategory = ()=>{\n        const newProducts = cfulData === null || cfulData === void 0 ? void 0 : cfulData.map((product)=>{\n            const filteredProduct = commerceData === null || commerceData === void 0 ? void 0 : commerceData.find((item)=>{\n                var _product_fields;\n                return (product === null || product === void 0 ? void 0 : (_product_fields = product.fields) === null || _product_fields === void 0 ? void 0 : _product_fields.bigcommerceProduct) === (item === null || item === void 0 ? void 0 : item.sku);\n            });\n            console.log(\"map product\", filteredProduct);\n            product.commerceItem = filteredProduct;\n            return product;\n        });\n        const updatedBigcomProducts = newProducts.filter((item)=>item.commerceItem);\n        setCfulFilterData(updatedBigcomProducts);\n    };\n    const getCategoryId = async ()=>{\n        try {\n            const project = await (0,_lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.getApiRoot)().withProjectKey({\n                projectKey: _lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.projectKey\n            })//.products()\n            .categories()//.customers()\n            .get().execute();\n            // .get()\n            // .execute();\n            setCategoryDetails(project.body);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const getProductId = async ()=>{\n        try {\n            const project = await (0,_lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.getApiRoot)().withProjectKey({\n                projectKey: _lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.projectKey\n            }).products()//.categories()\n            //.customers()\n            .get().execute();\n            // .get()\n            // .execute();\n            setProductDetails(project.body);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const getCategory = async ()=>{\n        var _responseProduct_items_, _responseProduct_items__fields, _responseProduct_items__fields_product;\n        // const response = await client.getEntries({ content_type: \"product\" });\n        const responseProduct = await _lib_contentful_client__WEBPACK_IMPORTED_MODULE_3__.client.getEntries({\n            content_type: \"ourProducts\"\n        });\n        //   const categoryData = response.items;\n        const categorySlug = params === null || params === void 0 ? void 0 : params.category;\n        const filteredProduct = (_responseProduct_items_ = responseProduct === null || responseProduct === void 0 ? void 0 : responseProduct.items[0]) === null || _responseProduct_items_ === void 0 ? void 0 : (_responseProduct_items__fields = _responseProduct_items_.fields) === null || _responseProduct_items__fields === void 0 ? void 0 : (_responseProduct_items__fields_product = _responseProduct_items__fields.product) === null || _responseProduct_items__fields_product === void 0 ? void 0 : _responseProduct_items__fields_product.filter((item)=>categorySlug ? item.fields.commercetoolsProduct === categorySlug : true);\n        setHeroCategoryList(filteredProduct);\n        // console.log(\"categoryData\", categoryData);\n        console.log(\"ourproducts\", responseProduct.items);\n        setourProductValue(responseProduct.items);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUpdatedCategory();\n    }, [\n        cfulData,\n        commerceData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCategory();\n        getCategoryId();\n        getProductId();\n        getBigcomProducts();\n        getCommerceProduct();\n    }, []);\n    console.log(\"ourProductValue\", ourProductValue);\n    console.log(\"cfulData\", cfulData);\n    console.log(\"commerceData\", commerceData);\n    console.log(\"cfulFilterData\", cfulFilterData);\n    // console.log(\"productDetails\", productDetails.results);\n    // console.log(\"projectDetails\", JSON.stringify(projectDetails, undefined, 2));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listingPage_PageListCards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ourProductList: ourProductValue,\n                catData: categoryList,\n                categoryLists: categoryDetails,\n                allProducts: productDetails\n            }, void 0, false, {\n                fileName: \"D:\\\\Github Account\\\\demo-ecom\\\\src\\\\app\\\\products\\\\[category]\\\\page.jsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bigcomm-products\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listingPage_PageListCards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    ourProductList: ourProductValue,\n                    catData: categoryList,\n                    categoryLists: categoryDetails,\n                    allProducts: productDetails,\n                    bigCommerceData: cfulFilterData\n                }, void 0, false, {\n                    fileName: \"D:\\\\Github Account\\\\demo-ecom\\\\src\\\\app\\\\products\\\\[category]\\\\page.jsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Github Account\\\\demo-ecom\\\\src\\\\app\\\\products\\\\[category]\\\\page.jsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Github Account\\\\demo-ecom\\\\src\\\\app\\\\products\\\\[category]\\\\page.jsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductsCategoryPage, \"cyGG5mwLDSIGigvv6q5BoMbxrak=\");\n_c = ProductsCategoryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsCategoryPage);\nvar _c;\n$RefreshReg$(_c, \"ProductsCategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9kdWN0cy9bY2F0ZWdvcnldL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDeUM7QUFDbEI7QUFDTDtBQUNpQjtBQUNuQztBQUUxQixNQUFNUSx1QkFBdUI7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3RDQyxRQUFRQyxJQUFJLFVBQVVGO0lBRXRCLE1BQU0sQ0FBQ0csY0FBY0Msb0JBQW9CLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFdkQsTUFBTSxDQUFDVSxpQkFBaUJDLG1CQUFtQixHQUFHWCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXhELE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUNjLGlCQUFpQkMsbUJBQW1CLEdBQUdmLCtDQUFRQSxDQUFDLENBQUM7SUFFeEQsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ELE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDb0IsZ0JBQWdCQyxrQkFBa0IsR0FBR3JCLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkQsTUFBTXNCLG9CQUFvQjtRQUN4QixNQUFNQyxTQUFTLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLElBQUk7UUFDL0IsK0NBQStDO1FBQy9DUCxnQkFBZ0JNLE9BQU9FLEtBQUtBO0lBQzlCO0lBQ0EsTUFBTUMscUJBQXFCO1FBQ3pCLE1BQU1DLFdBQVcsTUFBTTdCLDBEQUFNQSxDQUFDOEIsV0FBVztZQUFFQyxjQUFjO1FBQVU7UUFDbkUsc0RBQXNEO1FBQ3REVixZQUFZUSxTQUFTRztJQUN2QjtJQUVBLE1BQU1DLHFCQUFxQjtRQUN6QixNQUFNQyxjQUFjZCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVlLElBQUksQ0FBQ0M7WUFDakMsTUFBTUMsa0JBQWtC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Ozs7Ozs7Ozs7QUFLM0I7R0F0SU1oQjtLQUFBQTtBQXdJTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcHJvZHVjdHMvW2NhdGVnb3J5XS9wYWdlLmpzeD85YzUzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiOyAvLyBUaGlzIGlzIGEgY2xpZW50IGNvbXBvbmVudFxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYWdlTGlzdENhcmRzIGZyb20gXCJAL2NvbXBvbmVudHMvbGlzdGluZ1BhZ2UvUGFnZUxpc3RDYXJkc1wiO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiQC9saWIvY29udGVudGZ1bC9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRBcGlSb290LCBwcm9qZWN0S2V5IH0gZnJvbSBcIkAvbGliL2NvbW1lcmNlVG9vbHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdHNDYXRlZ29yeVBhZ2UgPSAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicGFyYW1zXCIsIHBhcmFtcyk7XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yeUxpc3QsIHNldEhlcm9DYXRlZ29yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY2F0ZWdvcnlEZXRhaWxzLCBzZXRDYXRlZ29yeURldGFpbHNdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBbcHJvZHVjdERldGFpbHMsIHNldFByb2R1Y3REZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbb3VyUHJvZHVjdFZhbHVlLCBzZXRvdXJQcm9kdWN0VmFsdWVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBbY29tbWVyY2VEYXRhLCBzZXRDb21tZXJjZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY2Z1bERhdGEsIHNldENmdWxEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2Z1bEZpbHRlckRhdGEsIHNldENmdWxGaWx0ZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0QmlnY29tUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCJhcGkvYmlnY29tUHJvZHVjdHNcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImJpZ2NvbW1lcmNlIHByb2R1Y3RzXCIsIHJlc3VsdCk7XHJcbiAgICBzZXRDb21tZXJjZURhdGEocmVzdWx0LmRhdGEuZGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBnZXRDb21tZXJjZVByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInByb2R1Y3RcIiB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29udGVudGZ1bCBwcm9kdWN0c1wiLCByZXNwb25zZS5pdGVtcyk7XHJcbiAgICBzZXRDZnVsRGF0YShyZXNwb25zZS5pdGVtcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VXBkYXRlZENhdGVnb3J5ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvZHVjdHMgPSBjZnVsRGF0YT8ubWFwKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IGNvbW1lcmNlRGF0YT8uZmluZChcclxuICAgICAgICAoaXRlbSkgPT4gcHJvZHVjdD8uZmllbGRzPy5iaWdjb21tZXJjZVByb2R1Y3QgPT09IGl0ZW0/LnNrdVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm1hcCBwcm9kdWN0XCIsIGZpbHRlcmVkUHJvZHVjdCk7XHJcbiAgICAgIHByb2R1Y3QuY29tbWVyY2VJdGVtID0gZmlsdGVyZWRQcm9kdWN0O1xyXG4gICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXBkYXRlZEJpZ2NvbVByb2R1Y3RzID0gbmV3UHJvZHVjdHMuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5jb21tZXJjZUl0ZW1cclxuICAgICk7XHJcbiAgICBzZXRDZnVsRmlsdGVyRGF0YSh1cGRhdGVkQmlnY29tUHJvZHVjdHMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENhdGVnb3J5SWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgZ2V0QXBpUm9vdCgpXHJcbiAgICAgICAgLndpdGhQcm9qZWN0S2V5KHsgcHJvamVjdEtleSB9KVxyXG4gICAgICAgIC8vLnByb2R1Y3RzKClcclxuICAgICAgICAuY2F0ZWdvcmllcygpXHJcbiAgICAgICAgLy8uY3VzdG9tZXJzKClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAuZXhlY3V0ZSgpO1xyXG4gICAgICAvLyAuZ2V0KClcclxuICAgICAgLy8gLmV4ZWN1dGUoKTtcclxuXHJcbiAgICAgIHNldENhdGVnb3J5RGV0YWlscyhwcm9qZWN0LmJvZHkpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0SWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgZ2V0QXBpUm9vdCgpXHJcbiAgICAgICAgLndpdGhQcm9qZWN0S2V5KHsgcHJvamVjdEtleSB9KVxyXG4gICAgICAgIC5wcm9kdWN0cygpXHJcbiAgICAgICAgLy8uY2F0ZWdvcmllcygpXHJcbiAgICAgICAgLy8uY3VzdG9tZXJzKClcclxuICAgICAgICAuZ2V0KClcclxuICAgICAgICAuZXhlY3V0ZSgpO1xyXG4gICAgICAvLyAuZ2V0KClcclxuICAgICAgLy8gLmV4ZWN1dGUoKTtcclxuXHJcbiAgICAgIHNldFByb2R1Y3REZXRhaWxzKHByb2plY3QuYm9keSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHsgY29udGVudF90eXBlOiBcInByb2R1Y3RcIiB9KTtcclxuICAgIGNvbnN0IHJlc3BvbnNlUHJvZHVjdCA9IGF3YWl0IGNsaWVudC5nZXRFbnRyaWVzKHtcclxuICAgICAgY29udGVudF90eXBlOiBcIm91clByb2R1Y3RzXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAgIGNvbnN0IGNhdGVnb3J5RGF0YSA9IHJlc3BvbnNlLml0ZW1zO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlTbHVnID0gcGFyYW1zPy5jYXRlZ29yeTtcclxuICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdCA9IHJlc3BvbnNlUHJvZHVjdD8uaXRlbXNbMF0/LmZpZWxkcz8ucHJvZHVjdD8uZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT5cclxuICAgICAgICBjYXRlZ29yeVNsdWcgPyBpdGVtLmZpZWxkcy5jb21tZXJjZXRvb2xzUHJvZHVjdCA9PT0gY2F0ZWdvcnlTbHVnIDogdHJ1ZVxyXG4gICAgKTtcclxuICAgIHNldEhlcm9DYXRlZ29yeUxpc3QoZmlsdGVyZWRQcm9kdWN0KTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNhdGVnb3J5RGF0YVwiLCBjYXRlZ29yeURhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJvdXJwcm9kdWN0c1wiLCByZXNwb25zZVByb2R1Y3QuaXRlbXMpO1xyXG4gICAgc2V0b3VyUHJvZHVjdFZhbHVlKHJlc3BvbnNlUHJvZHVjdC5pdGVtcyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFVwZGF0ZWRDYXRlZ29yeSgpO1xyXG4gIH0sIFtjZnVsRGF0YSwgY29tbWVyY2VEYXRhXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRDYXRlZ29yeSgpO1xyXG4gICAgZ2V0Q2F0ZWdvcnlJZCgpO1xyXG4gICAgZ2V0UHJvZHVjdElkKCk7XHJcblxyXG4gICAgZ2V0QmlnY29tUHJvZHVjdHMoKTtcclxuICAgIGdldENvbW1lcmNlUHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJvdXJQcm9kdWN0VmFsdWVcIiwgb3VyUHJvZHVjdFZhbHVlKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJjZnVsRGF0YVwiLCBjZnVsRGF0YSk7XHJcbiAgY29uc29sZS5sb2coXCJjb21tZXJjZURhdGFcIiwgY29tbWVyY2VEYXRhKTtcclxuICBjb25zb2xlLmxvZyhcImNmdWxGaWx0ZXJEYXRhXCIsIGNmdWxGaWx0ZXJEYXRhKTtcclxuICAvLyBjb25zb2xlLmxvZyhcInByb2R1Y3REZXRhaWxzXCIsIHByb2R1Y3REZXRhaWxzLnJlc3VsdHMpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJvamVjdERldGFpbHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdERldGFpbHMsIHVuZGVmaW5lZCwgMikpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UGFnZUxpc3RDYXJkc1xyXG4gICAgICAgIG91clByb2R1Y3RMaXN0PXtvdXJQcm9kdWN0VmFsdWV9XHJcbiAgICAgICAgY2F0RGF0YT17Y2F0ZWdvcnlMaXN0fVxyXG4gICAgICAgIGNhdGVnb3J5TGlzdHM9e2NhdGVnb3J5RGV0YWlsc31cclxuICAgICAgICBhbGxQcm9kdWN0cz17cHJvZHVjdERldGFpbHN9XHJcbiAgICAgID48L1BhZ2VMaXN0Q2FyZHM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnY29tbS1wcm9kdWN0c1wiPlxyXG4gICAgICAgIDxQYWdlTGlzdENhcmRzXHJcbiAgICAgICAgICBvdXJQcm9kdWN0TGlzdD17b3VyUHJvZHVjdFZhbHVlfVxyXG4gICAgICAgICAgY2F0RGF0YT17Y2F0ZWdvcnlMaXN0fVxyXG4gICAgICAgICAgY2F0ZWdvcnlMaXN0cz17Y2F0ZWdvcnlEZXRhaWxzfVxyXG4gICAgICAgICAgYWxsUHJvZHVjdHM9e3Byb2R1Y3REZXRhaWxzfVxyXG4gICAgICAgICAgYmlnQ29tbWVyY2VEYXRhPXtjZnVsRmlsdGVyRGF0YX1cclxuICAgICAgICA+PC9QYWdlTGlzdENhcmRzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0c0NhdGVnb3J5UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnZUxpc3RDYXJkcyIsImNsaWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QXBpUm9vdCIsInByb2plY3RLZXkiLCJheGlvcyIsIlByb2R1Y3RzQ2F0ZWdvcnlQYWdlIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3J5TGlzdCIsInNldEhlcm9DYXRlZ29yeUxpc3QiLCJjYXRlZ29yeURldGFpbHMiLCJzZXRDYXRlZ29yeURldGFpbHMiLCJwcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3REZXRhaWxzIiwib3VyUHJvZHVjdFZhbHVlIiwic2V0b3VyUHJvZHVjdFZhbHVlIiwiY29tbWVyY2VEYXRhIiwic2V0Q29tbWVyY2VEYXRhIiwiY2Z1bERhdGEiLCJzZXRDZnVsRGF0YSIsImNmdWxGaWx0ZXJEYXRhIiwic2V0Q2Z1bEZpbHRlckRhdGEiLCJnZXRCaWdjb21Qcm9kdWN0cyIsInJlc3VsdCIsImdldCIsImRhdGEiLCJnZXRDb21tZXJjZVByb2R1Y3QiLCJyZXNwb25zZSIsImdldEVudHJpZXMiLCJjb250ZW50X3R5cGUiLCJpdGVtcyIsImdldFVwZGF0ZWRDYXRlZ29yeSIsIm5ld1Byb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImZpbHRlcmVkUHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiZmllbGRzIiwiYmlnY29tbWVyY2VQcm9kdWN0Iiwic2t1IiwiY29tbWVyY2VJdGVtIiwidXBkYXRlZEJpZ2NvbVByb2R1Y3RzIiwiZmlsdGVyIiwiZ2V0Q2F0ZWdvcnlJZCIsInByb2plY3QiLCJ3aXRoUHJvamVjdEtleSIsImNhdGVnb3JpZXMiLCJleGVjdXRlIiwiYm9keSIsImUiLCJnZXRQcm9kdWN0SWQiLCJwcm9kdWN0cyIsImdldENhdGVnb3J5IiwicmVzcG9uc2VQcm9kdWN0IiwiY2F0ZWdvcnlTbHVnIiwiY2F0ZWdvcnkiLCJjb21tZXJjZXRvb2xzUHJvZHVjdCIsImRpdiIsIm91clByb2R1Y3RMaXN0IiwiY2F0RGF0YSIsImNhdGVnb3J5TGlzdHMiLCJhbGxQcm9kdWN0cyIsImNsYXNzTmFtZSIsImJpZ0NvbW1lcmNlRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/products/[category]/page.jsx\n"));

/***/ })

});