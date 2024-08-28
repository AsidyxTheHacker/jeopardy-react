import './Card.css';

export default function Card({ text /* text = point value */ }) {

    const clickHandler = event => {
        event.target.classList.add('card-used', 'card-selected');
        event.target.classList.remove('question');
        document.querySelector('.modal').classList.remove('modal-hidden');

        let questions = document.querySelectorAll('.question');
        questions.forEach(q => { q.classList.add('card-used') });

        setTimeout(() => {
            questions.forEach(q => { q.classList.remove('card-used') });
        }, 400);

        document.querySelector('.modal-title').innerText = `${text} POINT QUESTION`;
    };

    return (
        <div className="card card-used question" onClick={clickHandler}>{text}</div>
    );
};