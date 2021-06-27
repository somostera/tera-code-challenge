import {useEffect, useState} from "react";
import Button from "../../../../components/button/Button";
import Icon from "../../../../components/icon/Icon";
import './Pagination.css';

export default function Pagination(props) {

    const [page, setPage] = useState(props.initialPage);

    const contentLength = props.contentLength;
    const pageLength = props.pageLength;
    const pageCount = Math.floor(contentLength / pageLength);

    //Altere a página interna do component caso a página inicial seja alterada
    useEffect(() => {
        setPage(props.initialPage);
    }, [props.initialPage])

    useEffect(() => {
        props.onSetPage(page);
    }, [page])

    const pageButtons = [
        <Button onClick={prevPage} type="icon" key="prev_page"><Icon type="chevron_left"/></Button>
    ];

    //Gerando um botão para cada página disponível
    let i = 0
    do {
        const pageNumber = i + 1;
        pageButtons.push(<Button
            onClick={() => setPage(pageNumber)}
            type={pageNumber === page ? 'primary' : 'secondary'}
            key={pageNumber}>{pageNumber}
        </Button>)
        i++
    } while (i < pageCount);

    pageButtons.push(<Button onClick={nextPage} type="icon" key="next_page"><Icon type="navigate_next"/></Button>);

    function nextPage() {
        if (page < pageCount) setPage(page + 1);
    }

    function prevPage() {
        if (page > 1) setPage(page - 1);
    }

    return (
        <nav className="Pagination">{pageButtons}</nav>
    )
}