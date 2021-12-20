// For add to cart
export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}


// For Delete from cart
export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

