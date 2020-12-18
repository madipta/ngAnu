import { Component, Input } from '@angular/core';
import { DataTeam } from '../data-team';

@Component({
  selector: 'anu-team',
  template: `
    <section class="max-w-screen-lg px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full">
        <h1 class="text-gray-900 text-3xl font-semibold" [innerHTML]="title"></h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700" [innerHTML]="description"></p>
        <div class="w-14 h-0 border-b-4 border-indigo-500 mt-5 mx-auto"></div>
      </div>
      <div class="flex flex-wrap justify-center mt-10">
        <div
          *ngFor="let person of team"
          class="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div class="bg-gradient-to-b from-gray-100 to-gray-200 h-full flex items-center p-5 rounded">
            <img
              [alt]="person.name"
              [src]="person.photoUrl"
              loading="lazy"
              class="w-16 h-16 object-cover object-center flex-shrink-0 border-2 border-white rounded-full">
            <div class="flex-grow ml-4 md:-mt-1">
              <h2 class="leading-none text-xl font-semibold">{{person.name}}</h2>
              <p class="text-xs text-gray-600 mt-1">{{person.position}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TeamComponent {
  @Input() title = 'Guilty Party';
  @Input() description = 'Everyone is guilty until proven otherwise.';
  @Input() team: DataTeam[] = [];
}