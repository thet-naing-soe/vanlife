export async function getVans() {
  const res = await fetch("/api/vans");
  const data = await res.json();
  return data.vans;
}


// fetch("/api/vans")
//       .then((response) => response.json())
//       .then((data) => setVans(data.vans));
//   }, []);
