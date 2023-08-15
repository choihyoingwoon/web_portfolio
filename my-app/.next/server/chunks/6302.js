exports.id = 6302;
exports.ids = [6302];
exports.modules = {

/***/ 5138:
/***/ ((module) => {

// Exports
module.exports = {
	"fadeUp": "Web_fadeUp__Ic2QG",
	"fadeUpVisible": "Web_fadeUpVisible__DRBzK"
};


/***/ }),

/***/ 2321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/web_portfolio/_next/static/media/seeyouagain.c3e8c30c.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AFpg/21j/4Fl/pRn/6Rg/LVd+8hd+uBn/gCKiP6Og/6Zgv+iefzEuOTWzOPYzOTRlewAt7H+rJT5tZf5u5b8wcHJ0djCyNDD3tzqAIth/pZs/qV2/61x/KmJyLeax7CSvObb5ACibf+la/+sav+4bP7EZ//RXv/ia//rfPXkPlb0Q2TxkgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 6302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ conponents_SeeYouAgain)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/conponents/useInView.ts
var useInView = __webpack_require__(1575);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./pages/conponents/Web.module.scss
var Web_module = __webpack_require__(5138);
var Web_module_default = /*#__PURE__*/__webpack_require__.n(Web_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/images/seeyouagain.png
var seeyouagain = __webpack_require__(2321);
// EXTERNAL MODULE: ./public/images/ts.png
var ts = __webpack_require__(9081);
// EXTERNAL MODULE: ./public/images/react.png
var react = __webpack_require__(1234);
// EXTERNAL MODULE: ./public/images/next.png
var next = __webpack_require__(5457);
// EXTERNAL MODULE: ./public/images/pwa.png
var pwa = __webpack_require__(9717);
// EXTERNAL MODULE: ./public/images/sya1.png
var sya1 = __webpack_require__(1368);
// EXTERNAL MODULE: ./public/images/sya2.png
var sya2 = __webpack_require__(504);
// EXTERNAL MODULE: ./public/images/sya3.png
var sya3 = __webpack_require__(4874);
;// CONCATENATED MODULE: ./public/images/sya4.png
/* harmony default export */ const sya4 = ({"src":"/web_portfolio/_next/static/media/sya4.019e4db9.png","height":172,"width":431,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAARUlEQVR42gUAgQ2AIMj/r2ysVluZIwEVBFuqzEiC3Pr0WMsjhg6blja49uN8SwGA0oSm6uhqmmolYWHmnHOEm/n9EOL3AxQqRLLUQQ+JAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./public/images/sya5.png
/* harmony default export */ const sya5 = ({"src":"/web_portfolio/_next/static/media/sya5.936f6ef5.png","height":251,"width":579,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAASElEQVR42gVAQQqAIBD0/w/sUicjyBLStbVox50IcR9zxHYOp5vhVhZxYAQFzOwx5O+tIrVIOs7ee0iXTEtcUybp7q01VSX5Aw6dRKxGytXDAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./pages/conponents/SeeYouAgain.tsx
















const SeeYouAgain = ()=>{
    const code = `
    // useInView.ts 파일 내용
    import React, { useCallback, useState, useRef } from "react";

    export default function useInView(
      threshold: number
    ): [React.RefCallback<HTMLElement>, boolean] {
      const [isInView, setIsInView] = useState(false);
      const ref = useRef<IntersectionObserver | null>(null);

      const setRef = useCallback((node: HTMLElement | null) => {
        if (ref.current) {
          ref.current.disconnect();
        }
        if (node) {
          ref.current = new IntersectionObserver(
            ([entry]) => {
              setIsInView(entry.isIntersecting);
            },
            { threshold, }
          );
          if (ref.current) {
            ref.current.observe(node);
          }
        }
      }, []);

      return [setRef, isInView];
    }
  `;
    const [ref, isInView] = (0,useInView["default"])(0.8);
    const iframeRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
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
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: external_classnames_default()(isInView ? "bg-black" : "bg-white", "bg-black h-full overflow-scroll overflow-x-hidden over"),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                    src: "https://www.youtube.com/embed/QRYlVUjQ0Xk?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7",
                    className: external_classnames_default()("w-full h-full m-auto mb-4", (Web_module_default()).fadeUp, isInView ? (Web_module_default()).fadeUpVisible : (Web_module_default()).fadeUp),
                    ref: (el)=>{
                        iframeRef.current = el;
                        ref(el);
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "bg-white w-[80%] m-auto pb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: seeyouagain/* default */.Z,
                            alt: "seeyouagain",
                            className: "w-full mb-8 "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-[2vw] font-semibold",
                                    children: "Project1. SeeYouAgain"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "안전한 세이프존에서 동네 이웃끼리 편하고 안전하게 거래 할 수 있는 대여 서비스 플랫폼"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-[1.2vw] mb-6 font-semibold",
                                    children: "중고거래와 렌탈 시장이 성장하는 가운데, 대면 거래의 불안요소인 안전에 집중하여 안전한 거래장소를 추천하고 실시간 위치정보를 통해 이용자 간 편한 거래를 돕는 동네 대여 서비스 플랫폼"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-[1.2vw] flex items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mr-6 font-semibold",
                                            children: "기술스택"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: ts/* default */.Z,
                                                    alt: "ts",
                                                    className: "w-[1.3vw] h-[1.3vw] mr-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: react/* default */.Z,
                                                    alt: "react",
                                                    className: "w-[1.3vw] h-[1.3vw] mr-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: next/* default */.Z,
                                                    alt: "next",
                                                    className: "w-[1.3vw] h-[1.3vw] mr-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: pwa/* default */.Z,
                                                    alt: "pwa",
                                                    className: " h-[1.3vw]"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-[1.2vw] flex items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mr-6 font-semibold",
                                            children: "개발기간"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "2023.04.10~2023.05.19"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-[1.2vw] flex items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mr-6 font-semibold",
                                            children: "개발인원"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "6명 (FE 3, BE 3)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "text-[1.2vw] items-center mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "mr-6 font-semibold",
                                            children: "담당역할 / FrontEnd"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "1. Fade-In 애니메이션을 활용한 메인페이지 제작"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "2. 경찰서, CCTV, 가로등 위치를 기반으로 안전점수 계산"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "3. 카카오 맵 위에 안전점수 표시(사각형, 색상) 페이지 제작"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "4. 유저들끼리 실시간 위치 확인 페이지 제작"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "flex w-full mb-6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: sya1/* default */.Z,
                                            alt: "sya1",
                                            className: "w-1/3 p-[2vw]"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: sya2/* default */.Z,
                                            alt: "sya2",
                                            className: "w-1/3 p-[2vw]"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: sya3/* default */.Z,
                                            alt: "sya3",
                                            className: "w-1/3 p-[2vw]"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "px-12",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: " mb-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-[1.5vw] font-semibold",
                                            children: "1. 메인 페이지"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-[1.2vw] break-keep ",
                                            children: "IntersectionObserver를 이용하여 요소가 뷰포트에 포함여부를 판별, 포함여부에 따라 opacity, transform, transition 속성을 이용하여 fade in, out 기능을 구현하였습니다. 이 기능은 비동기적으로 실행되기 때문에,\xa0scroll\xa0같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출 같은 문제 없이 사용할 수 있습니다."
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("pre", {
                                            className: "bg-[#282a36] text-white mt-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("code", {
                                                dangerouslySetInnerHTML: {
                                                    __html: code
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: " mb-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-[1.5vw] font-semibold",
                                            children: "2. 안전구역, 안전점수"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-[1.2vw] break-keep ",
                                                    children: "공공데이터에서 받아온 경찰서, cctv, 가로등 위치 기반으로 각각 3점, 2점, 1점(근처에 cctv가 있는 가로등만)으로 특정 범위내에 몇 개가 포함되는지 판별하여 점수를 계산하였습니다."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: sya4,
                                                    alt: "sya4",
                                                    className: "w-1/3"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-[1.2vw] break-keep ",
                                                    children: "광주 지역을 275*593개로 나눈 후 R-tree알고리즘을 활용하여 나눠진 범위의 점수를 계산, 페이지 최적화를 위해 점수들을 145*72의 파일 형태로 나누어서 import했습니다. 뷰포트의 좌상, 우하의 좌표를 이용해서 필요한 파일을 최소한으로 불러오는 방식을 택했습니다."
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: sya5,
                                                    alt: "sya5",
                                                    className: "w-1/3"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: " mb-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-[1.5vw] font-semibold",
                                            children: "3. 실시간 위치 확인"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-[1.2vw] break-keep ",
                                            children: "navigator.geolocation을 이용하여 유저의 위치를 받고 서버에 본인의 위치 정보를 보내고 상대방의 위치를 받아오는 형식으로 구현 하였습니다. 페이지에 부하가 생기는 것을 방지하기 위해 getCurrentPosition를사용하였습니다. 이후 두 유저의 위치를 kakaoMap API의 imageMarker를 사용해서 표시하였습니다."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: " mb-12",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-[1.5vw] font-semibold",
                                            children: "4. 느끼고 배운 점"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-[1.2vw] break-keep ",
                                            children: [
                                                "1) 계획의 중요성을 알게 되었습니다. 주어진 기간에 맞게 계획을 잘 세우고 일정 관리를 잘 해야 결과물이 안정적으로 나온다고 느꼈습니다.",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "2) 웹과 앱을 모두 만들면서 반응형의 중요성을 다시 한번 생각하게 되었습니다.",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "3) 데이터를 사용해야 될 때 페이지의 쾌적함을 위해 좀 더 빠르게 처리하여 띄울 방법을 고민하며 코드를 짜야 한다고 느꼈습니다."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const conponents_SeeYouAgain = (SeeYouAgain);


/***/ }),

/***/ 1575:
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