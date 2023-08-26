import { createPortal } from "react-dom";
import ModalItem from "./ModalItem";
import { useState } from "react";

const Modal = (props) => {
    const closeHandler = () => {
        props.close(false);
    }

    return (
        <div className="fixed w-full h-screen z-50 flex items-center">
            <div className="bg-black opacity-70 w-full h-full absolute -z-10" onClick={closeHandler}></div>
            <div className="w-1/2 mx-auto px-7 py-8 space-y-4 rounded-xl bg-white ">
                <div className="flex justify-between item-center">
                    <p className="text-lg font-bold capitalize">total amount</p>
                    <p className="text-lg font-bold">$100.99</p>
                </div>
                <div className="w-fit ml-auto space-x-3">
                    <button className="text-red-800 border border-red-800 rounded-full hover:bg-red-800 hover:text-white px-6 py-1" onClick={closeHandler}>close</button>
                    <button className="text-white bg-red-800 border border-red-800 hover:text-red-800 hover:bg-white px-6 py-1 rounded-full">order</button>
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