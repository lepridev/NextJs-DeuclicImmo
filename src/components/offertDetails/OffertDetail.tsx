import BoxContainer from "@/ui/container/BoxContainer";
import { Typograpy } from "@/ui/typography/Typography";
import React from "react";

const OffertDetail = () => {
  const details = [
    "Chambres",
    "Toillettes",
    "Superficie",
    "Type d'offre",
    "Parking",
    "Balcon",
    "Cours avant",
    "Cours arriere",
  ];
  let data = "3";
  return (
    <BoxContainer title="Details">
      <div className="flex flex-row md:justify-between justify-start items-start  w-full md:w-1/2 pt-5 gap-5 md:gap-10 flex-wrap">
        {details.map((detail, index) => (
          <div key={index}>
            <Typograpy variant="caption2" component="span" weight="medium">
              {detail}:{""} {data}
            </Typograpy>
          </div>
        ))}
      </div>
    </BoxContainer>
  );
};

export default OffertDetail;
