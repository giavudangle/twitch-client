import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";

type TCustomFieldProps = {
  label: String;

  // Add more custom types
};

const FormError: React.FC<WrappedFieldMetaProps> = ({
  error,
  touched,
}: WrappedFieldMetaProps) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
  return <></>;
};

export const Form: React.FC<WrappedFieldProps & TCustomFieldProps> = ({
  input,
  label,
  meta,
}) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {FormError(meta)}
    </div>
  );
};
