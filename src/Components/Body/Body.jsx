import './Body.css';
import ScoreContainer from '../ScoreContainer/ScoreContainer';
import BoardContainer from '../BoardContainer/BoardContainer';

export default function Body() {

    return (
        <div className='game-container'>
            <ScoreContainer />
            <BoardContainer />
        </div>
    )
}