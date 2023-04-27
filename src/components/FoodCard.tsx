import { FC } from "react";

export interface Food {
  food: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    missedIngredients?: MissedIngredientsEntity[] | null;
    usedIngredients?: UsedIngredientsEntity[] | null;
    unusedIngredients?: null[] | null;
    likes: number;
  };
}
export interface MissedIngredientsEntity {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta?: (string | null)[] | null;
  image: string;
  extendedName?: string | null;
}
export interface UsedIngredientsEntity {
  id: number;
  amount: number;
  unit: string;
  unitLong: string;
  unitShort: string;
  aisle: string;
  name: string;
  original: string;
  originalName: string;
  meta?: null[] | null;
  image: string;
}

const FoodCard: FC<Food> = ({ food }) => {
  console.log(food);

  return (
    <div className="card bg-base-100 shadow-xl relative lg:mt-0 mt-6 border-2 border-purple-100">
      <figure>
        <img src={food.image} alt={food.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.title}</h2>
        <div className="card-actions py-4">
          <button className="btn btn-sm absolute bottom-4 normal-case bg-purple-500 text-white hover:bg-purple-600 shadow-lg border-0">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
