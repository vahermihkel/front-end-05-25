import { useContext, useEffect, useRef, useState } from 'react'
// import productsFromFile from '../../data/products.json'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { Spinner } from 'react-bootstrap';
import { CartSumContext } from '../../context/CartSumContext';
import { Product } from '../../models/Product';
import { CartProduct } from '../../models/CartProduct';


function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { t } = useTranslation();
  const selectRef = useRef<HTMLSelectElement>(null);
  const productsUrl = "https://mihkel-webshop-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const {cartSum, setCartSum} = useContext(CartSumContext);
  
  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })
  }, []);

  function addToCart(clickedProduct: Product){
    setCartSum(cartSum + clickedProduct.price); // navigationbaris summa uuendamiseks
    const cartLS: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productFound = cartLS.find(cp => cp.product.id === clickedProduct.id)
    if (productFound !== undefined) {
      productFound.quantity = productFound.quantity + 1;
    } else {
      cartLS.push({quantity: 1, product: clickedProduct});
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));
    toast.success("Item added to cart!");
  }

  function sortAZ(){
    products.sort((a, b) =>  a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

   function sortZA(){
    products.sort((a, b) =>  b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  function cheapestFirst() {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

   function expensiveFirst() {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  function bestFirst() {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }

   function worstFirst() {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  function filterByCategory() {
    // if (selectRef.current.value === "men's clothing"){
    //   const result = productsFromFile.filter(product => product.category === "men's clothing");
    //   setProducts(result);
    // }
    // if (selectRef.current.value === "women's clothing"){
    //   const result = productsFromFile.filter(product => product.category === "women's clothing");
    //   setProducts(result);  
    // }
    // if (selectRef.current.value === "jewelery"){
    //   const result = productsFromFile.filter(product => product.category === "jewelery");
    //   setProducts(result);
    // }
    // if (selectRef.current.value === "electronics"){
    //   const result = productsFromFile.filter(product => product.category === "electronics");
    //   setProducts(result);
    // }
    const selectInput = selectRef.current;
    if (selectInput === null) {
      return;
    }
    if (selectInput.value === ""){
      setProducts(dbProducts.slice());
    } else {
      const result = dbProducts.filter(product => product.category === selectInput.value);
      setProducts(result);
    }
  }

  if (loading) {
    //return <div>Loading...</div>
    return <Spinner />
  }

  return (
    <div>
      <ToastContainer 
        position="bottom-right"
      />
      <button onClick={sortAZ}>{t("homepage.sortAZ")}</button>
      <button onClick={sortZA}>{t("homepage.sortZA")}</button>
      <button onClick={cheapestFirst}>{t("homepage.cheapfirst")}</button>
      <button onClick={expensiveFirst}>{t("homepage.expensivefirst")}</button>
      <button onClick={bestFirst}>{t("homepage.bestfirst")}</button>
      <button onClick={worstFirst}>{t("homepage.worstfirst")}</button>

      <label>{t("homepage.choose-category")}</label>
      <select ref={selectRef} onChange={filterByCategory}>
        <option value="">--</option>
        <option value="men's clothing">{t("homepage.mens-clothing")}</option>
        <option value="women's clothing">{t("homepage.womens-clothing")}</option>
        <option value="jewelery">{t("homepage.jewelery")}</option>
        <option value="electronics">{t("homepage.electronics")}</option>
      </select>
      <div className="grid-container">
        {products.map(product =>
          <div key={product.title}>
            <div className="grid-item-preview">
              <img style={{width:"50%"}} src={product.image} alt="" />
            </div>
              <div>{product.title}</div>
              <div>{product.price}€</div>          
            <div className="grid-buttons">
              <button onClick={() => addToCart(product)}>{t("homepage.addtocart")}</button>
              <Link to={"/product/" + product.id}>
                <button>{t("homepage.moreinfo")}</button>
              </Link>
          </div>
          </div>      
        )}
      </div>
    </div>
  )
}

export default HomePage