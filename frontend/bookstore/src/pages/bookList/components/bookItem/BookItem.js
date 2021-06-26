import "./BookItem.css";
import Button from "../../../../components/button/Button";
import Icon from "../../../../components/icon/Icon";

export default function BookItem(props) {
    return (
        <div className="BookItem">
            <div className="BookItem__containerImage">
                <img className="BookItem__image" src={props.book.image} alt={props.book.name}/>
            </div>
            <div className="BookItem__info">
                <div className="BookItem__info_text">
                    <h2>{props.book.name}</h2>
                    <h3>{props.book.author}</h3>
                    <h3>{props.book.category}</h3>
                </div>
                <Button type="icon"><Icon type={props.book.liked ? 'favorite' : 'favorite_border'}/></Button>
            </div>
        </div>
    )
}