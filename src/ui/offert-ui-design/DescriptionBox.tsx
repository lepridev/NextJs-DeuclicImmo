import React from "react";
import { Typograpy } from "../typography/Typography";

const DescriptionBox = ({ description }) => {
  return (
    <div className="bg-white p-4 m-4 space-y-2 rounded-md">
      <div className="bg-gray-100 w-full h-6 flex items-center justify-start px-3 rounded-md">
        <Typograpy variant="body-sm" weight="semibold">
          Description
        </Typograpy>
      </div>

      <div className="w-full">
        <Typograpy variant="body-sm">{description}</Typograpy>
      </div>
    </div>
  );
};

export default DescriptionBox;
