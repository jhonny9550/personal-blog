import { useCallback, useEffect, useState } from "react";
import { ObjectSchema, ValidationError } from "yup";
import { ObjectShape } from "yup/lib/object";

export type FormErrors<T> = Partial<Record<keyof T, string>>;

export type UpdateDataParams<T> = {
  errors: FormErrors<T>;
  isValid: boolean;
  values: T;
};

export type UseFormInputParams<T> = {
  name: keyof T;
  values: T;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  error?: string | null;
  forceNumber?: boolean;
};

/**
 *
 * @param {Object}  options Form input hook options
 * @param {string}  options.name  The field name assigned to this input
 * @param {Object}  options.validation  This param has to be a yup validation function
 * @param {Object}  options.values  Current values of the whole form
 * @param {Function} options.setValues Callback function to set the form values
 * @param {Function} handleError options.handleError The error callback function
 */
export function useFormInput<T>({
  name,
  values: formData,
  setValues: setFormData,
  error,
  forceNumber,
}: UseFormInputParams<T>) {
  const formValue = formData[name] || "";

  const [value, setValue] = useState(formValue);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // watch for external parent data changes
  useEffect(() => {
    if (value !== formValue) {
      setValue(formValue);
      setIsTouched(false);
    }
  }, [formValue, value, setValue, setIsFocused, setIsTouched]);

  // rewrite self and parent's value
  const handleChange = useCallback(
    ({ target }) => {
      const { value: tValue, checked, type } = target;
      const newValue =
        type === "checkbox" ? checked : forceNumber ? parseInt(tValue) : tValue;
      const data = { ...formData, [name]: newValue };
      setValue(newValue);
      setFormData(data);
    },
    [setValue, formData, setFormData, name, forceNumber]
  );

  // handle input focus attr
  const handleFocus = useCallback(() => {
    setIsTouched(true);
    setIsFocused(true);
  }, [setIsTouched, setIsFocused]);

  // handle input blur attr
  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleKeyDown = useCallback(
    (e) => {
      if (forceNumber) {
        (e.keyCode === 69 || e.keyCode === 190) && e.preventDefault();
      }
    },
    [forceNumber]
  );

  const showError = Boolean(error) && isTouched && !isFocused;

  return {
    value,
    name,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    error: showError ? error : null
  };
}

function getProp<T, K extends keyof T>(obj: T, key: K): string {
  if (key in obj) {
    const val = obj[key] as unknown;
    return val as string;
  }
  return "";
}

function useForm<T>(
  defaultValues: T,
  validationSchema?: ObjectSchema<ObjectShape>
) {
  const [values, setValues] = useState(defaultValues);
  const [mounted, setMounted] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors<T>>({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (validationSchema) {
      setMounted(true);
      try {
        validationSchema.validateSync(values, {
          abortEarly: false,
        });
        setFormErrors({});
        setIsValid(true);
      } catch (e) {
        const error = e as ValidationError;
        const parsedErorrs = error.inner.reduce(
          (total, next) => ({
            ...total,
            [next.path as string]: next.message,
          }),
          {}
        ) as FormErrors<T>;
        setFormErrors(parsedErorrs);
        setIsValid(false);
      }
    }
  }, [validationSchema, values]);

  /**
   * @param {keyof T} name Field input name
   * @param {boolean} forceNumber Forces parse int the final value
   */
  const useInput = (name: keyof T, forceNumber: boolean = false) => {
    return useFormInput({
      name,
      values,
      setValues,
      error: getProp(formErrors, name),
      forceNumber,
    });
  };

  return {
    values,
    setValues,
    useInput,
    errors: formErrors,
    isValid: mounted && isValid,
  };
}

export default useForm;