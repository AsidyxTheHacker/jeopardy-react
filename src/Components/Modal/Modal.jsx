import './Modal.css';

export default function Modal() {

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
        }
    };

    const revealAnswer = () => {
        document.querySelectorAll('.answer-container, .modal-answer').forEach(m => {
            m.classList.remove('hidden', 'center-hidden');
        });

        document.querySelector('.answer-reveal-button').classList.add('center-hidden');
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

    return (
        <div className="modal hidden">
            <h1 className='modal-title'></h1>
            <h2 className='modal-category'></h2>
            <p className="modal-question"></p>
            <div className="button-container">
                <button className="answer-reveal-button" onClick={revealAnswer}>Reveal Answer</button>
                <p className="modal-answer center-hidden"></p>
                <div className="answer-container hidden">
                    <button className='correct-button' onClick={() => answer('+')}>✔</button>
                    <button className='incorrect-button' onClick={() => answer('-')}>✖</button>
                </div>
            </div>
        </div>
    );
};