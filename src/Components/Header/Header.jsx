import logo from '../../assets/logo.png';
import volumeOn from '../../assets/volume-on.svg';
import volumeOff from '../../assets/volume-off.svg';
import './Header.css';
import { useState } from 'react';

export default function Header() {

    const [volume, setVolume] = useState(true);

    function changeVolume() {
        if(volume) {
            setVolume(false)
        } else {
            setVolume(true)
        }
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