import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../../App.css";

function Pagination({ setCurrentData, itemsPerPage, listData }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentData(listData?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listData?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, listData, setCurrentData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % listData?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={itemsPerPage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
}

export default Pagination;
