import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from './Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  getAll():Food[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: 'assets/pizza.jpg',
        tags: ['Lunch', 'FastFood', 'Pizza']
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Parsia', 'Middle East', 'China'],
        star: 5,
        imageUrl: 'assets/meat_ball.jpg',
        tags: ['Lunch', 'SlowFood']
      },
      {
        id: 3,
        name: 'Chicken Burger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany', 'US'],
        star: 3.5,
        imageUrl: 'assets/burger2.jpg',
        tags: ['Lunch', 'Burger']
      },  
      {
        id: 4,
        name: 'Veg Burger',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Hydrabad'],
        star: 3,
        imageUrl: 'assets/burger3.jpg',
        tags: ['Lunch', 'Burger']
      },
      {
        id: 5,
        name: 'Fried Potatoes',
        price: 9,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgium','France','India'],
        star: 3,
        imageUrl: 'assets/french_fries.jpg',
        tags: ['FastFood', 'Fry']
      },
      {
        id: 6,
        name: 'Gobhi Manchurian',
        price: 9,
        cookTime: '40-50',
        favorite: true,
        origins: ['Indian'],
        star: 4.0,
        imageUrl: 'assets/gobi_manchurian.jpg',
        tags: ['Lunch']
      },
      {
        id: 7,
        name: 'Non-veg Biryani',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Hydrabad'],
        star: 0,
        imageUrl: 'assets/pizza3.jpeg',
        tags: ['Lunch']
      },
      {
        id: 8,
        name: 'Non-veg Biryani',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Hydrabad'],
        star: 1,
        imageUrl: 'assets/pizza2.jpg',
        tags: ['Lunch']
      },
      {
        id: 9,
        name: 'Veg spicy Pizza',
        price: 10,
        cookTime: '20-30',
        favorite: false,
        origins: ['Indian'],
        star: 3,
        imageUrl: 'assets/pizza3.jpeg',
        tags: ['Lunch', 'Pizza']
      },
      {
        id: 10,
        name: 'Non-veg Biryani',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Hydrabad'],
        star: 1.5,
        imageUrl: 'assets/soup.jpg',
        tags: ['Lunch']
      },
      {
        id: 11,
        name: 'Momos',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Hydrabad'],
        star: 4,
        imageUrl: 'assets/momo.jpg',
        tags: ['SlowFood']
      },
      {
        id: 12,
        name: 'Non-veg Biryani',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Hydrabad'],
        star: 2,
        imageUrl: 'assets/idli.jpg',
        tags: ['Lunch']
      },
      {
        id: 13,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        star: 3.0,
        imageUrl: 'assets/chicken_soup.jpg',
        tags: ['SlowFood', 'Soup']
      },
      {
        id: 14,
        name: 'Pizza Pepperoni',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: 'assets/Pizza4.jpg',
        tags: ['Lunch', 'FastFood', 'Pizza']
      },
      {
        id: 14,
        name: 'Non-Veg Biryani',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: 'assets/biryani.jpg',
        tags: ['Lunch', 'Pizza']
      },
      {
        id: 14,
        name: 'Non-Veg Burger',
        price: 10,
        cookTime: '10-20',
        favorite: false,
        origins: ['Italy'],
        star: 4.8,
        imageUrl: 'assets/burger.jpg',
        tags: ['Lunch', 'FastFood', 'Burger']
      },
      {
        id: 15,
        name: 'Chicken Wings',
        price: 9,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgium','France','India'],
        star: 3,
        imageUrl: 'assets/chicken_wings.jpg',
        tags: ['FastFood']
      },
    ];
  }
  getAllFoodByTag(tag:string):Food[]{
      return tag=='All'?
      this.getAll():
      this.getAll().filter(food=>food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return [
      {name: 'All', count: 17},
      {name: 'FastFood', count: 4},
      {name: 'Pizza', count: 4},
      {name: 'Lunch', count: 3},
      {name: 'SlowFood', count: 3},
      {name: 'Burger', count: 3},
      {name: 'Soup', count: 1},
      {name: 'Fry', count: 1}
    ]
  }
}
