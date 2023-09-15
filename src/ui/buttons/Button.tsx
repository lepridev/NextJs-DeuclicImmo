import clsx from "clsx";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface Props {
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ico"
    | "success"
    | "warning"
    | "danger";
  size?: "small" | "medium" | "large" | "fullWidth";
  icon?: { icon: IconType };
  icoSize?: number;
  icoPosition?: "left" | "right";
  icoTheme?: "accent" | "secondary" | "gray";
  icoColor?: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "small",
  icon,
  icoSize = 20,
  icoPosition = "right",
  icoTheme = "accent",
  icoColor,
  handleClick,
}: Props) => {
  let variantStyle: string = "";
  let sizeStyle: string = "";

  switch (variant) {
    case "primary":
      variantStyle = "bg-[#0fca98] text-white hover:bg-[#0fcaa5] rounded-md";
      break;
    case "secondary":
      variantStyle = "bg-[#ffa50d] text-white hover:bg-[#ffb20d] rounded-md";
      break;
    case "outline":
      variantStyle =
        "bg-white text-black border border-gray hover:bg-gray-400 rounded-md";
      break;
    case "success":
      variantStyle =
        "bg-alert-success text-black hover:bg-secondary-400 rounded-md";
      break;
    case "warning":
      variantStyle =
        "bg-alert-warning text-white hover:bg-secondary-400 rounded-md";
      break;
    case "danger":
      variantStyle =
        "bg-alert-danger text-white hover:bg-secondary-400 rounded-md";
      break;
    case "ico":
      if (icoTheme === "accent") {
        variantStyle =
          "bg-[#0fca98] text-white hover:bg-primary-400 rounded-full";
      } else if (icoTheme === "gray") {
        variantStyle = "bg-gray-400 text-white rounded-full";
      }
      break;
  }

  switch (size) {
    case "small":
      sizeStyle = `${
        variant === "ico"
          ? "w-[30px] h-[30px] flex items-center justify-center"
          : "px-[14px] py-[4px] font-medium text-[12px]"
      }`;
      break;
    case "medium":
      sizeStyle = `${
        variant === "ico"
          ? "w-[40px] h-[40px] flex items-center justify-center"
          : "px-[18px] py-[4px] font-medium text-[13px]"
      }`;
      break;
    case "large":
      sizeStyle = `${
        variant === "ico"
          ? "w-[50px] h-[50px] flex items-center justify-center"
          : "px-[22px] py-[12px] font-medium text-[14px]"
      }`;
      break;
    case "fullWidth":
      sizeStyle = `${
        variant === "ico"
          ? "w-[50px] h-[50px] flex items-center justify-center"
          : "w-full px-[22px] py-[10px] font-medium text-[14px]"
      }`;
      break;
  }

  return (
    <button
      className={clsx(variantStyle, sizeStyle, className)}
      onClick={handleClick}
    >
      {icon && variant === "ico" ? (
        <icon.icon size={icoSize} color={icoColor} />
      ) : icon && variant !== "ico" ? (
        <div className="flex flex-row items-center gap-2">
          {icoPosition === "left" && (
            <>
              <icon.icon size={icoSize} color={icoColor} /> {children}
            </>
          )}
          {icoPosition === "right" && (
            <>
              {children} <icon.icon size={icoSize} color={icoColor} />
            </>
          )}
        </div>
      ) : (
        children
      )}
    </button>
  );
};
