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

const sumProducts = (products) => {
    const itemCounter = products.reduce((acc, cur) => acc + cur.quantity ,0)
    const totalPrice = products.reduce((acc , cur) => acc + cur.price * cur.quantity,0)
    return { itemCounter , totalPrice }
}

const creatObjectQuery = (preQuery, newQuery) => {
    if (newQuery.category === "all") {
        const {category , ...rest} = preQuery
        return rest
    }
    if (newQuery.search === "") {
        const {search , ...rest} = preQuery
        return rest
    }
    return {...preQuery , ...newQuery}
}

export {shortenText, searchProducts , filterProducts, sumProducts, creatObjectQuery}