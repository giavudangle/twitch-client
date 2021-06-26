import React from 'react';
import { useEffect } from 'react';
import { fetchStreams } from '../../actions/stream';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { IStream, IStreamForm } from '../../interfaces/IStream';

export const StreamList = () => {
    const dispatch = useThunkDispatch();
    const {streams} = useAppSelector(state => state.streams)

    useEffect(() => {
        dispatch(fetchStreams())
    },[])

    



    const _renderList = () => {
        return streams.map(stream => {
            return (
                <div className='item' key={stream!.id.toString()}>
                    <i className="large middle aligned icon camera"/>
                    <div className='content'>
                        {stream?.title}
                        <div className='description'>{stream?.description}</div>
                    </div>
                </div>
            )
        })
    }
    

    
    // const _renderList = () => {
    //    return <div></div>
    // }
    

   

    return (
        <div>
            <h2>Streams</h2>
            <div className='ui celled list'>
                {_renderList()}
            </div>
        </div>
    )
}

export default StreamList