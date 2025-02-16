import React from 'react';
import './TweetBox.css';
import Avatar from '@mui/material/Avatar';

function TweetBox() {
  return (
    <div className='tweetbox'>
      <form>
        <div className='tweetBox__input'>
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />

            <input placeholder="What's happening?" type='text'></input>
        </div>
            <button>Tweet</button>
      </form>
    </div>
  )
}

export default TweetBox;
