"use strict";
(() => {
var exports = {};
exports.id = 73;
exports.ids = [73];
exports.modules = {

/***/ 7242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ confEmpresaContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function confEmpresaContent(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid lg:grid-cols-3 grid-cols-1 mt-6 dark:text-white text-gray-900 gap-2 p-4",
        children: !props.data.business ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Por favor configure los datos de la empresa"
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Nombre de Empresa :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left border-b-2 border-transparent",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: props.data.business.name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Ruc :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left border-b-2 border-transparent",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: props.data.business.ruc
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Descripcion :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left border-b-2 border-transparent",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: props.data.business.description
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 8230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ confEmpresaForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__]);
js_cookie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





function confEmpresaForm(props) {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        name: props.data.business ? props.data.business.name : '',
        ruc: props.data.business ? props.data.business.ruc : '',
        description: props.data.business ? props.data.business.description : ''
    });
    const handleChange = async (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setState((prevState)=>({
                ...prevState,
                [name]: value
            })
        );
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await fetch('https://api.abako.xyz/api/user/business', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
            credentials: 'include'
        });
        const respuestaJson = await res.json();
        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)(`https://api.abako.xyz/api/user`);
        handleSearch();
    };
    const { handleSearch  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid lg:grid-cols-3 grid-cols-1 mt-6 dark:text-white text-gray-900 gap-2 p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Nombre de Empresa :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: "bg-transparent border-b-2 w-3/4 lg:text-left text-center focus:outline-none",
                        type: "text",
                        id: "name",
                        name: "name"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Ruc :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: " bg-transparent border-b-2 w-3/4 lg:text-left text-center focus:outline-none",
                        type: "number",
                        id: "ruc",
                        name: "ruc"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Descripcion :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: "bg-transparent border-b-2 w-3/4 lg:text-left text-center focus:outline-none",
                        type: "text",
                        id: "description",
                        name: "description"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:col-start-2 col-start-1 grid grid-cols-2 gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: " bg-gray-300 hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-300",
                            children: "Guardar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: " bg-gray-300 hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-300",
                            onClick: handleSearch,
                            children: "Cancelar"
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 4075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ confGeneralContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function confGeneralContent(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid lg:grid-cols-3 grid-cols-1 mt-6 dark:text-white text-gray-900 gap-2 p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Nombres :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left border-b-2 border-transparent",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: props.data.firstName
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Apellidos :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left border-b-2 border-transparent",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: props.data.lastName
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Usuario :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left border-b-2 border-transparent",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: props.data.username
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Correo :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left border-b-2 border-transparent",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: props.data.email
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 5659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ confGeneralForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__]);
js_cookie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





