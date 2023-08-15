exports.id = 3050;
exports.ids = [3050];
exports.modules = {

/***/ 3737:
/***/ ((module) => {

// Exports
module.exports = {
	"fadeUp": "Web_fadeUp__sZakt",
	"fadeUpVisible": "Web_fadeUpVisible__ZUW4S"
};


/***/ }),

/***/ 3050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _Web_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3737);
/* harmony import */ var _Web_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Web_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_ts_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9081);
/* harmony import */ var _public_images_react_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1234);
/* harmony import */ var _public_images_next_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5457);
/* harmony import */ var _public_images_pwa_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9717);
/* harmony import */ var _public_images_sya1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1368);
/* harmony import */ var _public_images_sya2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(504);
/* harmony import */ var _public_images_sya3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4874);













const SeeYouAgain = ()=>{
    const [ref, isInView] = (0,_useInView__WEBPACK_IMPORTED_MODULE_2__["default"])(0.9);
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
                src: "https://www.youtube.com/embed/QRYlVUjQ0Xk?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7",
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("w-full m-auto mb-4", (_Web_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fadeUp), isInView ? (_Web_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fadeUpVisible) : (_Web_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fadeUp)),
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
                        children: "Project1. SeeYouAgain"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-[3vw]",
                        children: "안전한 세이프존에서 동네 이웃끼리 편하고 안전하게 거래 할 수 있는 대여 서비스 플랫폼"
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
                                        src: _public_images_ts_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                        alt: "ts",
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
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: _public_images_pwa_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        alt: "pwa",
                                        className: " h-[5vw]"
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
                                children: "2023.04.10~2023.05.19"
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
                                children: "1. Fade-In 애니메이션을 활용한 메인페이지 제작"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "2. 경찰서, CCTV, 가로등 위치를 기반으로 안전점수 계산"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "3. 카카오 맵 위에 안전점수 표시(사각형, 색상) 페이지 제작"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "4. 유저들끼리 실시간 위치 확인 페이지 제작"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "flex w-full mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: _public_images_sya1_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                alt: "sya1",
                                className: "w-1/3 p-[2vw]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: _public_images_sya2_png__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                alt: "sya2",
                                className: "w-1/3 p-[2vw]"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: _public_images_sya3_png__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                                alt: "sya3",
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
                                className: "text-[3vw] break-keep ",
                                children: [
                                    "1) 계획의 중요성을 알게 되었습니다. 주어진 기간에 맞게 계획을 잘 세우고 일정 관리를 잘 해야 결과물이 안정적으로 나온다고 느꼈습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "2) 웹과 앱을 모두 만들면서 반응형의 중요성을 다시 한번 생각하게 되었습니다.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "3) 데이터를 사용해야 될 때 페이지의 쾌적함을 위해 좀 더 빠르게 처리하여 띄울 방법을 고민하며 코드를 짜야 한다고 느꼈습니다."
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeeYouAgain);


/***/ }),

/***/ 3945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useInView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// useInView.ts

function useInView(threshold) {
    const [isInView, setIsInView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const setRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node)=>{
        if (ref.current) {
            ref.current.disconnect();
        }
        if (node) {
            ref.current = new IntersectionObserver(([entry])=>{
                setIsInView(entry.isIntersecting);
            }, {
                threshold
            });
            if (ref.current) {
                ref.current.observe(node);
            }
        }
    }, [
        threshold
    ]);
    return [
        setRef,
        isInView
    ];
}


/***/ })

};
;