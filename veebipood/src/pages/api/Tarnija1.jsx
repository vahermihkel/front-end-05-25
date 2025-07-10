import { useEffect, useState } from "react"

function Tarnija1() {
  const [tooted, setTooted] = useState([]);

  // uef + enter
  // käimaminemise funktsioon -> käivitub täpselt 1 korra
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => setTooted(json))
  }, []);

  return (
    <div>
          <table>
            <thead>
              <tr>
                <th style={{width: "5%"}}>ID</th>
                <th style={{width: "10%"}}>Title</th>
                <th style={{width: "10%"}}>Price</th>
                <th style={{width: "35%"}}>Description</th>
                <th style={{width: "10%"}}>Category</th>
                <th style={{width: "10%"}}>Image</th>
                <th style={{width: "5%"}}>Rating</th>
                <th style={{width: "5%"}}>Rate count</th>
              </tr>
            </thead>
            <tbody>
            {tooted
              .filter(product => product.rating.rate > 3)
              .sort((a,b) => b.rating.count - a.rating.count)
              .map((product) => 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img style={{width: "100px"}} src={product.image} alt=""/></td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
              </tr>
               )}
            </tbody>
          </table>
     
    </div>
  )
}

export default Tarnija1