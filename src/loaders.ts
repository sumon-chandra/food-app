const options = {
  method: "GET",
  headers: {
    "x-api-key": "f8b7010a9c674893ac472b3f56f58524",
  },
};

//  !! Foods loader
export const foodsLoader = async () => {
  const url =
    "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=500";
  const res = await fetch(url, options);
  return res.json();
};

// !! Food Details Loader
interface ParamsTypes {
  params: {
    id?: string;
  };
}
export const foodDetailsLoader = async ({ params }: ParamsTypes) => {
  const { id } = params;
  const url = `https://api.spoonacular.com/recipes/${id}/information`;
  const res = await fetch(url, options);
  return res.json();
};
