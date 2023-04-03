const Cart = () => {
  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        <li className="mt-2 flex justify-between">
          <span>Ürün 1</span>
          <span>100 TL</span>
        </li>
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam:</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition-all mt-4">Sepeti Boşalt</button>
    </div>
  );
};

export default Cart;
