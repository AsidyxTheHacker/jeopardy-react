import Column from '../Column/Column';
import './BoardContainer.css';

export default function BoardContainer() {

    return (
        <div className="board-container">
            <Column id="1" />
            <Column id="2" />
            <Column id="3" />
            <Column id="4" />
            <Column id="5"/>
        </div>
    )
};