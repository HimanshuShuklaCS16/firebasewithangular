import { Component, OnInit } from '@angular/core';
import {item} from '../models/item';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  ngOnInit(){
    
  }
 Item:item{
  title:'',
  description:''
}
  constructor(private itemservice:ItemsService) {

   }


  onsubmit(){
    if(Item.title!==' ' && Item.description!==' ')
    {
      this.itemservice.addItem(this.Item);
      this.Item.title='';
      this.Item.description='';
    }
  }

}
