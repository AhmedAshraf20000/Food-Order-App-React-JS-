import { useContext } from "react";
import OrdersContext from "../../strore/order-context";

const ModalItem = (props) => {
    const ctx = useContext(OrdersContext);

    const addItemHandler = () => {
        ctx.addItem({
            id: props.id,
            title: props.title,
            amount: 1,
            price: props.price
        });
    }

    const removeItemHandler = () => {
        ctx.removeItem(props.id)
    }

    return (
        <div className="flex md:justify-between items-center border-b border-red-800 py-3 flex-wrap md:flex-nowrap gap-2 md:gap-0 justify-center text-center md:text-left">
            <div>
                <h2 className="capitalize font-bold text-lg mb-2">{props.title}</h2>
                <span className="text-red-800 font-bold">${props.price.toFixed(2)}</span>
                <span className="ml-6 border-2 px-3 rounded-md">x{props.amount}</span>
            </div>
            <div className="space-x-3">
                <button className="border border-red-800 text-red-800 hover:text-white hover:bg-red-800 px-3 rounded-md" onClick={addItemHandler}>+</button>
                <button className="border border-red-800 text-red-800 hover:text-white hover:bg-red-800 px-3 rounded-md" onClick={removeItemHandler}>-</button>
            </div>
        </div>
    )
};

export default ModalItem;