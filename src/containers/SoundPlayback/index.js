import React from 'react';

import Sound from 'react-sound';

let positions = [
    {start: 2000, position: 'Y', triggered: false}
]

class SoundPlayback extends React.Component {
    constructor(props) {
        super(props)
        this.handleSongPlaying = this.handleSongPlaying.bind(this);
    }

    render() {
        const {start} = this.props;

        const status = start ? Sound.status.PLAYING : Sound.status.STOPPED;

        return (
            <Sound
                url="ymca.mp3"
                playStatus={status}
                playFromPosition={0 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
    };

    handleSongLoading() {
        console.log('Loading');
    }

    handleSongPlaying(data) {
        const index = positions.findIndex(element => !element.triggered && data.position > element.start);
        if(index >= 0) {
            this.props.updateDesiredPosition({
                desiredPosition: positions[index].position
            });
            positions[index].triggered = true;
        }
    }
    
    handleSongFinishedPlaying() {
        console.log('Finished');
    }
}

export default SoundPlayback;