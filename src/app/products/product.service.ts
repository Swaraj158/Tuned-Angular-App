import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product';
import { allProducts } from './products-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts() : Observable<Product[]>{
    return of(allProducts);
  }

  getProductById(id: number | string) {
    return this.getAllProducts()
    .pipe(
      map((prods: Product[]) => prods.find(product => product.id === +id)!)
    );
  }

  addProduct(id:number,name:string,code:string,price:number,rating:number,description:string,imageURL:string){
    allProducts.push(
      {
        id:id,
        name:name,
        code:code,
        price:price,
        rating:rating,
        description:description,
        imageURL:imageURL
      }
    )
  }

  editProduct(id:number,updatedProduct:Product){
    allProducts.map((pro)=>{
      if(pro.id==id){
        pro.name=updatedProduct.name
        pro.code=updatedProduct.code
        pro.price=updatedProduct.price
        pro.rating=updatedProduct.rating
        pro.description=updatedProduct.description
        pro.imageURL=updatedProduct.imageURL
      }
    })
  }

  deleteProduct(id:number){
    allProducts.splice(
      allProducts.map(pro=>pro.id).indexOf(id),1
    )
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(pro => pro.id)) + 1 : 101;
  }

}
