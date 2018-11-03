import React from 'react';

import Sound from 'react-sound';

class SoundPlayback extends React.Component {
    render() {
        return (
            <Sound
                url="ymca.mp3"
                playStatus={Sound.status.PLAYING}
                playFromPosition={30 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
    };

    handleSongLoading() {
        console.log('Loading');
    }

    handleSongPlaying() {
        console.log('Playing');
    }
    
    handleSongFinishedPlaying() {
        console.log('Finished');
    }
}

export default SoundPlayback;