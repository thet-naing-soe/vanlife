import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((van) => (
    <div className="van-tile" key={van.id}>
      <Link to={`/vans/${van.id}`}>
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
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <Link className="van-type simple" to="?type=simple">Simple</Link>
        <Link className="van-type luxury" to="?type=luxury">Luxury</Link>
        <Link className="van-type rugged" to="?type=rugged">Rugged</Link>
        <Link className="van-type clear-filters" to=".">Clear filter</Link>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
