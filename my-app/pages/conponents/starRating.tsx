import { useEffect, useState } from "react";

interface StarRatingProps {
  rating: number; // 이미 정해진 별점을 받아옵니다. 0 ~ 5 사이의 숫자여야 합니다.
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const [filledStars, setFilledStars] = useState<number>(0);

  useEffect(() => {
    // rating이 변경될 때마다 애니메이션 효과를 주기 위해 filledStars 상태를 업데이트합니다.
    const interval = setInterval(() => {
      setFilledStars((prevFilledStars) => {
        // rating이 0일 경우 filledStars를 0으로 유지합니다.
        if (prevFilledStars === rating || rating === 0) return prevFilledStars;
        // rating보다 작을 때까지 filledStars를 증가시킵니다. (최대 5까지)
        const step = rating > prevFilledStars ? 0.5 : -0.5;
        return Math.min(Math.max(prevFilledStars + step, 0), 5);
      });
    }, 200); // 각 단계의 애니메이션 간격을 조정할 수 있습니다.

    return () => clearInterval(interval);
  }, [rating]);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className={`w-6 h-6 mr-2 ${
            index <= filledStars ? "bg-[#758772]" : "bg-gray-300"
          } transition-colors`}
        />
      ))}
    </div>
  );
};

export default StarRating;
