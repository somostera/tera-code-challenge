import './Input.css';

export default function Input(props) {

    const inputProps = {};

    if (props.onInput) {
        inputProps.onInput = props.onInput;
    }

    return (
        <input
            className="Input"
            type={props.type ? props.type : 'text'}
            placeholder={props.placeholder ? props.placeholder : ''}
            {...inputProps}
        />
    )
}