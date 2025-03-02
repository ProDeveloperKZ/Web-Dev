import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../category';
import { RouterModule } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-product-list',
  imports: [CommonModule,RouterModule],
  templateUrl:'product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() category!: Category;
}

