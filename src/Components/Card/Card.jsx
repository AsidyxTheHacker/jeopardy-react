import './Card.css';
import data from '../../assets/data.json';

export default function Card({ text /* text = point value */ }) {

    const clickHandler = event => {
        event.target.classList.add('card-used', 'card-selected');
        event.target.classList.remove('question');
        document.querySelector('.modal').classList.remove('modal-hidden');

        let questions = document.querySelectorAll('.question');
        questions.forEach(q => { q.classList.add('card-used') });

        setTimeout(() => {
            questions.forEach(q => { q.classList.remove('card-used') });
        }, 300);

        let category = event.target.parentNode.firstChild.innerText;
        let question = `questions_${text}`;
        let randomNum = Math.floor(Math.random() * 3);

        document.querySelector('.modal-title').innerText = `${text} POINT QUESTION`;
        document.querySelector('.modal-category').innerText = category;
        document.querySelector('.modal-question').innerText = data[0][category][question][randomNum];
    };

    return (
        <div className="card card-used question" onClick={clickHandler}>{text}</div>
    );
};