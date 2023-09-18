import React, { useState } from 'react';

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('small');

  // Calculate the price based on the selected variant and quantity
  const calculatePrice = () => {
    const price = pizza.prices[0][variant];
    return price * quantity;
  };

  return (
    <div className='shadow-md p-3 mb-5 bg-white rounded'>
      <h1 className='text-2xl font-semibold mb-3'>{pizza.name}</h1>
      <img
        src={pizza.image}
        className="h-48 w-48 mx-auto"
        alt={pizza.name}
      />

      <div className="flex flex-row pt-5">
        <div className="w-1/2 pr-4">
          <p className='text-lg font-medium mb-2'>Variants</p>
          <select className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-400' value={variant} onChange={(e) => setVariant(e.target.value)}>
            {pizza.variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/2">
          <p className='text-lg font-medium mb-2'>Quantity</p>
          <select className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-400' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex mt-5">
        <div className='w-1/2'>
          <h1 className='text-xl font-semibold text-blue-500'>Price:</h1>
        </div>
        <div className='w-1/2'>
          <h1 className='text-xl font-semibold'>{calculatePrice()}</h1>
        </div>
      </div>

      <div className='mt-4'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
