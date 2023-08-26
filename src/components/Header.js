import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrdersContext from "../strore/order-context";
import { useContext } from "react";

const Header = (props) => {
    const ctx = useContext(OrdersContext);
    const ordersNumber = ctx.orders.reduce((acc, curr) => acc + +curr.amount, 0);

    const openModalHandler = () => {
        props.openModal();
    }

    return (
        <header className=" bg-red-800 fixed z-40 w-full">
            <div className="container mx-auto py-5 px-10 flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold">FoodOrderApp</h1>
                <div className="bg-red-950 flex gap-3 rounded-full px-7 py-2 items-center cursor-pointer hover:bg-red-900" onClick={(openModalHandler)}>
                    <FontAwesomeIcon icon={faCartShopping} className="text-white" />
                    <p className="capitalize text-white font-semibold text-lg">your cart</p>
                    <div className="text-white bg-red-600 px-3 text-lg rounded-full ">{ordersNumber}</div>
                </div>
            </div>
        </header>
    );
};

export default Header;