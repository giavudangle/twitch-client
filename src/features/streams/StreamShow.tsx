import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { fetchStream } from '../../actions/stream';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useThunkDispatch } from '../../hooks/useThunkDispatch';
import { IStream } from '../../interfaces/IStream';
import flv from 'flv.js'
import { useRef } from 'react';

type MatchParams = {
    id : string
}

interface IOwnProps {

}

export const StreamShow : React.FC<RouteComponentProps<MatchParams> & IOwnProps> = (props) => {
    const {match} = props

    const dispatch = useThunkDispatch();

    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        dispatch(fetchStream(Number(match.params.id)))
    },[match.params.id])

    const stream : IStream = useAppSelector(state => state.streams.stream)!

    if(!stream){
        return <div>Loading ...</div>
    }

    return (
        <div>
            <video
                ref={videoRef}
                style={{width:'100%'}}
                controls={true}
            />
            <h1>{stream.title}</h1>
            <h5>{stream.description}</h5>
        </div>
    )
}

export default StreamShow