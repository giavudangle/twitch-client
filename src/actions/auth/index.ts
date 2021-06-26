import { SIGN_IN, SIGN_OUT } from "../../constants/authTypes"
import { IActionCreator } from "../../interfaces/IActionCreator"

export const signIn = (userId : String ) : IActionCreator => {
    return {
        type:SIGN_IN,
        payload:userId
    }
}

export const signOut = () => {
    return {
        type:SIGN_OUT
    }
}

