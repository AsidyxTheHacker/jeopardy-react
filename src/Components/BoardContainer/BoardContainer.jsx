import Column from '../Column/Column';
import Modal from '../Modal/Modal';
import './BoardContainer.css';
import data from '../../assets/data.json';
import { useEffect } from 'react';
import sound from '../../assets/double.mp3';

export default function BoardContainer({ sharedValue }) {

    let array = data[0].category;
    const audio = new Audio(sound);
    audio.volume = .3;

    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            document.querySelector(`#column${i + 1} .category-title`).innerText = array[i + 1]
        }

        let randomCard = Math.floor(Math.random() * 5) + 2;
        let randomColumn = Math.floor(Math.random() * 5) + 1;
        document.querySelector(`#column${randomColumn} .question:nth-child(${randomCard})`).classList.add('double-jeopardy-card');
        document.querySelector('.double-jeopardy-card').addEventListener('click', () => {
            let doubleScore = document.querySelector('.double-jeopardy-card').innerText * 2;
            audio.play();
            document.querySelector('.double-jeopardy-card').innerText = doubleScore;
            document.querySelector('.double-jeopardy-card').classList.add('double-jeopardy-card-used');
        })
    }, []);

    return (
        <div className="board-container">
            <Column id="1" />
            <Column id="2" />
            <Column id="3" />
            <Column id="4" />
            <Column id="5" />
            <Modal sharedValue={sharedValue} />
        </div>
    );
};