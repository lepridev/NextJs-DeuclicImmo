import React from "react";

interface Props {
  register: any;
  id: string;
  options?: string[];
}

const Select = ({ register, id, options }: Props) => {
  return (
    <div className="flex flex-row items-center justify-center p-2 gap-2 rounded-md">
      <select
        id={id}
        {...register(id)}
        className=" w-full mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
      >
        {options?.map((option, index) => (
          <option
            key={index}
            defaultValue={option[0]}
            value={option}
            className="text-[13px]"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
