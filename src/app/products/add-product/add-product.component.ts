import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  products : Product[];

  constructor(
    private service : ProductService,
  ) {
    this.service.getAllProducts().subscribe(
      (products) => {
        this.products = products
      }
    )
   }

  ngOnInit(): void {
  }
  
  onClickAddProduct(name,code,price,description,rating,url){
    this
    this.service.addProduct(
      this.service.genId(this.products),
      name,
      code,
      price,
      rating,
      description,
      url
    )
  }
}
