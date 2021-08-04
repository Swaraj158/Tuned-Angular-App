import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class WebApiProductsService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const products = [
        {
            id:101,
            name:"Tabla",
            code:"PR-TB101",
            price:5000,
            description:"Principal percussion instrument in Hindustani classical music",
            rating:4.8,
            imageURL:"https://images-na.ssl-images-amazon.com/images/I/71JDA9QIdmL._SL1500_.jpg"
        },
        {
            id:102,
            name:"Harmonium",
            code:"WW-HM102",
            price:9000,
            description:"WoodWind based instrument in Hindustani classical music",
            rating:3.9,
            imageURL:"https://images-na.ssl-images-amazon.com/images/I/61WGeRaG8wL._SL1184_.jpg"
        },
        {
            id:103,
            name:"Pakhawaj",
            code:"PR-PW103",
            price:8000,
            description:"Pakhawaj is a barrel-shaped, two-headed drum, originating from the Indian subcontinent",
            rating:4.5,
            imageURL:"http://vadya.in/wp-content/uploads/2019/07/pakhawaj.jpg"
        },
        {
            id:104,
            name:"Dholak",
            code:"PR-DL104",
            price:3000,
            description:"Dholak is a two-headed hand drum, a folk percussion instrument",
            rating:2.4,
            imageURL:"https://images-na.ssl-images-amazon.com/images/I/81cE2nbdLUL._SL1500_.jpg"
        },
        {
            id:105,
            name:"Tanpura",
            code:"SB-TP105",
            price:7500,
            description:"Tanpura is a long-necked plucked string instrument, originating from India",
            rating:3.5,
            imageURL:"https://cdn10.bigcommerce.com/s-ta610c/products/287/images/1812/TanF_KLS__01170.1441753873.1280.1280.jpg?c=2"
        }
    ]

    return {products};
}


genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(pro => pro.id)) + 1 : 101;
  }
}
