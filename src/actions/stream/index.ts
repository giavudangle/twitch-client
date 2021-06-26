import { AxiosResponse } from 'axios'
import { CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS } from '../../constants/streamTypes'
import { streamApi } from '../../api'
import { ICreateStreamForm } from '../../interfaces/ICreateStreamForm'
import { ThunkDispatchType } from '../../store'
import { TListStream } from '../../types/streamTypes'
import { IStreamForm } from '../../interfaces/IStreamForm'

export const createStream =
    (formValues: ICreateStreamForm) =>
        async (dispatch: ThunkDispatchType) => {
            const response: AxiosResponse = await streamApi.post<ICreateStreamForm>(`/streams`, formValues);
            dispatch({
                type:CREATE_STREAM,
                payload:response.data
            })
        }



export const fetchStreams = () => async (dispatch : ThunkDispatchType) => {
    const response : AxiosResponse = await streamApi.get<TListStream>(`/streams`);
    dispatch({
        type:FETCH_STREAMS,
        payload:response.data
    })
}

export const fetchStream = (id : Number) => async (dispatch : ThunkDispatchType) => {
    const response : AxiosResponse = await streamApi.get<IStreamForm>(`/streams/${id}`);
    dispatch({
        type:FETCH_STREAM,
        payload:response.data
    })
}

export const editStream = (id : Number,formValues : ICreateStreamForm) => async (dispatch : ThunkDispatchType) => {
    const response : AxiosResponse = await streamApi.put<IStreamForm>(`/streams/${id}`,{
        formValues
    });
    dispatch({
        type:EDIT_STREAM,
        payload: response.data
    })
}

export const deleteStream = (id : Number) => async (dispatch : ThunkDispatchType) => {
    await streamApi.delete(`/streams/${id}`);
    dispatch({
        type:DELETE_STREAM,
        payload : id
    })
}

