import { useParams } from "react-router-dom"
// import productsFromFile from "../../data/products.json"
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Product } from "../../models/Product";

function SingleProduct() {
  const { id } = useParams();
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const found = dbProducts.find(product => product.id === Number(id));
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

  if (loading) {
    return <Spinner />
  }

  if (found === undefined) {
    return <div>Product could not be found</div>
  }

  return (
    <>
      <div>{found.id}</div>
      <div>{found.title}</div>
      <div>{found.price}€</div>
      <div>{found.description}</div>
      <div>{found.category}</div>
      <div><img style={{width:"400px"}} src={found.image} alt=""/></div>
      <div>Rating: {found.rating.rate}</div>
      <div>No. of ratings: {found.rating.count}</div>
    </>
  )
}

export default SingleProduct