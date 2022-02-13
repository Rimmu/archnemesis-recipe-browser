import create from 'zustand';
import { persist } from 'zustand/middleware';
import { createNodeSlice, NodeState } from './createNodeSlice';
import { createRecipeSlice, RecipeState } from './createRecipeSlice';

export type AppState = NodeState & RecipeState;

export const useStore = create<AppState>(
  persist(
    (set, get) => ({
      ...createNodeSlice(set, get),
      ...createRecipeSlice(set, get)
    }),
    { name: 'node-storage' }
  )
);
