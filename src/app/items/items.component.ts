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
  constructor(private itemsservice:ItemsService) { }

  ngOnInit() {
    this.itemsservice.getItems().subscribe(items=>{
      //console.log(items);
      this.items=items;
    });
  }

}
