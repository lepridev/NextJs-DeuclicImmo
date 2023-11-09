"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineCloudUpload,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIOpen] = useState(false);

  const toggleMobile = () => {
    setIOpen(!isOpen);
  };

  return (
    <div className="w-full h-[60px] mx-auto flex flex-row justify-between items-center px-3 py-2 border-b-2 border-green-600 shadow-lg z-30">
      <div className="w-1/3 flex flex-row items-center justify-center relative">
        <Link href={"/"} className="flex flex-col items-center justify-center">
          <Image
            src={"/assets/images/logo_deuclic.png"}
            width={150}
            height={150}
            className=" object-contain absolute"
            alt="deuclic immobilier"
          />
        </Link>
      </div>
      <div className="w-2/3 flex flex-row items-end justify-end relative">
        <div className="md:hidden" onClick={toggleMobile}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="hidden md:flex flex-row justify-center items-center text-sm">
            <Link href={"/louer"}>
              <button className="bg-slate-200-100 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md hover:text-green-500">
                Louer
              </button>
            </Link>
            <Link href={"/vendre"}>
              <button className="bg-slate-200-100 py-2 px-5 text-gray-600 hover:bg-gray-100 rounded-md hover:text-green-500">
                Vendre
              </button>
            </Link>
            <Link href={"/residence"}>
              <button className="bg-slate-200-100 py-2 px-5 text-gray-600 hover:bg-gray-100 rounded-md hover:text-green-500">
                Résidences
              </button>
            </Link>
          </div>
          <div className=" hidden md:flex flex-row items-center justify-center gap-2">
            <Link href={"/create"}>
              <button className=" flex flex-row items-center justify-center gap-1 bg-gray-100 py-2 px-3 text-sm text-green-400 rounded-md shadow-sm hover:bg-green-100">
                <AiOutlineCloudUpload
                  className="md:hidden lg:block"
                  size={20}
                />
                Ajouter
              </button>
            </Link>
            <Link href={"/login"}>
              <button className="bg-green-400 py-2 px-3 text-sm text-white rounded-md shadow-sm hover:bg-green-300">
                Connexion
              </button>
            </Link>
            {/* <button className="bg-gray-100 py-2 px-3 text-sm text-gray-500 rounded-md shadow-sm  hover:bg-slate-100">
              Inscription
            </button> */}
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`z-30 absolute md:hidden  w-[75%] max-h-screen top-11 bg-slate-50 ${
            isOpen ? "flex" : "hidden"
          } flex-col items-center justify-between gap-2 p-6 text-xs shadow-md rounded-b-md duration-100`}
        >
          <Link href={""}>
            <button className="bg-slate-200-100 py-2 px-3 text-gray-600 hover:bg-gray-100 rounded-md hover:text-green-500">
              Louer
            </button>
          </Link>
          <Link href={""}>
            <button className="bg-slate-200-100 py-2 px-5 text-gray-600 hover:bg-gray-100 rounded-md hover:text-green-500">
              Vendre
            </button>
          </Link>
          <Link href={""}>
            <button className="bg-slate-200-100 py-2 px-5 text-gray-600 hover:bg-gray-100 rounded-md hover:text-green-500">
              Résidences
            </button>
          </Link>
          <button className="w-full flex flex-row items-center justify-center gap-1 bg-gray-100 py-1 px-6 text-xs text-green-400 rounded-md shadow-sm hover:bg-green-100">
            <AiOutlineCloudUpload className="md:hidden lg:block" size={18} />
            Ajouter
          </button>
          <button className="w-full bg-green-400 py-1 px-6 text-xs text-white rounded-md shadow-sm hover:bg-green-300">
            Connexion
          </button>
          <button className="w-full bg-gray-100 py-1 px-6 text-xs text-green-400 rounded-md shadow-sm  hover:bg-slate-100">
            Inscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
