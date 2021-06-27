import React, { Dispatch } from "react";

import {
  InjectedFormProps,
} from "redux-form";
import { createStream } from "../../actions/stream";
import { useThunkDispatch } from "../../hooks/useThunkDispatch";
import { ICreateStreamForm } from "../../interfaces/IStream";
import { Form } from "../common/Form";
import { StreamForm } from "./components";



export const StreamCreate: React.FC =
  () => {
    const dispatch = useThunkDispatch();

    const _onSubmit = (form: ICreateStreamForm) => dispatch(createStream(form));

    return (
      <div className='one column stackable ui grid' style={{margin:10}}>
        <div className='column'>

        <h3>Create new Stream</h3>
        <StreamForm 
          _onSubmit={_onSubmit}
        />
       
      </div>

      </div>
     
    );
  };


