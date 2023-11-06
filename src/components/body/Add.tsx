import { Button } from "@/ui/buttons/Button";
import { Titleline } from "@/ui/titleLine/titleline";
import Image from "next/image";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Add = () => {
  return (
    <div className="w-full h-[200px] md:h-[350px] relative">
      <Image
        src={"/assets/images/banner.jpg"}
        alt="pub sur deuclic immo"
        className="object-cover absolute"
        objectFit="contain"
        fill
      />
      <div className="absolute -bottom-10 md:top-5 left-5 right-5 ">
        <Titleline
          title="Des vehicules de Hautes de gammes"
          description="De paire conulter notre large gammes de vehicules de luxe"
        />
        <Button icoPosition="right" icon={{ icon: FaArrowCircleRight }}>
          Consulter
        </Button>
      </div>
    </div>
  );
};

export default Add;
