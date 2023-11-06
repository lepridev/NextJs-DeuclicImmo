import React from "react";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";
import { IconType } from "react-icons";

interface Props {
  label?: any;
  icon?: { icon: IconType };
}

export const Comodite = ({ label, icon }: Props) => (
  <div className="flex flex-row items-center justify-start gap-1">
    <Button
      variant="ico"
      icon={icon}
      icoTheme="gray"
      icoColor="green"
      icoSize={15}
    />
    {typeof label !== "number" ? (
      <Typograpy variant="body-sm">{label} m²</Typograpy>
    ) : (
      <Typograpy variant="body-sm">{label}</Typograpy>
    )}
  </div>
);

//
