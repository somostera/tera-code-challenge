import {useEffect, useState} from "react";
import Button from "../../../../components/button/Button";
import Icon from "../../../../components/icon/Icon";
import './Nav.css';

export default function Nav() {

    const [nightMode, setNightMode] = useState(false);

    function toggleNightMode() {
        setNightMode(prevNightMode => !prevNightMode);
    }

    useEffect(() => {
        if (nightMode) {
            document.querySelector('html').classList.add('Nightmode')
        } else {
            document.querySelector('html').classList.remove('Nightmode')
        }
    }, [nightMode])

    return (
        <nav className="BookstoreNav">
            <h1>book<span className="BookstoreNav__logo_strong">store</span></h1>
            <Button type="transparent" onClick={toggleNightMode}>
                <Icon type={nightMode ? 'light_mode' : 'dark_mode'}/>
                {nightMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
        </nav>
    )
}