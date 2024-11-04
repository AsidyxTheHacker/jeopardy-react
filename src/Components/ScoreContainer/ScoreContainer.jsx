import Score from '../Score/Score.jsx';
import './ScoreContainer.css';

export default function ScoreContainer({ sharedValue, setSharedValue }) {

    return (
        <div className="score-container">
            <Score score="0" id='1' setSharedValue={setSharedValue} />
            <Score score="0" id='2' setSharedValue={setSharedValue} />
            <Score score="0" id='3' setSharedValue={setSharedValue} />
        </div>
    )
};