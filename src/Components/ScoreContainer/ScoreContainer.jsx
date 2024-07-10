import Score from '../Score/Score.jsx';
import './ScoreContainer.css';

export default function ScoreContainer() {

    return (
        <div className="score-container">
            <Score score="950" name="Bob" id='1' />
            <Score score="2,400" name="James" id='2' />
            <Score score="1,100" name="Mike" id='3' />
        </div>
    )
};