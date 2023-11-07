import { Comodite } from "@/ui/box/comodite";
import { Typograpy } from "@/ui/typography/Typography";
import React from "react";
import { BiArea, BiSolidMapPin } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { FaBed, FaBath, FaSearchLocation } from "react-icons/fa";
import BoxContainer from "@/ui/container/BoxContainer";
import { GiTakeMyMoney } from "react-icons/gi";

const OffertRecap = () => {
  return (
    <BoxContainer title="Récapitulatif">
      <div className="flex flex-col justify-center pt-5 gap-2">
        <div className="flex flex-row items-center justify-center w-20 rounded-full  px-10 py-3 border border-red-100">
          <Typograpy variant="caption1" weight="bold" component="span">
            Alouer
          </Typograpy>
        </div>
        <div>
          <Typograpy variant="caption4" component="h1" weight="bold">
            545 Tracey Drive
          </Typograpy>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <ImLocation color="gray" size={24} />
          <Typograpy variant="body-lg" component="h1" weight="medium">
            8277 Easter Fork Apt. 291 North Pamela, NV 49884-5805, Hampton
          </Typograpy>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <BiSolidMapPin color="gray" size={24} />
          <Typograpy variant="body-lg" component="h1" weight="medium">
            Dabou
          </Typograpy>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <GiTakeMyMoney color="gray" size={24} />
          <Typograpy variant="caption4" component="h1" weight="bold">
            180000 /Mois
          </Typograpy>
        </div>
        <div className="flex flex-row items-center justify-end gap-3 pb-3">
          <Comodite label={3} icon={{ icon: FaBed }} />
          <Comodite label={2} icon={{ icon: FaBath }} />
          <Comodite label={"90"} icon={{ icon: BiArea }} />
        </div>
      </div>
    </BoxContainer>
  );
};

export default OffertRecap;
