import { Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';


export const appRoutes:Routes = [
    {path: 'products', component: ProductsListComponent},
    {path: 'products/:id', component: ProductDetailsComponent},
    { path: '',  redirectTo:'/products', pathMatch: 'full'}
]