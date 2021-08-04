import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { CanDeactivateGuard } from './products/deactivate.guard';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path:'welcome',component:WelcomeComponent},
  { path:'products',component:ProductsComponent},
  { path:'product-details',component:ProductDetailsComponent},
  { path:'edit-product',component:EditProductComponent ,canDeactivate: [CanDeactivateGuard]},
  { path:'add-product',component:AddProductComponent},
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component:  AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
