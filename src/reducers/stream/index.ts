import { AnyAction } from "redux"
import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS } from "../../constants/streamTypes"
import { IStream } from "../../interfaces/IStream"
import _, {  } from "lodash"

interface IReducerStream {
    streams:IStream[],
    like? : boolean,
    stream?:  IStream | null
}

const INITIAL_STATE: IReducerStream = {
    streams:[],
    like:false,
    stream: null
}


export default (state = INITIAL_STATE, action: AnyAction) : IReducerStream => {
    switch (action.type) {
        case FETCH_STREAMS: 
            return {...state,streams : action.payload as IStream[] }           
        case FETCH_STREAM:
            return {...state,stream : action.payload as IStream}
        case CREATE_STREAM:
            // Key interpolation
            return {...state,streams: [...state.streams,action.payload] as IStream[]}
        case EDIT_STREAM:
            return {...state,streams : state.streams.map(item => item.id === action.payload.id ? action.payload : item) }   // Key interpolation
        case DELETE_STREAM:           
            return {...state,streams : state.streams.filter(item => item.id !== action.payload) as IStream[]}
        default:
            return state
    }
} 

