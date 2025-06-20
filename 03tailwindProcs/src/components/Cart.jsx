const Cart = ({shoppingStatus}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <p className="text-gray-700">Your cart is currently empty.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
       {shoppingStatus}
      </button>
    </div>
  );
};

export default Cart;