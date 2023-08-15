"use strict";
exports.id = 7808;
exports.ids = [7808];
exports.modules = {

/***/ 7808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const StarRating = ({ rating })=>{
    const [filledStars, setFilledStars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // rating이 변경될 때마다 애니메이션 효과를 주기 위해 filledStars 상태를 업데이트합니다.
        const interval = setInterval(()=>{
            setFilledStars((prevFilledStars)=>{
                // rating이 0일 경우 filledStars를 0으로 유지합니다.
                if (prevFilledStars === rating || rating === 0) return prevFilledStars;
                // rating보다 작을 때까지 filledStars를 증가시킵니다. (최대 5까지)
                const step = rating > prevFilledStars ? 0.5 : -0.5;
                return Math.min(Math.max(prevFilledStars + step, 0), 5);
            });
        }, 200); // 각 단계의 애니메이션 간격을 조정할 수 있습니다.
        return ()=>clearInterval(interval);
    }, [
        rating
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center",
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `w-6 h-6 mr-2 ${index <= filledStars ? "bg-[#758772]" : "bg-gray-300"} transition-colors`
            }, index))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);


/***/ })

};
;