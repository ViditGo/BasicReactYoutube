import React from "react";
import VideoListItem from "./video_list_item"

const VideoList = ({video, onVideoSelect}) => {
    const videoItems = video.map((video) => {return <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video}/>});
    return (
        <ul className = "col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;