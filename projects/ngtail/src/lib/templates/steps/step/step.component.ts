import { Component, Input } from '@angular/core';
import { DataStep } from '../data-step';

@Component({
  selector: 'anu-step',
  template: `
    <section class="text-gray-700">
      <div class="container px-8 py-24 mx-auto flex flex-wrap">
        <anu-step-item
          *ngFor="let step of steps; let i = index"
          [index]="i+1"
          [step]="step"
          class="flex relative py-5 md:py-8 sm:items-center md:w-2/3 mx-auto">
        </anu-step-item>
      </div>
    </section>
  `,
})
export class StepComponent {
  @Input() steps: DataStep[]= [];
}
