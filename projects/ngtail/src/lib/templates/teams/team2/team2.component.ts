import { Component, Input } from '@angular/core';
import { DataTeam } from '../data-team';

@Component({
  selector: 'anu-team2',
  template: `
    <section class="max-w-screen-lg px-5 py-24 mx-auto text-gray-700">
      <div class="flex flex-col text-center w-full mb-8">
        <h1 class="text-3xl font-semibold text-gray-900 mb-2" [innerHTML]="title"></h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base" [innerHTML]="description"></p>
      </div>
      <div class="flex flex-wrap mx-auto">
        <anu-team2-item
          *ngFor="let member of team;"
          [member]="member"
          class="w-full lg:w-1/2"></anu-team2-item>
      </div>
    </section>
  `,
})
export class Team2Component {
  @Input() title = 'Behind The Sins';
  @Input() description = 'Classy is when you have a lot to say but you choose to remain silent in front of fools.';
  @Input() team: DataTeam[] = [];
}
