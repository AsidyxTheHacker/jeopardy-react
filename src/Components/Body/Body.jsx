import './Body.css';
import ScoreContainer from '../ScoreContainer/ScoreContainer';
import BoardContainer from '../BoardContainer/BoardContainer';
import { useState } from 'react';

export default function Body() {

    const [sharedValue, setSharedValue] = useState(null);

    return (
        <div className='game-container'>
            <ScoreContainer sharedValue={sharedValue} setSharedValue={setSharedValue} />
            <BoardContainer sharedValue={sharedValue} />
        </div>
    )
};