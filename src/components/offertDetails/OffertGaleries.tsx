import BoxContainer from "@/ui/container/BoxContainer";
import Image from "next/image";
import React from "react";

const OffertGaleries = () => {
  const images = [
    {
      src: "/assets/images/maison1.jpg",
    },
    {
      src: "/assets/images/maison2.jpg",
    },
    {
      src: "/assets/images/maison3.jpg",
    },
    {
      src: "/assets/images/maison4.jpg",
    },
    {
      src: "/assets/images/maison5.jpg",
    },
  ];

  return (
    <BoxContainer openBtn title="Galeries">
      <div className="flex md:flex-row items-center justify-start flex-wrap gap-3 pt-5">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt="maison"
            width={200}
            height={200}
            className="object-scale-down rounded-sm"
          />
        ))}
      </div>
    </BoxContainer>
  );
};

export default OffertGaleries;
