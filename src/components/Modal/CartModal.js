import { createPortal } from "react-dom";
import ModalItem from "./ModalItem";
import OrdersContext from "../../strore/order-context";
import { useContext } from "react";

const Modal = (props) => {
    const ctx = useContext(OrdersContext);

    const closeHandler = () => {
        props.close(false);
    }

    return (
        <div className="fixed w-full h-screen z-50 flex items-center ">
            <div className="bg-black opacity-70 w-full h-full absolute -z-10" onClick={closeHandler}></div>
            <div className="w-1/2 mx-auto px-7 py-8 space-y-4 rounded-xl bg-white overflow-y-scroll max-h-80">
                {ctx.orders.map((e, i) => <ModalItem key={i} id={e.id} title={e.title} price={e.price} amount={e.amount} />)}
                <div className="flex md:justify-between md:item-center flex-wrap justify-center md:flex-nowrap text-center md:text-left">
                    <p className="text-lg font-bold capitalize">total amount</p>
                    <p className="text-lg font-bold">${+ctx.totalAmount.toFixed(2)}</p>
                </div>
                <div className="md:w-fit md:ml-auto md:block flex flex-wrap justify-center items-center gap-2 md:space-x-3">
                    <button className="text-red-800 border border-red-800 rounded-full hover:bg-red-800 hover:text-white px-6 py-1" onClick={closeHandler}>close</button>
                    <button className={`${ctx.orders.length === 0 && 'hidden'} text-white bg-red-800 border border-red-800 hover:text-red-800 hover:bg-white px-6 py-1 rounded-full`}>order</button>
                </div>
            </div>
        </div>
    )
};

const CartModal = (props) => {
    const handleClose = () => {
        props.close(false);
    }
    return (
        <>
            {createPortal(<Modal close={handleClose} />, document.getElementById("modal-root"))}
        </>
    );
}

export default CartModal;