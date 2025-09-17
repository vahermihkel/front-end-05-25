import { useEffect, useRef, useState } from "react"
import { Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify"
import { Shop } from "../../models/Shop";


function MaintainShops() {
  const shopsUrl = "https://mihkel-webshop-05-2025-default-rtdb.europe-west1.firebasedatabase.app/shops.json";
  const [shops, setShops] = useState<Shop[]>([]);
  const [dbShops, setDbShops] = useState([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitudeRef = useRef<HTMLInputElement>(null);
  const openTimeRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(shopsUrl)
    .then(res => res.json())
    .then(json => {
      setShops(json || []);
      setDbShops(json || []);
      setLoading(false);
    })
  }, []);


  const addShop = () => {
    if (nameRef.current === null || latitudeRef.current === null ||
      longitudeRef.current === null || openTimeRef.current === null
    ) {
      return;
    }

    shops.push({
      name: nameRef.current.value,
      latitude: Number(latitudeRef.current.value),
      longitude: Number(longitudeRef.current.value),
      openTime: openTimeRef.current.value
    });
    fetch(shopsUrl, {method: "PUT", body: JSON.stringify(shops)});
    setShops(shops.slice());
  }

  const removeShop = (index: number) => {
    dbShops.splice(index, 1);
    setShops(dbShops.slice());
    toast.success("Shop successfully removed!");
    fetch(shopsUrl, {method: "PUT", body: JSON.stringify(shops)});
  }
  

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <ToastContainer/>
      <label>Name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Latitude</label> <br />
      <input ref={latitudeRef} type="number" /> <br />
      <label>Longitude</label> <br />
      <input ref={longitudeRef} type="number" /> <br />
      <label>Open time</label> <br />
      <input ref={openTimeRef} type="text" /> <br />
      <button onClick={addShop}>Add shop</button> <br /> <br />
      <table style={{margin: "auto"}}>

        <thead>
            <tr>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Open time</th>
              <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {shops.map((shop, index) => 
          <tr key={shop.name}>
              <td>{shop.name}</td>
              <td>{shop.latitude}</td>
              <td>{shop.longitude}</td>
              <td>{shop.openTime}</td>
              <td><button onClick={() => removeShop(index)}>X</button></td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MaintainShops