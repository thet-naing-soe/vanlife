import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api.js";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    async function loadVans() {
      const data = await getVans();
      setVans(data);
    }
    loadVans();
    // fetch("/api/vans")
    //   .then((response) => response.json())
    //   .then((data) => setVans(data.vans));
  }, []);
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div className="van-tile" key={van.id}>
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <h3>
            {van.price}
            <span>/day</span>
          </h3>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
          onClick={() => handleFilterChange("type", "rugged")}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => handleFilterChange("type", null)}
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
