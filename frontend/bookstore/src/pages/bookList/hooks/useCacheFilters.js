import {useEffect} from "react";

export default function useCacheFilters (activeFilters, setActiveFilters)
{
    //O efeito para aplicar os filtros salvos do cache deve ser executado primeiro
    useEffect(() => {
        const filtersJson = sessionStorage.getItem('filters');
        if (filtersJson) {
            setActiveFilters(JSON.parse(filtersJson));
        }
    }, [])

    //Armazena os filtros no cache toda vez que são alterados
    useEffect(() => {
        sessionStorage.setItem('filters', JSON.stringify(activeFilters));
    }, [activeFilters]);
}