import { forwardRef } from "react";

const Select = (
  {
    label,
    required,
    error,
    options,
    name,
    renderInput = undefined,
    defaultValue,
    ...rest
  }: {
    name: string;
    label: string;
    required: boolean;
    error: any;
    options: any;
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
        <select
          {...rest}
          ref={ref}
          defaultValue={defaultValue}
          id={name}
          name={name}
          className={`form__input ${error ? "formerror" : ""}`}
        >
          {options?.map((option: any) => {
            return (
              <option key={option.value} value={option.value}>
                {option?.label}
              </option>
            );
          })}
        </select>
      )}
      <p className="error">{error || ""}</p>
    </div>
  );
};

export default forwardRef(Select);
