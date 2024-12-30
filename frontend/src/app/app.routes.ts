import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
  { path: '', component: FormComponent, title: 'Form' },
  { path: 'recommendations', component: ListOfProductsComponent, title: 'List of products' },
  { path: '**', component: ErrorPageComponent, title: 'Error' },
];
