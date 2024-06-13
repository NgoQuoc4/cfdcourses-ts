/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";

const Input = (
  {
    label,
    required,
    error,
    name,
    type = "text",
    renderInput = undefined,
    defaultValue,
    ...rest
  }: {
    label: string;
    required: boolean;
    error: any;
    name?: string;
    type?: string;
    renderInput?: any;
    defaultValue?: any;
    rest?: any;
  },
  ref
) => {
  return (
    <div className="form-group">
      <label className="label">
        {label}
        {required && <span>*</span>}
      </label>
      {renderInput?.({ ...rest, error }) || (
        <input
          defaultValue={defaultValue}
          type={type}
          id={name}
          name={name}
          className={`form__input ${error ? "formerror" : ""}`}
          ref={ref}
          {...rest}
        />
      )}

      <p className="error">{error || ""}</p>
    </div>
  );
};

export default forwardRef(Input);
