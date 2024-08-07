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

const productQuantity = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
        return 0;
    }else {
        return state.selectedItems[index].quantity;
    }
}

const getInitialQuery = (searchParams) => {
    const query = {}
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    if (category) query.category = category
    if (search) query.search = search
    return query
}

const toFix = (num) => {
    return num.toFixed(2)
}

export {shortenText,getInitialQuery, searchProducts ,toFix, filterProducts, productQuantity, sumProducts, creatObjectQuery}