import logo from '../../assets/logo.png';
import volumeOn from '../../assets/volume-on.svg';
import volumeOff from '../../assets/volume-off.svg';
import './Header.css';
import { useState } from 'react';
import music from '../../assets/jeopardy_theme.mp3';

export default function Header() {

    const [volume, setVolume] = useState(false);
    const [audio, setAudio] = useState(new Audio(music))
    audio.volume = 0.05;
    function changeVolume() {
        if (volume) {
            setVolume(false)
            audio.pause();
        } else {
            setVolume(true)
            audio.play();
        };
    };

    return (
        <div className="header">
            <img
                src={logo}
                alt=""
                className='logo' />
            <img
                src={volume === false ? volumeOff : volumeOn}
                alt="volume setting"
                className='volume'
                onClick={() => changeVolume()} />
        </div>
    )
};