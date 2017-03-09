// @flow
import Datastore from 'nedb';

export const itemsRepo = new Datastore({
  filename: 'data/items.db',
  autoload: true
});
