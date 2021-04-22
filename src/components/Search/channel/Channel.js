import { Avatar } from '@material-ui/core';
import React from 'react';
import './Channel.css'

const Channel = () => {
    return (
        <div className="channel">
            <Avatar className='channel__avatar__style' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"></Avatar>
            <div className="channel__info">
                <h5>Clever Programming</h5>
                <span>600k Subscription</span>. <span>300 videos</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, in.</p>
            </div>
        </div>
    );
};

export default Channel;