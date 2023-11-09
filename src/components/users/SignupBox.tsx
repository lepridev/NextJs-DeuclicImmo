"use client";

import { Button } from "@/ui/buttons/Button";
import BoxContainer from "@/ui/container/BoxContainer";
import Input from "@/ui/inputs/Input";
import { Typograpy } from "@/ui/typography/Typography";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const SignupBox = () => {
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
          Inscription
        </Typograpy>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <Typograpy variant="caption1" component="p">
              Nom
            </Typograpy>
            <Input
              type="text"
              id="firstname"
              placeholder="Votre nom"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
          </div>
          <div>
            <Typograpy variant="caption1" component="p">
              Prénoms
            </Typograpy>
            <Input
              type="text"
              id="lastname"
              placeholder="Votre prénoms"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
          </div>
          <div>
            <Typograpy variant="caption1" component="p">
              Email
            </Typograpy>
            <Input
              type="text"
              id="email"
              placeholder="Votre email"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
          </div>
          <div>
            <Typograpy variant="caption1" component="p">
              Utilisateur
            </Typograpy>
            <Input
              type="text"
              id="username"
              placeholder="Votre nom pseudo"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
          </div>
          <div>
            <Typograpy variant="caption1" component="p">
              Mot de passe
            </Typograpy>
            <Input
              type="password"
              id="password"
              placeholder="Mot de passe"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
            <Input
              type="password"
              id="password"
              placeholder="Confirmer Mot de passe"
              register={register}
              errors={errors}
              errorMsg="Veuillez renseigné tous les champs"
              required
            />
          </div>

          <div>
            <Button>Inscription</Button>
          </div>
        </form>
        <div>
          <Typograpy
            variant="caption1"
            component="p"
            className="text-red-300 flex flex-col items-center justify-center"
          >
            Vous avez déja un compte ?
            <Link href={"/login"}>
              <span className="text-blue-500">Connectez-vous ici</span>
            </Link>
          </Typograpy>
        </div>
      </div>
    </div>
  );
};

export default SignupBox;
