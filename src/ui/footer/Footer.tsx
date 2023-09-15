import Image from "next/image";
import React from "react";
import { Typograpy } from "../typography/Typography";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-10 p-10 bg-black">
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="w-[200px] h-[90px] relative">
          <Image
            src={"/assets/images/logo_deuclic.png"}
            alt="logo deuclic platforme immobiliere agence Abidjan"
            fill
            className="object-scale-down absolute"
          />
        </div>
        <Typograpy variant="body-sm" theme="white">
          Palmeraie, Cocody, Abidjan CI
        </Typograpy>
        <Typograpy variant="body-sm" theme="white">
          +225 71 890 091 / 01 50 61 73 06
        </Typograpy>
        <Typograpy variant="body-sm" theme="white">
          info@deuclic.net
        </Typograpy>
      </div>
      <div className="flex flex-col items-start justify-center space-y-2">
        <Typograpy variant="lead" component="h3" theme="white">
          About
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          A-Propos de nous
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Nous contacter
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Termes et Condtions
        </Typograpy>
      </div>
      <div className="space-y-2">
        <Typograpy variant="lead" component="h3" theme="white">
          Liens utiles
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Toutes les Offres
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Biens à vendre
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Biens a louer
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Residences Meublées
        </Typograpy>
      </div>
      <div className="space-y-2">
        <Typograpy variant="lead" component="h3" theme="white">
          Les Nouveautés
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Recemment publier
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Architecture
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Decoration Immobiliere
        </Typograpy>
        <Typograpy variant="body-sm" component="p" theme="white">
          Accessoires de construction
        </Typograpy>
      </div>
      <div className="space-y-2">
        <Typograpy variant="lead" component="h3" theme="white">
          Telecharger lApplication
        </Typograpy>
        <Image
          src={"/assets/images/play.png"}
          alt="app store play store sur deuclic immobilier agence"
          width={150}
          height={80}
        />
        <Image
          src={"/assets/images/appfill.png"}
          alt="app store play store sur deuclic immobilier agence"
          width={150}
          height={80}
        />
      </div>
    </div>
  );
};

export default Footer;
