import { Component, Input } from '@angular/core';
import { DataProduct } from '../data-product';

@Component({
  selector: 'anu-product',
  template: `
    <section class="text-gray-700 body-font">
      <div class="container py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
        <anu-product-item
          [product]="product"
          *ngFor="let product of products"
          class="md:w-1/{{cols}} w-full sm:p-4 md:p-2 p-8"
        ></anu-product-item>
        </div>
      </div>
    </section>
  `,
})
export class ProductComponent {
  cols = 4;

  @Input() products: DataProduct[];

  @Input()
  get columns(): number {
    return this.cols;
  }
  set columns(val: number) {
    if (val > 6) {
      this.cols = 6;
    } else if (val < 2) {
      this.cols = 2;
    } else {
      this.cols = val;
    }
  }
}
