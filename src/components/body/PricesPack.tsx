import PriceBox from "@/ui/box/PriceBox";
import Container from "@/ui/container/Container";
import { Titleline } from "@/ui/titleLine/titleline";

import React from "react";

const PricesPack = () => {
  return (
    <div className="bg-gray-50">
      <Container>
        <Titleline
          title="Decouvrez nos Abonnements"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <PriceBox />
          <PriceBox price={5000} />
          <PriceBox price={10000} />
        </div>
      </Container>
    </div>
  );
};

export default PricesPack;
