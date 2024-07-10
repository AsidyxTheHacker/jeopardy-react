import './Score.css';

export default function Score({ score, name, id }) {

    let selected = id;
    
    function scoreSelect() {
        let scores = document.querySelectorAll('.score-card');
        scores.forEach(s => s.classList.remove('selected'));

        switch(selected) {
            case "1": document.getElementById('user1').classList.add('selected'); break;
            case "2": document.getElementById('user2').classList.add('selected'); break;
            case "3": document.getElementById('user3').classList.add('selected'); break;
        };
    };

    return (
        <div className="score-card" id={'user' + id} onClick={() => scoreSelect()}>
            <p className="score">{score}</p>
            <div className="divider"></div>
            <p className="name">{name}</p>
        </div>
    )
};