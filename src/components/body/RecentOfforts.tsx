"use client";
import OffertBoxHorizontal from "@/ui/box/OffertBoxHorizontal";
import { Button } from "@/ui/buttons/Button";
import Container from "@/ui/container/Container";
import { Titleline } from "@/ui/titleLine/titleline";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "@/ui/spinner/Spinner";
import { icons } from "react-icons";
import Link from "next/link";

const RecentOfforts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRecentOfferts = async () => {
    setLoading(true);
    const res = await axios.get("http://localhost:3000/api/properties");
    console.log("first", res);
    setData(res.data.getAllOfferts);
    setLoading(false);
  };

  useEffect(() => {
    getRecentOfferts();
  }, []);

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

  console.log("data", data);

  return (
    <div className="bg-slate-50 w-full">
      <Container className="flex flex-col items-center justify-center">
        <Titleline
          title="Explorer dans les Meilleurs Androits"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />

        {loading ? (
          <div className="w-full h-[200] py-20">
            <Spinner />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-3  md:justify-center md:justify-items-center">
            {data.slice(0, 3).map((offert) => (
              <OffertBoxHorizontal
                key={offert._id}
                id={offert._id}
                bath={offert.bath}
                bed={offert.bed}
                city={offert.city}
                location={offert.location}
                buttonLabel="Voir"
                titre={offert.titre}
                square={offert.square}
                price={offert.price}
              />
            ))}
          </div>
        )}

        {loading === false && (
          <Link href={"/louer"}>
            <Button className="mt-5" size="large">
              Voir plus doffres
            </Button>
          </Link>
        )}
      </Container>
    </div>
  );
};

export default RecentOfforts;
