import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';

const routeConfig: Routes = [
    {
        path:'',
        redirectTo:"/albums",
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent,
        title: "Categories"
    },
    {
        path:'home/:id',
        component: ProductInfoComponent,
        title: "Product list"
    },
    {
        path:'about',
        component: AboutComponent,
        title:"About"
    },
    {
        path:'albums',
        component:AlbumsComponent,
        title:"Albums"
    },
    {
        path:'albums/:id',
        component:AlbumDetailComponent,
        title:"Details"
    },
    {
        path:'albums/:id/photos',
        component:AlbumPhotosComponent,
        title:"Photos"
    }
];

export default routeConfig;
