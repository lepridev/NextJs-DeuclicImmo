"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyCarousel() {
  return (
    <Carousel autoPlay interval={10000} infiniteLoop>
      <div className="relative w-full h-[200px] md:h-[600px] ">
        <Image src="/assets/images/maison1.jpg" alt="maison" fill />
        <p className="legend">Légende 1</p>
      </div>
      <div className="relative w-full h-[200px] md:h-[600px] ">
        <Image src="/assets/images/maison2.jpg" alt="maison" fill />
        <p className="legend">Légende 2</p>
      </div>
      <div className="relative w-full h-[200px] md:h-[600px] ">
        <Image src="/assets/images/maison3.jpg" alt="maison" fill />
        <p className="legend">Légende 3</p>
      </div>
    </Carousel>
  );
}
