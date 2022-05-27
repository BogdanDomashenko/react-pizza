import { useState } from "react";

const usePagination = (initialPage = 0, totalRows, rowsPerPage) => {
  const [page, setPage] = useState(initialPage);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  return {
    page,
    initialPage,
    totalRows,
    rowsPerPage,
    handlePageClick,
  };
};

export default usePagination;
