import { Component, Input } from '@angular/core';
import { DataProduct } from '../data-product';

@Component({
  selector: 'anu-product-item',
  template: `
    <div class="h-full rounded-lg overflow-hidden shadow-lg">
      <a class="block h-48">
        <img
          [alt]="product.title"
          class="object-cover object-center w-full h-full block"
          [src]="product.imageUrl"
        />
      </a>
      <div class="p-4 overflow-hidden">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {{ product.category }}
        </h3>
        <h2 class="text-gray-900 title-font text-lg leading-tight font-medium">
          {{ product.title }}
        </h2>
        <p class="mt-3">{{ product.price }}</p>
      </div>
    </div>
  `,
})
export class ProductItemComponent {
  @Input() product: DataProduct;
}
