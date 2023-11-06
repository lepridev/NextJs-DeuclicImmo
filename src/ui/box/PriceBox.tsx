import React from "react";
import { Button } from "../buttons/Button";
import { Typograpy } from "../typography/Typography";

interface Props {
  price?: number;
  pack?: String;
  buyCredit?: string;
  postFrequency?: string;
  expirationCredit?: string;
  assistance?: string;
  visibility?: string;
  btnLabel: String;
  color?: "primary" | "secondary" | "free";
}

const PriceBox = ({
  price,
  pack,
  buyCredit = "RENOUVELABLE",
  postFrequency = "24H de post gratuit",
  expirationCredit = "Sans credit dans le compte",
  assistance = "AVEC ASSISTANCE A LA DEMANDE",
  visibility = "Visibilité standard",
  btnLabel,
  color = "free",
}: Props) => {
  return (
    <div className="w-[300px] p-3 border border-gray-200 rounded-md bg-white">
      <div
        className={`flex flex-col items-center justify-center w-full h-[160px]  rounded-md ${
          color === "primary"
            ? "bg-[#E9F8EB]"
            : color === "secondary"
            ? "bg-[#c5cfb8]"
            : "bg-[#FFF]"
        }`}
      >
        <Typograpy variant="h1" weight="bold" theme="secondary">
          {price ? price : 0} FCFA
        </Typograpy>
        <Typograpy variant="h3" weight="bold" theme="primary">
          {pack}
        </Typograpy>
      </div>
      <div className="space-y-5 py-4">
        <Typograpy
          variant="body-lg"
          weight="regular"
          theme="black"
          className="border-b border-dashed pb-2 border-gray-400"
        >
          {buyCredit}
        </Typograpy>
        <Typograpy
          variant="body-lg"
          weight="regular"
          theme="black"
          className="border-b border-dashed pb-2 border-gray-400"
        >
          {postFrequency}
        </Typograpy>
        <Typograpy
          variant="body-lg"
          weight="regular"
          theme="black"
          className="border-b border-dashed pb-2 border-gray-400"
        >
          {expirationCredit}
        </Typograpy>
        <Typograpy
          variant="body-lg"
          weight="regular"
          theme="black"
          className="border-b border-dashed pb-2 border-gray-400"
        >
          {assistance}
        </Typograpy>
        <Typograpy
          variant="body-lg"
          weight="regular"
          theme="black"
          className="border-b border-dashed pb-2 border-gray-400"
        >
          {visibility}
        </Typograpy>
      </div>
      <div className="flex items-center justify-center w-full py-4">
        <Button size="fullWidth">{btnLabel}</Button>
      </div>
    </div>
  );
};

export default PriceBox;
