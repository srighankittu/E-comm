import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Header() {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  function CheckoutNav() {
    navigate("/checkout");
  }
  function DashboardNav() {
    navigate("/dashboard");
  }
  return (
    <div className="flex justify-between p-4 w-full bg-opacity-25 z-10 bg-yellow-700">
      <div>
        <img
          src="https://t4.ftcdn.net/jpg/03/74/18/83/360_F_374188376_fug0Au36cVdtkGRo4uMHHNWbA82zBgdg.jpg"
          width="120"
        />
      </div>
      <div className="flex justify-between p-4 border border-solid border-black rounded-lg">
        <div
          onClick={DashboardNav}
          className="px-6  border-gray-400 border-r-4 cursor-pointer text-lg"
        >
          Dashboard
        </div>
        <div className="px-6  border-gray-400 border-r-4 cursor-pointer text-lg">
          Contact Us
        </div>
        <div className="text-lg px-6 border-gray-400 border-r-4 cursor-pointer">
          About
        </div>
        <div
          onClick={CheckoutNav}
          className="text-lg px-6 border-gray-400 border-r-4 cursor-pointer flex"
        >
          <img
            width="30"
            height="50"
            src="https://img.icons8.com/ios/50/shopping-cart--v1.png"
            alt="shopping-cart--v1"
          />{" "}
          {cartItems.length}
        </div>
      </div>
    </div>
  );
}

export default Header;
