import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addrepos } from "./actions";
import axios from "axios";

function App() {
  const [search, setSearch] = useState({
    user: "",
  });
  const counter = useSelector((state) => state.reposReducer);

  const dispatch = useDispatch();

  const onChange = (e) => {
    const updateForm = { ...search };
    updateForm[e.target.name] =
      e.target.type === "file" ? e.target.files[0] : e.target.value;
    setSearch(updateForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .get(`https://api.github.com/users/${search.user}/repos`)
      .then((res) => {
        const response = res.data;
        response.map((count, index) =>
          dispatch(addrepos(response[index].name))
        );
      });
  };
  return (
    <div className="container">
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Github Repo Search By User</h1>
      <form id="myForm" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
        <div className="from-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username Github"
            onChange={(e) => onChange(e)}
            name="user"
          />
        </div>
        <br />
        <div className="from-group">
          <input
            type="submit"
            className="btn btn-block btn-danger"
            value="Search"
          />
        </div>
      </form>
      <br />
      <div className="card Body">
        <ul>
          {counter.map((count, index) => (
            <li>{count}</li>
          ))}
        </ul>
        {/* {counter.map((count, index) => console.log(count[index].name))} */}
      </div>
    </div>
  );
}

export default App;
