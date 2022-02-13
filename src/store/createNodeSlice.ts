import { SetState, GetState } from 'zustand';
import { RecipeNode } from '../types';
import { AppState } from './store';

import data from '../data/archnemesisRecipes.json';

const { nodes } = data;

export interface NodeState {
  nodes: Array<RecipeNode>;
  selectedNodes: Array<RecipeNode>;
  ownedNodes: Array<RecipeNode>;
  addSelectedNode: (node: RecipeNode) => void;
  removeSelectedNode: (nodeId: number) => void;
  addOwnedNode: (node: RecipeNode) => void;
  removeOwnedNode: (nodeId: number) => void;
  isNodeOwned: (nodeId: number) => boolean;
  getNodeById: (nodeId: number) => RecipeNode | undefined;
  getNodeByRecipeName: (name: string) => RecipeNode | undefined;
}

export const createNodeSlice = (set: SetState<AppState>, get: GetState<AppState>) => ({
  nodes,
  selectedNodes: [],
  ownedNodes: [],
  addSelectedNode: (node: RecipeNode) => {
    if (get().selectedNodes.some((selectedNode) => selectedNode.nodeId === node.nodeId)) {
      return;
    }
    set((state) => ({
      selectedNodes: [...state.selectedNodes, node]
    }));
  },
  removeSelectedNode: (nodeId: number) => {
    set((state) => ({
      selectedNodes: state.selectedNodes.filter((node) => node.nodeId !== nodeId)
    }));
  },
  addOwnedNode: (node: RecipeNode) => {
    if (get().ownedNodes.some((ownedNode) => ownedNode.nodeId === node.nodeId)) {
      return;
    }
    set((state) => ({
      ownedNodes: [...state.ownedNodes, node]
    }));
  },
  removeOwnedNode: (nodeId: number) => {
    set((state) => ({
      ownedNodes: state.ownedNodes.filter((node) => node.nodeId !== nodeId)
    }));
  },
  isNodeOwned: (nodeId: number) =>
    get()
      .ownedNodes.map((ownedNode) => ownedNode.nodeId)
      .includes(nodeId),
  getNodeById: (nodeId: number) => get().nodes.find((node) => node.nodeId === nodeId),
  getNodeByRecipeName: (name: string) => get().nodes.find((node) => node.name === name)
});
