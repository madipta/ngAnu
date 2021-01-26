import { Component, Input } from '@angular/core';
import { DataTestimoni } from '../data-testimoni';

@Component({
  selector: 'anu-testimonial',
  template: `
    <section class="bg-gray-200 px-5 pt-16 pb-32">
      <h1 class="text-3xl font-medium text-gray-900 text-center" [innerHTML]="title"></h1>
      <div class="w-14 h-0 border-b-4 border-indigo-500 mt-5 mx-auto"></div>
      <div class="flex flex-col md:flex-row pb-6 max-w-screen-xl mt-10 mx-auto">
        <div
          *ngFor="let testimoni of testimonials"
          class="p-3 w-full md:w-1/3">
          <div class="relative bg-gray-50 h-full pt-5 pb-16 px-5 rounded shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-4 h-4 text-indigo-300 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p
              [innerHTML]="testimoni.quote"
              class="px-3 italic text-gray-600 text-right mb-8"></p>
            <a class="absolute bottom-0 right-0 mb-4 mr-6 inline-flex items-center ml-4">
              <img
                [alt]="testimoni.name"
                [src]="testimoni.photoUrl"
                loading="lazy"
                class="w-16 h-16 border-4 border-white rounded-full flex-shrink-0 object-cover object-center">
              <span class="flex-grow flex flex-col ml-2">
                <span class="leading-none text-sm font-semibold text-gray-700" [innerHTML]="testimoni.name"></span>
                <span class="text-gray-500 text-xs" [innerHTML]="testimoni.position"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TestimonialComponent {
  @Input() title = 'Testimonials';
  @Input() testimonials: DataTestimoni[] = [];
}
