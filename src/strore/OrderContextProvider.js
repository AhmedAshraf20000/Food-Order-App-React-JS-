import { useReducer } from "react";
import OrdersContext from "./order-context";

const defaultOrders = {
    ordersArr: [],
    totalAmount: 0
}

const orderReducer = (state, action) => {
    if (action.type === 'ADD') {
        return {
            ordersArr: state.ordersArr.concat(action.order),
            totalAmount: state.totalAmount + action.order.price * action.order.amount
        }
    }
    return defaultOrders;
}

const OrdersContextProvider = (props) => {
    const [ordersState, ordersDispatch] = useReducer(orderReducer, defaultOrders);

    const addItemHandler = (item) => {
        ordersDispatch({ type: 'ADD', order: item });
    }

    const removeItemHandler = (id) => {
        ordersDispatch({ type: 'REMOVE', id: id })
    }

    return (
        <OrdersContext.Provider value={{
            totalAmount: ordersState.totalAmount,
            orders: ordersState.ordersArr,
            addItem: addItemHandler,
            removeItem: removeItemHandler,
        }} >
            {props.children}
        </OrdersContext.Provider >
    );
}

export default OrdersContextProvider;
