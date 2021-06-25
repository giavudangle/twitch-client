import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import type {AppDispatchType, RootStateType, ThunkDispatchType} from '../store'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector : TypedUseSelectorHook<RootStateType> = useSelector
export const useThunkDispatch = () => useDispatch<ThunkDispatchType>();
