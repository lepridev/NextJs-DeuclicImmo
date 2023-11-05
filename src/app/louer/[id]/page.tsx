import AgentBox from "@/ui/box/AgentBox";
import DescriptionBox from "@/ui/offert-ui-design/DescriptionBox";
import DetailBox from "@/ui/offert-ui-design/DetailBox";
import GalerieBox from "@/ui/offert-ui-design/GalerieBox";
import InfrastructureBox from "@/ui/offert-ui-design/InfrastructureBox";
import TitleBox from "@/ui/offert-ui-design/TitleBox";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";

type Props = {};

const OffertDetails = async ({ params }: any) => {
  const id = params.id;

  const data = await getOffertById(id);

  console.log("frontID", id);
  console.log("data", data.data.getOffertById);

  const OffertData = data.data.getOffertById;

  return (
    <div className="flex flex-col items-center justify-center gap-7 w-full">
      <div className="h-[20%] flex flex-row w-full overflow-hidden ">
        <Image
          src={"/assets/images/p-1.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
        <Image
          src={"/assets/images/p-3.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
        <Image
          src={"/assets/images/p-2.jpg"}
          alt="Appartement"
          width={500}
          height={500}
          className="object-cover hover:scale-125 animate"
        />
      </div>
      <div className="flex flex-row items-start justify-center">
        <div className="w-[50%] ">
          <TitleBox
            titre={OffertData.titre}
            location={OffertData.location}
            price={OffertData.price}
          />
          <DetailBox
            bath={OffertData.bath}
            bed={OffertData.bed}
            parking={OffertData.parking}
            caution={OffertData.caution}
            square={OffertData.square}
          />
          <DescriptionBox description={OffertData.description} />
          <InfrastructureBox />
          <GalerieBox />
        </div>
        <div className="w-[40%] ">
          <AgentBox />
        </div>
      </div>
    </div>
  );
};

export default OffertDetails;

export const getOffertById = async (id: any) => {
  const res = await axios.post("http://localhost:3000/api/properties/offert", {
    id,
  });

  return res;
};
