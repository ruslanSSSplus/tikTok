import { PauseCircleOutline, PlayCircleOutline } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import Spinner from '../spinner/Spinner';


 const Video = ({url = '', videoId, width = '100%', heigth = '360px'}) => {
    const videoRef = useRef(null)
 
    const [isPlaying, setIsPlaying] = useState(false)

    const [isReady, setIsReady] = useState(false)

    const [progress, setProgress] = useState(0)

    const hadleProgress = ({ loaded, played}) => {
        if(!loaded) return 
        setProgress(played*100)
    }

    const handleClick = () => {
        setIsPlaying((_prev) => !_prev)
        videoRef?.current?.parentElement.classList.toggle('playing', !isPlaying)
    }

        return (
                <div className={`video-item ${isPlaying ? 'playing' : ''}`} ref={videoRef}>
                        {!isReady && (
                            <div className="video-item__loading flex flex-centre">
                                 <Spinner />  
                            </div>
                        )}
                        
                        
                        <Link to={`/video/${videoId}`}>
                        
                        <ReactPlayer 
                        url={url} 
                        width={width} 
                        heigth={heigth} 
                        playing={isPlaying}
                        loop={true}
                        onProgress={hadleProgress}
                        onReady={() => setIsReady(true)}
                        />
                        </Link>
                    <div className="video-item__controls" onClick={() => handleClick()}>
                        {isPlaying ? <PauseCircleOutline /> : <PlayCircleOutline />}
                    </div>
                    <div className="video-progress">
                        <span style ={{width: `${progress}%` }}  />
                        
                    </div>
                </div>

        )

 }

export default Video