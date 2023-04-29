import { FC } from "react";
import { Food } from "../types/foodInterfaces";
import { Link } from "react-router-dom";

const FoodCard: FC<Food> = ({ food }) => {
  return (
    <div
      data-aos="fade-up"
      className="card bg-base-100 shadow-xl relative lg:mt-0 mt-6 border-2 border-purple-100"
    >
      <figure>
        <img src={food.image} alt={food.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.title}</h2>
        <div className="card-actions py-4">
          <Link
            to={food.id.toString()}
            className="btn btn-sm mx-auto absolute bottom-4 normal-case bg-purple-500 text-white shadow-lg border-0 hover:scale-105 duration-300 hover:bg-purple-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
