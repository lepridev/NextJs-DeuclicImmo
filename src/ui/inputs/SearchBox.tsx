import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import { log } from "console";
import CheckBox from "./CheckBox";
import { Button } from "../buttons/Button";

type Props = {
  data?: any;
};

const SearchBox = (props: Props) => {
  const communes = [
    "Selectionez une commune",
    "Plateau",
    "Abobo",
    "Adjamé",
    "Attécoubé",
    "Cocody",
    "Koumassi",
    "Marcory",
    "Port-Bouët",
    "Treichville",
    "Yopougon",
  ];
  const types = [
    "Selectionez le bien",
    "Studio",
    "2 Pieces",
    "3 Pieces",
    "4 Pieces",
    "Villa",
    "Duplex",
    "Terrain",
    "Entrepot",
  ];
  const prix = [
    "Selectionez le prix",
    "0 - 100.000",
    "100.000 - 150.000",
    "150.000 - 200.000",
    "200.000 - 250.000",
    "250.000 - 300.000",
    "300.000 - 350.000",
    "400.000 - 450.000",
    "450.000 - 500.000",
    "500.000 - 550.000",
    "550.000 - 600.000",
    "600.000 - 650.000",
    "650.000 - 700.000",
    "700.000 - 750.000",
    "750.000 - 800.000",
    "800.000 - 850.000",
    "850.000 - 900.000",
    "900.000 - 950.000",
    "1.000.000 - +1.000.000",
  ];
  const chambres = ["Nombre de chambre", "1", "2", "3", "4", "5", "+5"];
  const toilettes = ["Nombre de toilette", "1", "2", "+3"];
  const superficie = [
    "Superficie",
    "0 - 25",
    "25 - 30",
    "30 - 35",
    "40 - 45",
    "45 - 50",
    "50 - 55",
    "55 - 60",
    "60 - 65",
    "65 - 70",
    "70 - 75",
    "75 - 80",
    "80 - 85",
    "85 - 90",
    "90 - 95",
    "95 - 100",
    "100 - +100",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log("data", data);
    reset();
  };

  return (
    <div className="w-[360px] p-3 py-5 border border-gray-200 rounded-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <Input
          type="text"
          placeholder="Saisie une ville ou commune"
          register={register}
          errors={errors}
          errorMsg="Erreur"
          id="offre"
        />
        <Select register={register} id="ville" options={communes} />
        <Select register={register} id="type" options={types} />
        <Select register={register} id="prix" options={prix} />
        <Select register={register} id="chambre" options={chambres} />
        <Select register={register} id="toilette" options={toilettes} />
        <Select register={register} id="superficie" options={superficie} />
        <div className="flex flex-row flex-wrap">
          <CheckBox register={register} id="parkink" />
          <CheckBox register={register} id="securite" />
          <CheckBox register={register} id="ecole" />
          <CheckBox register={register} id="boutique" />
          <CheckBox register={register} id="immeuble" />
          <CheckBox register={register} id="ascenseur" />
        </div>
        <Button variant="primary" size="fullWidth">
          Trouver
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
