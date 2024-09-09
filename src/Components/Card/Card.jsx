import './Card.css';
import data from '../../assets/data.json';

export default function Card({ text /* text = point value */ }) {

    const clickHandler = event => {
        event.target.classList.add('card-used', 'card-selected');
        event.target.classList.remove('question');
        document.querySelector('.modal').classList.remove('hidden');
        document.querySelector('.answer-reveal-button').classList.remove('center-hidden');

        let questions = document.querySelectorAll('.question');
        questions.forEach(q => { q.classList.add('card-used') });

        setTimeout(() => {
            questions.forEach(q => { q.classList.remove('card-used') });
        }, 300);

        let category = event.target.parentNode.firstChild.innerText;
        let question = `questions_${text}`;
        let answer = `answers_${text}`;
        let randomNum = Math.floor(Math.random() * 3);

        document.querySelector('.modal-title').innerText = `${text} POINT QUESTION`;
        document.querySelector('.modal-category').innerText = category;
        document.querySelector('.modal-question').innerText = data[0][category][question][randomNum];
        document.querySelector('.modal-answer').innerText = data[0][category][answer][randomNum];
    };



    return (
        <div className="card card-used question" onClick={clickHandler}>{text}</div>
    );
};