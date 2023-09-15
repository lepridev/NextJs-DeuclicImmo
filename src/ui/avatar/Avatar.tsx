import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Typograpy } from "../typography/Typography";

interface Props {
  variant: "small" | "medium" | "large";
  imgSrc?: string;
  rating?: number;
}
const Avatar = ({
  variant = "small",
  imgSrc = "/assets/images/photoProfile.png",
  rating = 99,
}: Props) => {
  let variantStyle: string = "";

  switch (variant) {
    case "small":
      variantStyle = "w-[50px] h-[50px]";
      break;
    case "medium":
      variantStyle = "w-[60px] h-[60px]";
      break;
    case "large":
      variantStyle = "w-[70px] h-[70px]";
      break;
  }
  return (
    <div
      className={clsx(
        "border border-gray-200 rounded-full relative",
        variantStyle
      )}
    >
      <Image
        src={imgSrc}
        alt="profil agent deuclic immobilier"
        fill
        className="object-cover rounded-full "
      />
      <div className="flex items-center justify-center w-6 h-6 absolute -bottom-[5px] -right-[5px] bg-[#03a9f4] rounded-full">
        <Typograpy variant="caption1" theme="white">
          {rating}
        </Typograpy>
      </div>
    </div>
  );
};

export default Avatar;
