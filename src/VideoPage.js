import React from 'react'
import ReactPlayer from 'react-player'
function VideoPage(props) {
    return ( 
        <ReactPlayer
        playing={true}
        // loop={true}
        muted
        width='100%'
        height='100%'
        controls={true}
        url='testVd.mp4'
        // classList="videoWidth"
       />
    )
}

export default VideoPage