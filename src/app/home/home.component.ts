import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <anu-hero></anu-hero>
    <anu-step1 [steps]="steps"></anu-step1>
    <anu-statistic [stats]="stats"></anu-statistic>
    <anu-testimonial [testimonials]="testimonials"></anu-testimonial>
  `,
})
export class HomeComponent {

  steps = [
    {
      title: 'Shooting Stars',
      description: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.'
    },
    {
      title: 'The Catalyzer',
      description: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.'
    },
    {
      title: 'The 400 Blows',
      description: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.'
    },
    {
      title: 'Neptune',
      description: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.'
    },
  ];

  stats = [
    {
      title: 'Users',
      value: '2.7K'
    },
    {
      title: 'Subscribes',
      value: '1.8K'
    },
    {
      title: 'Downloads',
      value: '35'
    },
    {
      title: 'Products',
      value: '4'
    },
  ];

  testimonials = [
    {
      name: 'Unknown',
      position: 'Burned Down',
      quote: `<p>Never build any relationship with someone
      based on Chemistry... Only for it to be torn
      down later by lack of Character.</p>`,
      photoUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Blondie',
      position: 'Single Parent',
      quote: `<p>They made me an offer I couldn't resits,
      My mom was right, I won't be happy until someone loses an eye.</p>`,
      photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Anonymous',
      position: 'Underground',
      quote: `Everyone shows their true identity,
      in time just observe with keen silence &amp; precise wits.`,
      photoUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ];
}
