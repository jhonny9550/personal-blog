import React from "react";
import { Loader } from "react-feather";
import { ReactComponent as Spinner } from "../assets/icons/spinner.svg";

type ButtonColor = "default" | "blue" | "yellow";

export type ButtonProps = {
  className?: string;
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  color = "default",
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      className={`
        bg-${color}
        inline-flex
        items-center
        justify-center
        ${className}
      `}
      disabled={disabled}
      type="button"
    >
      {loading && (
        <Spinner className="animate-spin h-5 w-5 mr-3 -ml-4" strokeWidth={6} />
      )}
      {children}
    </button>
  );
};

export default Button;
