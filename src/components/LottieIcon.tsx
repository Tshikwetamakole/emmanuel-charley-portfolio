import React from "react";
import Lottie from "lottie-react";

interface LottieIconProps {
  animation: object;
  className?: string;
  loop?: boolean;
}

const LottieIcon: React.FC<LottieIconProps> = ({
  animation,
  className = "w-24 h-24",
  loop = true,
}) => {
  return <Lottie animationData={animation} loop={loop} className={className} />;
};

export default LottieIcon;
