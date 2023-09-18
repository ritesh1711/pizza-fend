import React, { useEffect , useState } from 'react';
import pizzas from '../pizzadata';
import { UseSelector, useDispatch } from 'react-redux';
import Pizza from '../components/Pizza';
import { getallpizzas } from '../actions/pizzaaction';

export default function Menu() {
  // Helper function to chunk pizzas into groups of 3
  const chunkPizzas = (arr, chunkSize) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunked.push(arr.slice(i, i + chunkSize));
    }
    return chunked;
  };

  // Chunk the pizzas into groups of 3

  const pizzaGroups = chunkPizzas(pizzas, 3);
  
  const dispatch =useDispatch()
  useEffect(()=>{
        dispatch(getallpizzas())
    })
  

  return (
    <div className='pt-28'>
      {pizzaGroups.map((group, index) => (
        <div className="flex flex-row text-extrabold" key={index}>
          {group.map((pizza) => (
            <div className="w-1/3 pb-24 text-extrabold" key={pizza.name}>
              <Pizza pizza={pizza} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
