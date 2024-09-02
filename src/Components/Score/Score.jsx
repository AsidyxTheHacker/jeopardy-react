import { useEffect, useState } from 'react';
import './Score.css';

export default function Score({ score, id }) {

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(document.getElementById(`user${id}`));
    }, [selected]);
    
    function scoreSelect() {

        let scores = document.querySelectorAll('.score-card');
        scores.forEach(s => s.classList.remove('selected'));
        selected.classList.add('selected');

        document.querySelectorAll('.question').forEach((q) => {
            q.classList.remove('card-used');
        });
    };

    return (
        <div className="score-card" id={'user' + id} onClick={() => scoreSelect()}>
            <p className="score">${score}</p>
            <div className="divider"></div>
            <input placeholder='type name...' maxLength={9} className="name"></input>
        </div>
    );
};