export const fetchProducts = async() =>{
    const response = await fetch("https://dummyjson.com/products");
    console.log(response);
    return response
}

export const fetchProductsbyname = async(q) =>{
    const response = await fetch(`https://dummyjson.com/products/search?q=${q}`);
    console.log(response);
    return response
}