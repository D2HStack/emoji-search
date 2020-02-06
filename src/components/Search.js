import React from "react";

function Search(props) {
  let { search, setSearch } = props;
  return (
    <>
      <h1>Emoji Search</h1>
      <input
        className="search"
        placeholder="what emoji are you looking for ? "
        value={search}
        onChange={event => {
          setSearch(event.target.value);
        }}
      ></input>
    </>
  );
}

export default Search;
