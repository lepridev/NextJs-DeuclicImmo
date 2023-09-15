"use client";

import { Comodite } from "./comodite";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { BiArea } from "react-icons/bi";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  id: number;
  imgSrc?: any;
  typeLabel?: string;
  price?: number;
  adress?: string;
  rates?: string;
  bed?: string;
  bath?: string;
  area?: number;
  city?: string;
  buttonLabel?: string;
}

const OffertBoxHorizontal = ({
  id,
  imgSrc = "/assets/images/maison1.jpg",
  typeLabel,
  price,
  adress,
  rates,
  bed,
  bath,
  area,
  city,
  buttonLabel,
}: Props) => {
  return (
    <div className=" w-[330px] h-[400px] border border-gray-10 rounded-md">
      <div className=" flex flex-row items-start justify-start w-full h-[48%] relative">
        <Image
          src={imgSrc}
          alt="maison a louer"
          fill
          className="object-cover absolute  rounded-t-md"
        />
        <div className="flex items-center justify-center w-[30px] h-[30px] absolute right-2 top-2 bg-gray-50 opacity-25 rounded-full">
          <AiFillHeart size={20} color="black" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col justify-start space-y-1 w-full h-3/5 py-4">
        <div className="space-y-2 px-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center justify-center py-1 px-2 rounded-2xl bg-gray-200">
              <Typograpy variant="caption1" component="span" theme="secondary">
                {typeLabel}
              </Typograpy>
            </div>
            <div className="">
              <Typograpy
                variant="lead"
                component="h3"
                theme="secondary"
                weight="bold"
              >
                {price} FCFA / Mois
              </Typograpy>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <Typograpy
              variant="lead"
              weight="semibold"
              className="hover:text-[#ffa50d] cursor-pointer"
            >
              {adress}
            </Typograpy>
            <div className="font-bold">{rates}</div>
          </div>
          <div className="flex flex-row items-center justify-end gap-3 pb-3">
            <Comodite label={bed} icon={{ icon: FaBed }} />
            <Comodite label={bath} icon={{ icon: FaBath }} />
            <Comodite label={area} icon={{ icon: BiArea }} />
          </div>
        </div>
        <div className="flex flex-row h-[50%] items-center justify-between px-4  border-t border-gray-300 ">
          <div className="flex items-center gap-2">
            <BiMap size={20} color="gray" />
            <Typograpy variant="body-sm" theme="gray">
              {city}
            </Typograpy>
          </div>
          <Button handleClick={() => {}}>{buttonLabel}</Button>
        </div>
      </div>
    </div>
  );
};

export default OffertBoxHorizontal;
