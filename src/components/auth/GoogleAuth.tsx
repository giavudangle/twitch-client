import React from 'react'
import { useEffect, useState } from 'react';
import { signIn, signOut } from '../../actions/auth';

import { OAUTH2_CLIENT_ID } from '../../config/oauth2'
import { useAppDispatch, useAppSelector } from '../../hooks/useHooks';



const _this = window;


const GoogleAuth: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isSignedIn } = useAppSelector(state => state.auth);

    

    useEffect(() => {
        _this.gapi.load('client:auth2', () => {
            _this.gapi.client.init({
                clientId: OAUTH2_CLIENT_ID,
                scope: 'email'
            }).then(() => {
                _this.auth = _this.gapi.auth2.getAuthInstance();
                _this.auth.isSignedIn.listen(_onAuthChange)
                _onAuthChange(_this.auth.isSignedIn.get());
            })
        })
    }, [])

    const _onAuthChange = (status: boolean) => 
        status 
        ? dispatch(signIn(_this.auth.currentUser.get().getId())) 
        : dispatch(signOut())
    const _onSignIn = () => _this.auth.signIn();
    const _onSignOut = () => _this.auth.signOut();

    const _renderAuth = () => {
        if (isSignedIn === null) {
            return null
        }
        else if (isSignedIn) {
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
