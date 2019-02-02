import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { ITEMS } from './mock-item';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {

  itemList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) 
  { 
    this.itemList = database.list('item');
  }

  getItems() {
    return this.itemList
//    return ITEMS;
  }
}
