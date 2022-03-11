import React, { useState } from "react";
import Jsondata from "./data.json";
import ReactPaginate from "react-paginate";
import "./style.css";

const User = () => {
  const [user, setUser] = useState(Jsondata.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pageVisited = pageNumber * usersPerPage;

  const displayusers = user
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="container">
          <div className="card m-3 d-flex justify-content-center align-items-center">
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p className="w-50">{user.body}</p>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(user.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <h1>{displayusers}</h1>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"prevbtn"}
        nextLinkClassName={"nextbtn"}
        disabledClassName={"pagedisabled"}
        activeClassName={"pageactive"}
      ></ReactPaginate>
    </div>
  );
};

export default User;
