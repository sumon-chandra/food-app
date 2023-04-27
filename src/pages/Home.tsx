import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const Home = () => {
  const [foods, setFoods] = useState([] as any[]);
  const options = {
    method: "GET",
    headers: {
      "x-api-key": "f8b7010a9c674893ac472b3f56f58524",
    },
  };
  useEffect(() => {
    const url =
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=100";
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
      {foods.map((food) => (
        <FoodCard food={food} key={food.id} />
      ))}
    </div>
  );
};

export default Home;
