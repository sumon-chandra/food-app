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
