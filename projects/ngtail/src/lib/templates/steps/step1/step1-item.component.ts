import { Component, Input } from '@angular/core';
import { DataStep } from '../data-step';

@Component({
  selector: 'anu-step1-item',
  template: `
    <div
      *ngIf="index!==length"
      class="h-full w-10 absolute inset-0 flex items-center justify-center">
      <div class="h-full w-1 mt-20 bg-gray-200 pointer-events-none"></div>
    </div>
    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-sm text-white relative z-10">{{index}}</div>
    <div class="flex-grow pl-4">
      <h2 class="font-medium title-font text-lg text-gray-900 tracking-wider" [innerHTML]="step.title"></h2>
      <p class="leading-relaxed" [innerHTML]="step.description"></p>
    </div>
  `,
})
export class Step1ItemComponent {
  @Input() index = 0;
  @Input() length = 0;
  @Input() step: DataStep;
}
