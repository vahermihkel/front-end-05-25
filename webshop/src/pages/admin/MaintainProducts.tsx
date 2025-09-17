import { useEffect, useRef, useState } from 'react'
// import productsFromFile from '../../data/products.json'
import AdminHome from './AdminHome'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Spinner } from 'react-bootstrap'
import { Product } from '../../models/Product'

function MaintainProducts() {
  const { t } = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const productsUrl = "https://mihkel-webshop-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);

  const searchRef = useRef<HTMLInputElement>(null);

   const removeProduct = (index:number) => {
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
    toast.success("Product successfully removed!");
    fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)});
  }

  const searchProducts = () => { 
    const searchInput = searchRef.current;
    if (searchInput === null) {
      return;
    }
    const result = dbProducts.filter(product => product.title.includes(searchInput.value));
    setProducts(result); 
  }

  if (loading) {
    //return <div>Loading...</div>
    return <Spinner />
  }
  
  return (
    <div>
      <ToastContainer/>
      <AdminHome />
      <label>{t("mnt-products.search")} </label>
      <input ref={searchRef} onChange={searchProducts} type="text" /> <br /><br />       
          <table>
            <thead>
              <tr>
                <th>{t("mnt-products.id")}</th>
                <th>{t("mnt-products.title")}</th>
                <th>{t("mnt-products.price")}</th>
                <th>{t("mnt-products.description")}</th>
                <th>{t("mnt-products.category")}</th>
                <th>{t("mnt-products.image")}</th>
                <th>{t("mnt-products.rating")}</th>
                <th>{t("mnt-products.ratecount")}</th>
                <th>{t("mnt-products.delete")}</th>
                <th>{t("mnt-products.edit")}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}€</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img style={{width: "100px"}} src={product.image} alt=""/></td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
                <td><button onClick={() => removeProduct(index)}>X</button></td>
                <td>
                  <Link to={"/admin/edit-product/" + product.id}>
                    <button>{t("mnt-products.edit")}</button>
                  </Link>
                </td>
              </tr>
              )}

            </tbody>
          </table>
    </div>
  )
}

export default MaintainProducts