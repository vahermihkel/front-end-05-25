import { useEffect, useState } from "react"

function Tarnija3() {
  const [tooted, setTooted] = useState([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/react?page=0")
      .then(res => res.json())
      .then(json => setTooted(json.books))
  }, []);

  return (
    <div>
          <table>
            <thead>
              <tr>
                <th style={{width: "5%"}}>ID</th>
                <th style={{width: "10%"}}>Title</th>
                <th style={{width: "10%"}}>Price</th>
                <th style={{width: "10%"}}>Osta</th>
                <th style={{width: "35%"}}>Description</th>
                <th style={{width: "10%"}}>Image</th>
              </tr>
            </thead>
            <tbody>
            {tooted
              .map((product) => 
              <tr key={product.id}>
                <td>{product.isbn13}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td><a href={product.url}>Osta</a></td>
                <td>{product.subtitle}</td>
                <td><img style={{width: "100px"}} src={product.image} alt=""/></td>
              </tr>
               )}
            </tbody>
          </table>
     
    </div>
  )
}

export default Tarnija3