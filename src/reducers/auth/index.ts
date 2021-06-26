import { AnyAction } from "redux"
import { SIGN_IN, SIGN_OUT } from "../../constants/authTypes"
import { IUser } from "../../interfaces/IUser"



const INITIAL_STATE : IUser  ={
    isSignedIn : false,
    userId:''
}

export default (state = INITIAL_STATE, action : AnyAction) : IUser => {
    switch(action.type){
        case SIGN_IN:
            return {...state,isSignedIn : true,userId:action.payload}
        case SIGN_OUT:
            return {...state,isSignedIn : false,userId:''}
        default :
            return state
    }
}