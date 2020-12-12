import { Component, Input } from '@angular/core';
import { DataTeam } from '../data-team';

@Component({
  selector: 'anu-team',
  template: `
    <section class="text-gray-700 body-font my-6">
      <div class="container px-5 py-16 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-gray-900" [innerHTML]="title"></h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-md" [innerHTML]="description"></p>
        </div>
        <div class="flex flex-wrap justify-center">
          <div
            *ngFor="let person of team"
            class="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div class="bg-gray-100 h-full flex items-center shadow p-5 rounded-sm">
              <img
                [alt]="person.name"
                class="w-20 h-20 object-cover object-center flex-shrink-0 border-2 border-white rounded-full mr-4"
                [src]="person.photoUrl">
              <div class="flex-grow">
                <h2 class="text-gray-900 leading-snug text-2xl title-font font-medium">{{person.name}}</h2>
                <p class="text-xs text-gray-600">{{person.position}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TeamComponent {
  @Input() title = 'Guilty Party';
  @Input() description = 'Everybody is guilty until proven otherwise.';
  @Input() team: DataTeam[] = [];
}