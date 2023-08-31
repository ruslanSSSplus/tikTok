import React from 'react'
import { useFeed } from '../../hooks/useFeed'


import MusicNoteIcon from '@mui/icons-material/MusicNote';

import VideoUser from '../videos/VideoUser';
import VideoDetails from '../videos/VideoDetails';
import Spinner from '../spinner/Spinner';

import Video from '../videos/Video';


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
               <div className="video" key = {videoId} >
                  
                  <VideoUser {...author}/>
   
                  <div className="video-wrapper">
                     <Video heigth='auto'  url ={ play} videoId={videoId}/>
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