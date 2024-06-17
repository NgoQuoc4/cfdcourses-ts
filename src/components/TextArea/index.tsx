import { forwardRef } from "react";

const TextArea = (
  {
    label,
    required,
    error,
    name,
    renderInput = undefined,
    defaultValue,
    ...rest
  }: {
    label: string;
    required: boolean;
    error: any;
    name?: string;
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
        <textarea
          defaultValue={defaultValue}
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

export default forwardRef(TextArea);
