import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  template: `
    <anu-team2 [team]="team"></anu-team2>
    <anu-team1 [team]="team"></anu-team1>
    <anu-team [team]="team"></anu-team>
  `,
})
export class TeamComponent {
  team = [
    {
      name: 'Vincent Mangano',
      position: 'The Executioner',
      photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
      description: 'Money talks. The more money, the louder it talks.',
    },
    {
      name: 'Carlo Gambino',
      position: 'Boss of Bosses',
      photoUrl: 'https://randomuser.me/api/portraits/men/66.jpg',
      description: 'Everybody you fight is not your enemy and everybody that helps you is not your friend.',
    },
    {
      name: 'Salvatore Gravano',
      position: 'Sammy the Bull',
      photoUrl: 'https://randomuser.me/api/portraits/men/79.jpg',
      description: 'Don\'t ever take sides with anyone against the family.'
    },
    {
      name: 'Giuseppe Masseria',
      position: 'The Oddfather',
      photoUrl: 'https://randomuser.me/api/portraits/men/82.jpg',
      description: 'Blood makes you related. Loyalty makes you family.',
    },
    {
      name: 'Anthony Anastasio',
      position: 'Tough Tony',
      photoUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
      description: 'Knowledge will give you power but character will give you respect.',
    },
    {
      name: 'Vincent Gigante',
      position: 'The Chin',
      photoUrl: 'https://randomuser.me/api/portraits/men/40.jpg',
      description: 'I don\'t trust words, I even question actions but I never doubt patterns',
    },
    {
      name: 'Alessandro Vollero',
      position: 'Lieutenant',
      photoUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
      description: 'No one gives it to you. You have to take it.',
    },
    {
      name: 'Charlie Luciano',
      position: 'Lucky',
      photoUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
      description: 'Keep your friends close and your enemy closer..',
    },
  ];
}
