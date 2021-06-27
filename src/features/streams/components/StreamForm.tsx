import React from "react";
import { compose } from "redux";

import {
  Field,
  FormErrors,
  InjectedFormProps,
  reduxForm,
  SubmitHandler,
} from "redux-form";
import { IActionCreator } from "../../../interfaces/IActionCreator";
import { ICreateStreamForm } from "../../../interfaces/IStream";
import { Form } from "../../common/Form";

interface IOwnProps {
    _onSubmit : any
}


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

const StreamCreateForm: React.FC<IOwnProps & InjectedFormProps<{},IOwnProps>> =
  ({ handleSubmit,_onSubmit }) => {
    return (
        <form onSubmit={handleSubmit(_onSubmit)} className="ui form error">
        <div className="fields">
          <Field
            label="Enter title "
            name="title"
            component={Form}
          />
          <Field
            label="Enter description "
            name="description"
            component={Form}
          />
        </div>
        <button className="ui right labeled icon button primary">
          <i className="right arrow icon"></i>
          Submit
        </button>
      </form>   
    );
  };

const withForm = reduxForm<{},IOwnProps>({
    form:'streamForm',
    validate:_validate,
    forceUnregisterOnUnmount:true,
    destroyOnUnmount:true,
    enableReinitialize:true


    
 
})

export const StreamForm = withForm(StreamCreateForm)