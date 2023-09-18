import React, { useState } from 'react';

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1)
  const [varient, setVarient] = useState('small')

  

  return (
    <div   className=' shadow-md p-3 mb-5 bg-white-rounded'>
      <h1><b>{pizza.name}</b></h1>
      <img
        src={pizza.image}
        className="img-fluid"
        style={{ height: '200px', width: '200px', marginLeft: '150px' }}
        alt={pizza.name}
      />

      <div className="flex flex-row pt-5">
        <div className="w-100 pl-24">
          <p className='pb-2'>Variants</p>
          <select className='block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-400' value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
            {pizza.varients.map(varient=>{
                return  <option key={varient} value={varient}>
                          {varient}
                        </option>
            })}
          </select>
        </div>

        <div className="w-100 pl-32">
          <p className='pb-2'>Quantity</p>
          <select className='block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-400' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-container pl-16   w-100     ">
        <div className='pt-5'>
          <h1>Price : {pizza.prices[0][varient] * quantity} RS/-</h1>
        </div>

        <div className='pl-28 pt-4'>
          <button className='btn w-100 text-white  py-1 px-1 font-bold rounded-md'>
            Add to Cart
          </button>
        </div>
      </div>

      
    </div>
  );
}
