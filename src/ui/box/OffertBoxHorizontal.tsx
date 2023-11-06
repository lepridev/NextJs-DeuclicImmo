"use client";

import { Comodite } from "./comodite";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { BiArea } from "react-icons/bi";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import Rating from "@/ui/rating/Rating";
import StarRating from "@/ui/rating/Rating";

interface Props {
  id: string;
  bath?: string;
  imgSrc?: string;
  bed?: string;
  caution?: string;
  city?: string;
  contenu?: string;
  description?: string;
  location?: string;
  parking?: string;
  price?: string;
  square?: string;
  titre?: string;
  rates?: number;
  buttonLabel: string;
  href?: any;
}

const OffertBoxHorizontal = ({
  id,
  imgSrc = "/assets/images/maison1.jpg",
  bath,
  bed,
  caution,
  city,
  contenu,
  description,
  location,
  parking,
  price,
  square,
  titre,
  rates = 3,
  buttonLabel,
  href,
}: Props) => {
  return (
    <div className=" w-[90%] h-[400px] border border-gray-10 rounded-md">
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
            <div className="flex items-center justify-center py-1 px-2 rounded-md bg-gray-100">
              <Typograpy
                variant="caption4"
                component="span"
                theme="secondary"
                weight="bold"
              >
                {titre}
              </Typograpy>
            </div>
            <div className="">
              <Typograpy
                variant="body-lg"
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
              variant="body-sm"
              weight="semibold"
              className="hover:text-[#ffa50d] cursor-pointer"
            >
              {location}
            </Typograpy>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 ">
            <div>
              <Rating />
            </div>
            <div className="flex flex-row items-center justify-between gap-3 pb-3">
              <Comodite label={bed} icon={{ icon: FaBed }} />
              <Comodite label={bath} icon={{ icon: FaBath }} />
              <Comodite label={square} icon={{ icon: BiArea }} />
            </div>
          </div>
        </div>
        <div className="flex flex-row h-[40%] items-center justify-between px-4  border-t border-gray-300 ">
          <div className="flex items-center gap-2">
            <BiMap size={20} color="gray" />
            <Typograpy variant="body-sm" theme="gray">
              {city}
            </Typograpy>
          </div>
          <Link href={`/louer/${id}`}>
            <Button>{buttonLabel}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffertBoxHorizontal;
