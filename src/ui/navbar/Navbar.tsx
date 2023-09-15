import Image from "next/image";
import React from "react";
import { Button } from "../buttons/Button";
import { Typograpy } from "../typography/Typography";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 bg-white border-b border-gray-300 shadow-md sticky top-0 z-20">
      <div>
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo_deuclic.png"}
            alt="logo deuclic"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Link href={"/offres"}>
          <Typograpy
            variant="body-base"
            weight="bold"
            theme="primary"
            className="uppercase hover:text-red-300 cursor-pointer"
          >
            A louer
          </Typograpy>
        </Link>
        <Link href={"/offres/vendre"}>
          <Typograpy
            variant="body-base"
            weight="bold"
            theme="primary"
            className="uppercase hover:text-red-300 cursor-pointer"
          >
            A Vendre
          </Typograpy>
        </Link>

        <Link href={"/offres/residences"}>
          <Typograpy
            variant="body-base"
            weight="bold"
            theme="primary"
            className="uppercase hover:text-red-300 cursor-pointer"
          >
            Résidences Meublées
          </Typograpy>
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Button>Connexion</Button>
        <Button variant="secondary">Inscription</Button>
      </div>
    </div>
  );
};

export default Navbar;
