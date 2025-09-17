import { useEffect, useRef, useState } from "react"
import type { Product } from "../../models/Product";
// import productsFromFile from "../../data/products.json"

function AddProduct() {
  // const [products, setProducts] = useState(productsFromFile);
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const ratingRateRef = useRef<HTMLInputElement>(null);
  const ratingCountRef = useRef<HTMLInputElement>(null);
  const [unique, setUnique] = useState(true);
  const productsUrl = "https://mihkel-webshop-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
  }, []);

  const checkUniqueID = () => {
    const idInput = idRef.current;
    if (idInput === null) {
      console.log("PANEMATA!");
      return;
    }
    const found = products.find(product => product.id.toString() === idInput.value.toString());
    if (found === undefined){
      setUnique(true);
    } else {
      setUnique(false);
    }
  }

  const addProduct = () => {
    if (idRef.current === null || titleRef.current === null ||
      priceRef.current === null || descriptionRef.current === null ||
      selectRef.current === null || imageRef.current === null ||
      ratingRateRef.current === null || ratingCountRef.current === null
    ) {
      console.log("REF HTMLI PANEMATA!!!!!!");
      return;
    }

      products.push( {
        "id" : Number(idRef.current.value), 
        "title" : titleRef.current.value,
        "price" : Number(priceRef.current.value),
        "description" : descriptionRef.current.value,
        "category" : selectRef.current.value,
        "image": imageRef.current.value,
        "rating": {
            "rate": Number(ratingRateRef.current.value),
            "count": Number(ratingCountRef.current.value)
        }
    })
      fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)});
    // setProducts(productsFromFile.slice());
      idRef.current.value = "";
      titleRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      selectRef.current.value = "";
      imageRef.current.value = "";
      ratingRateRef.current.value = "";
      ratingCountRef.current.value = "";
  }

  return (
    <div>
      <label>ID</label> <br />
      <input onChange={checkUniqueID} ref={idRef} type="number" /> <br />
      {unique === false && <div style={{color:"red"}}>A product with this ID already exists!</div>}
      <label>Title</label> <br />
      <input ref={titleRef} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Category</label> <br />
      <select ref={selectRef}>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Rating</label> <br />
      <input ref={ratingRateRef} type="number" /> <br />
      <label>Rating count</label> <br />
      <input ref={ratingCountRef} type="number" /> <br />
      <button onClick={addProduct} disabled={unique === false}>Add product</button>
      
      
    </div>
  )
}

export default AddProduct