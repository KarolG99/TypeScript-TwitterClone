import React, { Ref } from "react";
import { FormFieldWrapper } from "./FormField.styles";

interface FormFieldProps {
  label?: string;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: any;
  rows?: number;
  isTextArea?: boolean;
  placeholder?: string;
  hidden?: boolean;
}

// przekauje typ dla ref: HTMLInputElement i typ dla propsow: FormFieldProps
const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      id,
      name,
      type,
      value,
      onChange,
      rows,
      isTextArea,
      placeholder,
      hidden,
    },
    ref
  ): JSX.Element => {
    return (
      <FormFieldWrapper>
        <label htmlFor={id}>{label}</label>
        {isTextArea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            rows={rows}
            placeholder={placeholder}
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            hidden={hidden}
            ref={ref}
            placeholder={placeholder}
          />
        )}
      </FormFieldWrapper>
    );
  }
);

export default FormField;
