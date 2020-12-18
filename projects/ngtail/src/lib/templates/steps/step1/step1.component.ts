import { Component, Input } from '@angular/core';
import { DataStep } from '../data-step';

@Component({
  selector: 'anu-step1',
  template: `
    <section class="max-w-screen-lg py-24 mx-auto text-gray-700">
      <div class="flex flex-row-reverse flex-wrap w-full">
        <div class="w-full lg:w-2/5 md:w-1/2 px-10 md:py-6 mt-2">
          <anu-step1-item
            *ngFor="let step of steps; let i = index"
            [index]="i+1"
            [step]="step"
            [length]="steps.length"
            class="flex relative py-6">
          </anu-step1-item>
        </div>
        <img
          [src]="imageUrl"
          [alt]="imageAlt"
          loading="lazy"
          class="w-full lg:w-3/5 md:w-1/2 px-10 object-cover object-center rounded-sm mt-12 md:mt-0">
      </div>
    </section>
  `,
})
export class Step1Component {
  @Input() steps: DataStep[] = [];
  @Input() imageUrl = 'https://images.pexels.com/photos/4063721/pexels-photo-4063721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  @Input() imageAlt = 'ngTail';
}
