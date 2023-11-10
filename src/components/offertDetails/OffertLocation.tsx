import BoxContainer from "@/ui/container/BoxContainer";

import { Typograpy } from "@/ui/typography/Typography";
import React from "react";

const OffertLocation = () => {
  return (
    <BoxContainer openBtn title="Localisation">
      <div className="pt-5">
        <div>
          <Typograpy variant="lead" component="p" theme="gray">
            Location
          </Typograpy>
        </div>
        <div className="flex flex-col items-center justify-center w-full"></div>
      </div>
    </BoxContainer>
  );
};

export default OffertLocation;
