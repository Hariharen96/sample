import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Home = () => {
  const [lists, setLists] = useState([]);
  const [search, setSearch] = useState("");
  const [sortvalue, setSortValue] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const loaddata = async () => {
    let result = await axios.get("http://localhost:3003/users");
    setLists(result.data.reverse());
  };

  useEffect(() => {
    loaddata();
  }, []);

  const deleteuser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    const res = lists.filter((item) => item.id !== id);
    setLists(res);
  };

  useEffect(() => {
    const loaddata = async () => {
      let result = await axios.get(`http://localhost:3003/users?q=${search}`);
      setLists(result.data.reverse());
    };
    loaddata();
  }, [search]);

  const sort = ["name", "username", "email"];

  const handleSort = async (e) => {
    let value = e.target.value;
    setSortValue(value);
    return await axios
      .get(`http://localhost:3003/users?_sort=${value}&_order=asc`)
      .then((response) => {
        setLists(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const usersPerPage = 3;
  const pageVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(lists.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container m-5">
      <form className="m-3 d-flex justify-content-between align-items-center">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortvalue} onChange={handleSort}>
          {sort.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </form>

      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lists
            .slice(pageVisited, pageVisited + usersPerPage)
            .map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <Link
                    to={{ pathname: `/view/${item.id}`, state: { view: item } }}
                    className="btn btn-primary m-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/users/${item.id}`}
                    className="btn btn-outline-primary"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={() => deleteuser(item.id)}
                    className="btn btn-danger m-1"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

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

export default Home;
