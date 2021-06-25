import { AnyAction } from "redux"
import { SIGN_IN, SIGN_OUT } from "../../@types/auth"


interface IAuth {
    isSignedIn : boolean | null
} 

const INITIAL_STATE : IAuth  ={
    isSignedIn : null
}

export default (state = INITIAL_STATE, action : AnyAction) => {
    switch(action.type){
        case SIGN_IN:
            return {...state,isSignedIn : true}
        case SIGN_OUT:
            return {...state,isSignedIn : false}
        default :
            return state
    }
}