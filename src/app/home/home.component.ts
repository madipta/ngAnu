import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <anu-hero></anu-hero>
    <anu-step1 [steps]="steps"></anu-step1>
    <anu-statistic [stats]="stats"></anu-statistic>
    <anu-pricing [pricings]="pricings"></anu-pricing>
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

  pricings = [
    {
      title: 'start',
      price: 'Free',
      pricePerDetail: '',
      features: [
        'Marketing CRM ',
        'Creative Assistant',
        'Website Builder',
        'Mailchimp Domain',
        'Forms & Landing Pages '
      ],
    },
    {
      title: 'Pro',
      price: '$38',
      pricePerDetail: '/mo',
      features: [
        'Everything in Free',
        'All Email Templates',
        'Multi-Step Journeys',
        'Custom Branding',
        'A/B Testing',
        '24/7 Email & Chat Support'
      ],
    },
    {
      title: 'Bussiness',
      price: '$56',
      pricePerDetail: '/mo',
      features: [
        'Everything in Pro',
        'Customer Journey Builder + Branching Points',
        'Send Time Optimization',
        'Behavioral Targeting',
        'Custom Templates',
        'Dynamic Content'
      ],
    },
    {
      title: 'Enterprise',
      price: '$299',
      pricePerDetail: '/mo',
      features: [
        'Everything in Bussiness',
        'Advanced Segmentation',
        'Multivariate Testing',
        'Comparative Reporting',
        'Unlimited Seats & Role-Based Access',
        'Phone Support'
      ],
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
