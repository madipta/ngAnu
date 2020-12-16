import { Component, Input } from '@angular/core';
import { DataStep } from '../data-step';

@Component({
  selector: 'anu-step1',
  template: `
    <section class="text-gray-700 body-font">
      <div class="max-w-screen-lg container py-24 mx-auto">
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
            class="w-full lg:w-3/5 md:w-1/2 px-10 object-cover object-center rounded-sm mt-12 md:mt-0"
            [src]="imageUrl"
            [alt]="imageAlt">
        </div>
      </div>
    </section>
  `,
})
export class Step1Component {
  @Input() steps: DataStep[] = [];
  @Input() imageUrl = 'https://images.pexels.com/photos/4063721/pexels-photo-4063721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  @Input() imageAlt = 'ngTail';
}
