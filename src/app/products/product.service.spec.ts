import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Product } from './product';

import { ProductService } from './product.service';



describe('ProductService', () => {
  let service: ProductService;
  let products: Product[];
  let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(ProductService);
    service.getAllProducts().subscribe(
      (pros)=>{
        products=pros
      }
    )
    service.getProductById(101).subscribe(
      (pro)=>product=pro
    )
  });

  it('should return all Products',() =>
  {
    var allProducts : Product[] = [
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
    expect(products).toEqual(allProducts)
  })

  it('should have getProductById',() =>
  {
    let mockProduct = {
      id:101,
      name:"Tabla",
      code:"PR-TB101",
      price:5000,
      description:"Principal percussion instrument in Hindustani classical music",
      rating:4.8,
      imageURL:"https://images-na.ssl-images-amazon.com/images/I/71JDA9QIdmL._SL1500_.jpg"
  }
    expect(product).toEqual(mockProduct)
  })

  it('should return particular product By ID',() =>
  {
    expect(service.getProductById(101)).toBeTruthy()
  })

  it('should have addProduct',() =>
  {
    expect(service.addProduct).toBeDefined()
  })

  it('should have editProduct',() =>
  {
    expect(service.editProduct).toBeDefined()
  })

  it('should have deleteProduct',() =>
  {
    expect(service.deleteProduct).toBeDefined()
  })

  it('should have genID',() =>
  {
    expect(service.genId(products)).toBeTruthy()
  })

  it('genID should return number',() =>
  {
    expect(service.genId(products)).toBeGreaterThanOrEqual(101)
  })


});
