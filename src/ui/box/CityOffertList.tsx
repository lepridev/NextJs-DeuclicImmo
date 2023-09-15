import Image from "next/image";
import React from "react";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  imgSrc: string;
  city: string;
  offertNumber: number;
}

const CityOffertList = ({
  imgSrc = "/assets/images/cocody.jpg",
  city = "Cocody",
  offertNumber = 10,
}: Props) => {
  return (
    <div className="w-[330px] h-[300px] bg-white border border-gray-10 rounded-md cursor-pointer">
      <div className="flex flex-row items-start justify-start w-full h-[60%] rounded-md relative overflow-hidden ">
        <Image
          src={imgSrc}
          fill
          className="object-cover absolute  rounded-t-md hover:scale-125 animate"
          alt="cocody baie sur deuclic immobilier"
        />
      </div>
      <div className="h-[40%] flex flex-row justify-between items-center p-4">
        <div className="flex flex-col justify-center items-center">
          <Typograpy weight="semibold">{city}</Typograpy>
          <Typograpy>{offertNumber} Offres</Typograpy>
        </div>
        <div>
          <Button variant="ico" icon={{ icon: MdKeyboardArrowRight }}></Button>
        </div>
      </div>
    </div>
  );
};

export default CityOffertList;
