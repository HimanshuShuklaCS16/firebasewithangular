import { Component, OnInit } from '@angular/core';
import {item} from '../models/item';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
item1:item={title:'',description:''};
  constructor(private itemsservice:ItemsService) { }

  ngOnInit() {
  }
onSubmit(){
  if(this.item1.title!==''&&this.item1.description!=='')
  {
    this.itemsservice.addItem(this.item1);
    this.item1.title='';
    this.item1.description='';

  }
}
}
