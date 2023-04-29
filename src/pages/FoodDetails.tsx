import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FoodDetails } from "../types/foodDetailInterfaces";
import { Link } from "react-router-dom";

const FoodDetails: React.FC = () => {
  const food = useLoaderData() as FoodDetails;
  const summary = food.summary.replace(/<.*?>/g, "");

  return (
    <div className="lg:w-9/12 mx-auto px-4 lg:px-0">
      <img className="w-full" src={food.image} alt={food.title} />
      <h2 className="lg:text-3xl text-lg text-center lg:py-10 py-6 font-bold">
        {food.title}
      </h2>
      <p className="lg:text-xl text-sm">{summary}</p>
      <Link
        to={food.sourceUrl}
        target="_blank"
        className="underline underline-offset-4 text-purple-600 font-semibold "
      >
        Source
      </Link>
    </div>
  );
};
export default FoodDetails;
