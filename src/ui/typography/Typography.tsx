import clsx from "clsx";

interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?:
    | "black"
    | "gray"
    | "white"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning";
  weight?: "regular" | "medium" | "semibold" | "bold";
  className?: string;
  children: React.ReactNode;
}

export const Typograpy = ({
  variant = "lead",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className,
  children,
}: Props) => {
  let variantStyle: string = "",
    colorStyles: string = "",
    weightStyles: string = "";

  switch (variant) {
    case "display":
      variantStyle = "text-6xl";
      break;
    case "h1":
      variantStyle = "text-3xl";
      break;
    case "h2":
      variantStyle = "text-2xl";
      break;
    case "h3": //Default
      variantStyle = "text-xl";
      break;
    case "h4":
      variantStyle = "text-lg";
      break;
    case "lead":
      variantStyle = "text-base";
      break;
    case "body-lg":
      variantStyle = "text-sm";
      break;
    case "body-base":
      variantStyle = "text-base";
      break;
    case "body-sm":
      variantStyle = "text-xs";
      break;
    case "caption1":
      variantStyle = "text-[10px]";
      break;
  }

  switch (theme) {
    case "black":
      colorStyles = "text-[#2d3954]";
      break;
    case "gray":
      colorStyles = "text-gray-700";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primary":
      colorStyles = "text-[#0fca98]";
      break;
    case "secondary":
      colorStyles = "text-[#ffa50d]";
      break;
    case "danger":
      colorStyles = "text-alert-danger";
      break;
    case "success":
      colorStyles = "text-alert-success";
      break;
    case "warning":
      colorStyles = "text-alert-warning";
      break;
  }

  switch (weight) {
    case "regular":
      weightStyles = "font-normal";
      break;
    case "medium":
      weightStyles = "font-normal";
      break;
    case "semibold":
      weightStyles = "font-semibold";
      break;
    case "bold":
      weightStyles = "font-bold";
      break;
  }

  return (
    <Component
      className={clsx(
        className,
        variantStyle,
        colorStyles,
        weightStyles,
        weight === "medium" && "font-medium"
      )}
    >
      {children}
    </Component>
  );
};
