const allCatogeries = async () => {
    return await fetch('https://fakestoreapi.com/products/categories')
}
async function productsById(id=0) {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    const d= await data.json()
    return d
}
async function productByCategory(category="",page=0 ) {
    const data = await fetch(`https://fakestoreapi.com/products/${category==="All Category" ? "" : "category/"+category}?limit=${(page+1)*3}`)
    const d= await data.json()
    return d
}

export {allCatogeries, productsById, productByCategory}