import { SetState, GetState } from 'zustand';
import data from '../data/archnemesisRecipes.json';
import { AppState } from './store';
import { Recipe } from '../types';

const { recipes } = data;

export interface RecipeState {
  recipes: Recipe[];
  getRecipesByNodeId: (nodeId: number) => Recipe[];
  getRecipeByName: (name: string) => Recipe | undefined;
}

export const createRecipeSlice = (set: SetState<AppState>, get: GetState<AppState>) => ({
  recipes,
  getRecipesByNodeId: (nodeId: number) =>
    get().recipes.filter((recipe) => recipe.recipe.includes(nodeId)),
  getRecipeByName: (name: string) => get().recipes.find((recipe) => recipe.name === name)
});
