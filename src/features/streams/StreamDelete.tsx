import React from 'react';
import { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { deleteStream, fetchStream } from '../../actions/stream';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import history from '../../utils/history';
import Modal from '../common/Modal';

interface IOwnProps {

}

type MathParams = {
    id : string
}

export const StreamDelete : React.FC<RouteComponentProps<MathParams> & IOwnProps> = (props) => {
    const {match} = props

    const dispatch = useThunkDispatch();

    const actions = () => (
        <React.Fragment>
            <button onClick={() =>dispatch(deleteStream(Number(stream?.id)))} className="ui button negative">Delete</button>
            <Link to='/'  className="ui button">Cancel</Link>
        </React.Fragment>
    )
    
    useEffect(() => {
        dispatch(fetchStream(Number(match.params.id)))
    },[match.params.id])

    const stream = useAppSelector(state => state.streams.stream)

    const _renderContent = () => {
        if(!stream){
            return 'Are you sure you want to delete this stream ?'
        }
        return `Are you sure to delete ${stream.title}`
    }

    

    return (
        <div>
            Delete
            <Modal
                title="Delete Stream"
                content={_renderContent()}
                actions={actions()}
                _onDismiss={() => history.push('/')}
            />
        </div>
    )
}

