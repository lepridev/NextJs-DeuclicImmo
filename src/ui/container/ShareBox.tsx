"use client";

import clsx from "clsx";
import React, { useState } from "react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaArrowDown,
  FaSave,
  FaShare,
} from "react-icons/fa";
import { Typograpy } from "../typography/Typography";

const ShareBox = () => {
  return (
    <div className="flex flex-col justify-center gap-2 border   pt-3 pb-3 px-10 rounded-lg bg-white shadow-md ">
      <Typograpy variant="body-lg" component="span" weight="bold">
        Partager
      </Typograpy>
      <div className="flex  flex-row items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center p-4 rounded-md border border-green-500 cursor-pointer">
          <Typograpy
            variant="body-lg"
            component="span"
            weight="bold"
            className="flex flex-row items-center justify-center gap-2"
          >
            <FaShare size={20} color="green" />
            Partager
          </Typograpy>
        </div>
        <div className="flex flex-col items-center justify-center p-4 rounded-md border border-orange-500  cursor-pointer">
          <Typograpy
            variant="body-lg"
            component="span"
            weight="bold"
            className="flex flex-row items-center justify-center gap-2"
          >
            <FaSave size={20} color="orange" />
            Partager
          </Typograpy>
        </div>
      </div>
    </div>
  );
};

export default ShareBox;
