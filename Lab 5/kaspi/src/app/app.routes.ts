import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routeConfig: Routes = [
    {
        path:'',
        component: HomeComponent,
        title: "Categories"
    },
    {
        path:':id',
        component: ProductInfoComponent,
        title: "Product list"
    }
];

export default routeConfig;
