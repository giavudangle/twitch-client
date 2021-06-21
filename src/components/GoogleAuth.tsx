import React from 'react'
import { useEffect,useState } from 'react';

import {OAUTH2_CLIENT_ID} from '../config/oauth2'

declare global {
    interface Window {
        gapi: gapi.auth2.ClientConfig | gapi.auth2.AuthResponse ;
        auth:gapi.auth2.GoogleAuth ;    
    }
}

const _this = window;


const GoogleAuth : React.FC = () => {
    const [isSignedIn,setIsSignedIn] = useState<Boolean>(false); 

    useEffect(() => {
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId : OAUTH2_CLIENT_ID,
                scope:'email'
            }).then(() => {           
                _this.auth =  window.gapi.auth2.getAuthInstance();
                setIsSignedIn(window.auth.isSignedIn.get());
                _this.auth.isSignedIn.listen(_onAuthChange)
            })
        })
    },[])

    const _onAuthChange = () => {
        setIsSignedIn(_this.auth.isSignedIn.get())
    }
    
    const _renderAuth = () => {
        if(isSignedIn){
            return <div>Signed In</div>
        }else {
            return <div>Please SignIn</div>
        }
    }

    return (
        <div>
            {_renderAuth()}
        </div>
    )
}

export default GoogleAuth;
