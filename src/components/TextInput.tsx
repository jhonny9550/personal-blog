import React, { useCallback, useState } from "react";

export type TextInputProps = {
  id: string;
  type?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  endIcon?: React.ReactNode;
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
}) => {
  const [v, setV] = useState(value);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setV(e.target.value);
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <div className={`max-w-xs ${className}`}>
      <label htmlFor={id} className="block text-gray-700 font-bold">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={id}
          name={id}
          type={type || "text"}
          placeholder={placeholder}
          className={
            "focus:ring-indigo-500 focus:border-indigo-500 focus:ring-1 block w-full sm:text-sm border-gray-300 rounded-md"
          }
          value={v}
          onChange={handleOnChange}
        />
        {endIcon && (
          <div className="absolute inset-y-0 right-0 p-2">{endIcon}</div>
        )}
      </div>
    </div>
  );
};

export default TextInput;
