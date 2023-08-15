"use strict";
exports.id = 7881;
exports.ids = [7881];
exports.modules = {

/***/ 8172:
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
/* harmony import */ var _Web_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3737);
/* harmony import */ var _Web_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Web_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_js_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3731);
/* harmony import */ var _public_images_react_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1234);
/* harmony import */ var _public_images_next_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5457);
/* harmony import */ var _public_images_dd3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6354);
/* harmony import */ var _public_images_dd4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3286);
/* harmony import */ var _public_images_dd5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1357);












const DevDay = ()=>{
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
                src: "https://www.youtube.com/embed/xvINlpCsLYA?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7",
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("w-full m-auto mb-4", (_Web_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fadeUp), isInView ? (_Web_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fadeUpVisible) : (_Web_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fadeUp)),
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
                        children: "Project2. DevDay"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[3vw]",
                        children: "개발자들의 좋은 습관 형성하기 위한 챌린지 서비스"
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
                                        src: _public_images_react_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                                        alt: "react",
                                        className: "w-[5vw] h-[5vw] mr-3"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: _public_images_next_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                        alt: "next",
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
                                children: "2023.02.20~2023.04.07"
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
                                children: "1. storybook을 이용하여 아토믹 디자인 기반 atom 컴포넌트 제작"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "2. 챌린지 관련 페이지 제작"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex w-full mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: _public_images_dd5_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                alt: "dd5",
                                className: "w-1/3 p-[2vw]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: _public_images_dd4_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                alt: "dd4",
                                className: "w-1/3 p-[2vw]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: _public_images_dd3_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                alt: "dd3",
                                className: "w-1/3 p-[2vw]"
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
                                    "1) 목업를 재사용을 생각하면서 만들었었는데 효율이 상당히 높았습니다. 기획의 중요성을 알게 되었습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "2) FE끼리의 룰을 만들어서 정형화된 양식으로 만들었는데 처음에는 많이 햇갈렸지만 적응을 하니 관리하기도 편했습니다.그리고 다른 팀원이 짠 코드를 보기에도 편했습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "3) 목업만 보고 대충 개발하는 것보다 밑작업을 정성스럽게 한다면 결과물이 좋게 나온다는 점을 깨달았습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "4) 지금까지한 프로젝트중 가장 만족스러운 결과물이었고 배운점이 상당히 많았습니다.. JIRA를 이용하여 역할을 세분화하여 진행도 체크를 정확하게 하여 효율적인 일정 관리를 하였습니다. 그 결과 목표한 결과물을 계획대로 구현 가능했습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "5) 매일 스크럼 회의를 하여 전날의 데일리 회고를 지속적으로 하여 문제를 바로바로 인식, 해결하였습니다."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DevDay);


/***/ })

};
;