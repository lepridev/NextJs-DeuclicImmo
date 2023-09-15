import React from "react";
import { Typograpy } from "../typography/Typography";

interface Props {
  type?: "text" | "email" | "password" | "checkbox";
  register: any;
  id: string;
}

const CheckBox = ({ type = "checkbox", register, id }: Props) => {
  return (
    <div className="flex flex-row items-center justify-center p-2 gap-2 rounded-md">
      <input id={id} type="checkbox" {...register(id)} />
      <Typograpy>{id}</Typograpy>
    </div>
  );
};

export default CheckBox;
