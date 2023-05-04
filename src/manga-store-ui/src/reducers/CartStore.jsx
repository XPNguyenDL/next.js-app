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

const products = () => {
  if (typeof localStorage !== "undefined") {
    return JSON.parse(localStorage.getItem("cart-products"));
    // localStorage is supported
  } else {
    return [];
  }
};

const initialState = {
  items: products() ?? []
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
      localStorage.setItem("cart-products", JSON.stringify(newItems));
      return {
        ...state,
        items: newItems
      };
    }
    case "REMOVE_ITEM":
      state = state.items.filter((item) => item.id !== action.itemId);
      localStorage.setItem("cart-products", JSON.stringify(state));
      return {
        ...state,
        items: state
      };
    case "ADD_ITEM":
      const newItems = [...state.items, action.payload.data];
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
