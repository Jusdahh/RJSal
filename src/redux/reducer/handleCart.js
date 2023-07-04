const cart = [];

const handleCart = (state = cart, action) => {
    const produto = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === produto.id);
            if (exist) {
                return state.map((x) =>
                    x.id === produto.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                return [...state, { ...produto, qty: 1 }];
            }

        case "DELITEM":
            const exist1 = state.find((x) => x.id === produto.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === produto.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        default:
            return state;
    }
};

export default handleCart;
