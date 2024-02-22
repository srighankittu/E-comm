import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../utils/Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const checkoutItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentCheckoutPrice = 0;
  const totalPrice = checkoutItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    currentCheckoutPrice
  );
  function Checkout() {
    dispatch(clearItems());
    navigate("/dashboard");
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex flex-col justify-center m-4 p-4 ">
        {checkoutItems.map((item) => {
          return (
            <div
              key={item?.id}
              className="w-6/12 mx-auto border border-solid border-black rounded-lg h-8 flex justify-between"
            >
              <div className="px-4">{item?.title}</div>
              <div className="px-4">Rs.{item?.price}</div>
            </div>
          );
        })}
      </div>
      <div className="w-6/12 mx-auto border border-solid border-black rounded-lg h-8 flex justify-between">
        <div>Total:</div>
        <div>Rs.{totalPrice}</div>
      </div>
      <button
        onClick={Checkout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto flex justify-between"
      >
        Checkout!
      </button>
    </div>
  );
}

export default Checkout;
