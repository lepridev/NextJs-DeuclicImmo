import React from "react";
import { Typograpy } from "../typography/Typography";
import Image from "next/image";

const GalerieBox = () => {
  return (
    <div className="bg-white p-4 m-4 space-y-2 rounded-md">
      <div className="bg-gray-100 w-full h-6 flex items-center justify-start px-3 mb-10 rounded-md">
        <Typograpy variant="body-sm" weight="semibold">
          Galeries
        </Typograpy>
      </div>

      <div className="flex flex-row items-center justify-start flex-wrap gap-4 w-full">
        <Image
          src={"/assets/images/p-1.jpg"}
          alt="appartement"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/images/p-2.jpg"}
          alt="appartement"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/images/p-3.jpg"}
          alt="appartement"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/images/p-4.jpg"}
          alt="appartement"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/images/p-5.jpg"}
          alt="appartement"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default GalerieBox;
