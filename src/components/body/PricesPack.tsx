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
          <PriceBox pack={"ESSAIE"} btnLabel={"ESSAYER"} />
          <PriceBox
            price={5000}
            pack={"AGENT IMMOBILIER"}
            postFrequency="30 JOURS DE POSTE"
            visibility="VISIBILITE AMMELIOREE"
            expirationCredit="PUBLICATIONS ACTIF 30 JOURS"
            btnLabel={"ACHETER"}
          />
          <PriceBox
            price={10000}
            pack={"AGENCE IMMOBILIERE"}
            postFrequency="30 JOURS DE POSTE"
            visibility="MISE EN AVANT"
            expirationCredit="PUBLICATIONS ACTIF 60 JOURS"
            btnLabel={"ACHETER"}
          />
        </div>
      </Container>
    </div>
  );
};

export default PricesPack;
