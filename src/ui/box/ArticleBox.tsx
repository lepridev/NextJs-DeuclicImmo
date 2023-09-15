import Image from "next/image";
import React from "react";
import { AiFillCalendar, AiOutlineArrowRight } from "react-icons/ai";
import { Typograpy } from "../typography/Typography";
import { Button } from "../buttons/Button";

interface Props {
  imgSrc?: string;
  date?: string;
  label?: string;
  description?: string;
}

const ArticleBox = ({
  imgSrc = "/assets/images/maison1.jpg",
  date,
  label = "Des Idées de décoration réalisées par des PROs",
  description = " Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae.",
}: Props) => {
  return (
    <div className="w-[301px] h-[400px] pb-2  border border-gray-200 rounded-md ">
      <div className="w-[300px] h-[46%] relative">
        <Image
          src={imgSrc}
          alt="maison sur deuclic"
          fill
          className="absolute object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col items-start justify-start h-[54%] p-3 space-y-3">
        <div className="flex flex-row items-center justify-start gap-2">
          <AiFillCalendar size={20} color="gray" />
          <Typograpy variant="body-sm">{date}</Typograpy>
        </div>
        <div>
          <Typograpy variant="body-base" weight="semibold">
            {label}
          </Typograpy>
        </div>
        <div>
          <Typograpy variant="body-sm">{description}</Typograpy>
        </div>
        <div className="w-full flex flex-row justify-end">
          <Button
            variant="outline"
            icoPosition="right"
            icon={{ icon: AiOutlineArrowRight }}
            icoSize={12}
          >
            Continuer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticleBox;
