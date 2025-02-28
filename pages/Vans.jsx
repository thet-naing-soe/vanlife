import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div className="van-tile" key={van.id}>
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <h3>
          {van.price}
          <span>day</span>
        </h3>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
