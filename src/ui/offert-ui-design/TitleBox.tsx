import React from "react";
import { Typograpy } from "../typography/Typography";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const TitleBox = () => {
  return (
    <div className="bg-white p-4 m-4 space-y-2 rounded-md">
      <div className="bg-gray-100 w-20 h-6 flex items-center justify-center rounded-full">
        <Typograpy variant="body-sm">A louer</Typograpy>
      </div>
      <Typograpy variant="body-base" weight="semibold" className="mt-3">
        121 Parlmeraie Marie Guiro
      </Typograpy>
      <div className="flex flex-row items-center justify-start gap-2 w-full">
        <AiOutlineExclamationCircle />
        <Typograpy variant="body-sm">
          Abidjan, Palmeraie Rue Ministre non loins de MaxiCanada
        </Typograpy>
      </div>
      <div>
        <Typograpy variant="h3" weight="bold" theme="primary">
          180000FCFA/Mois
        </Typograpy>
      </div>
    </div>
  );
};

export default TitleBox;
