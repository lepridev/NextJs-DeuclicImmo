"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyCarousel({
  images,
  legend,
  autoplay,
  interval,
  infiniteLoop,
}) {
  return (
    <Carousel
      autoPlay={autoplay}
      interval={interval}
      infiniteLoop={infiniteLoop}
    >
      {images?.map((image, index) => (
        <div className="relative w-full h-[200px] md:h-[600px] " key={index}>
          <Image src={image.imgSrc} alt="maison" fill />
          {legend && <p className="legend">{image.legend}</p>}
        </div>
      ))}
      {/* <div className="relative w-full h-[200px] md:h-[600px] ">
        <Image src="/assets/images/maison2.jpg" alt="maison" fill />
        <p className="legend">Légende 2</p>
      </div>
      <div className="relative w-full h-[200px] md:h-[600px] ">
        <Image src="/assets/images/maison3.jpg" alt="maison" fill />
        <p className="legend">Légende 3</p>
      </div> */}
    </Carousel>
  );
}
