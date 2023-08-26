import { createContext } from "react";

const OrdersContext = createContext({
    totalAmount: 0,
    orders: [],
    addItem: (item) => { },
    removeItem: (id) => { },
});

export default OrdersContext;