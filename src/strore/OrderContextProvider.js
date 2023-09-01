import { useReducer } from "react";
import OrdersContext from "./order-context";

const defaultOrders = {
    ordersArr: [],
    totalAmount: 0
}

const orderReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.order.price * action.order.amount;

        const existingCartItemIndex = state.ordersArr.findIndex(
            (item) => item.id === action.order.id
        );
        const existingCartItem = state.ordersArr[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: +existingCartItem.amount + +action.order.amount,
            };
            updatedItems = [...state.ordersArr];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.ordersArr.concat(action.order);
        }

        return {
            ordersArr: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.ordersArr.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.ordersArr[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (+existingCartItem.amount === 1) {
            updatedItems = state.ordersArr.filter(e => e.id !== action.id)
        }
        else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };
            updatedItems = [...state.ordersArr];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            ordersArr: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'CLEAR') {
        return defaultOrders;
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

    const clearCartHandler = () => {
        ordersDispatch({ type: 'CLEAR' });
    }

    return (
        <OrdersContext.Provider value={{
            totalAmount: ordersState.totalAmount,
            orders: ordersState.ordersArr,
            addItem: addItemHandler,
            removeItem: removeItemHandler,
            clearCart: clearCartHandler
        }} >
            {props.children}
        </OrdersContext.Provider >
    );
}

export default OrdersContextProvider;
