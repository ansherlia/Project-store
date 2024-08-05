const shortenText = (text) => {
    return text.split(" ").slice(0,3).join(" ")
}

const searchProducts = (products, search) => {
    if (!search) return products
    const searchedProducts = products.filter(p => p.title.toLowerCase().includes(search))
    return searchedProducts
}

const filterProducts = (products, category) => {
    if (!category || category === "all") return products
    const filteredCategory = products.filter(p => p.category.toLowerCase().includes(category))
    return filteredCategory
}

export {shortenText, searchProducts , filterProducts}