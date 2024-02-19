import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/models/food.service';
import { Food } from 'src/app/shared/models/food';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods:Food[]=[];
  constructor(
    private fs:FoodService,
    private aRoute:ActivatedRoute,
    ){}

  ngOnInit():void{
   this.aRoute.params.subscribe(params=>{
    if(params['paramsItem']){
    this.foods = this.fs.getAll().filter(food=>{
      return food.name.toLowerCase().includes(params['paramsItem'].toLowerCase())})
    }
    else if(params['tagName'])
      this.foods = this.fs.getAllFoodByTag(params['tagName']);
    else
      this.foods = this.fs.getAll();
   }) 
  }
}
