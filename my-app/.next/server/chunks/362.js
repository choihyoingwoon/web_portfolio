"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 9345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/web_portfolio//_next/static/media/devday.d7619d15.png","height":960,"width":1707,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbUlEQVR42mOIznodkPI3MO1/RPY//5T/dx99/vLl3ZHjnxnya/4W1f/LrvwXnfvPIvj/uu2/v337du7CL4bihv+Vrf8K6/6FZ/0LSP2XUfr/7bsfnz7/YghMBZrwD0gCJYCabCL+n7vw7f+/bwCu/kIHZgUYawAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ conponents_DevDay)
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
// EXTERNAL MODULE: ./public/images/devday.png
var devday = __webpack_require__(9345);
// EXTERNAL MODULE: ./public/images/js.png
var js = __webpack_require__(3731);
// EXTERNAL MODULE: ./public/images/react.png
var react = __webpack_require__(1234);
// EXTERNAL MODULE: ./public/images/next.png
var next = __webpack_require__(5457);
;// CONCATENATED MODULE: ./public/images/dd1.png
/* harmony default export */ const dd1 = ({"src":"/web_portfolio//_next/static/media/dd1.17da5939.png","height":454,"width":373,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAn0lEQVR42g3M2wqCMBgA4L3/M3URBAnRjRQUSZrs9P/b3DxNbU5X3wN85C7geHPZy7GZw8pxA71LUiial+LBAYKgbS1GrqIkONKmEyENJgoc5BBtl5CA5+iwj53ZYNo64cYCW8KXSn4rk/4pw4XqVfMZiQqyMh/ppUuqCVZ506eGsBZOF/usJuVZdj3ALO2uCJ3eEGqbgPkyL886cZ3ED9S9mbUVc2f3AAAAAElFTkSuQmCC","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/dd2.png
/* harmony default export */ const dd2 = ({"src":"/web_portfolio//_next/static/media/dd2.ec259d4f.png","height":404,"width":601,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEX+/v78/f38/Pz7/Pz7+/z7+/v6+/v7+vr6+vv6+vr6+vn5+vr5+fn4+fn4+Pr3+Pr2+Pry9vnr8vru8fPv8PTq8fre6PTc6PQWXe4mAAAALklEQVR42hXBhREAIAwEsEda3G3/Tbkm2KMGtpqxSgwCb7oscE9yROTRG2cDqA8noQGbu4UFdgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./public/images/dd3.png
var dd3 = __webpack_require__(6354);
// EXTERNAL MODULE: ./public/images/dd4.png
var dd4 = __webpack_require__(3286);
// EXTERNAL MODULE: ./public/images/dd5.png
var dd5 = __webpack_require__(1357);
;// CONCATENATED MODULE: ./pages/conponents/DevDay.tsx















const DevDay = ()=>{
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
                    src: "https://www.youtube.com/embed/xvINlpCsLYA?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=7",
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
                            src: devday/* default */.Z,
                            alt: "devday",
                            className: "w-full mb-8 "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-[2vw] font-semibold",
                                    children: "Project2. DevDay"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: "개발자들의 좋은 습관 형성하기 위한 챌린지 서비스"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-[1.2vw] mb-6 font-semibold",
                                    children: "1일 1커밋, 1일 1알고리즘 등 인증과정을 자동화한 챌린지와 사진인증 방식의 자유 챌린지를 통해 개발자들이 좋은 습관을 형성할 수 있도록 도와주는 챌린지 서비스입니다."
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
                                                    src: js/* default */.Z,
                                                    alt: "js",
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
                                            children: "2023.02.20~2023.04.07"
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
                                            children: "1. storybook을 이용하여 아토믹 디자인 기반 atom 컴포넌트 제작"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "2. 챌린지 관련 페이지 제작"
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
                                            children: "1. 컴포넌트 개발"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-[1.2vw] break-keep flex",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        "페이지의 디자인이 일관성있게 하기 위해 아토믹디자인 방법론을 도입하여 디자인을 하였고 스토리북을 이용하여 개발하였습니다. 컴포넌트의 상태와 동작을 한눈에 확인할 수 있고 유연성과 재사용성이 높아지는 효과를 가져왔습니다.",
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: dd2,
                                                            alt: "dd2",
                                                            className: "w-1/2 m-auto pt-4"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: dd1,
                                                    alt: "dd1",
                                                    className: "w-1/3 pl-4"
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
                                            children: "2. 챌린지 관련 페이지 제작"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "text-[1.2vw] break-keep ",
                                            children: "자주 사용되는 컴포넌트들을 제작하여 페이지가 적지 않음에도 빠른 개발속도를 가져갈수 있었습니다. 웹앱 형태를 띄고 있기 때문에 반응형에 집중을 하였고 기종에 상관없이 페이지 구성이 잘 나타나는 효과를 얻을 수 있었습니다."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            className: "flex w-full mb-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: dd5/* default */.Z,
                                                    alt: "dd5",
                                                    className: "w-1/3 p-[2vw]"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: dd4/* default */.Z,
                                                    alt: "dd4",
                                                    className: "w-1/3 p-[2vw]"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: dd3/* default */.Z,
                                                    alt: "dd3",
                                                    className: "w-1/3 p-[2vw]"
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
                                            children: "3. 느끼고 배운 점"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-[1.2vw] break-keep ",
                                            children: [
                                                "1) 목업를 재사용을 생각하면서 만들었었는데 효율이 상당히 높았습니다. 기획의 중요성을 알게 되었습니다.",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "2) FE끼리의 룰을 만들어서 정형화된 양식으로 만들었는데 처음에는 많이 햇갈렸지만 적응을 하니 관리하기도 편했습니다.그리고 다른 팀원이 짠 코드를 보기에도 편했습니다.",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "3) 목업만 보고 대충 개발하는 것보다 밑작업을 정성스럽게 한다면 결과물이 좋게 나온다는 점을 깨달았습니다.",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "4) 지금까지한 프로젝트중 가장 만족스러운 결과물이었고 배운점이 상당히 많았습니다.. JIRA를 이용하여 역할을 세분화하여 진행도 체크를 정확하게 하여 효율적인 일정 관리를 하였습니다. 그 결과 목표한 결과물을 계획대로 구현 가능했습니다.",
                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                "5) 매일 스크럼 회의를 하여 전날의 데일리 회고를 지속적으로 하여 문제를 바로바로 인식, 해결하였습니다."
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
/* harmony default export */ const conponents_DevDay = (DevDay);


/***/ })

};
;