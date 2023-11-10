import Image from "next/image";
import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import CarouselBox from "@/ui/carousel/CarouselBox";

const Hero = () => {
  const images = [
    {
      imgSrc: "/assets/images/maisong.jpeg",
      legend: "Legende 1",
    },
    {
      imgSrc: "/assets/images/maison2.jpg",
      legend: "Legende 2",
    },
  ];

  return (
    <div className="w-full  overflow-hidden md:h-[500px] flex flex-col items-center justify-center relative ">
      <div className="w-full">
        <CarouselBox
          images={images}
          autoplay={"autoplay"}
          infiniteLoop={"infiniteLoop"}
          interval={10000}
          legend={false}
        />
      </div>

      {/* <Image
        src={"/assets/images/maisong.jpeg"}
        alt="deuclic cocody"
        fill
        className="absolute object-cover -z-10"
      /> */}
      <div className="w-full flex flex-col items-start md:items-center justify-center px-2 md:px-7 absolute top-10 md:top-1/3 left-5 right-5">
        <div>
          <h2 className="text-slate-100 text-2xl md:text-3xl font-bold">
            Toutes les offres immobilières maintenant disponibles
          </h2>
          <h1 className="text-orange-500 text-3xl md:text-6xl md:max-w-5xl font-bold">
            Trouver un appartement rapidement
          </h1>
        </div>
        <div className="w-full justify-center flex flex-row items-center mt-6 md:mt-10">
          <form className="w-full flex items-center justify-center">
            <AiOutlineFileSearch
              size={40}
              color={"white"}
              className="border-green-300"
            />
            <input
              className="w-[50%] md:w-[60%] p-2 md:p-4 mr-2 focus:border-gray-600 rounded-md"
              type="text"
              placeholder="Que recherchez-vous ?"
            />
            <button className="bg-green-500 font-bold text-white px-3 md:py-4 md:px-4 py-2 rounded-br-md rounded-e-md">
              Trouver
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
