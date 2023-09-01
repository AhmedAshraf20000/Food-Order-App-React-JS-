import { createContext } from "react";

const OrdersContext = createContext({
    totalAmount: 0,
    orders: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { }
});

export default OrdersContext;