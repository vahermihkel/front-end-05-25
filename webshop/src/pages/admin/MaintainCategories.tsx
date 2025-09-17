import { useEffect, useRef, useState } from "react"

function MaintainCategories() {
  const [categories, setCategories] = useState<{name: string}[]>([]);
  const categoriesUrl = "https://mihkel-webshop-05-2025-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const categoryRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    if (categoryRef.current === null) {
      console.log("NOT IN HTML");
      return;
    }
    categories.push({name: categoryRef.current.value});
    fetch(categoriesUrl, {method: "PUT", body: JSON.stringify(categories)});
    setCategories(categories.slice());
    categoryRef.current.value = "";
  }

  const deleteCategory = (index: number) => {
    categories.splice(index,1);
    fetch(categoriesUrl, {method: "PUT", body: JSON.stringify(categories)});
    setCategories(categories.slice());
  }

  return (
    <div>
      <label>Kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Lisa</button> <br />
      {categories.map((category, index) => 
        <div>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default MaintainCategories