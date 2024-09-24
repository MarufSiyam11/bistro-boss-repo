import { localStorageManager } from "../../LocalStorage/LocalStroage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  // Check if the product is already in the cart
  const handleAddProduct = (product) => {
    const cartItems = localStorageManager.getFromLocalStorage("cart") || [];

    // Check if the product already exists in the cart
    const isAlreadyInCart = cartItems.find(
      (cartItem) => cartItem.name === product.name
    );

    if (isAlreadyInCart) {
      // Show a toast if the item is already in the cart
      toast.warning("This item is already in the cart!");
    } else {
      // Add product to the cart if it's not in the cart
      localStorageManager.addToLocalStorage2(product);
      toast.success("Product added to cart successfully!");
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 px-4 bg-slate-900 text-white ">
        ${price}
      </p>
      <div className="card-body justify-center items-center">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddProduct(item)}
            className="btn btn-outline bg-slate-500 border-orange-400 border-0 border-b-4 mt-4 text-white uppercase"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
