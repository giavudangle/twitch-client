import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../actions';

import { OAUTH2_CLIENT_ID } from '../config/oauth2'

declare global {
    interface Window {
        gapi: gapi.auth2.ClientConfig | gapi.auth2.AuthResponse;
        auth: gapi.auth2.GoogleAuth;
    }
}

const _this = window;


const GoogleAuth: React.FC = () => {
    const [isSignedIn, setIsSignedIn] = useState<Boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: OAUTH2_CLIENT_ID,
                scope: 'email'
            }).then(() => {
                _this.auth = window.gapi.auth2.getAuthInstance();
                setIsSignedIn(window.auth.isSignedIn.get());
                _this.auth.isSignedIn.listen(_onAuthChange)
            })
        })
    }, [])

    const _onAuthChange = (status : boolean) =>   {
        return status ? dispatch(signOut()) : dispatch(signIn())
    }

    const _onSignIn = () => {
        _this.auth.signIn();
    }

    const _onSignOut = () => {
        _this.auth.signOut();

    }

    const _renderAuth = () => {
        if (isSignedIn) {
            return (
                <button onClick={_onSignOut} className='ui red google button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={_onSignIn} className='ui red google button'>
                    <i className='google icon' />
                    Sign In
                </button>
            )
        }
    }

    return (
        <div>
            {_renderAuth()}
        </div>
    )
}

export default GoogleAuth;
