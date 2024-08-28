import Column from '../Column/Column';
import Modal from '../Modal/Modal';
import './BoardContainer.css';
import data from '../../../public/data.json';

export default function BoardContainer() {

    setTimeout(() => {
        data[0].category.sort(() => Math.random() - 0.5);
        document.querySelector('#column1 .category-title').innerText = data[0].category[0];
        document.querySelector('#column2 .category-title').innerText = data[0].category[1];
        document.querySelector('#column3 .category-title').innerText = data[0].category[2];
        document.querySelector('#column4 .category-title').innerText = data[0].category[3];
        document.querySelector('#column5 .category-title').innerText = data[0].category[4];
    }, 100);

    return (
        <div className="board-container">
            <Column id="1" />
            <Column id="2" />
            <Column id="3" />
            <Column id="4" />
            <Column id="5" />
            <Modal />
        </div>
    )
};