import { useState } from "react"
import { useTranslation } from "react-i18next";

function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);
  const {t} = useTranslation();

  const tyhjenda = () => {
    setTooted([]); // HTMLi uuendus
    localStorage.setItem("ostukorv", "[]"); // uuenda localStorage-t
  }

  const kustuta = (index) => {
    tooted.splice(index,1);
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  // <div key={toode}>{toode}</div> <--- key={} mällu jätmiseks, kui re-renderdatakse
  // re-renderdamine ---> useState setteri kasutamine

  return (
    <div>
      
      {tooted.length > 0 && 
      <>
        <div>{t("cart.cart-has")} {tooted.length} {t("cart.items")}</div>
        <button onClick={tyhjenda}>{t("cart.empty-button")}</button>
      </>}

      {tooted.length === 0 && <div>{t("cart.empty-message")}</div>}

      {tooted.map((toode, index) => 
        <div key={index}>
          {toode.nimi} - {toode.hind}€
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      {tooted.length > 0 && <div>Ostukorvi kogusumma xx €</div>}
    </div>
  )
}

export default Ostukorv