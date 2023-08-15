import React from "react";

import Image from "next/image";
import pjt from "../../../public/images/pjt.png";
import js from "../../../public/images/js.png";
import vue from "../../../public/images/vue.png";

const Pjt: React.FC = () => {
  return (
    <div className=" h-full overflow-scroll bg-white overflow-x-hidden over">
      <div className="bg-white w-[90%] m-auto pb-4 ">
        <Image src={pjt} alt="pjt" className="w-full my-4 " />
        <p className="text-[5vw] font-semibold">
          Project4. SSAFY 관통프로젝트
        </p>
        <p className="text-[3vw]">
          TMDB API를 이용한 영화 검색 추천 서비스입니다.
        </p>
        <div className="text-[3vw] flex items-center my-4">
          <p className="mr-6 font-semibold">기술스택</p>
          <div className="flex">
            <Image src={js} alt="js" className="w-[5vw] h-[5vw] mr-3" />
            <Image src={vue} alt="react" className="w-[5vw] h-[5vw] mr-3" />
          </div>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발기간</p>
          <p>2022.11.16 ~ 2022.11.25</p>
        </div>
        <div className="text-[3vw] flex items-center mb-4">
          <p className="mr-6 font-semibold">개발인원</p>
          <p>2명 (FE 1, BE 1)</p>
        </div>
        <div className="text-[3vw] items-center mb-4">
          <p className="mr-6 font-semibold">담당역할 / FrontEnd</p>
        </div>
        <div className=" mb-4">
          <p className="text-[1.5vw] font-semibold">느끼고 배운 점</p>
          <div className="text-[1.2vw] break-keep	">
            1. 사용자의 입장에서 편한 서비스를 만드는건 많은 디테일적 요소가
            가미되어야 한다는 것을 알게 되었습니다. 그리고 포기하지 않는다면
            유의미한 결과물을 만들 수 있다는 것을 알게 되었습니다.
            <br />
            2. 규칙이 없다보니 양식이 일치하지 않아 코드를 만든 사람을 제외하고
            수정하기 쉽지 않았습니다. 룰을 정해서 누가 만들더라도 알아볼수 있는
            체계를 만들어야된다고 생각했습니다.
            <br />
            3. 처음 해본 프로젝트여서 소통의 중요성 특히 백과 프론트의 소통이
            상당히 중요하다는 생각을 가졌습니다. 그리고 기획의 중요성을 알게
            되었습니다.
            <br />
            4. 해당 프로젝트 결과로 SSAFY 광주 2반 프로젝트 우수상을
            수상하였습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pjt;
