import { Component, Input } from '@angular/core';
import { DataTeam } from '../data-team';

@Component({
  selector: 'anu-team2',
  template: `
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-16">
          <h1 class="text-3xl font-medium title-font mb-2 text-gray-900" [innerHTML]="title"></h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base" [innerHTML]="description"></p>
        </div>
        <div class="flex flex-wrap max-w-screen-xl mx-auto">
          <anu-team2-item
            *ngFor="let member of team;"
            [member]="member"
            class="p-4 w-full lg:w-1/2 my-5"></anu-team2-item>
        </div>
      </div>
    </section>
  `,
})
export class Team2Component {
  @Input() title = 'Behind The Sins';
  @Input() description = 'Classy is when you have a lot to say but you choose to remain silent in front of fools.';
  @Input() team: DataTeam[] = [];
}
