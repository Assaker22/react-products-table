import { fetchProducts, fetchProductsbyname } from "./Api/axiosinstance";
import { useEffect, useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const loadProducts = async () => {
    const data = await fetchProducts();
    console.log(data.body);
    setProducts((await data.json()).products);
  };
  const loadFilteredProducts = async (name) => {
    const data = await fetchProductsbyname(name);
    setProducts((await data.json()).products);
  };
  useEffect(() => {
    if (filter.trim() === "") {
      loadProducts();
    } else {
      loadFilteredProducts(filter);
    }
  }, [filter]);
   console.log('products fetche',products)

  return (
    <>
    <input
    type="text"
    placeholder="Filter by name"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    style={{ marginBottom: "1rem", padding: "0.5rem" }}
    />
    <table>
      <caption>Front-end web developer</caption>
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">category</th>
          <th scope="col">price</th>
          <th scope="col">rating</th>
        </tr>
      </thead>
      <tbody>
      {products.map(product =>{
       return <tr key={product.id}>
          <td>{product.title}</td>
          <td>{product.category}</td>
          <td>{product.price}</td>
          <td>{product.rating}</td>
        </tr>
       })}
      </tbody>
    </table>
    </>
    
  );
};
export default Products;