function confGeneralForm(props) {
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        firstName: props.data.firstName,
        lastName: props.data.lastName,
        username: props.data.username,
        email: props.data.email
    });
    const handleChange = async (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setState((prevState)=>({
                ...prevState,
                [name]: value
            })
        );
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const res = await fetch('https://api.abako.xyz/api/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
            credentials: 'include'
        });
        const respuestaJson = await res.json();
        (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)(`https://api.abako.xyz/api/user`);
        handleSearch();
    };
    const { handleSearch  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        onSubmit: handleSubmit,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid lg:grid-cols-3 grid-cols-1 mt-6 dark:text-white text-gray-900 gap-2 p-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Nombres :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: "bg-transparent border-b-2 w-3/4 lg:text-left text-center focus:outline-none",
                        type: "text",
                        id: "firstname",
                        name: "firstName"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Apellidos :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: " bg-transparent border-b-2 w-3/4 lg:text-left text-center focus:outline-none",
                        type: "text",
                        id: "lastname",
                        name: "lastName"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Usuario :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: "bg-transparent border-b-2 w-3/4 lg:text-left text-center focus:outline-none",
                        type: "text",
                        id: "user",
                        name: "username"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-semibold",
                        children: "Correo :"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:col-span-2 text-center lg:text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onChange: handleChange,
                        className: "bg-transparent border-b-2 w-3/4 lg:text-left text-center focus:outline-none",
                        type: "text",
                        id: "email",
                        name: "email"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:col-start-2 col-start-1 grid grid-cols-2 gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: " bg-gray-300 hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-300",
                            children: "Guardar"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: " bg-gray-300 hover:bg-gray-700 hover:text-gray-200 text-gray-700 p-2 rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-300",
                            onClick: handleSearch,
                            children: "Cancelar"
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 4559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ configuracionEmpresa)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configEmpresa_confEmpresaContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7242);
/* harmony import */ var _configEmpresa_confEmpresaForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_configEmpresa_confEmpresaForm__WEBPACK_IMPORTED_MODULE_3__]);
_configEmpresa_confEmpresaForm__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function configuracionEmpresa(props) {
    const { 0: edit , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        state: 'off'
    });
    const btnEditar = ()=>{
        setEdit({
            state: 'onEmpresa'
        });
        window.setTimeout(()=>{
            document.getElementById("name").value = props.data.business ? props.data.business.name : '';
            document.getElementById("ruc").value = props.data.business ? props.data.business.ruc : '';
            document.getElementById("description").value = props.data.business ? props.data.business.description : '';
        }, 1);
    };
    const handleSearch = ()=>{
        setEdit({
            state: 'off'
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row-span-2 rounded-2xl shadow-md dark:shadow-md border dark:border-prueba",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " flex flex-warp rounded-t-2xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-14 h-14 bg-white -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-10 w-10 text-blue-500 justify-self-center self-center",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
                                    clipRule: "evenodd"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full font-sans font-bold flex-1 dark:text-white text-gray-900 uppercase",
                            children: "Datos de la empresa"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-gray-700 font-bold mx-6 dark:text-gray-200",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "cursor-pointer hover:text-gray-900 dark:hover:text-gray-200",
                                onClick: btnEditar,
                                children: "Editar"
                            })
                        })
                    ]
                }),
                edit.state == 'off' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_configEmpresa_confEmpresaContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    data: props.data
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_configEmpresa_confEmpresaForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    data: props.data,
                    handleSearch: handleSearch
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 9617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ configuracionGeneral)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configGeneral_confGeneralContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4075);
/* harmony import */ var _configGeneral_confGeneralForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5659);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_configGeneral_confGeneralForm__WEBPACK_IMPORTED_MODULE_3__]);
_configGeneral_confGeneralForm__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function configuracionGeneral(props) {
    const { 0: editg , 1: setEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        state: 'off'
    });
    const btnEditar = ()=>{
        setEdit({
            state: 'onEmpresa'
        });
        window.setTimeout(()=>{
            document.getElementById("firstname").value = props.data.firstName;
            document.getElementById("lastname").value = props.data.lastName;
            document.getElementById("user").value = props.data.username;
            document.getElementById("email").value = props.data.email;
        }, 1);
    };
    const handleSearch = ()=>{
        setEdit({
            state: 'off'
        });
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row-span-2 rounded-2xl shadow-md dark:shadow-lg lg:h-60 border dark:border-prueba",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-warp rounded-t-2xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-14 h-14 bg-white -my-8 ml-5 mr-3 rounded-xl shadow-lg grid grid-cols-1 dark:bg-pruebaA3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-10 w-10 text-blue-500 justify-self-center self-center",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fillRule: "evenodd",
                                d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
                                clipRule: "evenodd"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full font-sans font-bold flex-1 text-gray-900 dark:text-white uppercase",
                        children: "Datos Generales"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-gray-700 font-bold mx-6 dark:text-gray-200",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            className: "cursor-pointer hover:text-gray-300 dark:hover:text-gray-900",
                            onClick: btnEditar,
                            children: "Editar"
                        })
                    })
                ]
            }),
            editg.state == 'off' ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_configGeneral_confGeneralContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: props.data
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_configGeneral_confGeneralForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                data: props.data,
                handleSearch: handleSearch
            })
        ]
    }));
};

});

/***/ }),

/***/ 3133:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ configuracion),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7894);
/* harmony import */ var _components_Dashboard_Configuracion_configuracionGeneral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9617);
/* harmony import */ var _components_Dashboard_Configuracion_configuracionEmpresa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4559);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(549);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Dashboard_Configuracion_configuracionEmpresa__WEBPACK_IMPORTED_MODULE_3__, _components_Dashboard_Configuracion_configuracionGeneral__WEBPACK_IMPORTED_MODULE_2__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Dashboard_Configuracion_configuracionEmpresa__WEBPACK_IMPORTED_MODULE_3__, _components_Dashboard_Configuracion_configuracionGeneral__WEBPACK_IMPORTED_MODULE_2__, _components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








function configuracion() {
    const fetcher = (url)=>{
        return fetch(url, {
            credentials: 'include'
        }).then((res)=>res.json()
        ).then((json)=>json.data
        );
    };
    const { data , error , mutate  } = swr__WEBPACK_IMPORTED_MODULE_4___default()(`https://api.abako.xyz/api/user`, fetcher);
    if (error) return 'Ocurrio un error:';
    if (!data) return 'Loading';
    if (data.rol === 'employee') next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/dashboard/productos');
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        active: "Config",
        color: "blue",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid xl:grid-cols-2 xl:gap-4 gap-10 grid-cols-1 mx-8 mt-6 xl:mb-0 mb-20",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "xl:col-span-2 justify-center items-center justify-self-center mb-8",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "justify-center flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-52 h-52 rounded-full",
                                    src: "/google.png"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: " self-end cursor-pointer",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-10 w-10",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-3xl font-bold text-black dark:text-white text-center uppercase",
                            children: [
                                data.firstName,
                                " ",
                                data.lastName
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Configuracion_configuracionGeneral__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    data: data
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dashboard_Configuracion_configuracionEmpresa__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    data: data
                })
            ]
        })
    }));
};
;
async function getServerSideProps({ req , res  }) {
    /*   Verificacion Token Usuario */ const token = req.cookies.accessToken;
    const token2 = req.cookies.refreshToken;
    if (!token && !token2) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }
    return {
        props: {
        }
    };
}

});

/***/ }),

/***/ 7505:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 549:
/***/ ((module) => {

module.exports = require("swr");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [894], () => (__webpack_exec__(3133)));
module.exports = __webpack_exports__;

})();