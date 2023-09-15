import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx("py-2 px-2 max-w-7xl mx-auto ", className)}>
      {children}
    </div>
  );
};

export default Container;
