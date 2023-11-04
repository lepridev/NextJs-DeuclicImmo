import Image from "next/image";
import React from "react";

const Spinner = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Image
        src={"/assets/svg/spinner.svg"}
        alt="spinner"
        width={100}
        height={100}
        objectFit="cover"
      />
    </div>
  );
};

export default Spinner;
