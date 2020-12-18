import { Component, Input } from '@angular/core';
import { DataTeam } from '../data-team';

@Component({
  selector: 'anu-team1',
  template: `
    <section class="max-w-screen-lg px-5 py-24 mx-auto text-gray-700">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="text-3xl font-semibold text-gray-900 mb-2" [innerHTML]="title"></h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base" [innerHTML]="description"></p>
      </div>
      <div class="flex flex-wrap justify-center max-w-screen-xl mx-auto">
        <anu-team1-item
          *ngFor="let member of team;"
          [member]="member"
          class="p-4 lg:w-1/4 w-1/2"
          ></anu-team1-item>
      </div>
    </section>
  `,
})
export class Team1Component {
  @Input() title = 'Department of Anarchy';
  @Input() description = 'Empires aren\'t built in one day. Many men can make a fortune but very few can build a family.';
  @Input() team: DataTeam[] = [];
}
