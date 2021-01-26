import { Component, Input } from '@angular/core';
import { DataTestimoni } from '../data-testimoni';

@Component({
  selector: 'anu-testimonial1',
  template: `
    <section class="bg-gray-100 px-5 pt-16 pb-32">
      <h1 class="text-3xl font-medium text-gray-900 text-center" [innerHTML]="title"></h1>
      <div class="w-14 h-0 border-b-4 border-indigo-500 mt-5 mx-auto"></div>
      <div class="flex flex-col md:flex-row pb-6 max-w-screen-lg mt-10 mx-auto">
        <div
          *ngFor="let testimoni of testimonials"
          class="p-3 w-full md:w-1/3">
          <div class="bg-gray-50 h-full pt-8 pb-6 flex flex-col items-center rounded shadow-xs">
            <img
              [alt]="testimoni.name"
              [src]="testimoni.photoUrl"
              loading="lazy"
              class="w-24 h-24 mb-5 object-cover object-center rounded-full inline-block border-4 border-white shadow">
            <h2
              [innerHTML]="testimoni.name"
              class="tracking-wider font-semibold text-sm text-gray-900"></h2>
            <p [innerHTML]="testimoni.position" class="text-xs text-gray-500"></p>
            <span class="inline-block h-1 w-10 rounded bg-gray-300 mt-2 mb-6"></span>
            <p class="leading-snug text-sm text-gray-700 px-8" [innerHTML]="testimoni.quote"></p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Testimonial1Component {
  @Input() title = 'Testimonials';
  @Input() testimonials: DataTestimoni[] = [];
}
