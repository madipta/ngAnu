import { Component } from '@angular/core';
import { TeamData } from '../app-data';

@Component({
  selector: 'app-team',
  template: `
    <anu-team2 [team]="team"></anu-team2>
    <anu-team1 [team]="team"></anu-team1>
    <anu-team [team]="team"></anu-team>
  `,
})
export class TeamComponent {
  team = TeamData;
}
