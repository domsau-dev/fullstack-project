import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {path: '', component: FormComponent, title: 'Form'},
    {path: 'recommendations', component: ListOfProductsComponent, title: 'List of products'},
    { path:'**', component: ErrorPageComponent, title: 'Error' },
];
