"use client"
export default function CartItem({ item }) {
  const removeFromCart = () => {
    removeItem(item);
  };
  const updateQuantity = (quantity) => {
    updateItemQuantity(item, quantity);
  };
  return (
    <div className="flex items-center justify-between border-b border-gray-300 pb-2">
      <div className="flex items-center space-x-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 object-cover"
        />
        <div>
          <h2 className="font-bold">{item.title}</h2>
          <p className="text-gray-500">${item.price.toFixed(2)}</p>
          <div className="flex items-center space-x-2 mt-2">
            <button className="text-gray-500" onClick={removeFromCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 19a9 9 0 100-18 9 9 0 000 18zM5 9a1 1 0 011-1h8a1 1 0 010 2H6a1 1 0 01-1-1zm4 4a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(parseInt(e.target.value))}
              className="border border-gray-300 w-16 h-8 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
