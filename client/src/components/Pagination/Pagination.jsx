import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.css';

const Pagination = ({ params, onClickPagin }) => {
    
    return (
        <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onClickPagin(event.selected + 1)}
            pageRangeDisplayed={5}
            pageCount={params.total_pages}
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;
