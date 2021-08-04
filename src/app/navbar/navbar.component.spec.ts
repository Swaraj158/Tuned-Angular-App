import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render brand title in a a tag', waitForAsync(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Tuned!');
  }));
  
  it('should have Home a(RouterLink) tag', waitForAsync(() => {
    fixture.detectChanges();
    let ProductsRouterLink = fixture.debugElement.query(By.css('#home')).nativeElement.getAttribute('href');
    expect(ProductsRouterLink).toContain("/");
  }));
  it('should have Products a(RouterLink) tag', waitForAsync(() => {
    fixture.detectChanges();
    let ProductsRouterLink = fixture.debugElement.query(By.css('#products')).nativeElement.getAttribute('href');
    expect(ProductsRouterLink).toContain("/product");
  }));
  it('should have Add Product a(RouterLink) tag', waitForAsync(() => {
    fixture.detectChanges();
    let ProductsRouterLink = fixture.debugElement.query(By.css('#addProduct')).nativeElement.getAttribute('href');
    expect(ProductsRouterLink).toContain("/add-product");
  }));

});
