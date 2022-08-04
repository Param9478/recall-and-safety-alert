import { useState } from "react";
import DataList from "./dataList";
import NoDataFound from "./noDataFound";
import Pagination from "../pagination";

const DataToDisplay = ({ listData, currentPage, setCurrentPage, dataLang }) => {
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = listData.slice(indexOfFirstPost, indexOfLastPost);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto px-6">
      {currentPosts.length ? (
        <>
          <DataList data={currentPosts} />

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={listData.length}
            paginate={paginate}
            currentPage={currentPage}
            paginateFront={paginateFront}
            paginateBack={paginateBack}
            indexOfLastPost={indexOfLastPost}
            dataLang={dataLang}
          />
        </>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default DataToDisplay;
