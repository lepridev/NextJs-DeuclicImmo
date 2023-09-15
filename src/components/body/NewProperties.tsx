import OffertBoxHorizontal from "@/ui/box/OffertBoxHorizontal";
import Container from "@/ui/container/Container";
import { Titleline } from "@/ui/titleLine/titleline";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const NewProperties = () => {
  return (
    <>
      <Container>
        <Titleline
          title="Recentes Offres à louer"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <div className="w-full flex flex-col items-center justify-center">
          <OffertBoxHorizontal
            id={1}
            typeLabel="A Louer"
            price={165000}
            adress="Riviera 2"
            bed="3"
            bath="2"
            area={100}
            city="Abidjan Cocody"
            buttonLabel="Voir"
          />
        </div>
      </Container>
    </>
  );
};

export default NewProperties;
