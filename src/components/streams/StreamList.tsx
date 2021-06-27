import React from 'react';
import { useEffect } from 'react';
import { createStream, editStream, fetchStream, fetchStreams } from '../../actions/stream';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { ICreateStreamForm, IEditStreamForm, IStream, IStreamForm } from '../../interfaces/IStream';

import { Link } from 'react-router-dom';

export const StreamList = () => {
    const dispatch = useThunkDispatch();
    const {streams} = useAppSelector(state => state.streams)
    const {userId:currentUserId,isSignedIn} = useAppSelector(state => state.auth)

    useEffect(() => {
        dispatch(fetchStreams())
    },[])

    const _renderAdmin = (stream : IStream) => {
        if(stream.userId === currentUserId) {
            return (
                <div className='right floated content'>
                    <button className='ui button primary'>
                        Edit
                    </button>
                    <button className='ui button negative'>
                        Delete
                    </button>
                </div>
            )
        }
    }

    const _renderCreate = () => {
        if(isSignedIn){
            return(
                <div style={{textAlign:'right'}}>
                    <Link to='/streams/new' className='ui button primary'>
                    Create Stream
                    </Link>
                </div>
            )
        }
    }

    const _renderList  = () => {
        return streams.map(stream => {
            return (
                <div className='item' key={stream!.id.toString()}>
                    {_renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className='content'>
                        {stream?.title}
                        <div className='description'>{stream?.description}</div>
                    </div>
                </div>
            )
        })
    }
    

    return (
        <div>
            <h2>Streams</h2>
            <div className='ui celled list'>
                {_renderList()}
            </div>
            {_renderCreate()}
        </div>
    )
}

export default StreamList