import { Pipe } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { Rating } from './rating.pipe';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent , Rating],
      imports: [RouterModule.forRoot([]) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
