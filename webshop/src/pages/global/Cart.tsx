import { useContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from "react-i18next"
import { CartSumContext } from "../../context/CartSumContext.tsx";
import { CartProduct } from "../../models/CartProduct.ts";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import removeImg from "../../assets/remove.png";


function Cart() {
  const [products, setProducts] = useState<CartProduct[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
  const { t } = useTranslation();
  const {setCartSum} = useContext(CartSumContext); 

  const emptyCart = () => {
    setCartSum(0);
    setProducts([]);
    localStorage.setItem("cart", "[]");
    toast.success("Cart emptied successfully!");
  }

  const totalSum = () => {
    let sum = 0;
    products.forEach(cp => sum += cp.product.price * cp.quantity);
    return sum;
  }

  const decreaseQuantity = (index: number) => {
    // setCartSum(cartSum - products[index].product.price);
    products[index].quantity = products[index].quantity - 1; 
    setCartSum(totalSum());
    if (products[index].quantity === 0) {
      remove(index);
    } else {
      setProducts(products.slice());
      localStorage.setItem("cart", JSON.stringify(products));
    }
  }

  const increaseQuantity = (index: number) => {
    // setCartSum(cartSum + products[index].product.price);
    products[index].quantity = products[index].quantity + 1;  
    setCartSum(totalSum());
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
  }

  const remove = (index: number) => {
    // setCartSum(cartSum - products[index].product.price * products[index].quantity);
    products.splice(index, 1);
    setCartSum(totalSum());
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    toast.success("Item removed from cart!");
  }

  return (
    <div>
      <ToastContainer 
        position="bottom-right"
      />
      {products.length > 0 && <button onClick={emptyCart}>{t("cart.emptycart")}</button>}
      {products.length === 0 && <div>{t("cart.isempty")}</div>}
      <div>{t("cart.carthas")} {products.length} {t("cart.itemstotal")} {totalSum().toFixed(2)}€</div>
      <br />
      <div className="grid-container">
      {products.map((cp, index) => 
        <div key={index}>
          <div className="grid-item-preview">
            <img style={{width:"100px"}} src={cp.product.image} alt=""/>
          </div>
          <div>{cp.product.title}</div>
          <div>{cp.product.price.toFixed(2)}€</div>
          <img onClick={() => decreaseQuantity(index)} className="icon" src={minus} alt="" />
          <div>{cp.quantity}pcs</div>
          <img onClick={() => increaseQuantity(index)} className="icon" src={plus} alt="" />
          <div>{(cp.product.price * cp.quantity).toFixed(2)}€</div>
          <img onClick={() => remove(index)} className="icon" src={removeImg} alt="" />
        </div>)} 
      </div>   
    </div>
  )
}

export default Cart