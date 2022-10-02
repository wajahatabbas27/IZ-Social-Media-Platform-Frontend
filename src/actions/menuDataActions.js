import { SET_SELECTED } from "./types";

// Creating the actions for the menuData
// type & reducer case must be the same
export const setSelected = (selectedMenu) => ({
  type: SET_SELECTED,
  payload: selectedMenu,
});
