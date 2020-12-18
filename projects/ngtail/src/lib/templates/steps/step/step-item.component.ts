import { Component, Input } from '@angular/core';
import { DataStep } from '../data-step';

@Component({
  selector: 'anu-step-item',
  template: `
    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
    </div>
    <div class="flex-shrink-0 w-12 h-12 rounded-full -ml-3 mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 font-medium text-sm">{{index}}</div>
    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <h2 class="font-medium text-gray-900 mb-1 text-xl" [innerHTML]="step.title"></h2>
        <p class="leading-relaxed" [innerHTML]="step.description"></p>
      </div>
    </div>
  `,
})
export class StepItemComponent {
  @Input() index = 0;
  @Input() step: DataStep;
}
