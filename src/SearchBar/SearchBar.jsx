import React, { useState } from "react";

export const SearchBar = ({getCity}) => {

  const [city, setCity] = useState("");

  const onClickingSearch = () => {
    getCity(city);
  }

  return(
    <div>
      <input type="text" onChange={e => setCity(e.target.value)} value={city} className="searchBar" placeholder="Enter city name"/>
      <button onClick={onClickingSearch}>Search</button>
    </div>
  )
}