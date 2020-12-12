import { Component, Input } from '@angular/core';
import { DataPricing } from '../data-pricing';

@Component({
  selector: 'anu-pricing-item',
  template: `
    <div class="h-full bg-gradient-to-b from-transparent to-gray-100 p-6 rounded-lg border border-gray-200 mx-6 md:mx-0 flex flex-col overflow-hidden">
      <h2 class="text-sm tracking-widest title-font mb-1 font-medium uppercase mb-3">{{pricing.title}}</h2>
      <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-5 mb-6 border-b border-gray-200">
        {{pricing.price}}
        <span class="text-lg ml-1 font-normal text-gray-500">{{pricing.pricePerDetail}}</span>
      </h1>
      <p 
        *ngFor="let feature of pricing.features"
        class="flex items-center text-gray-600 mt-1 mb-2">
        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-500 text-white rounded-full flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </span>{{feature}}
      </p>
      <div class="pt-12"></div>
      <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">{{button}}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <p class="text-xs text-gray-500 mt-1">{{notice}}</p>
    </div>
  `,
})
export class PricingItemComponent {
  @Input() pricing: DataPricing;
  @Input() notice = '';
  @Input() button = 'Select';
}
