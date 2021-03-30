import React, { useCallback, useEffect, useState } from "react";

export type TextInputProps = {
  id: string;
  type?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  endIcon?: React.ReactNode;
  name?: string;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string | null;
};

const TextInput: React.FC<TextInputProps> = ({
  id,
  value = "",
  type = "text",
  onChange,
  label = "",
  placeholder = "",
  className = "",
  endIcon,
  name,
  onFocus,
  onBlur,
  onKeyDown,
  error = "",
}) => {
  const [v, setV] = useState(value);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setV(e.target.value);
      onChange && onChange(e);
    },
    [onChange]
  );

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className={`max-w-xs ${className}`}>
      <label htmlFor={id} className="block text-gray-700 font-bold">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={id}
          name={name}
          type={type || "text"}
          placeholder={placeholder}
          className={`
            ${error ? "ring-red-500 border-red-500" : ""}
            focus:ring-indigo-500 focus:border-indigo-500
            focus:ring-1 
            block 
            w-full 
            sm:text-sm 
            border-gray-300 
            rounded-md
          `}
          value={v}
          onChange={handleOnChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 p-2">{endIcon}</div>
        )}
      </div>
      {error && <p className="text-red">{error}</p>}
    </div>
  );
};

export default TextInput;
