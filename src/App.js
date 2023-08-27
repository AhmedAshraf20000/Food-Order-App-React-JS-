import { useCallback, useState } from "react";
import Header from "./components/Header";
import LandingSesction from "./components/LandingSection";
import Menu from "./components/Menu/Menu";
import CartModal from "./components/Modal/CartModal";
import OrdersContextProvider from "./strore/OrderContextProvider";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const modalOpenHandler = useCallback(() => setOpenModal(true), []);

  const modalCloseHandler = useCallback(() => setOpenModal(false), []);

  return (
    <OrdersContextProvider>
      {openModal && <CartModal close={modalCloseHandler} />}
      <Header openModal={modalOpenHandler} />
      <LandingSesction />
      <Menu />
    </OrdersContextProvider>
  );
}

export default App;
