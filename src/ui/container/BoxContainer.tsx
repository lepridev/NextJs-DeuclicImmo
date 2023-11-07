"use client";

import clsx from "clsx";
import React, { useState } from "react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaArrowDown,
} from "react-icons/fa";
import { Typograpy } from "../typography/Typography";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const BoxContainer = ({ children, className, title = "Titre" }: Props) => {
  const [open, setOpen] = useState(false);
  const isOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={clsx(
        className,
        "flex flex-col justify-center gap-2 border   pt-3 pb-3 px-10 rounded-lg bg-white shadow-md "
      )}
    >
      <div className="flex flex-row items-center justify-between border-b border-gray-200 p-2">
        <Typograpy variant="body-lg" component="span" weight="bold">
          {title}
        </Typograpy>
        <div>
          {open ? (
            <FaArrowCircleUp
              color="black"
              size={15}
              className="hover:scale-125 cursor-pointer"
              onClick={isOpen}
            />
          ) : (
            <FaArrowCircleDown
              color="black"
              size={15}
              className="hover:scale-125 cursor-pointer"
              onClick={isOpen}
            />
          )}
        </div>
      </div>
      <div className={clsx(open === false ? "hidden" : "")}>{children}</div>
    </div>
  );
};

export default BoxContainer;
