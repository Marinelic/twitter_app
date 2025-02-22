import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';
import { Tweet } from 'react-tweet';

/* import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from 'react-tweet'; */
/* import { TwitterTweetEmbed } from "react-twitter-embed"; */
import { getTweet as _getTweet } from 'react-tweet/api';
import { SWRConfig } from "swr";


function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon  className='widgets__searchIcon' />

        <input placeholder='Search Twitter' type='text'/>
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening?</h2>

      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">1 billion😍 thank you <a href="https://twitter.com/Spotify?ref_src=twsrc%5Etfw">@spotify</a>, gonna have to find a special place for this one <a href="https://t.co/GD7QKrftrz">pic.twitter.com/GD7QKrftrz</a></p>&mdash; Kygo (@KygoMusic) <a href="https://twitter.com/KygoMusic/status/1352616284920414210?ref_src=twsrc%5Etfw">January 22, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

     {/*  <TwitterTweetEmbed tweetId={"858551177860055040"} /> */}
         
         

      </div>
    </div>
  )
}

export default Widgets;
