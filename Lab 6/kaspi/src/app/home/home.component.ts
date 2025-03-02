import { Component,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../category';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductDataService } from '../services/product-data.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule,ProductListComponent],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    CategoryList: Category[] = [];

    productService: ProductDataService = inject(ProductDataService);

    constructor(){
      this.CategoryList = this.productService.getAllproducts();
    }

}
