import React, { Component } from 'react';


export default class VideoDetail extends Component {

    constructor(props) {
        super(props);

        
        
    }

    render() {
        this.video = this.props.video;        
        if(!this.video) {
            return <div>Loading...</div>
        }
        const videoTitle = this.video.snippet.title;
        const videoDescription = this.video.snippet.description;
        const videoUrl = `https://www.youtube.com/embed/${this.video.id.videoId}`;
        
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoUrl}></iframe>
                </div>
                <div className="details">
                    <div>{videoTitle}</div>
                    <div>{videoDescription}</div>
                </div>
            </div>
        );
    }
}