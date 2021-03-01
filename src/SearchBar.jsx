import React, { useState } from "react";
import UserList from "./UserList";
import { Input } from "antd";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItem("");
  };

  return (
    <>
      <div className="searchbar">
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Enter Name, Email or Username to Search"
            type="text"
            className="search"
            value={searchItem}
            onChange={handleChange}
            autoFocus
          />
        </form>
      </div>
      <UserList searchItem={searchItem} />
    </>
  );
};

export default SearchBar;
