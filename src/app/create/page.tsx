"use client";

import { Button } from "@/ui/buttons/Button";
import Input from "@/ui/inputs/Input";
import Select from "@/ui/inputs/Select";
import { Typograpy } from "@/ui/typography/Typography";
import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const CreateProperty = () => {
  const [property, setProperty] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const res = await axios.post(
      "http://localhost:3000/api/properties/create",
      {
        data,
      }
    );
    if (res) {
      console.log(res);
    }
  };

  console.log("property", property);

  const cityOptions = ["Abidjan", "Bingerville", "Bassam", "Bonoua", "Dabou"];
  const bathOptions = ["1", "2", "3", "4", "5+"];
  const parkOptions = ["interne", "extrene"];
  const bedOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "+9"];
  const cautionOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <div className="w-[70%] flex flex-col items-center justify-between ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <Typograpy variant="caption2">Titre</Typograpy>
          <Input
            id="titre"
            type="text"
            placeholder="Titre"
            required={true}
            register={register}
            errorMsg="Attention"
            errors={errors}
          />
        </div>
        <div className="w-full">
          <Typograpy variant="caption2">Description</Typograpy>
          <Input
            id="description"
            type="text"
            placeholder="description"
            required={true}
            register={register}
            errorMsg="Attention"
            errors={errors}
          />
        </div>
        <div className="w-full">
          <Typograpy variant="caption2">Contenu</Typograpy>
          <Input
            id="contenu"
            type="text"
            placeholder="Contenu"
            required={true}
            register={register}
            errorMsg="Attention"
            errors={errors}
          />
        </div>
        <div className="w-full h-[200px] bg-slate-50 ">Images</div>
        <div className="w-full">
          <Typograpy variant="caption2">Ville</Typograpy>
          <Select register={register} id="city" options={cityOptions} />
        </div>
        <div className="w-full">
          <Typograpy variant="caption2">Localisation</Typograpy>
          <Input
            id="location"
            type="text"
            placeholder="Lieux"
            required={true}
            register={register}
            errorMsg="Attention"
            errors={errors}
          />
        </div>
        <div className="flex flex-row w-full">
          <div className="w-1/4">
            <Typograpy variant="caption2">Douches</Typograpy>
            <Select register={register} id="bath" options={bathOptions} />
          </div>
          <div className="w-1/4">
            <Typograpy variant="caption2">Chambres</Typograpy>
            <Select register={register} id="bed" options={bedOptions} />
          </div>
          <div className="w-1/4">
            <Typograpy variant="caption2">Garage</Typograpy>
            <Select register={register} id="parking" options={parkOptions} />
          </div>
          <div className="w-1/4">
            <Typograpy variant="caption2">Superficie</Typograpy>
            <Input
              id="square"
              type="text"
              placeholder="Superficie"
              required={true}
              register={register}
              errorMsg="Attention"
              errors={errors}
            />
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="w-1/2">
            <Typograpy variant="caption2">Caution</Typograpy>
            <Select register={register} id="caution" options={cautionOptions} />
          </div>
          <div className="w-1/2">
            <Typograpy variant="caption2">Prix</Typograpy>
            <Input
              id="price"
              type="text"
              placeholder="Superficie"
              required={true}
              register={register}
              errorMsg="Attention"
              errors={errors}
            />
          </div>
        </div>
        <div className="px-10">
          <Button size="fullWidth">Soumettre</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProperty;
