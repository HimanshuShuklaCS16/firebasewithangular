import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {item} from './models/item';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
itemscollection:AngularFirestoreCollection<item>;
itemDoc:AngularFirestoreDocument<item>;
items:Observable<item[]>;
  constructor(public afs:AngularFirestore) {

//this.items=this.afs.collection('items').valueChanges();
this.itemscollection=this.afs.collection('items',ref=>ref.orderBy('title','asc'));
this.items = this.itemscollection.snapshotChanges().map(changes => {
     return changes.map(a => {
       const data = a.payload.doc.data() as item;
       data.id = a.payload.doc.id;
       return data;
     });
});


}
getItems(){
  return this.items;
}
addItem(item1:item){
this.itemscollection.add(item1);
}
deleteItem(item1:item)
{
  this.itemDoc = this.afs.doc(`items/${item1.id}`);

      this.itemDoc.delete();
}
updateItem(item1:item)
{
  this.itemDoc = this.afs.doc(`items/${item1.id}`);

      this.itemDoc.update(item1);
}
}
