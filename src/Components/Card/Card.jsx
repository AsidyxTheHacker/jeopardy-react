import './Card.css';

export default function Card({ text }) {

    return (
        <div className="card question">
            <p className="card-text">{text}</p>
        </div>
    )
}