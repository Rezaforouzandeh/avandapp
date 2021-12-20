const cart = [];

const handleCart = (state = cart, action) => {

    const product = action.payload;
    switch(action.type) {
        case "ADDITEM":
            // checks if the Product is Already exist
            const exist = state.find((x) => x.id === product.id);
            if(exist){
                // Increase the Quantity
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

        case "DELITEM":
            const existToDelete = state.find((x) => x.id === product.id);
            if(existToDelete.qty === 1){
                return state.filter((x) => x.id !== existToDelete.id);
            }else{
                return state.map((x) => x.id === product.id ? {...x, qty : x.qty - 1} : x);
            }
            break;

        default:
            return state;
            break;
    }

}

export default handleCart;