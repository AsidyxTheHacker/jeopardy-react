import Score from '../Score/Score.jsx';
import './ScoreContainer.css';

export default function ScoreContainer() {

    return (
        <div className="score-container">
            <Score score="0" id='1' />
            <Score score="0" id='2' />
            <Score score="0" id='3' />
        </div>
    )
};