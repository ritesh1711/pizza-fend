import axios from "axios"

export const getallpizzas = () => async (dispatch) => {
  dispatch({ type: 'GET_PIZZA_REQUEST' });

  try {
    const response = await axios.get('/api/pizzas/getpizzas'); // Use await to wait for the response
    console.log(response.data);
    dispatch({ type: 'GET_PIZZA_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'GET_PIZZA_FAILED', payload: error });
  }
};
