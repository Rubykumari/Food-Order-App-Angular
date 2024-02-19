import { Food } from "src/app/shared/models/food";

export class CartItem{
    constructor(food:Food){
    this.food=food;
    }
    food:Food
    quantity:number=1;
 
    getPrice():Number{
        return this.food.price * this.quantity;
    }
}