import { Component,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../services/product-data.service';
import { Category } from '../category';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-info',
  imports: [CommonModule,RouterModule],
  templateUrl:'./product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {


  route: ActivatedRoute = inject(ActivatedRoute);
  
  productService = inject(ProductDataService);
  category: Category | undefined;

  constructor(){
    const categoryId = Number(this.route.snapshot.params['id'])
    this.category = this.productService.getCategoryById(categoryId);
  }

  removeProduct(productId: number): void {
    if (this.category) {
      this.category.productList = this.category.productList.filter(product => product.id !== productId);
    }
  }

  increaseLikes(productId: number): void {
    if(this.category){
      const product = this.category.productList.find(p => p.id === productId);
      if (product) {
        product.likes++;
      }
    }
    
  }
}
