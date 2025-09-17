import { useParams, useNavigate } from "react-router-dom"
// import productsFromFile from "../../data/products.json"
import { useEffect, useRef, useState } from "react"
import { Spinner } from "react-bootstrap";
import { Product } from "../../models/Product";

function EditProduct() {
  const { id } = useParams();
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const found = dbProducts.find(product => product.id === Number(id));
  const idRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const ratingCountRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const productsUrl = "https://mihkel-webshop-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => {
        // setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })
    }, []);

  
  const editProduct = () => {
    if (idRef.current === null || titleRef.current === null ||
      priceRef.current === null || descRef.current === null ||
      categoryRef.current === null || imageRef.current === null ||
      ratingRef.current === null || ratingCountRef.current === null
    ) {
      console.log("REF HTMLI PANEMATA!!!!!!");
      return;
    }

    const index = dbProducts.findIndex(product => product.id === Number(id));
    dbProducts[Number(index)] = 
    {
      "id" : Number(idRef.current.value), 
      "title" : titleRef.current.value,
      "price" : Number(priceRef.current.value),
      "description" : descRef.current.value,
      "category" : categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
          "rate": Number(ratingRef.current.value),
          "count": Number(ratingCountRef.current.value)
      }
    }

    fetch(productsUrl, {method: "PUT", body: JSON.stringify(dbProducts)})
      .then(() => navigate("/admin/maintain-products"));
  }

  if (found === undefined) {
    return <div>Product could not be found</div>
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      
      <label>ID</label> <br />
      <input ref={idRef} defaultValue={found.id} type="number" /> <br />
      <label>Title</label> <br />
      <input ref={titleRef} defaultValue={found.title} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} defaultValue={found.price} type="number" /> <br />
      <label>Description</label> <br />
      <input ref={descRef} defaultValue={found.description} type="text" /> <br />
      <label>Category</label> <br />
      <select ref={categoryRef} defaultValue={found.category}>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select><br />
      <label>Image</label> <br />
      <input ref={imageRef} defaultValue={found.image} type="text" /> <br />
      <label>Rating</label> <br />
      <input ref={ratingRef} defaultValue={found.rating.rate} type="number" /> <br />
      <label>Rating count</label> <br />
      <input ref={ratingCountRef} defaultValue={found.rating.count} type="number" /> <br /><br />
      <button onClick={editProduct}>Edit product</button>

    </div>
  )
}

export default EditProduct