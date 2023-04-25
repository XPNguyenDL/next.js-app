import { CounterState } from "@reduxjs/toolkit";

export const updateItemQuantity = (item, quantity) => {
  return {
    type: "UPDATE_ITEM_QUANTITY",
    payload: {
      item,
      quantity
    }
  };
};

export function removeProduct(itemId) {
  return { type: "REMOVE_ITEM", itemId };
}

export function addProduct(data) {
  return {
    type: "ADD_ITEM",
    payload: {
      data
    }
  };
}

const products = localStorage.getItem("cart-products");

const initialState = {
  items: JSON.parse(products) ?? []
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
      state = state.items.filter((item) => item.id !== action.itemId);
      return {
        ...state,
        items: state
      };
    case "ADD_ITEM":
      const newItems = [...state.items, action.payload.data];
      console.log(newItems);
      console.log(action.payload.data);
      localStorage.setItem("cart-products", JSON.stringify(newItems));
      return {
        ...state,
        items: newItems
      };
    // ...other cases
    default:
      return state;
  }
}
