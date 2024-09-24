import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthPeovider";
import { FaCartArrowDown } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import img from "../../../assets/home/03.png";
// Optional if you want to show notifications
import { localStorageManager } from "../../../LocalStorage/LocalStroage";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showCart, setShowCart] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch initial cart items from local storage
    setData(localStorageManager.getFromLocalStorage());

    // Subscribe to localStorage updates
    const unsubscribe = localStorageManager.subscribe((updatedItems) => {
      setData(updatedItems);
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  // Function to handle removing a product
  const handleRemoveProduct = (productId) => {
    localStorageManager.removeFromLocalStorage(productId);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="menu">All Menu</Link>
      </li>
      <li>
        <Link to="order/salad">Order Food</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BESTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {user ? (
          <>
            {/* Show Logout button when user is logged in */}
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
            <button
              onClick={toggleCart}
              className="btn text-xl btn-ghost relative"
            >
              <FaCartArrowDown />
              <span className="w-[16px] absolute top-0 right-[5px] flex justify-center items-center text-[9px] h-[16px] bg-red-600 text-white rounded-full">
                {data?.length}
              </span>
            </button>
          </>
        ) : (
          <div className="navbar-end">
            {/* Show Login button when no user is logged in */}
            <a href="/login" className="btn">
              Login
            </a>
          </div>
        )}

        {showCart && (
          <div className="w-[400px] flex items-start h-[100vh] bg-white flex-col absolute right-0 top-0">
            <div className="flex justify-end w-[100%]">
              <button
                onClick={toggleCart}
                className="btn text-black text-xl btn-ghost "
              >
                <ImCross />
              </button>
            </div>
            <div className="max-w-md mx-auto w-full mt-2 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400">
              <div className="px-4 py-2 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">Shopping Cart</h2>
              </div>

              <div className="flex flex-col divide-y divide-gray-200">
                {data.map((item, index) => (
                  <div
                    className="flex items-center py-4 px-6"
                    key={item?.id || index}
                  >
                    <img
                      className="w-16 h-16 object-cover rounded"
                      src={img}
                      alt={item?.name}
                    />
                    <div className="ml-3">
                      <h3 className="text-gray-900 font-semibold">
                        {item?.name}
                      </h3>
                      <p className="text-gray-700 mt-1">${item?.price}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveProduct(item._id)}
                      className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
                <h3 className="text-gray-900 font-semibold">
                  Total: $
                  {data
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </h3>
                <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
