import "./BookItem.css";

export default function BookItem(props) {
    return (
        <div className="BookItem">
            <div className="BookItem__containerImage">
                <img className="BookItem__image" src={props.book.image} alt={props.book.name}/>
            </div>
            <div className="BookItem__info">
                <h2>{props.book.name}</h2>
                <h3>{props.book.author}</h3>
                <h3>{props.book.category}</h3>
            </div>
        </div>
    )
}