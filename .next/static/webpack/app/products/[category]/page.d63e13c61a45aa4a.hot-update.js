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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_listingPage_PageListCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/listingPage/PageListCards */ \"(app-client)/./src/components/listingPage/PageListCards.jsx\");\n/* harmony import */ var _lib_contentful_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/contentful/client */ \"(app-client)/./src/lib/contentful/client.js\");\n/* harmony import */ var _lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/commerceTools */ \"(app-client)/./src/lib/commerceTools/index.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProductsCategoryPage = (param)=>{\n    let { params } = param;\n    _s();\n    console.log(\"params\", params);\n    const [categoryList, setHeroCategoryList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [categoryDetails, setCategoryDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [productDetails, setProductDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [ourProductValue, setourProductValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [commerceData, setCommerceData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cfulData, setCfulData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [cfulFilterData, setCfulFilterData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getBigcomProducts = async ()=>{\n        const result = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"api/bigcomProducts\");\n        // console.log(\"bigcommerce products\", result);\n        setCommerceData(result.data.data);\n    };\n    const getCommerceProduct = async ()=>{\n        const response = await _lib_contentful_client__WEBPACK_IMPORTED_MODULE_3__.client.getEntries({\n            content_type: \"product\"\n        });\n        // console.log(\"contentful products\", response.items);\n        setCfulData(response.items);\n    };\n    const getUpdatedCategory = ()=>{\n        const newProducts = cfulData === null || cfulData === void 0 ? void 0 : cfulData.map((product)=>{\n            const filteredProduct = commerceData === null || commerceData === void 0 ? void 0 : commerceData.find((item)=>{\n                var _product_fields;\n                return (product === null || product === void 0 ? void 0 : (_product_fields = product.fields) === null || _product_fields === void 0 ? void 0 : _product_fields.bigcommerceProduct) === (item === null || item === void 0 ? void 0 : item.sku);\n            });\n            console.log(\"map product\", filteredProduct);\n            product.commerceItem = filteredProduct;\n            return product;\n        });\n        const updatedBigcomProducts = newProducts.filter((item)=>item.commerceItem);\n        setCfulFilterData(updatedBigcomProducts);\n    };\n    const getCategoryId = async ()=>{\n        try {\n            const project = await (0,_lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.getApiRoot)().withProjectKey({\n                projectKey: _lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.projectKey\n            })//.products()\n            .categories()//.customers()\n            .get().execute();\n            // .get()\n            // .execute();\n            setCategoryDetails(project.body);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const getProductId = async ()=>{\n        try {\n            const project = await (0,_lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.getApiRoot)().withProjectKey({\n                projectKey: _lib_commerceTools__WEBPACK_IMPORTED_MODULE_4__.projectKey\n            }).products()//.categories()\n            //.customers()\n            .get().execute();\n            // .get()\n            // .execute();\n            setProductDetails(project.body);\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    const getCategory = async ()=>{\n        var _responseProduct_items_, _responseProduct_items__fields, _responseProduct_items__fields_product;\n        // const response = await client.getEntries({ content_type: \"product\" });\n        const responseProduct = await _lib_contentful_client__WEBPACK_IMPORTED_MODULE_3__.client.getEntries({\n            content_type: \"ourProducts\"\n        });\n        //   const categoryData = response.items;\n        const categorySlug = params === null || params === void 0 ? void 0 : params.category;\n        const filteredProduct = (_responseProduct_items_ = responseProduct === null || responseProduct === void 0 ? void 0 : responseProduct.items[0]) === null || _responseProduct_items_ === void 0 ? void 0 : (_responseProduct_items__fields = _responseProduct_items_.fields) === null || _responseProduct_items__fields === void 0 ? void 0 : (_responseProduct_items__fields_product = _responseProduct_items__fields.product) === null || _responseProduct_items__fields_product === void 0 ? void 0 : _responseProduct_items__fields_product.filter((item)=>categorySlug ? item.fields.commercetoolsProduct === categorySlug : true);\n        setHeroCategoryList(filteredProduct);\n        // console.log(\"categoryData\", categoryData);\n        console.log(\"ourproducts\", responseProduct.items);\n        setourProductValue(responseProduct.items);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUpdatedCategory();\n    }, [\n        cfulData,\n        commerceData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCategory();\n        getCategoryId();\n        getProductId();\n        getBigcomProducts();\n        getCommerceProduct();\n    }, []);\n    console.log(\"ourProductValue\", ourProductValue);\n    console.log(\"cfulData\", cfulData);\n    console.log(\"commerceData\", commerceData);\n    console.log(\"cfulFilterData\", cfulFilterData);\n    // console.log(\"productDetails\", productDetails.results);\n    // console.log(\"projectDetails\", JSON.stringify(projectDetails, undefined, 2));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listingPage_PageListCards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ourProductList: ourProductValue,\n            catData: categoryList,\n            categoryLists: categoryDetails,\n            allProducts: productDetails,\n            bigCommerceData: cfulFilterData\n        }, void 0, false, {\n            fileName: \"D:\\\\Github Account\\\\demo-ecom\\\\src\\\\app\\\\products\\\\[category]\\\\page.jsx\",\n            lineNumber: 126,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Github Account\\\\demo-ecom\\\\src\\\\app\\\\products\\\\[category]\\\\page.jsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductsCategoryPage, \"cyGG5mwLDSIGigvv6q5BoMbxrak=\");\n_c = ProductsCategoryPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsCategoryPage);\nvar _c;\n$RefreshReg$(_c, \"ProductsCategoryPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9kdWN0cy9bY2F0ZWdvcnldL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFDeUM7QUFDbEI7QUFDTDtBQUNpQjtBQUNuQztBQUUxQixNQUFNUSx1QkFBdUI7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3RDQyxRQUFRQyxJQUFJLFVBQVVGO0lBRXRCLE1BQU0sQ0FBQ0csY0FBY0Msb0JBQW9CLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFdkQsTUFBTSxDQUFDVSxpQkFBaUJDLG1CQUFtQixHQUFHWCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXhELE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUNjLGlCQUFpQkMsbUJBQW1CLEdBQUdmLCtDQUFRQSxDQUFDLENBQUM7SUFFeEQsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUdqQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5ELE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDb0IsZ0JBQWdCQyxrQkFBa0IsR0FBR3JCLCtDQUFRQSxDQUFDLEVBQUU7SUFFdkQsTUFBTXNCLG9CQUFvQjtRQUN4QixNQUFNQyxTQUFTLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLElBQUk7UUFDL0IsK0NBQStDO1FBQy9DUCxnQkFBZ0JNLE9BQU9FLEtBQUtBO0lBQzlCO0lBQ0EsTUFBTUMscUJBQXFCO1FBQ3pCLE1BQU1DLFdBQVcsTUFBTTdCLDBEQUFNQSxDQUFDOEIsV0FBVztZQUFFQyxjQUFjO1FBQVU7UUFDbkUsc0RBQXNEO1FBQ3REVixZQUFZUSxTQUFTRztJQUN2QjtJQUVBLE1BQU1DLHFCQUFxQjtRQUN6QixNQUFNQyxjQUFjZCxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVlLElBQUksQ0FBQ0M7WUFDakMsTUFBTUMsa0JBQWtC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XSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIFRoaXMgaXMgYSBjbGllbnQgY29tcG9uZW50XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhZ2VMaXN0Q2FyZHMgZnJvbSBcIkAvY29tcG9uZW50cy9saXN0aW5nUGFnZS9QYWdlTGlzdENhcmRzXCI7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCJAL2xpYi9jb250ZW50ZnVsL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldEFwaVJvb3QsIHByb2plY3RLZXkgfSBmcm9tIFwiQC9saWIvY29tbWVyY2VUb29sc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0c0NhdGVnb3J5UGFnZSA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJwYXJhbXNcIiwgcGFyYW1zKTtcclxuXHJcbiAgY29uc3QgW2NhdGVnb3J5TGlzdCwgc2V0SGVyb0NhdGVnb3J5TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yeURldGFpbHMsIHNldENhdGVnb3J5RGV0YWlsc10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IFtwcm9kdWN0RGV0YWlscywgc2V0UHJvZHVjdERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtvdXJQcm9kdWN0VmFsdWUsIHNldG91clByb2R1Y3RWYWx1ZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IFtjb21tZXJjZURhdGEsIHNldENvbW1lcmNlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtjZnVsRGF0YSwgc2V0Q2Z1bERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjZnVsRmlsdGVyRGF0YSwgc2V0Q2Z1bEZpbHRlckRhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBnZXRCaWdjb21Qcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcImFwaS9iaWdjb21Qcm9kdWN0c1wiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiYmlnY29tbWVyY2UgcHJvZHVjdHNcIiwgcmVzdWx0KTtcclxuICAgIHNldENvbW1lcmNlRGF0YShyZXN1bHQuZGF0YS5kYXRhKTtcclxuICB9O1xyXG4gIGNvbnN0IGdldENvbW1lcmNlUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwicHJvZHVjdFwiIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJjb250ZW50ZnVsIHByb2R1Y3RzXCIsIHJlc3BvbnNlLml0ZW1zKTtcclxuICAgIHNldENmdWxEYXRhKHJlc3BvbnNlLml0ZW1zKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRVcGRhdGVkQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9kdWN0cyA9IGNmdWxEYXRhPy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0ID0gY29tbWVyY2VEYXRhPy5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBwcm9kdWN0Py5maWVsZHM/LmJpZ2NvbW1lcmNlUHJvZHVjdCA9PT0gaXRlbT8uc2t1XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwibWFwIHByb2R1Y3RcIiwgZmlsdGVyZWRQcm9kdWN0KTtcclxuICAgICAgcHJvZHVjdC5jb21tZXJjZUl0ZW0gPSBmaWx0ZXJlZFByb2R1Y3Q7XHJcbiAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCB1cGRhdGVkQmlnY29tUHJvZHVjdHMgPSBuZXdQcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmNvbW1lcmNlSXRlbVxyXG4gICAgKTtcclxuICAgIHNldENmdWxGaWx0ZXJEYXRhKHVwZGF0ZWRCaWdjb21Qcm9kdWN0cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2F0ZWdvcnlJZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCBnZXRBcGlSb290KClcclxuICAgICAgICAud2l0aFByb2plY3RLZXkoeyBwcm9qZWN0S2V5IH0pXHJcbiAgICAgICAgLy8ucHJvZHVjdHMoKVxyXG4gICAgICAgIC5jYXRlZ29yaWVzKClcclxuICAgICAgICAvLy5jdXN0b21lcnMoKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICAgIC8vIC5nZXQoKVxyXG4gICAgICAvLyAuZXhlY3V0ZSgpO1xyXG5cclxuICAgICAgc2V0Q2F0ZWdvcnlEZXRhaWxzKHByb2plY3QuYm9keSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3RJZCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCBnZXRBcGlSb290KClcclxuICAgICAgICAud2l0aFByb2plY3RLZXkoeyBwcm9qZWN0S2V5IH0pXHJcbiAgICAgICAgLnByb2R1Y3RzKClcclxuICAgICAgICAvLy5jYXRlZ29yaWVzKClcclxuICAgICAgICAvLy5jdXN0b21lcnMoKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC5leGVjdXRlKCk7XHJcbiAgICAgIC8vIC5nZXQoKVxyXG4gICAgICAvLyAuZXhlY3V0ZSgpO1xyXG5cclxuICAgICAgc2V0UHJvZHVjdERldGFpbHMocHJvamVjdC5ib2R5KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBnZXRDYXRlZ29yeSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoeyBjb250ZW50X3R5cGU6IFwicHJvZHVjdFwiIH0pO1xyXG4gICAgY29uc3QgcmVzcG9uc2VQcm9kdWN0ID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoe1xyXG4gICAgICBjb250ZW50X3R5cGU6IFwib3VyUHJvZHVjdHNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICAgY29uc3QgY2F0ZWdvcnlEYXRhID0gcmVzcG9uc2UuaXRlbXM7XHJcbiAgICBjb25zdCBjYXRlZ29yeVNsdWcgPSBwYXJhbXM/LmNhdGVnb3J5O1xyXG4gICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0ID0gcmVzcG9uc2VQcm9kdWN0Py5pdGVtc1swXT8uZmllbGRzPy5wcm9kdWN0Py5maWx0ZXIoXHJcbiAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgIGNhdGVnb3J5U2x1ZyA/IGl0ZW0uZmllbGRzLmNvbW1lcmNldG9vbHNQcm9kdWN0ID09PSBjYXRlZ29yeVNsdWcgOiB0cnVlXHJcbiAgICApO1xyXG4gICAgc2V0SGVyb0NhdGVnb3J5TGlzdChmaWx0ZXJlZFByb2R1Y3QpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2F0ZWdvcnlEYXRhXCIsIGNhdGVnb3J5RGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm91cnByb2R1Y3RzXCIsIHJlc3BvbnNlUHJvZHVjdC5pdGVtcyk7XHJcbiAgICBzZXRvdXJQcm9kdWN0VmFsdWUocmVzcG9uc2VQcm9kdWN0Lml0ZW1zKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0VXBkYXRlZENhdGVnb3J5KCk7XHJcbiAgfSwgW2NmdWxEYXRhLCBjb21tZXJjZURhdGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENhdGVnb3J5KCk7XHJcbiAgICBnZXRDYXRlZ29yeUlkKCk7XHJcbiAgICBnZXRQcm9kdWN0SWQoKTtcclxuXHJcbiAgICBnZXRCaWdjb21Qcm9kdWN0cygpO1xyXG4gICAgZ2V0Q29tbWVyY2VQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm91clByb2R1Y3RWYWx1ZVwiLCBvdXJQcm9kdWN0VmFsdWUpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcImNmdWxEYXRhXCIsIGNmdWxEYXRhKTtcclxuICBjb25zb2xlLmxvZyhcImNvbW1lcmNlRGF0YVwiLCBjb21tZXJjZURhdGEpO1xyXG4gIGNvbnNvbGUubG9nKFwiY2Z1bEZpbHRlckRhdGFcIiwgY2Z1bEZpbHRlckRhdGEpO1xyXG4gIC8vIGNvbnNvbGUubG9nKFwicHJvZHVjdERldGFpbHNcIiwgcHJvZHVjdERldGFpbHMucmVzdWx0cyk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJwcm9qZWN0RGV0YWlsc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGV0YWlscywgdW5kZWZpbmVkLCAyKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQYWdlTGlzdENhcmRzXHJcbiAgICAgICAgb3VyUHJvZHVjdExpc3Q9e291clByb2R1Y3RWYWx1ZX1cclxuICAgICAgICBjYXREYXRhPXtjYXRlZ29yeUxpc3R9XHJcbiAgICAgICAgY2F0ZWdvcnlMaXN0cz17Y2F0ZWdvcnlEZXRhaWxzfVxyXG4gICAgICAgIGFsbFByb2R1Y3RzPXtwcm9kdWN0RGV0YWlsc31cclxuICAgICAgICBiaWdDb21tZXJjZURhdGE9e2NmdWxGaWx0ZXJEYXRhfVxyXG4gICAgICA+PC9QYWdlTGlzdENhcmRzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzQ2F0ZWdvcnlQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQYWdlTGlzdENhcmRzIiwiY2xpZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRBcGlSb290IiwicHJvamVjdEtleSIsImF4aW9zIiwiUHJvZHVjdHNDYXRlZ29yeVBhZ2UiLCJwYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlMaXN0Iiwic2V0SGVyb0NhdGVnb3J5TGlzdCIsImNhdGVnb3J5RGV0YWlscyIsInNldENhdGVnb3J5RGV0YWlscyIsInByb2R1Y3REZXRhaWxzIiwic2V0UHJvZHVjdERldGFpbHMiLCJvdXJQcm9kdWN0VmFsdWUiLCJzZXRvdXJQcm9kdWN0VmFsdWUiLCJjb21tZXJjZURhdGEiLCJzZXRDb21tZXJjZURhdGEiLCJjZnVsRGF0YSIsInNldENmdWxEYXRhIiwiY2Z1bEZpbHRlckRhdGEiLCJzZXRDZnVsRmlsdGVyRGF0YSIsImdldEJpZ2NvbVByb2R1Y3RzIiwicmVzdWx0IiwiZ2V0IiwiZGF0YSIsImdldENvbW1lcmNlUHJvZHVjdCIsInJlc3BvbnNlIiwiZ2V0RW50cmllcyIsImNvbnRlbnRfdHlwZSIsIml0ZW1zIiwiZ2V0VXBkYXRlZENhdGVnb3J5IiwibmV3UHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiZmlsdGVyZWRQcm9kdWN0IiwiZmluZCIsIml0ZW0iLCJmaWVsZHMiLCJiaWdjb21tZXJjZVByb2R1Y3QiLCJza3UiLCJjb21tZXJjZUl0ZW0iLCJ1cGRhdGVkQmlnY29tUHJvZHVjdHMiLCJmaWx0ZXIiLCJnZXRDYXRlZ29yeUlkIiwicHJvamVjdCIsIndpdGhQcm9qZWN0S2V5IiwiY2F0ZWdvcmllcyIsImV4ZWN1dGUiLCJib2R5IiwiZSIsImdldFByb2R1Y3RJZCIsInByb2R1Y3RzIiwiZ2V0Q2F0ZWdvcnkiLCJyZXNwb25zZVByb2R1Y3QiLCJjYXRlZ29yeVNsdWciLCJjYXRlZ29yeSIsImNvbW1lcmNldG9vbHNQcm9kdWN0IiwiZGl2Iiwib3VyUHJvZHVjdExpc3QiLCJjYXREYXRhIiwiY2F0ZWdvcnlMaXN0cyIsImFsbFByb2R1Y3RzIiwiYmlnQ29tbWVyY2VEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/products/[category]/page.jsx\n"));

/***/ })

});