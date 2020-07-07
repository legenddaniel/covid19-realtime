import React from 'react';
import ReactPlayer from 'react-player';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVirus, faHandsWash, faHeadSideMask, faHouseUser, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            muted: true
        }
        this.toggleVolume = this.toggleVolume.bind(this);
    }

    toggleVolume() {
        this.setState(state => ({ muted: !state.muted }));
    }

    render() {
        const isMuted = this.state.muted;
        return (
            <header className="header">
                <h1 className="txt-jumbo">C<FontAwesomeIcon icon={faVirus} className="virus" />vid-19</h1>
                <div className="txt-subjumbo triangle-area">
                    <p className="triangles">
                        <span className="triangle">Wash <FontAwesomeIcon icon={faHandsWash} className="triangle-icon" /></span>
                        <span className="triangle">Wear <FontAwesomeIcon icon={faHeadSideMask} className="triangle-icon" /></span>
                        <span className="triangle">Stay <FontAwesomeIcon icon={faHouseUser} className="triangle-icon" /></span>
                    </p>
                </div>
                <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} onClick={this.toggleVolume} className="video-icon" />
                <Player muted={isMuted} />
            </header>
        )
    }
}

function Player(props) {
    return (
        <ReactPlayer
            url="https://www.youtube.com/embed/3tBk7ONm95Q"
            width="100%"
            height="100%"
            playing
            loop
            muted={props.muted}
            controls={false}
            className="video"
        />
    )
}

export default Header;