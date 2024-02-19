import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/services/models/Tag';
import { FoodService } from 'src/app/services/models/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent implements OnInit{
   tags!:Tag[];
   constructor(private fs:FoodService){}
   ngOnInit():void{
    this.tags = this.fs.getAllTag();
   }
}
