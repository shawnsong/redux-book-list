import React from 'react';
import VideoListItem from './video-list-item';

const VideoList = ({videos, onVideoSelect}) => {

    const videoItemList = videos.map(video => {
        return (
            <VideoListItem 
                video={video} 
                key={video.etag}
                onVideoSelect={onVideoSelect} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItemList}
        </ul>
    );
};

export default VideoList;