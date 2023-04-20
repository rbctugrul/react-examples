import React from "react";

function Product({ product, basket, setBasket }) {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  return (
    <>
      <div className="product">
        <h6>{product.title}</h6>
        <div className="price">{product.price}£</div>
        <div className="actions">
          <button onClick={removeBasket}>Sat</button>
          <span className="amount">
            {(basketItem && basketItem.amount) || 0}
          </span>
          <button onClick={addBasket}>Satın Al</button>
        </div>

        <style jsx>{`
          .product {
            padding: 15px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            width: 24%;
          }
          .product img {
            width: 100%;
          }
          .product h6 {
            font-size: 20px;
            margin-bottom: 10px;
          }
          .product .price {
            font-size: 20px;
            color: #179b17;
          }
          .product .actions {
            display: flex;
            align-items: center;
            margin-top: 15px;
          }
          .actions button {
            height: 40px;
            padding: 0 15px;
            flex: 1;
            cursor: pointer;
          }
          .actions button[disabled] {
            opacity: 0.3;
            cursor: not-allowed;
          }
          .actions .buy-btn {
            background: #61dafb;
            font-size: 14px;
            font-weight: 500;
            border-radius: 0 4px 4px 0;
          }
          .actions .sell-btn {
            background: #ccc;
            font-size: 14px;
            color: #333;
            font-weight: 500;
            border-radius: 4px 0 0 4px;
          }
          .actions .amount {
            width: 50px;
            text-align: center;
            border: 1px solid #ddd;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
            font-weight: bold;
            color: #555;
          }
        `}</style>
      </div>
    </>
  );
}

export default Product;
