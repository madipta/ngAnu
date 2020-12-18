import { Component, Input } from '@angular/core';
import { DataPricing } from '../data-pricing';

@Component({
  selector: 'anu-pricing',
  template: `
    <section class="bg-gradient-to-b from-transparent via-gray-100 to-transparent overflow-hidden">
      <div class="max-w-screen-xl px-5 py-24 mx-auto">
        <div class="flex flex-wrap justify-center">
          <anu-pricing-item
            *ngFor="let pricing of pricings"
            [pricing]="pricing"
            notice="Please contact us for more information."
            class="bg-white w-full md:w-auto p-3 rounded-lg border border-gray-300 m-1"
          ></anu-pricing-item>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {
  @Input() pricings: DataPricing[] = [];
}
