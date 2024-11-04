import './Modal.css';

export default function Modal({ sharedValue }) {

    let lever = false;

    const hideModal = () => {
        document.querySelectorAll('.modal, .answer-container').forEach(m => {
            m.classList.add('hidden');
        });

        document.querySelector('.modal-answer').classList.add('center-hidden');

        document.querySelectorAll('.card').forEach(c => {
            c.classList.remove('card-selected');
        });

        if (!lever) {
            document.querySelector('.double-jeopardy-card-used').innerText = document.querySelector('.double-jeopardy-card-used').innerText / 2;
            lever = true;
        };
    };

    const revealAnswer = () => {
        document.querySelectorAll('.answer-container, .modal-answer').forEach(m => {
            m.classList.remove('hidden', 'center-hidden');
        });

        document.querySelectorAll('.answer-reveal-button, .close-modal-button').forEach(b => {
            b.classList.add('center-hidden');
        });
    };

    const answer = (o) => {
        let userScore = document.querySelector('.selected .score');
        let cardPoints = document.querySelector('.card-selected');

        let num1 = Number(userScore.innerText.substring(1));
        let num2 = Number(cardPoints.innerText);

        if (o === '+') {
            userScore.innerText = `$${num1 + num2}`;
        } else {
            userScore.innerText = `$${num1 - num2}`;
        };
        hideModal();
    };

    const returnToBoard = () => {
        document.querySelector('.card-selected').classList.remove('card-used');
        document.querySelector('.card-selected').classList.add('question');
        hideModal();
    };

    const swapScoreUser = () => {
        let scores = document.querySelectorAll('.score-card');
        let swapBtn = document.querySelector('.swap-button')
        scores.forEach(s => s.classList.remove('selected'));
        switch (sharedValue.id) {
            case "user1": sharedValue = document.getElementById('user2');
                swapBtn.innerText = document.querySelector('#user2 input').value;
                break;
            case "user2": sharedValue = document.getElementById('user3');
                swapBtn.innerText = document.querySelector('#user3 input').value;
                break;
            case "user3": sharedValue = document.getElementById('user1');
                swapBtn.innerText = document.querySelector('#user1 input').value
                break;
        };
        if (swapBtn.innerText === '') {
            swapBtn.innerText = sharedValue.id;
        }
        sharedValue.classList.add('selected');
    };

    return (
        <div className="modal hidden">
            <h1 className='modal-title'></h1>
            <h2 className='modal-category'></h2>
            <p className="modal-question"></p>
            <div className="button-container">
                <div className="choice-buttons">
                    <button className="answer-reveal-button" onClick={revealAnswer}>Reveal Answer</button>
                    <button className="close-modal-button" onClick={returnToBoard}>Go Back</button>
                </div>
                <p className="modal-answer center-hidden"></p>
                <div className="answer-container hidden">
                    <button className='correct-button' onClick={() => answer('+')}>✔</button>
                    <button className='swap-button' style={{fontSize: "calc(1.5vw + .5em)"}} onClick={swapScoreUser}>Swap</button>
                    <button className='incorrect-button' onClick={() => answer('-')}>✖</button>
                </div>
            </div>
        </div>
    );
};