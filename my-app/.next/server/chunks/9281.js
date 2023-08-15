"use strict";
exports.id = 9281;
exports.ids = [9281];
exports.modules = {

/***/ 9281:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9332);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_images_hero_devices_mobile_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2318);
/* harmony import */ var _public_images_me1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4433);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5544);
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mobileHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const variants = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0
    }
};
const Mobile = ()=>{
    const [isClicked, toggleClicked] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useCycle)(false, true);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const changePage = ()=>{
        toggleClicked();
        setTimeout(()=>{
            router.push("/mobile/contents");
        }, 300);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-screen w-full bg-white overflow-x-hidden overflow-y-hidden text-black",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mobileHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                initial: "initial",
                animate: "animate",
                variants: variants,
                transition: {
                    duration: 1
                },
                className: "text-center text-[9vw] font-bold mt-16",
                children: "Frontend Developer"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                initial: "initial",
                animate: "animate",
                variants: variants,
                transition: {
                    duration: 1,
                    delay: 0.6
                },
                className: "text-[6vw] text-center text-gray-500",
                children: "개발이 재미있는 개발자"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                initial: "initial",
                animate: "animate",
                variants: variants,
                transition: {
                    duration: 1,
                    delay: 1.2
                },
                className: "mt-2 text-[8vw]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "w-fit items-baseline flex m-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            initial: "initial",
                            animate: "animate",
                            variants: variants,
                            transition: {
                                duration: 1,
                                delay: 1.4
                            },
                            className: "mx-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[#7510F7] text-[12vw] font-semibold",
                                children: "최형운"
                            })
                        }),
                        "입니다."
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                initial: "initial",
                animate: "animate",
                variants: variants,
                transition: {
                    duration: 1,
                    delay: 2.3
                },
                className: "mx-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-fit m-auto",
                    onClick: changePage,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        initial: {
                            scale: 1,
                            backgroundColor: "rgb(117, 16, 247)"
                        },
                        animate: {
                            scale: isClicked ? 100 : 1,
                            backgroundColor: isClicked ? "rgb(117, 16, 247)" : "rgb(117, 16, 247)"
                        },
                        transition: {
                            duration: 2
                        },
                        className: "rounded-full w-[163.82px] h-[163.82px] mt-[5vh] ",
                        children: !isClicked && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: _public_images_me1_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                    alt: "man",
                                    className: "w-full h-full m-auto animate__animated animate__bounce animate__delay-3s animate__slow animate__infinite rounded-full"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-4xl text-red-500 font-bold absolute bottom-10 w-full text-center",
                                    children: "Click"
                                })
                            ]
                        })
                    })
                })
            }),
            !isClicked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute w-full m-auto bottom-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: _public_images_hero_devices_mobile_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                    alt: "computer",
                    layout: "responsive"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;