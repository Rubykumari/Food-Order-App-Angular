import { CartItem } from "./CartItem";

export class Cart{
    cartItems: CartItem[]=[]

    get totalPrice():number{
        let totalPrice = 0
        this.cartItems.forEach(cartItem=>{
            totalPrice += cartItem.price;
        })
        return totalPrice;
    }
}