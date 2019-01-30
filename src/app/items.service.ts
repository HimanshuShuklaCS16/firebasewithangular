import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import {item} from './models/item';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {itemid} from './models/itemid';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
itemscollection:AngularFirestoreCollection<item>;
items:Observable<item[]>;
  constructor(public afs:AngularFirestore) {

//this.items=this.afs.collection('items').valueChanges();
this.items = this.afs.collection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as itemid;
         data.id = a.payload.doc.id;
        return  data;
      }))
    );

}
getItems(){
  return this.items;
}
}
