import { Component, Input } from '@angular/core';
import { DataTestimoni } from '../data-testimoni';

@Component({
  selector: 'anu-testimonial1',
  template: `
    <section class="container px-5 py-24 mx-auto">
      <h1 class="text-3xl font-medium text-gray-900 text-center" [innerHTML]="title"></h1>
      <div class="w-14 h-0 border-b-4 border-indigo-500 mt-5 mx-auto"></div>
      <div class="pb-6 max-w-screen-lg mt-10 mx-auto flex overflow-y-auto scroll-snap-y-mandatory">
        <div
          *ngFor="let testimoni of testimonials"
          class="flex-none p-4 md:w-1/2 w-full scroll-snap-start">
          <div class="bg-gradient-to-b from-transparent to-gray-100 h-full pb-6 flex flex-col items-center rounded-lg">
            <img
              [alt]="testimoni.name"
              [src]="testimoni.photoUrl"
              loading="lazy"
              class="w-24 h-24 mb-2 object-cover object-center rounded-full inline-block border-4 border-white shadow">
            <h2
              [innerHTML]="testimoni.name"
              class="tracking-wider font-semibold text-sm text-gray-900"></h2>
            <p [innerHTML]="testimoni.position" class="text-xs text-gray-500"></p>
            <span class="inline-block h-1 w-10 rounded bg-gray-300 mt-2 mb-6"></span>
            <p class="px-8 leading-relaxed text-justify text-lg text-gray-700" [innerHTML]="testimoni.quote"></p>
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
