import CheckoutHeader from "../../components/header/CheckoutHeader";
import OrderList from "../../components/order/OrderList";
import Address from "../../components/order/Address";

export default function Checkout() {
  return (
    <div className="bg-gradient-to-r from-[#1c0101] via-[#2d0101] to-[#1c0101]">
      <CheckoutHeader />
      <div className="m-auto mt-8 flex w-3/5 flex-col items-start text-slate-200">
        <OrderList />
        <Address />
      </div>
    </div>
  );
}
