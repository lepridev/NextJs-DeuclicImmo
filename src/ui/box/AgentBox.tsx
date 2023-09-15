import React from "react";
import Avatar from "../avatar/Avatar";
import { Typograpy } from "../typography/Typography";

interface Props {
  imgSrc?: string;
  description: string;
  name: string;
}

const AgentBox = ({ imgSrc, description, name }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-[300px] p-4 space-y-4 bg-white border border-gray-100 shadow-md rounded-md">
      <div className="flex flex-row items-center justify-center">
        <Avatar variant="medium" imgSrc={imgSrc} />
      </div>
      <div className="text-center">
        <Typograpy variant="body-sm">{description}</Typograpy>
      </div>
      <div>
        <Typograpy variant="body-sm" weight="semibold">
          {name}
        </Typograpy>
        <Typograpy variant="caption1">Agent Immobilier</Typograpy>
      </div>
    </div>
  );
};

export default AgentBox;
