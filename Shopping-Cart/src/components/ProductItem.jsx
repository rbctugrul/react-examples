
const ProductItem = ({product}) => {
  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt="img" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-500 my-2">{product.price} TL</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Sepete Ekle
        </button>
      </div>
    </div>
  )
}

export default ProductItem