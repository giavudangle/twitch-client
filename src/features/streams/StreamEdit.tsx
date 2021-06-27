import React from "react";
import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { createStream, editStream, fetchStream, fetchStreams } from "../../actions/stream";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useThunkDispatch } from "../../hooks/useThunkDispatch";
import { ICreateStreamForm } from "../../interfaces/IStream";
import { StreamForm } from "./components";
import _ from "lodash";

interface MatchParams {
  id?: string;
}

export const StreamEdit: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  const { history, match, location } = props;
  const id = match.params.id;

  useEffect(() => {
    dispatch(fetchStream(Number(id)));
  }, [id]);
  const { stream } = useAppSelector((state) => state.streams);
  const dispatch = useThunkDispatch();

  const _onSubmit = (form: ICreateStreamForm) => dispatch(editStream(Number(id),form));

  if(!stream) return <div>Loading</div>
  return (
  
        <div className="one column stackable ui grid" style={{ margin: 10 }}>
        <div className="column">
          <h3>Edit current Stream</h3>
          <StreamForm
            _onSubmit={_onSubmit}
            initialValues={_.pick(stream, "title", "description")}
          />
        </div>
      </div>
     
  );
};

export default StreamEdit;
