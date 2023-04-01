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

const data = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    quantity: 2,
    image:
      "https://s199.imacdn.com/vg/2022/10/12/dcb5b9169f8e39a0_097d879a510af296_18458116655539437756547.jpg"
  },
  {
    id: 2,
    name: "Product 2",
    price: 19.99,
    quantity: 1,
    image:
      "https://s199.imacdn.com/vg/2022/10/12/dcb5b9169f8e39a0_097d879a510af296_18458116655539437756547.jpg"
  },
  {
    id: 3,
    name: "Product 3",
    price: 5.99,
    quantity: 4,
    image:
      "https://s199.imacdn.com/vg/2022/10/12/dcb5b9169f8e39a0_097d879a510af296_18458116655539437756547.jpg"
  }
];

const initialState = {
  items: data
};

export default function cartReducer(state = initialState, action) {
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
    // ...other cases
    default:
      return state;
  }
};


