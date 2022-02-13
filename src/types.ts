export type RecipeNode = {
  nodeId: number;
  name: string;
  monsterDesc: string;
  rewardType: Array<string>;
  rewardDesc: string | null;
  usedInRecipes: Array<number> | null;
  isBasic: boolean;
};

export type Recipe = {
  recipeId: number;
  name: string;
  recipe: Array<number>;
};
