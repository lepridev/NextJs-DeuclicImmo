import React from "react";
import { Typograpy } from "../typography/Typography";
import { IconType } from "react-icons";
import clsx from "clsx";

interface Props {
  icon: { icon: IconType };
  label: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  className?: string;
}

const WorkingStep = ({ icon, label, description, color, className }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between p-5 bg-white border border-gray-100 shadow-md max-w-sm rounded-md">
      <div
        className={clsx(
          "flex items-center justify-center p-3 mb-6 w-[60px] h-[60px] rounded-xl rotate-45 border-2",
          className
        )}
      >
        <icon.icon size={40} color={color} className="-rotate-45" />
        {/* <PiNewspaperClippingDuotone
          size={40}
          color="#29cf8d"
          className="-rotate-45"
        /> */}
      </div>
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        <Typograpy weight="bold">{label}</Typograpy>
        <Typograpy variant="body-sm">{description}</Typograpy>
      </div>
    </div>
  );
};

export default WorkingStep;

//[#35d09231]
