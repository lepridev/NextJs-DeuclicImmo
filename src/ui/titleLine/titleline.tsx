import React from "react";
import { Typograpy } from "../typography/Typography";

interface Props {
  title: string;
  description: string;
}

export const Titleline = ({ title, description }: Props) => (
  <div className="w-full flex flex-col items-center justify-center my-7">
    <Typograpy variant="h3" weight="semibold" className="text-center">
      {title}
    </Typograpy>
    <Typograpy variant="body-sm" className="max-w-lg text-center">
      {description}
    </Typograpy>
  </div>
);
