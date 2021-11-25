"use strict";
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 7772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2154);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);



function GlobalFilter({ preGlobalFilteredRows , globalFilter , setGlobalFilter ,  }) {
    const count = preGlobalFilteredRows.length;
    const { 0: value1 , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(globalFilter);
    const onChange = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useAsyncDebounce)((value)=>{
        setGlobalFilter(value || undefined);
    }, 300);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex mx-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-2",
                children: "Filtrar: "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "border-b-2",
                value: value1 || "",
                onChange: (e)=>{
                    setValue(e.target.value);
                    onChange(e.target.value);
                },
                placeholder: `${count} resultados...`
            })
        ]
    }));
};


/***/ })

};
;