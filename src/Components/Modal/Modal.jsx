import './Modal.css';

export default function Modal() {

    const hideModal = () => {
        document.querySelectorAll('.modal, .answer-container, .modal-answer').forEach(m => {
            m.classList.add('hidden');
        });

        document.querySelectorAll('.card').forEach(c => {
            c.classList.remove('card-selected');
        });
    };

    const revealAnswer = () => {
        document.querySelectorAll('.answer-container, .modal-answer').forEach(m => {
            m.classList.remove('hidden');
        });

        document.querySelector('.answer-reveal-button').classList.add('hidden');
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
                <p className="modal-answer hidden"></p>
                <div className="answer-container hidden">
                    <button className='correct-button' onClick={() => answer('+')}>Correct</button>
                    <button className='incorrect-button' onClick={() => answer('-')}>Incorrect</button>
                </div>
            </div>
        </div>
    );
};