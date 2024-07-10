import { useState, useMemo } from 'react';

const useLocalPagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      return nextPage <= totalPages ? nextPage : prevPage;
    });
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => {
      const previousPage = prevPage - 1;
      return previousPage >= 1 ? previousPage : prevPage;
    });
  };

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToFirstPage = () => setCurrentPage(1);

  const goToLastPage = () => setCurrentPage(totalPages);

  return {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
    goToFirstPage,
    goToLastPage,
  };
};

export default useLocalPagination;
