import React from "react";

import {
  Field,
  FormErrors,
  InjectedFormProps,
  reduxForm,
  WrappedFieldMetaProps,
  WrappedFieldProps,
} from "redux-form";
import { createStream } from "../../actions/stream";
import { useThunkDispatch } from "../../hooks/useHooks";
import { ICreateStreamForm } from "../../interfaces/ICreateStreamForm";

type TCustomFieldProps = {
  label: String;
  // Add more custom types
};



const _renderError: React.FC<WrappedFieldMetaProps> = ({
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

const _renderField: React.FC<WrappedFieldProps & TCustomFieldProps> = ({
  input,
  label,
  meta,
}) => {
  const className = `field ${meta.error && meta.touched ? 'error' : ''}`
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} />
      {_renderError(meta)}
    </div>
  );
};



const _validate = (form: ICreateStreamForm): FormErrors<ICreateStreamForm> => {
  const errors: FormErrors<ICreateStreamForm> = {};
  if (!form) {
    errors._error = "FORM ERRORS";
    return errors;
  }
  if (!form.title) {
    errors.title = "You must enter a title";
  }
  if (!form.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export const StreamCreateForm: React.FC<InjectedFormProps<ICreateStreamForm>> =
  ({ handleSubmit }) => {
    const dispatch = useThunkDispatch();

    const _onSubmit = (form: ICreateStreamForm) => dispatch(createStream(form))
      
    


    return (
      <form onSubmit={handleSubmit(_onSubmit)} className="ui form error">
        <div className="fields">
          <Field
            label="Enter title "
            autoComplete="undefined"
            name="title"
            component={_renderField}
          />
          <Field
            autoComplete="undefined"
            label="Enter description "
            name="description"
            component={_renderField}
          />
        </div>
        <button className="ui right labeled icon button primary">
          <i className="right arrow icon"></i>
          Submit
        </button>
      </form>
    );
  };

export const StreamCreate = reduxForm<ICreateStreamForm>({
  form: "create",
  validate: _validate,
})(StreamCreateForm);
