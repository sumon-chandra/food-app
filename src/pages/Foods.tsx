import React from "react";
import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";

type FoodsProps = {};

const Foods: React.FC<FoodsProps> = () => {
  const foods = useLoaderData() as any[];

  return (
    <div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 py-20">
        {foods.map((food) => (
          <FoodCard food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
};
export default Foods;
