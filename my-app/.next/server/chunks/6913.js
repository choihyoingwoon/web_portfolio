"use strict";
exports.id = 6913;
exports.ids = [6913];
exports.modules = {

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useInView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3945);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Web_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3737);
/* harmony import */ var _Web_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Web_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_js_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3731);
/* harmony import */ var _public_images_vue_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(225);








const SingSingTime = ()=>{
    const [ref, isInView] = (0,_useInView__WEBPACK_IMPORTED_MODULE_2__["default"])(0.8);
    const iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (iframeRef.current) {
            if (isInView) {
                // If the iframe is in view, play the video
                iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            } else {
                // If the iframe is out of view, pause the video
                iframeRef.current.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            }
        }
    }, [
        isInView
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " h-full overflow-scroll bg-white overflow-x-hidden over",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                src: "https://www.youtube.com/embed/FptdSMkUkKE?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=3",
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("w-full m-auto mb-4", (_Web_module_scss__WEBPACK_IMPORTED_MODULE_7___default().fadeUp), isInView ? (_Web_module_scss__WEBPACK_IMPORTED_MODULE_7___default().fadeUpVisible) : (_Web_module_scss__WEBPACK_IMPORTED_MODULE_7___default().fadeUp)),
                width: 150,
                height: 200,
                ref: (el)=>{
                    iframeRef.current = el;
                    ref(el);
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white w-[90%] m-auto pb-4 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[5vw] font-semibold",
                        children: "Project3. SingSingTime"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[3vw]",
                        children: "비대면 노래 경연 서비스"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-[3vw] flex items-center my-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mr-6 font-semibold",
                                children: "기술스택"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: _public_images_js_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                        alt: "js",
                                        className: "w-[5vw] h-[5vw] mr-3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: _public_images_vue_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                        alt: "vue",
                                        className: "w-[5vw] h-[5vw] mr-3"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-[3vw] flex items-center mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mr-6 font-semibold",
                                children: "개발기간"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "2023.01.09~2023.02.17"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-[3vw] flex items-center mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mr-6 font-semibold",
                                children: "개발인원"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "6명 (FE 3, BE 3)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-[3vw] items-center mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mr-6 font-semibold",
                                children: "담당역할 / FrontEnd"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "1. 서비스의 전체적인 페이지 구조 구성, 기초 구현"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "2. 노래 플레이 룸 구현"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: " mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-[1.5vw] font-semibold",
                                children: "느끼고 배운 점"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-[1.2vw] break-keep ",
                                children: [
                                    "1. session 통신을 이용해 해당 페이지를 보고 있는 사용자에게 동일한 작동을 요청 보내는 것을 알게 되었습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "2. openvidu를 공부하는 기간이 너무 길었기 때문에 싱크 문제같은 디테일한 점을 해결하지 못하였습니다. 또한 FE끼리의 룰을 정하지 않아 코드가 중구난방인점이 아쉬웠습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "3. 계속 구현도를 체크하면서 일정을 조율하는 것의 중요성을 알게 되었습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "4. 전체적인 UX/UI의 구상을 맡으면서 일관성있는 디자인의 중요성을 알게 되었으며 컴포넌트의 재사용성을 생각하면서 목업를 만들어야한다는 점을 알게 되었습니다."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingSingTime);


/***/ })

};
;