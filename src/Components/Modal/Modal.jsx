import './Modal.css';

export default function Modal() {

    const displayModal = () => {
        document.querySelector('.modal').classList.add('modal-hidden');

        let userScore = document.querySelector('.selected .score');
        let cardPoints = document.querySelector('.card-selected');
        userScore.innerText = `$${Number(userScore.innerText.substring(1)) + Number(cardPoints.innerText)}`;

        document.querySelectorAll('.card').forEach(c => {
            c.classList.remove('card-selected');
        });
    };

    return (
        <div className="modal modal-hidden">
            <h1 className='modal-title'></h1>
            <h2 className='modal-category'></h2>
            <p className="modal-question"></p>
            <button onClick={displayModal}>HIDE MODAL</button>
        </div>
    );
};