import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {item} from './models/item';
import {Observable} from 'rxjs/operators';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
itemscollection:AngularFirestoreCollection<item>;
items:Observable<item[]>;
  constructor(public afs:AngularFirestore) {

//this.items=this.afs.collection('items').valueChanges();
this.items = this.afs.collection('items').snapshotChanges().map(changes => {
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
  this.afs.collection.add(item1);
}
}
