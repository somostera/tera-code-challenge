import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { 
  PaginatorWrapper,
  PaginatorNextIcon,
  PaginatorPrevIcon,
  PaginatorPages,
  PaginatorPage,
  PaginatorSeparator 
} from './styles'


export default function Paginator({ pages, page, changePage }) {
  const hasNext = page < pages
  const hasPrev = page > 1;
  
  const totalPages = pages < 3 ? pages : 3

  const pageNumberArr = Array(totalPages).fill(0).map((_, index) => {
    return pages > 1 ?  page === pages || page % 3 === 0
      ? (page - (totalPages === 3 ?  2 : 1)) + index 
      : page > 1
        ? page % 3 !== 0 ? (page - 1) + index : (page ) + index 
        : page + index
      : 1
  })


  return pages > 0 ? (
    <PaginatorWrapper> 
    <PaginatorPrevIcon disabled={!hasPrev} onClick={() => hasPrev && changePage(page - 1)}>
      <IoIosArrowBack />
    </PaginatorPrevIcon>
    <PaginatorPages>
      {pageNumberArr.map((pageLoop, index) => {
        return (
          <React.Fragment key={`page_${index + 1}`} >
          { index === pageNumberArr.length -1 && pageNumberArr.length > 1 ? <PaginatorSeparator /> : null}
          <PaginatorPage 
            onClick={() => changePage(pageLoop)} 
            selected={page === pageLoop}>
            {pageLoop}
          </PaginatorPage>
          </React.Fragment>
        )
  
      }) }
    </PaginatorPages>

    <PaginatorNextIcon disabled={!hasNext} onClick={() => hasNext && changePage(page + 1) }>
      <IoIosArrowForward />
    </PaginatorNextIcon>
  </PaginatorWrapper>
  ) : null
}