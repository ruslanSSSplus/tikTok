
import React from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

 const VideoDetails = ({
    play_count: playCount,
    digg_count: diggCount,
    comment_count: commentCount,
    share_count: shareCount,
 }) =>  {
    const details = [
        {
           icon:<PlayArrowIcon />,
           count: playCount
        },
        {
           icon:<ChatBubbleIcon />,
           count: commentCount
        },
        {
           icon:<FavoriteIcon />,
           count: diggCount
        },
        {
           icon:<ShareIcon />,
           count: shareCount
        },
        
     ]


 return(
    <ul className="video-details">
    { details.map(({icon, count},i)=> (
     <li key={i} className="video-details__item">
        {icon}
        <p>
           {count}
        </p>
     </li>
    ))}
  </ul>
 )

 }
 

export default VideoDetails