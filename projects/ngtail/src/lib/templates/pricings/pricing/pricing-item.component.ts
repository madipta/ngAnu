import { Component, Input } from '@angular/core';
import { DataPricing } from '../data-pricing';

@Component({
  selector: 'anu-pricing-item',
  template: `
    <div class="h-full flex flex-col overflow-hidden">
      <h2 class="text-xs tracking-widest font-medium uppercase mb-6">{{pricing.title}}</h2>
      <h1 class="text-4xl text-gray-900 leading-none flex items-center pl-5 pb-3 mb-6 border-b border-gray-200">
        {{pricing.price}}
        <span class="ml-1 text-base text-gray-500">{{pricing.pricePerDetail}}</span>
      </h1>
      <ul>
        <li
          *ngFor="let feature of pricing.features"
          class="w-auto md:w-64 px-4 py-2 flex items-center">
          <span class="w-4 h-4 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>
          <span [innerHTML]="feature" class="ml-2 leading-snug text-sm text-gray-800"></span>
        </li>
      </ul>
      <div class="pt-12"></div>
      <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">{{buttonText}}
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      <p class="text-xs text-gray-400 mt-2">{{notice}}</p>
    </div>
  `,
})
export class PricingItemComponent {
  @Input() pricing: DataPricing;
  @Input() notice = '';
  @Input() buttonText = 'Select';
}
