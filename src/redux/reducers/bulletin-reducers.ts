import {
  BulletinState,
  WebsiteElement,
  WebsiteStructure,
} from "@/types/bulletin-builder-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initalBulletinState: BulletinState = {
  document: {
    id: "root",
    children: [],
    type: "section",
  },
  currentNode: null,
};

const updateNodeById = (
  node: WebsiteElement,
  id: string,
  updateFn: (node: WebsiteElement) => Partial<WebsiteElement>
): WebsiteElement => {
  if (node.id === id) {
    return { ...node, ...updateFn(node) } as WebsiteElement;
  }

  if (node.type === "section" && node.children) {
    const updatedChildren = node.children.map((child) =>
      updateNodeById(child, id, updateFn)
    );

    if (
      !updatedChildren.every((child, index) => child === node.children![index])
    ) {
      return { ...node, children: updatedChildren };
    }
  }

  return node;
};

const addNodeById = (
  node: WebsiteElement,
  parentId: string,
  newNode: WebsiteElement
): WebsiteElement => {
  if (node.id === parentId) {
    if (!("children" in node) || !Array.isArray(node.children)) {
      return node;
    }

    return {
      ...node,
      children: [...node.children, newNode],
    };
  }

  if ("children" in node && Array.isArray(node.children)) {
    return {
      ...node,
      children: node.children.map((child) =>
        addNodeById(child, parentId, newNode)
      ),
    };
  }

  return node;
};

const bulletinSlice = createSlice({
  name: "currentBulletinState",
  initialState: initalBulletinState,
  reducers: {
    setNodeToEdit: (state, action: PayloadAction<WebsiteElement | null>) => {
      state.currentNode = action.payload;
    },
    updateNode: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<WebsiteElement> }>
    ) => {
      if (!action.payload) return;

      state.document = updateNodeById(
        state.document,
        action.payload.id,
        () => action.payload.updates
      ) as WebsiteStructure;
    },
    addNode: (
      state,
      action: PayloadAction<{ parentId: string; newNode: WebsiteElement }>
    ) => {
      state.document = addNodeById(
        state.document,
        action.payload.parentId,
        action.payload.newNode
      ) as WebsiteStructure;
    },
  },
});

/**
 * Usage of setNodeToEdit
 *
 * Dispatch this action to set a node as the current node being edited.
 *
 * Example:
 * dispatch(
 *    setNodeToEdit(node)
 * );
 *
 * Where `node` is an object of type `WebsiteElement`.
 */

/**
 * Usage of updateNode
 *
 * Dispatch this action to update an existing node by its ID.
 *
 * Example:
 * dispatch(
 *    updateNode({
 *      id: "text-1",
 *      updates: {
 *        content: "Updated Text Content",
 *        styles: { fontSize: "20px" },
 *      },
 *    })
 * );
 *
 * The `updates` object contains the properties you want to modify.
 */

/**
 * Usage of addNode
 *
 * Dispatch this action to add a new node inside a parent node.
 *
 * Example:
 * dispatch(
 *    addNode({
 *      parentId: "root" || currentNodeId,
 *      newNode: {
 *        id: "text-2",
 *        type: "text",
 *        content: "New Text Node",
 *      },
 *    })
 * );
 *
 * The `parentId` is where the new node will be added, and `newNode` is the new element.
 */

export const { setNodeToEdit, updateNode, addNode } = bulletinSlice.actions;
export default bulletinSlice.reducer;
