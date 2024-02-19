import { Injectable } from '@angular/core';
import { Cart } from './models/Cart';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();
addToCart(food:Food):void{
  let cartItem = this.cart.cartItems.find(item=>{item.food.id === food.id})
}  
}
