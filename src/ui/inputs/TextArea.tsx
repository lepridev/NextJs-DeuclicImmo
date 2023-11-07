import { Typograpy } from "../typography/Typography";

interface Props {
  placeholder: string;
  register?: any;
  errors?: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
}

const TextArea = ({
  placeholder,
  register,
  errors,
  errorMsg = "attention",
  id,
  required = true,
}: Props) => {
  return (
    <div className="flex flex-row items-center justify-center p-2 gap-2 rounded-md">
      <textarea
        id={id}
        rows={7}
        placeholder={placeholder}
        {...register(id, {
          required: { value: required, message: errorMsg },
        })}
        className=" w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
      />

      {errors[id] && (
        <Typograpy variant="caption1" theme="secondary" component="div">
          {/* {errors[id]?.message} */} Error Message
        </Typograpy>
      )}
    </div>
  );
};

export default TextArea;
