// @flow
import {itemsRepo} from '../db/repositories'

export const OPEN_CREATE_EDIT_MODAL = 'OPEN_CREATE_EDIT_MODAL';
export const CLOSE_CREATE_EDIT_MODAL = 'CLOSE_CREATE_EDIT_MODAL';
export const LOAD_ITEMS = 'LOAD_ITEMS';
export const SAVE_ITEM = 'SAVE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function openCreateEditModal() {
  return {
    type: OPEN_CREATE_EDIT_MODAL
  };
}

export function closeCreateEditModal() {
  return {
    type: CLOSE_CREATE_EDIT_MODAL
  };
}

export function loadItems() {
  return (dispatch: () => void) => {
    itemsRepo.find({}, (err, items) => {
      if (err) {
        console.log('Error loading items', err);
        dispatch(_loadItems([]))
      } else {
        dispatch(_loadItems(items))
      }
    });
  }
}

function _loadItems(items) {
  return {
    type: LOAD_ITEMS,
    payload: items
  };
}

export function saveItem(item) {
  if (item._id) {
    itemsRepo.update({ _id: item._id }, item, {}, (err, newItem) => {
    });
  } else {
    itemsRepo.insert(item, (err, newItem) => {
    });
  }
  return {
    type: SAVE_ITEM
  };
}

export function deleteItem(item) {
  itemsRepo.remove({_id: item._id}, (err, removedItem) => {
  });
  return {
    type: DELETE_ITEM
  };
}

function _deleteItem(item) {
  return {
    type: DELETE_ITEM
  };
}
