import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../category';
import { RouterModule } from '@angular/router';
import { ProductInfoComponent } from '../product-info/product-info.component';

@Component({
  standalone:true,
  selector: 'app-product-list',
  imports: [CommonModule,RouterModule,ProductInfoComponent],
  templateUrl:'product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() category!: Category;
}

