import React from "react";
import { Typograpy } from "../typography/Typography";
import { AiFillCheckCircle } from "react-icons/ai";

const InfrastructureBox = () => {
  return (
    <div className="bg-white p-4 m-4 space-y-2 rounded-md">
      <div className="bg-gray-100 w-full h-6 flex items-center justify-start px-3 rounded-md">
        <Typograpy variant="body-sm" weight="semibold">
          Infrastructures
        </Typograpy>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full space-y-3 pl-4">
        <div className="flex flex-row items-center justify-start gap-2">
          <AiFillCheckCircle color="green" />
          <Typograpy variant="body-sm" weight="semibold">
            Hopital
          </Typograpy>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <AiFillCheckCircle color="green" />
          <Typograpy variant="body-sm" weight="semibold">
            Pharmacie
          </Typograpy>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <AiFillCheckCircle color="green" />
          <Typograpy variant="body-sm" weight="semibold">
            Pharmacie
          </Typograpy>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
          <AiFillCheckCircle color="green" />
          <Typograpy variant="body-sm" weight="semibold">
            Pharmacie
          </Typograpy>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureBox;
