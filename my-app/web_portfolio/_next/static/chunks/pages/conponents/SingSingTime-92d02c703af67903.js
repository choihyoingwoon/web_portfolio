(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{4184:function(e,t){var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var r=typeof s;if("string"===r||"number"===r)e.push(s);else if(Array.isArray(s)){if(s.length){var A=i.apply(null,s);A&&e.push(A)}}else if("object"===r){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var l in s)n.call(s,l)&&s[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(s=(function(){return i}).apply(t,[]))&&(e.exports=s)}()},5950:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/conponents/SingSingTime",function(){return s(2394)}])},3731:function(e,t){"use strict";t.Z={src:"/web_portfolio//_next/static/media/js.5b360ef2.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX33x744Bfy2xv95R5fVgv66mDlzxuZihKzohVwZQ2CdhA/OgjDsBc3Mga+qxdkMvKEAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAN0lEQVR4nCXHyQ3AIBAEwd7ZCwx2/uEi4VepSAOw5MqPXLp7RrQDHr0+B1XsfgurmCOmSBNeygMWRgDXbO1omAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},4219:function(e,t){"use strict";t.Z={src:"/web_portfolio//_next/static/media/singsingtime.ac63fffe.png",height:621,width:1104,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEUaGBYgIBwqKilbWFY0NzVGQU4IBwsNDB9VUFqPkYSrrqAlHTZ4bYc5M0ZRWXi6utFQAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAALElEQVR4nBXJtxEAIBAEsb13ePovl0GpaFUFiN3zpo9JHqLhzuoWptBvScYDEdoAp6+Y3EgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},225:function(e,t){"use strict";t.Z={src:"/web_portfolio//_next/static/media/vue.5e836f8f.png",height:48,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEX////4/Prp9vBNwYw1ZGa95tNYw5Ol4MU3p3mI2LPW8OQsk27u7vFAUGWnrbilqrezaKIrAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAN0lEQVR4nCXGyREAIQzEQI1tbljyz5Zi0aeFbErTRPf4dniHNtYaDTCPcAMotZYryln/kNLzdQAsLADqrZwb1wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},2394:function(e,t,s){"use strict";s.r(t);var n=s(5893),i=s(7294),r=s(1575),A=s(4184),l=s.n(A),a=s(6209),c=s.n(a),o=s(5675),u=s.n(o),d=s(4219),f=s(3731),m=s(225);t.default=()=>{let[e,t]=(0,r.default)(.8),s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(s.current){var e,n;t?null===(e=s.current.contentWindow)||void 0===e||e.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):null===(n=s.current.contentWindow)||void 0===n||n.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}},[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:l()(t?"bg-black":"bg-white","bg-black h-full overflow-scroll overflow-x-hidden over"),children:[(0,n.jsx)("iframe",{src:"https://www.youtube.com/embed/FptdSMkUkKE?autoplay=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=3",className:l()("w-full h-full m-auto mb-4",c().fadeUp,t?c().fadeUpVisible:c().fadeUp),ref:t=>{s.current=t,e(t)}}),(0,n.jsxs)("div",{className:"bg-white w-[80%] m-auto pb-16",children:[(0,n.jsx)(u(),{src:d.Z,alt:"singsingtime",className:"w-full mb-8 "}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-[2vw] font-semibold",children:"Project3. SingSingTime"}),(0,n.jsx)("p",{children:"비대면 노래 경연 서비스"}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"text-[1.2vw] mb-6 font-semibold",children:"코로나로 인하여 노래방을 자주 갈 수 없는 끼가 많은 사람들을 위한 WebRTC를 이용한 비대면 노래 경연 서비스입니다. 화상화면으로 노래부르는 사람의 모습을 볼 수 있어 온라인의 거리감을 좁혀주었습니다."}),(0,n.jsxs)("div",{className:"text-[1.2vw] flex items-center mb-6",children:[(0,n.jsx)("p",{className:"mr-6 font-semibold",children:"기술스택"}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(u(),{src:f.Z,alt:"js",className:"w-[1.3vw] h-[1.3vw] mr-3"}),(0,n.jsx)(u(),{src:m.Z,alt:"vue",className:"w-[1.3vw] h-[1.3vw] mr-3"})]})]}),(0,n.jsxs)("div",{className:"text-[1.2vw] flex items-center mb-6",children:[(0,n.jsx)("p",{className:"mr-6 font-semibold",children:"개발기간"}),(0,n.jsx)("p",{children:"2023.01.09~2023.02.17"})]}),(0,n.jsxs)("div",{className:"text-[1.2vw] flex items-center mb-6",children:[(0,n.jsx)("p",{className:"mr-6 font-semibold",children:"개발인원"}),(0,n.jsx)("p",{children:"6명 (FE 3, BE 3)"})]}),(0,n.jsxs)("div",{className:"text-[1.2vw] items-center mb-6",children:[(0,n.jsx)("p",{className:"mr-6 font-semibold",children:"담당역할 / FrontEnd"}),(0,n.jsx)("p",{children:"1. 서비스의 전체적인 페이지 구조 구성, 기초 구현"}),(0,n.jsx)("p",{children:"2. 노래 플레이 룸 구현"})]}),(0,n.jsx)("p",{className:"text-[1.2vw] font-semibold",children:"느끼고 배운 점"}),(0,n.jsxs)("div",{className:"text-[1.2vw] break-keep ",children:["1. session 통신을 이용해 해당 페이지를 보고 있는 사용자에게 동일한 작동을 요청 보내는 것을 알게 되었습니다.",(0,n.jsx)("br",{}),"2. openvidu를 공부하는 기간이 너무 길었기 때문에 싱크 문제같은 디테일한 점을 해결하지 못하였습니다. 또한 FE끼리의 룰을 정하지 않아 코드가 중구난방인점이 아쉬웠습니다.",(0,n.jsx)("br",{}),"3. 계속 구현도를 체크하면서 일정을 조율하는 것의 중요성을 알게 되었습니다.",(0,n.jsx)("br",{}),"4. 전체적인 UX/UI의 구상을 맡으면서 일관성있는 디자인의 중요성을 알게 되었으며 컴포넌트의 재사용성을 생각하면서 목업를 만들어야한다는 점을 알게 되었습니다."]})]})]})]})})}},1575:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var n=s(7294);function i(e){let[t,s]=(0,n.useState)(!1),i=(0,n.useRef)(null),r=(0,n.useCallback)(t=>{i.current&&i.current.disconnect(),t&&(i.current=new IntersectionObserver(e=>{let[t]=e;s(t.isIntersecting)},{threshold:e}),i.current&&i.current.observe(t))},[e]);return[r,t]}},6209:function(e){e.exports={fadeUp:"Web_fadeUp__Ic2QG",fadeUpVisible:"Web_fadeUpVisible__DRBzK"}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=5950)}),_N_E=e.O()}]);