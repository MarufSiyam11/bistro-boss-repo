import React, { useState } from "react";

const AddToCartSection = () => {
  // State to manage the visibility of the card section
  const [isCardVisible, setIsCardVisible] = useState(false);

  // Function to toggle the visibility
  const toggleCardVisibility = () => {
    setIsCardVisible((prevState) => !prevState);
  };

  return (
    <div className="p-4">
      {/* Button to toggle card visibility */}
      <button
        onClick={toggleCardVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
      >
        {isCardVisible ? "Hide Cart" : "Add to Cart"}
      </button>

      {/* Conditionally rendered card section */}
      {isCardVisible && (
        <div className="mt-4 p-4 border rounded-md shadow-lg bg-white">
          <h2 className="text-xl font-bold mb-2">Cart Item</h2>
          <p className="text-gray-700">
            Here is the item you added to the cart.
          </p>
          {/* Add more details or functionality here */}
        </div>
      )}
    </div>
  );
};

export default AddToCartSection;
