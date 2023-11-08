"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import React from "react";
import { Typograpy } from "../typography/Typography";
import { FaPhone } from "react-icons/fa";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import { Button } from "../buttons/Button";

const OffertAgentBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col justify-center gap-2 border pb-3 rounded-lg bg-white shadow-md ">
      <div className="flex flex-row items-center justify-start gap-5 p-3 bg-green-400 rounded-t-lg">
        <div className="w-[70px] h-[70px] rounded-full border border-red-100 relative ">
          <Image
            src={"/assets/images/photoProfile.png"}
            alt="profil"
            fill
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Typograpy variant="h3" component="p" weight="bold" theme="white">
            Armand Lepri
          </Typograpy>
          <Typograpy
            variant="lead"
            component="p"
            theme="white"
            weight="medium"
            className="flex flex-row gap-2 items-center justify-center"
          >
            <FaPhone size={18} color="white" />
            01 718 900 91
          </Typograpy>
        </div>
      </div>
      <div className="p-5">
        <form>
          <Input
            type="text"
            placeholder="Nom"
            id="name"
            register={register}
            errorMsg="it is required"
            errors
          />
          <Input
            type="text"
            placeholder="Téléphone"
            id="telephone"
            register={register}
            errorMsg="it is required"
            errors
          />
          <Input
            type="text"
            placeholder="E-mail"
            id="email"
            register={register}
            errorMsg="it is required"
            errors
          />
          <Input
            type="text"
            placeholder="Offre"
            id="offre"
            register={register}
            errorMsg="it is required"
            errors
          />
          <TextArea
            id="message"
            placeholder="Message"
            register={register}
            errorMsg="it is required"
            errors={errors}
          />
          <div className="mt-3">
            <Button variant="primary" size="fullWidth">
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OffertAgentBox;
