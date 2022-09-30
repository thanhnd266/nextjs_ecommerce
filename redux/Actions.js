import { addCart } from "./CartSlice";
import { notifyAction } from "./NotifySlice";

export const addToCart = (product, cart) => {
  if (product.inStock === 0) {
    return notifyAction({ error: "This product is out of stock" });
  }

  const check = cart.every((item) => {
    return item._id !== product._id;
  });

  if (!check) {
    return notifyAction({ error: "The product has been added to cart" });
  }

  return addCart({ ...product, quantity: 1 });
};

export const increaseCart = (data, id) => {
  let newData = data;

  newData.map((item) => {
    if (item._id === id) {
      item = {
        ...item,
        quantity: item.quantity + 1,
      };
    }
  });
  return addCart(item);
};

export const decreaseCart = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.id === id) {
      item.quantity -= 1;
    }
  });

  return addCart(...newData);
};
