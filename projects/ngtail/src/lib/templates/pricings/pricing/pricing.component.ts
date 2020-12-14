import { Component, Input } from '@angular/core';
import { DataPricing } from '../data-pricing';

@Component({
  selector: 'anu-pricing',
  template: `
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap justify-center">
          <anu-pricing-item
            *ngFor="let pricing of pricings"
            [pricing]="pricing"
            notice="Please contact us for more information."
            class="w-full md:w-auto px-6 md:px-0 mx-auto my-6"
          ></anu-pricing-item>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {
  @Input() pricings: DataPricing[] = [];
}
