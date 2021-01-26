import { Component } from '@angular/core';
import { ProductsData, TestimonialsData } from '../app-data';

@Component({
  selector: 'app-products',
  template: `
    <anu-detail-product [product]="products[0]"></anu-detail-product>
    <anu-product [products]="products"></anu-product>
    <anu-testimonial1 [testimonials]="testimonials"></anu-testimonial1>
  `,
})
export class ProductsComponent {
  products = ProductsData;
  testimonials = TestimonialsData;
}
