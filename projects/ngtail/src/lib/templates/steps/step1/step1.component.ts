import { Component, Input } from '@angular/core';
import { DataStep } from '../data-step';

@Component({
  selector: 'anu-step1',
  template: `
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 mt-2">
            <anu-step1-item
              *ngFor="let step of steps; let i = index"
              [index]="i+1"
              [step]="step"
              [length]="steps.length"
              class="flex relative pb-12">
            </anu-step1-item>
          </div>
          <img
            class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-sm shadow md:mt-0 mt-12"
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
