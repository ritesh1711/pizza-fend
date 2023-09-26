import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pizza from "../components/Pizza";
import { getallpizzas } from "../actions/pizzaaction";
import ReactPaginate from "react-paginate";

export default function Menu() {
  const dispatch = useDispatch();

  const { pizzas, error, loading } = useSelector(
    (state) => state.getallpizzasreducers
  );

  const [currentPage, setCurrentPage] = useState(0);
  const pizzasPerPage = 6; // Number of pizzas to display per page

  useEffect(() => {
    // Define an async function to fetch pizzas
    const fetchData = async () => {
      try {
        await dispatch(getallpizzas());
      } catch (err) {
        console.error("Error fetching pizzas:", err);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [dispatch]);

  const handlePageChange = ({ selected }) => {
    // Update the current page when the user clicks on pagination links
    setCurrentPage(selected);
  };

  // Calculate the total number of pages needed for pagination
  const pageCount = Math.ceil(pizzas.length / pizzasPerPage);

  // Slice the pizzas array to display the current page's pizzas
  const startPizzaIndex = currentPage * pizzasPerPage;
  const endPizzaIndex = startPizzaIndex + pizzasPerPage;
  const displayedPizzas = pizzas.slice(startPizzaIndex, endPizzaIndex);

  return (
    <div className="pt-20">
      {loading ? (
        <h1 className="text-3xl font-bold text-center">Loading...</h1>
      ) : error ? (
        <h1 className="text-3xl font-bold text-center">{error}</h1>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedPizzas.map((pizza) => (
              <div className="bg-white shadow-md rounded-lg" key={pizza._id}>
                <div className="p-4">
                  <Pizza pizza={pizza} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center flex-row">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName="pagination" // Remove the extra 'a' here
              activeClassName="active"
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel="..."
            />
          </div>
        </>
      )}
    </div>
  );
}
