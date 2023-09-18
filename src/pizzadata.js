const pizzas = [
  {
    name: "Supreme",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 250, medium: 410, large: 490 },
    ],
    category: "non-veg",
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A combination of all your favorite toppings.",
  },
  {
    name: "Meat Feast",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 260, medium: 420, large: 500 },
    ],
    category: "non-veg",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80",
    description: "A carnivore's dream with a variety of meats.",
  },
  {
    name: "Cheese Lover's",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 210, medium: 370, large: 430 },
    ],
    category: "veg",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80",
    description: "A cheese explosion for the ultimate cheese lovers.",
  },
  {
    name: "Vegetarian Deluxe",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 210, medium: 370, large: 430 },
    ],
    category: "veg",
    image: "https://images.unsplash.com/photo-1599321955726-e048426594af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A combination of fresh vegetables and cheese for veggie lovers.",
  },
  {
    name: "Veggie Delight",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 220, medium: 380, large: 450 },
    ],
    category: "veg",
    image: "https://images.unsplash.com/photo-1599321955726-e048426594af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A medley of fresh veggies for a delightful experience.",
  },
  {
    name: "Mushroom Lovers",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 230, medium: 390, large: 460 },
    ],
    category: "veg",
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "For those who can't get enough of mushrooms.",
  },
  {
    name: "Margherita",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 200, medium: 350, large: 400 },
    ],
    category: "veg",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "I LOVE MARGHERITA PIZZA",
  },
  {
    name: "Pepperoni",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 220, medium: 380, large: 450 },
    ],
    category: "non-veg",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    description: "Classic pepperoni pizza with extra cheese and spices.",
  },
  {
    name: "Hawaiian",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 230, medium: 390, large: 460 },
    ],
    category: "non-veg",
    image: "https://images.unsplash.com/photo-1602658014714-26b99d5a45cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    description: "A tropical delight with ham and pineapple.",
  },
  {
    name: "BBQ Chicken",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 240, medium: 400, large: 480 },
    ],
    category: "non-veg",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
    description: "Tender chicken pieces with a smoky BBQ sauce.",
  },
  {
    name: "Veggie Supreme",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 230, medium: 390, large: 460 },
    ],
    category: "veg",
    image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    description: "A veggie delight with all the supreme toppings.",
  },
  {
    name: "Spicy Chicken",
    varients: ["Small", "Medium", "Large"],
    prices: [
      { small: 240, medium: 400, large: 480 },
    ],
    category: "non-veg",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
    description: "For those who like their pizza with a kick of spice.",
  },
];

export default pizzas;
