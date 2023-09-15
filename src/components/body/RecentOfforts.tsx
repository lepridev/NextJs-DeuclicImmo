import OffertBoxHorizontal from "@/ui/box/OffertBoxHorizontal";
import { Button } from "@/ui/buttons/Button";
import Container from "@/ui/container/Container";
import { Titleline } from "@/ui/titleLine/titleline";
import React from "react";

const RecentOfforts = () => {
  const recentOffres = [
    {
      id: 1,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 150000,
      adress: "Avenue Rue Marie Guiro",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 2,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 180000,
      adress: "Pharmacie du Bonheur",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 90,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 3,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 200000,
      adress: "Marcory Résidenciel",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 4,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 100000,
      adress: "Bingerville Faya",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 5,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 90000,
      adress: "Angré Chateau",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
    {
      id: 6,
      imgSrc: "/assets/images/maison1.jpg",
      typeLabel: "A Louer",
      price: 165000,
      adress: "Riviera 2",
      rates: "Rating",
      bed: "3",
      bath: "2",
      area: 100,
      city: "Abidjan, Cocody",
      buttonLabel: "voir",
    },
  ];
  return (
    <div className="bg-slate-100">
      <Container className="flex flex-col items-center justify-center">
        <Titleline
          title="Explorer dans les Meilleurs Androits"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <div className="w-full flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-3 md:gap-3 md:justify-center md:justify-items-center">
          {recentOffres.map((offre) => (
            <OffertBoxHorizontal
              key={offre.id}
              id={offre.id}
              imgSrc={offre.imgSrc}
              typeLabel={offre.typeLabel}
              price={offre.price}
              adress={offre.adress}
              rates={offre.rates}
              bed={offre.bed}
              bath={offre.bath}
              area={offre.area}
              city={offre.city}
              buttonLabel={offre.buttonLabel}
            />
          ))}
        </div>
        <Button className="mt-5" size="large">
          Voir plus d'offres
        </Button>
      </Container>
    </div>
  );
};

export default RecentOfforts;
