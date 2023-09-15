import Image from "next/image";
import React from "react";
import Container from "../container/Container";
import Input from "../inputs/Input";
import { useForm } from "react-hook-form";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";

type Props = {};

const Banner = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  return (
    <div className="w-[100%] h-[500px] relative">
      <Image
        src={"/assets/images/banner1.jpg"}
        alt="deuclic banner "
        fill
        className="object-cover absulte"
      />
      <Container className="flex flex-row items-center justify-center absolute w-full top-1/2 left-[10%]">
        <form>
          <Typograpy variant="h1" weight="bold" theme="secondary">
            Trouvez votre nouvelle maison
          </Typograpy>

          <Input
            type="text"
            placeholder="Votre recherche"
            register={register}
            errors={errors}
            errorMsg="Saisisez"
            id="bien"
          />
          <Button>Rechercher</Button>
        </form>
      </Container>
    </div>
  );
};

export default Banner;
