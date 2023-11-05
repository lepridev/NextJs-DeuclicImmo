"use client";

import OffertBoxHorizontal from "@/ui/box/OffertBoxHorizontal";
import { Button } from "@/ui/buttons/Button";
import Container from "@/ui/container/Container";
import Spinner from "@/ui/spinner/Spinner";
import { Titleline } from "@/ui/titleLine/titleline";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Louer = ({ data }: any) => {
  const [AllOfferts, setAllOfferts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllData = async () => {
    setLoading(true);
    const res = await fetchData();
    setAllOfferts(res.data.getAllOfferts);
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  console.log(data);

  return (
    <div className="bg-slate-100">
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
            {AllOfferts.map((offert) => (
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
                href={offert._id}
              />
            ))}
          </div>
        )}

        {loading === false && (
          <Button className="mt-5" size="large">
            Voir plus doffres
          </Button>
        )}
      </Container>
    </div>
  );
};

export default Louer;

export async function fetchData() {
  const res = await fetch("http://localhost:3000/api/properties", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {
    data,
  };
}
