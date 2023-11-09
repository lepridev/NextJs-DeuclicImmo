"use client";

import { Button } from "@/ui/buttons/Button";
import BoxContainer from "@/ui/container/BoxContainer";
import Input from "@/ui/inputs/Input";
import { Typograpy } from "@/ui/typography/Typography";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="max-w-2xl border border-gray-200 mx-auto my-auto mt-20 p-10 shadow-sm rounded-md bg-white">
      <div className="mb-8">
        <Typograpy variant="h2" component="h3" theme="gray" weight="bold">
          Connexion
        </Typograpy>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Typograpy variant="caption1" component="p">
              Email/Utilisateur
            </Typograpy>
            <Input
              type="text"
              id="email"
              placeholder="Email/Utilisateur"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
          </div>
          <div>
            <Typograpy variant="caption1" component="p">
              Email/Utilisateur
            </Typograpy>
            <Input
              type="text"
              id="password"
              placeholder="Email/Utilisateur"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
          </div>
          <div>
            <Typograpy
              variant="caption1"
              component="p"
              className="text-red-300"
            >
              Forgot you Password ?
            </Typograpy>
          </div>
          <div>
            <Button>Connexion</Button>
          </div>
        </form>
        <div>
          <Typograpy
            variant="caption1"
            component="p"
            className="text-red-300 flex flex-col items-center justify-center"
          >
            Vous avez déja un compte ?
            <Link href={"/signup"}>
              <span className="text-blue-500">Inscrivez vous ici</span>
            </Link>
          </Typograpy>
        </div>
      </div>
    </div>
  );
};

export default LoginBox;
