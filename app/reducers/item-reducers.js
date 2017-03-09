// @flow
import {
  OPEN_CREATE_EDIT_MODAL,
  CLOSE_CREATE_EDIT_MODAL,
  LOAD_ITEMS
} from '../actions/item-actions';

type actionType = {
  type: string
};

export default function items(state =
  {
    createEditModalVisible: false,
    items: []
  },
  action: actionType) {

  switch (action.type) {
    case OPEN_CREATE_EDIT_MODAL:
      return {
        ...state,
        createEditModalVisible: true
      };
    case CLOSE_CREATE_EDIT_MODAL:
      return {
        ...state,
        createEditModalVisible: false
      };
    case LOAD_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
