import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ : Observable<Product[]>;

  selectedProduct?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService : ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts():void{
    this.products$ = this.productService.getAllProducts();
  }

  onSelect(product : Product): void {
    this.selectedProduct = product;  
    this.router.navigate(['/product-details', { id: product.id }]);
  }

  filterstring=""
  onSearchChange(search){
    this.filterstring=search
  }

}
