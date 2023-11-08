import Container from "@/ui/container/Container";
import { Titleline } from "@/ui/titleLine/titleline";
import React from "react";

const OffertsStatistic = () => {
  return (
    <Container>
      <div>
        <Titleline
          title="Réalisations"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          earum aut expedita quas ipsam maxime magni! Unde exercitationem vel
          officia neque esse ipsa aliquid, laudantium sapiente facilis amet quam
          nam."
        />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center">
        <Titleline title="+1300" description="Offres en location" />
        <Titleline title="+723" description="Offres en vente" />
        <Titleline title="+288" description="Appartement meublés" />
        <Titleline title="+120" description="Agences immobilières" />
      </div>
    </Container>
  );
};

export default OffertsStatistic;
