import React from "react";
import { Typograpy } from "../typography/Typography";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface Props {
  bath: String;
  bed: String;
  square: String;
  caution: String;
  parking: String;
}

const DetailBox = ({ bath, bed, square, caution, parking }: Props) => {
  return (
    <div className="bg-white p-4  m-4 space-y-2 rounded-md">
      <div className="bg-gray-100 w-full h-6 flex items-center justify-start px-3 rounded-md">
        <Typograpy variant="body-sm" weight="semibold">
          Details de loffres
        </Typograpy>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full">
        <Typograpy variant="body-sm" weight="semibold">
          Chambre: <span>{bed} </span>
        </Typograpy>
        <Typograpy variant="body-sm" weight="semibold">
          Toillettes: <span>{bath}</span>
        </Typograpy>
        <Typograpy variant="body-sm" weight="semibold">
          parking: <span>{parking} </span>
        </Typograpy>
        <Typograpy variant="body-sm" weight="semibold">
          Caution: <span>{caution} </span>
        </Typograpy>
        <Typograpy variant="body-sm" weight="semibold">
          Superficie: <span>{square} </span>
        </Typograpy>
      </div>
    </div>
  );
};

export default DetailBox;
