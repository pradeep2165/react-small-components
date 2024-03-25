import React, { useState } from "react";
import "./style.css";

const index = () => {
  const [page, setPage] = useState(1);
  const [articleCount, setArticleCount] = useState(35);
  const [pageSize, setPageSize] = useState(5);
  const avilPage = Math.ceil(articleCount / pageSize);
  const prev = () => {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  };
  const next = () => {
    if (page < avilPage) {
      setPage((page) => page + 1);
    }
  };
  const Options = () => {
    return (
      <>
        {Array(5)
          .fill("a")
          .forEach((e, i) => (
            <li className="page-item">
              <span className="page-link" onClick={() => setPage(i + 1)}>
                {i}
              </span>
            </li>
          ))}
      </>
    );
  };
  function createArray(N) {
    let newArr = [];
    for (let i = 1; i <= N; i++) {
      newArr.push(i);
    }
    return newArr;
  }
  const arr = createArray(avilPage);
  //   const selectedValue = arr.slice(page < avilPage - 2 ? page : avilPage - 3, page == avilPage ? page : page + 3);
  const selectedValue = arr.slice(page <= 2 ? 0 : page >= avilPage - 1 ? avilPage - 3 : page - 2, page + 2 > avilPage ? avilPage : page <= 2 ? 3 : page + 1);
  return (
    <nav aria-label="Page navigation example">
      {page}/{avilPage}
      <ul className="pagination">
        <li className="page-item">
          <span className="page-link" onClick={prev}>
            Previous
          </span>
        </li>
        {selectedValue.map((e, i) => (
          <li className="page-item">
            <span className="page-link" onClick={() => setPage(e)} key={e}>
              {e}
            </span>
          </li>
        ))}

        <li className="page-item">
          <span className="page-link" onClick={next}>
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default index;
