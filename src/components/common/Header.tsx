import React from 'react'
import {Link} from 'react-router-dom'
import twitchLogo from '../../assets/images/twitch-logo.png';

export const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <img style={{width:30,height:30,position:'relative',top:4,left:10}} src={twitchLogo} />
            <Link to='/' className='item'>
                Twitch Stream
            </Link>
            <div className="right menu">
                <Link to='/' className='item'>
                    All Streams
                </Link>
            </div>
        </div>
    )
}
