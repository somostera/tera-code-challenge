import cloneDeep from "lodash.clonedeep";
import "./BookFilters.css";
import Button from "../../../../components/button/Button";
import {useState, useEffect} from "react";

export default function BookFilters(props) {

    const [order, setOrder] = useState(null);
    const [categories, setCategories] = useState([]);
    const [others, setOthers] = useState([]);

    function applyFilters() {

        let filters = {};

        if (order) filters.order = order;
        if (categories.length) filters.categories = categories;
        if (others.length) filters.others = others;

        if (Object.keys(filters).length) {
            console.log('aplicarFiltros')
        }
    }

    function toggleOrder(orderType) {
        if (orderType === order) setOrder(null);
        else setOrder(orderType);
    }

    function toggleCategories(categoryType) {
        setCategories(prevCategories => {

            let newCategories = [...prevCategories];

            //Adicionando ou removendo a categoria das categorias selecionadas
            if (newCategories.includes(categoryType)) {
                newCategories = newCategories.filter(category => category !== categoryType);
            } else {
                newCategories.push(categoryType);
            }

            return newCategories;
        })
    }

    function toggleOther(otherType) {
        setOthers(prevOthers => {

            let newOthers = [...prevOthers];

            //Adicionando ou removendo a categoria das categorias selecionadas
            if (newOthers.includes(otherType)) {
                newOthers = newOthers.filter(other => other !== otherType);
            } else {
                newOthers.push(otherType);
            }

            return newOthers;
        })
    }

    function resetAll() {
        setOrder(null);
        setCategories([]);
        setOthers([]);
    }

    return (
        <div className="BookFilters">
            <section className="BookFilters__section">
                <h3>Ordenar por</h3>
                <div className="BookFilters__sub__section">
                    <Button
                        onClick={() => toggleOrder('most_liked')}
                        type={order === 'most_liked' ? 'primary' : 'secondary'}
                    >
                        Melhores avaliados
                    </Button>
                    <Button
                        onClick={() => toggleOrder('alphabetical')}
                        type={order === 'alphabetical' ? 'primary' : 'secondary'}
                    >
                        Ordem alfabética
                    </Button>
                </div>
            </section>
            <section className="BookFilters__section">
                <h3>Filtrar por</h3>
                <div className="BookFilters__sub__section">
                    <h4>Categorias</h4>
                    <div>
                        {props.categories.map(category =>
                            <Button
                                key={category}
                                onClick={() => toggleCategories(category)}
                                type={categories.includes(category) ? 'primary' : 'secondary'}
                            >
                                {category}
                            </Button>)}
                    </div>
                </div>
                <div className="BookFilters__sub__section">
                    <h4>Outros</h4>
                    <div>
                        <Button
                            onClick={() => toggleOther('in_stock')}
                            type={others.includes('in_stock') ? 'primary' : 'secondary'}
                        >
                            Em estoque
                        </Button>
                        <Button
                            onClick={() => toggleOther('liked')}
                            type={others.includes('liked') ? 'primary' : 'secondary'}
                        >
                            Curtidos por você
                        </Button>
                    </div>
                </div>
            </section>
            <section className="BookFilters__buttons_container">
                <Button onClick={resetAll}>Resetar</Button>
                <Button onClick={applyFilters} type="primary">Aplicar</Button>
            </section>
        </div>
    )
}