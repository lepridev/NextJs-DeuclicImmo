import React from "react";
import Avatar from "../avatar/Avatar";
import { Typograpy } from "../typography/Typography";
import Input from "../inputs/Input";
import { SubmitHandler, useForm } from "react-hook-form";

const AgentBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  return (
    <div className="flex flex-col items-start justify-start py-5 px-6 w-full mt-4 bg-white rounded-md ">
      <div className="flex flex-row  justify-start items-center gap-5 w-full bg-green-500 p-6 rounded-t-md ">
        <Avatar variant="medium" />
        <div>
          <Typograpy variant="h3" weight="semibold" theme="white">
            Howel Constant
          </Typograpy>
          <Typograpy variant="body-sm" theme="white">
            +225 01 71 89 00 91
          </Typograpy>
        </div>
      </div>
      <div className="w-full px-5  py-5">
        <Input
          type="text"
          placeholder="Telephone"
          id="phone"
          errors={errors}
          errorMsg="champ requis"
          register={register}
        />{" "}
        <Input
          type="text"
          placeholder="Telephone"
          id="phone"
          errors={errors}
          errorMsg="champ requis"
          register={register}
        />{" "}
        <Input
          type="text"
          placeholder="Telephone"
          id="phone"
          errors={errors}
          errorMsg="champ requis"
          register={register}
        />
      </div>
    </div>
  );
};

export default AgentBox;
