import { Component, Input } from '@angular/core';
import { DataTestimoni } from '../data-testimoni';

@Component({
  selector: 'anu-testimonial1',
  template: `
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="pb-6 max-w-screen-lg mx-auto flex overflow-y-auto scroll-snap-y-mandatory">
          <div
            *ngFor="let testimoni of testimonials"
            class="flex-none p-4 md:w-1/2 w-full scroll-snap-start">
            <div class="h-full text-center">
              <img
                [alt]="testimoni.name"
                [src]="testimoni.photoUrl"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100">
              <p class="leading-relaxed" [innerHTML]="testimoni.quote"></p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2
                [innerHTML]="testimoni.name"
                class="text-gray-900 font-medium title-font tracking-wider text-sm"></h2>
              <p [innerHTML]="testimoni.position" class="text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Testimonial1Component {
  @Input() testimonials: DataTestimoni[] = [];
}
