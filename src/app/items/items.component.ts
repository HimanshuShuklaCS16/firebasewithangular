import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../items.service';
import {item} from '../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
items:item[]
editstate:boolean=false;
itemtoedit:item;
  constructor(private itemsservice:ItemsService) { }

  ngOnInit() {
    this.itemsservice.getItems().subscribe(items=>{
      //console.log(items);
      this.items=items;
    });
  }
deleteitem(event,item1:item){
  this.clearState();
  this.itemsservice.deleteItem(item1);
}
edititem(event,item1:item){
  this.editstate=true;
  this.itemtoedit=item1;
}
updateitem(event,item1:item){
  this.itemsservice.updateItem(item1);
  this.clearState();
}
clearState(){
  this.editstate=false;
  this.itemtoedit=null;
}
}
