import Card from '../Card/Card';
import Category from '../Category/Category';
import './Column.css';

export default function Column({ id }) {

    return (
        <div className="column" id={'column' + id}>
            <Category />
            <Card text="100" />
            <Card text="200" />
            <Card text="300" />
            <Card text="400" />
            <Card text="500" />
        </div>
    )
};