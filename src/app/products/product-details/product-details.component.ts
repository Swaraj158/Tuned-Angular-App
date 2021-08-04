import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { switchMap } from 'rxjs/operators';
import { Rating } from '../rating.pipe';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product$!: Observable<Product>;
  product : Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProductById(params.get('id')!))
    );
    this.product$.subscribe(
      (pro)=>this.product=pro
    )
  }

  deleteProduct(){
    this.service.deleteProduct(this.product.id);
  }
}
