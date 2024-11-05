import './Card.css';
import data from '../../assets/data.json';
import sound from '../../assets/time_up.mp3';

export default function Card({ text /* text = point value */ }) {

    const clickHandler = event => {
        event.target.classList.add('card-used', 'card-selected');
        event.target.classList.remove('question');
        document.querySelector('.modal').classList.remove('hidden');
        document.querySelectorAll('.answer-reveal-button, .close-modal-button').forEach(b => {
            b.classList.remove('center-hidden');
        });

        let questions = document.querySelectorAll('.question');
        questions.forEach(q => { q.classList.add('card-used') });

        setTimeout(() => {
            questions.forEach(q => { q.classList.remove('card-used') });
        }, 300);

        let category = event.target.parentNode.firstChild.innerText;
        let question = `questions_${text}`;
        let answer = `answers_${text}`;
        let randomNum = Math.floor(Math.random() * 4);

        if (event.target.classList.contains('double-jeopardy-card')) {
            document.querySelector('.modal-title').innerText = `DAILY DOUBLE! ${text * 2}`
        } else {
            document.querySelector('.modal-title').innerText = `${text} POINT QUESTION`;
        };

        const countdown = () => {
            if (time == -1) {
                clearTimeout(timerId);
                const audio = new Audio(sound);
                audio.volume = .3;
                audio.play();
            } else {
                document.querySelector('.modal-category').innerText = category + ' |' + ` ${time}s`;
                time--;
            };

            let modal = document.querySelector('.modal');
            let answer = document.querySelector('.answer-container');
            if (modal.classList.contains('hidden') || !answer.classList.contains('hidden')) {
                clearTimeout(timerId);
            };
        };
        let time = 15;
        let timerId = setInterval(countdown, 1000);

        document.querySelector('.modal-category').innerText = category + ' |' + ' 00s';
        document.querySelector('.modal-question').innerText = data[0][category][question][randomNum];
        document.querySelector('.modal-answer').innerText = data[0][category][answer][randomNum];
    };

    return (
        <div className="card card-used question" onClick={clickHandler}>{text}</div>
    );
};