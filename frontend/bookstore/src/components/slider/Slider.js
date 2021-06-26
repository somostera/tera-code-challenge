import "./Slider.css";
import {useState, useEffect} from "react";
import Button from "../button/Button";

export default function Slider(props) {

    const [active, setActive] = useState(false);

    //Efeito que esconde a barra de rolagem ao ativar o Slider
    useEffect(() => {

        if (active) document.body.style.overflowY = 'hidden';
        else document.body.style.overflowY = 'auto';

    }, [active])

    function toggleActive() {
        setActive(prevState => !prevState)
    }

    return (
        <div className="Slider">
            <Button onClick={toggleActive}>{props.title ? props.title : 'Slider'}</Button>
            <div className={`Slider__content ${active ? 'Slider__content--show' : ''}`}>
                <header className="Slider__header">
                    <h2 className="Slider__header_title">{props.title}</h2>
                    <Button onClick={() => setActive(false)}>X</Button>
                </header>
                {props.children}
            </div>
        </div>
    )
}