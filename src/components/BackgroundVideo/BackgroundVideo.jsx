import React, { Component } from 'react';
import './BackgroundVideo.css';
import video from '../../assets/background.mp4';

class BackgroundVideo extends Component {
    componentDidMount() {
        this.videoRef.play();
    }

    render() {
        return (
            <div className="background-video">
                <video ref={(ref) => (this.videoRef = ref)} className="video" loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default BackgroundVideo;
