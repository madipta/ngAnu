import { Component, Input } from '@angular/core';
import { DataTeam } from '../data-team';

@Component({
  selector: 'anu-team',
  template: `
    <section class="max-w-screen-lg px-5 py-24 mx-auto text-gray-700">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="text-gray-900 text-3xl font-semibold mb-2" [innerHTML]="title"></h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-md tracking-wide" [innerHTML]="description"></p>
      </div>
      <div class="flex flex-wrap justify-center">
        <div
          *ngFor="let person of team"
          class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
          <div class="bg-gray-100 h-full flex items-center p-5 rounded-sm shadow">
            <img
              [alt]="person.name"
              class="w-16 h-16 object-cover object-center flex-shrink-0 border-2 border-white rounded-full"
              [src]="person.photoUrl">
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