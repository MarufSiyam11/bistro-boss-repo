import { toast } from "react-toastify";

const getStoredAddToCard = () => {
  const storedAddToCard = localStorage.getItem("addTo-Crad");
  if (storedAddToCard) {
    return JSON.parse(storedAddToCard);
  }
  return [];
};

const saveAddToCard = (menu) => {
  const storedAddToCards = getStoredAddToCard();

  // Correct comparison: comparing id values
  const exists = storedAddToCards.find((item) => item.id === menu.id);

  if (exists) {
    return toast.error("You have already add this item.");
  }
  if (!exists) {
    storedAddToCards.push(menu);
    localStorage.setItem("addTo-Crad", JSON.stringify(storedAddToCards));
    toast.success("Donation saved successfully!");
  }
};
const deleteAddToCard = (id) => {
  let storedAddToCards = getStoredAddToCard();

  // Filter out the item with the given id
  storedAddToCards = storedAddToCards.filter((item) => item.id !== id);

  // Update the local storage with the new filtered array
  localStorage.setItem("addTo-Crad", JSON.stringify(storedAddToCards));
};

export { getStoredAddToCard, saveAddToCard, deleteAddToCard };
