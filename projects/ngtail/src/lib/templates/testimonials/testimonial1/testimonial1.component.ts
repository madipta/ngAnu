import { Component, Input } from '@angular/core';
import { DataTestimoni } from '../data-testimoni';

@Component({
  selector: 'anu-testimonial1',
  template: `
    <section class="container px-5 py-20 mx-auto text-gray-700">
      <h1 class="text-3xl font-medium text-gray-900 mb-12 text-center" [innerHTML]="title"></h1>
      <div class="pb-6 max-w-screen-lg mx-auto flex overflow-y-auto scroll-snap-y-mandatory">
        <div
          *ngFor="let testimoni of testimonials"
          class="flex-none p-4 md:w-1/2 w-full scroll-snap-start">
          <div class="h-full text-center">
            <img
              [alt]="testimoni.name"
              [src]="testimoni.photoUrl"
              class="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200">
            <p class="leading-relaxed" [innerHTML]="testimoni.quote"></p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2
              [innerHTML]="testimoni.name"
              class="text-gray-900 font-medium tracking-wider text-sm"></h2>
            <p [innerHTML]="testimoni.position" class="text-gray-500"></p>
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
