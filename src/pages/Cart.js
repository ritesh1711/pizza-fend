import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart, deletefromcart } from '../actions/cartactions';

export default function Cart() {
  const cartstate = useSelector((state) => state.cartreducer);
  const cartitems = cartstate.cartitems;
  const dispatch = useDispatch();
  const subtotal = cartitems.reduce((x, item) => x + item.price, 0);

  const handleDeleteFromCart = (item) => {
    dispatch(deletefromcart(item));
  };

  return (
    <div className='mt-20 text-center'>
      <h2 className='text-3xl font-bold mb-6'>MY CART</h2>

      <div className='flex justify-center'>
        <div className='w-full md:w-3/4 lg:w-1/2'>
          {cartitems.map((item) => (
            <div className='bg-white p-4 rounded shadow-md mb-4' key={item.id}>
              <h1 className='text-2xl font-semibold'>
                {item.name} [{item.variant}]
              </h1>
              <p className='text-lg'>
                Price: {item.quantity} * {item.prices[0][item.variant]} = {item.price}
              </p>
              <p className='text-lg'>Quantity: {item.quantity}</p>
              <div className='flex justify-center mt-4'>
                <button
                  className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full'
                  onClick={() => {
                    dispatch(addtocart(item, item.quantity + 1, item.variant));
                  }}
                >
                  +
                </button>
                <button
                  className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full ml-4'
                  onClick={() => {
                    dispatch(addtocart(item, item.quantity - 1, item.variant));
                  }}
                >
                  -
                </button>
                <button
                  className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full ml-4'
                  onClick={() => {
                    handleDeleteFromCart(item); // Call the delete function
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className='text-xl font-semibold mt-4'>
            SubTotal : {subtotal} /RS-
          </div>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4'>
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
}
