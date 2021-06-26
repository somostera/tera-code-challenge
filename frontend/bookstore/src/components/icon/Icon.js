import './Icon.css';

export default function Icon (props) {
    return (
        <span className={`Icon material-icons`}>{props.type}</span>
    )
}