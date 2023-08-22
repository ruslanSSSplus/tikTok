import React from 'react'
import { useFeed } from '../../hooks/useFeed'


import MusicNoteIcon from '@mui/icons-material/MusicNote';

import VideoUser from '../videos/VideoUser';
import VideoDetails from '../videos/VideoDetails';
import Spinner from '../spinner/Spinner';


 const Feed = () => {

   const {data: feed, isLoading} = useFeed()

   console.log(feed)



    return (
      !isLoading ?
      <div className="feed">
         {feed.map(({
         video_id: videoId, 
         title, 
         play, 
         music_info:{title: songTitle},
         author,
         ...rest

      }) => {

         
         return (
            (
               <div className="video">
                  
                  <VideoUser {...author}/>
   
                  <div className="video-wrapper">
                     <video src={play} loop autoPlay={false} muted={true}></video>
                     <VideoDetails {...rest} />
                  </div>
                  <div className="video-music">
                     <span>
                        Original:
                     </span>
                     <MusicNoteIcon />
                     <p className="video-music__title">
                           {songTitle}
                     </p>
                  </div>
                  <div className="video-title">
                    {title}
                  </div>
               </div>
            )
         )
      })}
      </div> : <Spinner />

    )
}

export default Feed