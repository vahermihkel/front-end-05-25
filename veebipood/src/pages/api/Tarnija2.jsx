import { useEffect, useState } from "react"

function Tarnija2() {
  const [tooted, setTooted] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
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
                <th style={{width: "10%"}}>Retail price</th>
                <th style={{width: "35%"}}>Description</th>
                <th style={{width: "10%"}}>Category</th>
                <th style={{width: "10%"}}>Image</th>
              </tr>
            </thead>
            <tbody>
            {tooted
              .sort((a,b) => a.id - b.id)
              .map((product) => 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{(product.price * 1.2).toFixed(2)}</td>
                <td>{product.description}</td>
                <td>{product.category.name}</td>
                <td><img style={{width: "100px"}} src={product.images} alt=""/></td>
              </tr>
               )}
            </tbody>
          </table>
     
    </div>
  )
}

export default Tarnija2