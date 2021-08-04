import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DialogService } from 'src/app/dialog.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product$!: Observable<Product>;
  selectedProduct : Product;
  isUpdating: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService,
    public dialogService: DialogService
  ) { 
    
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.isUpdating) {
        return this.dialogService.confirm('Discard editing product of ID:'+this.selectedProduct.id+' ?');
    }
    return true;
  }
  
  
  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProductById(params.get('id')!))
    )
    this.product$.subscribe(
      (product)=>{
        this.selectedProduct=product
      })
  }

  editProduct():void {  
    this.isUpdating = true
    this.service.editProduct(this.selectedProduct.id,this.selectedProduct)
    this.router.navigate(['/products']);
  }

}
