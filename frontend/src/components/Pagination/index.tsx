import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { Container } from './styles';

interface PaginationProps {
  pageInfo: {
    count: number;
    currentPage: number;
    pages: number;
  },
  onPageChange: (pageNumber: number) => void;
}

export function Pagination({ pageInfo, onPageChange }: PaginationProps) {
  const siblingsCount = 1;

  function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter(page => page > 0)
  }

  const lastPage = Math.floor(pageInfo.count / 8);

  const previousPages = pageInfo.currentPage > 1
    ? generatePagesArray(pageInfo.currentPage - 1 - siblingsCount, pageInfo.currentPage - 1)
    : [];

  const nextPages = pageInfo.currentPage < lastPage
    ? generatePagesArray(pageInfo.currentPage, Math.min(pageInfo.currentPage + siblingsCount, lastPage))
    : []; 

  return (
    <Container>
      <div>
        <button 
          onClick={() => onPageChange(pageInfo.currentPage - 1)} 
          disabled={pageInfo.currentPage === 1}
        >
          <FaChevronLeft />
        </button>

        {pageInfo.currentPage > (1 + siblingsCount) && (
          <>
            <button onClick={() => onPageChange(1)}>1</button>
            { pageInfo.currentPage > (2 + siblingsCount) && <span>...</span>}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <button key={page} onClick={() => onPageChange(page)}>{page}</button>
        })}

        <button disabled>{pageInfo.currentPage}</button>

        {nextPages.length > 0 && nextPages.map(page => {
          return <button key={page} onClick={() => onPageChange(page)}>{page}</button>
        })}

        {(pageInfo.currentPage + siblingsCount) < lastPage && (
          <>
            { (pageInfo.currentPage + 1 + siblingsCount) < lastPage && <span>...</span>}
            <button onClick={() => onPageChange(lastPage)}>{lastPage}</button>
          </>
        )}

        <button 
          disabled={pageInfo.currentPage === lastPage}
          onClick={() => onPageChange(pageInfo.currentPage + 1)} 
        >
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
}