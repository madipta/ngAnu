import { Component, Input } from '@angular/core';
import { DataPricing } from '../data-pricing';

@Component({
  selector: 'anu-pricing',
  template: `
    <section class="bg-gradient-to-b from-transparent via-gray-100 to-transparent body-font overflow-hidden">
      <div class="container py-24 mx-auto">
        <div class="flex flex-wrap justify-evenly">
          <anu-pricing-item
            *ngFor="let pricing of pricings"
            [pricing]="pricing"
            notice="Please contact us for more information."
            class="bg-white w-full md:w-auto p-6 rounded-lg border border-gray-300 mt-6 mx-6 md:mx-0"
          ></anu-pricing-item>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {
  @Input() pricings: DataPricing[] = [];
}
