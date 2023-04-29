export interface FoodDetails {
  id: number;
  title: string;
  image: string;
  imageType: string;
  servings: number;
  readyInMinutes: number;
  license: string;
  sourceName: string;
  sourceUrl: string;
  spoonacularSourceUrl: string;
  aggregateLikes: number;
  healthScore: number;
  spoonacularScore: number;
  pricePerServing: number;
  analyzedInstructions: any[];
  cheap: boolean;
  creditsText: string;
  cuisines: any[];
  dairyFree: boolean;
  diets: any[];
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: any[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: number;
  dishTypes: string[];
  extendedIngredients: ExtendedIngredient[];
  summary: string;
  winePairing: WinePairing;
}

interface WinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch[];
}

interface ProductMatch {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}

interface ExtendedIngredient {
  aisle: string;
  amount: number;
  consitency: string;
  id: number;
  image: string;
  measures: Measures;
  meta: string[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
}

interface Measures {
  metric: Metric;
  us: Metric;
}

interface Metric {
  amount: number;
  unitLong: string;
  unitShort: string;
}
