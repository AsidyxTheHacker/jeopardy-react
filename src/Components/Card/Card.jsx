import './Card.css';
import data from '../../../public/data.json';

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
        document.querySelector('.modal-category').innerText = event.target.parentNode.firstChild.innerText;
        document.querySelector('.modal-question').innerText = '';

        console.log(data[0].Geography.question_100)
    };

    return (
        <div className="card card-used question" onClick={clickHandler}>{text}</div>
    );
};