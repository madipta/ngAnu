import { Component, Input } from '@angular/core';
import { DataProduct } from '../data-product';

@Component({
  selector: 'anu-product',
  template: `
    <section class="text-gray-700">
      <div class="container py-24 mx-auto">
        <div class="flex flex-wrap -my-4">
          <anu-product-item
            [product]="product"
            *ngFor="let product of products"
            [ngClass]="ColumnClass"
            class="w-full sm:p-4 md:p-2 p-8"
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

  get ColumnClass(): string {
    switch (this.cols) {
      case 2:
        return 'md:w-1/2';
      case 3:
        return 'md:w-1/3';
      case 5:
        return 'md:w-1/5';
      case 6:
        return 'md:w-1/6';
      default:
        return 'md:w-1/4';
    }
    // below is also work but probably not in the future
    // return 'md:w-1/' + this.cols;
  }
}
