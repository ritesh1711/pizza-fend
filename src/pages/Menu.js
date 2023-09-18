import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pizza from '../components/Pizza';
import { getallpizzas } from '../actions/pizzaaction';

export default function Menu() {
  const dispatch = useDispatch();

  const { pizzas, error, loading } = useSelector((state) => state.getallpizzasreducers);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getallpizzas());
      } catch (err) {
        console.error('Error fetching pizzas:', err);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className='pt-20'>
      {loading ? (
        <h1 className='text-3xl font-bold text-center'>Loading...</h1>
      ) : error ? (
        <h1 className='text-3xl font-bold text-center'>{error}</h1>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {pizzas.map((pizza) => (
            <div className='bg-white shadow-md rounded-lg' key={pizza._id}>
              <div className='p-4'>
                <Pizza pizza={pizza} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
