import React, { useState ,useRef} from 'react'

const Video = () => {
    const videoRef=useRef(null)
  return (
    <div>
        <video ref={videoRef} src="C:\Users\HI\Videos\Screen Recordings\Screen Recording 2025-12-23 221938.mp4" controls></video>
        <button onClick={()=>videoRef.current.play()}>play</button>
        <button onClick={()=>videoRef.current.pause()}>pause</button>
      
    </div>
  )
}

export default Video
