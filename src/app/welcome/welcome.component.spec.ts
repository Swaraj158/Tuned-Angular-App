import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title image in a a tag', waitForAsync(() => {
    fixture.detectChanges();
    let srcImage = fixture.debugElement.query(By.css('#image')).nativeElement.getAttribute('src');
    expect(srcImage).toContain("jpg");
  }));

  it('should have button for view products', waitForAsync(() => {
    fixture.detectChanges();
    let btnn = fixture.debugElement.query(By.css('#btn-view')).nativeElement.getAttribute('href');
    expect(btnn).toContain("/products");
  }));

});
