import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import img from "../../images/logo.svg";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault();
    if(term===""){
      return alert("Please search something")
    }
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App </Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
            <button type="submit">
        <i className="fa fa-search"></i>
      </button>
        </form>
      
      </div>
     
      <div className="user-image">
        
        <img src={img} alt="user" />
      </div>
    </div>
  );
};

export default Header;
