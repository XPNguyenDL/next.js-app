import { CounterState } from '@reduxjs/toolkit'

export const updateItemQuantity = (item, quantity) => {
  return {
    type: "UPDATE_ITEM_QUANTITY",
    payload: {
      item,
      quantity
    }
  };
};

export function removeItem(itemId) {
  return { type: "REMOVE_ITEM", itemId };
}


const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "90000.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "320000.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "320000.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
  },
  {
    id: 4,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "320000.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
  }
  
  // More products...
];

const initialState = {
  items: products
};

export default function cartStore(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ITEM_QUANTITY": {
      const { item, quantity } = action.payload;
      const index = state.items.findIndex((i) => i.id === item.id);
      if (index === -1) {
        // Item not found in array, return original state
        return state;
      }
      const newItems = [...state.items];
      newItems[index] = { ...item, quantity };
      return {
        ...state,
        items: newItems
      };
    }
    case "REMOVE_ITEM":
      state = state.items.filter(item => item.id !== action.itemId);
      return {
        ...state,
        items: state
      };
    // ...other cases
    default:
      return state;
  }
};


