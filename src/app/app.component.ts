import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articles = [
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://dummyimage.com/720x400',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://dummyimage.com/720x400',
      description: 'Psriracha leggings jianbing microdosing.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://dummyimage.com/720x400',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
  ];
  plains = [
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://dummyimage.com/720x400',
      description: 'Psriracha leggings jianbing microdosing.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://dummyimage.com/720x400',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
  ];
  events = [
    {
      category: 'Movies',
      title: 'Harry Potter',
      eventDate: '12 Jun 2019',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      eventDate: '12 Jun 2019',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      eventDate: '12 Jun 2019',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      eventDate: '12 Jun 2019',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
  ];
  products = [
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      description: `Fam locavore kickstarter distillery. 
      Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
      XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
      Everyday carry +1 seitan poutine tumeric.
      Gastropub blue bottle austin listicle pour-over,
      neutra jean shorts keytar banjo tattooed umami cardigan.`,
      price: '$16.00',
      reviews: 4,
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer Dummy Product',
      price: '$16.00',
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$16.00',
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer Dummy Product',
      price: '$16.00',
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$18.00',
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$18.00',
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$18.00',
    },
  ];

  footerLinks = [
    {
      header: 'Company',
      menus: [
        {
          text: 'About Us',
          url: '#',
        },
        {
          text: 'Investors',
          url: '#',
        },
        {
          text: 'Offices',
          url: '#',
        },
        {
          text: 'Team',
          url: '#',
        },
        {
          text: 'Careers',
          url: '#',
        },
      ],
    },
    {
      header: 'Product',
      menus: [
        {
          text: 'POS System',
          url: '#',
        },
        {
          text: 'HR Software & Consulting',
          url: '#',
        },
        {
          text: 'Company Campaign',
          url: '#',
        },
        {
          text: 'SEO & Advertising',
          url: '#',
        },
      ],
    },
    {
      header: 'Support',
      menus: [
        {
          text: 'Community',
          url: '#',
        },
        {
          text: 'Developer Center',
          url: '#',
        },
        {
          text: 'Training',
          url: '#',
        },
      ],
    },
  ];

  pricings = [
    {
      title: 'start',
      price: 'Free',
      pricePerDetail: '',
      features: [
        'Vexillologist pitchfork',
        'Tumeric plaid portland',
        'Mixtape chillwave tumeric',
      ],
    },
    {
      title: 'Pro',
      price: '$38',
      pricePerDetail: '/mo',
      features: [
        'Hexagon neutra unicorn',
        'Vexillologist pitchfork',
        'Tumeric plaid portland',
        'Mixtape chillwave tumeric',
      ],
    },
    {
      title: 'Bussiness',
      price: '$56',
      pricePerDetail: '/mo',
      features: [
        'Mixtape chillwave tumeric',
        'Hexagon neutra unicorn',
        'Vexillologist pitchfork',
        'Tumeric plaid portland',
        'Mixtape chillwave tumeric',
      ],
    },
    {
      title: 'Enterprise',
      price: '$72',
      pricePerDetail: '/mo',
      features: [
        'Tumeric plaid portland',
        'Mixtape chillwave tumeric',
        'Hexagon neutra unicorn',
        'Vexillologist pitchfork',
        'Tumeric plaid portland',
        'Mixtape chillwave tumeric',
      ],
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
      name: 'Giuseppe Masseria.',
      position: 'Joe the Boss',
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
      name: 'Cory Ramirez',
      position: 'The Assassins',
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
      name: 'Charlie Luciano.',
      position: 'Lucky',
      photoUrl: 'https://randomuser.me/api/portraits/men/71.jpg',
      description: 'Keep your friends close and your enemy closer..',
    },
  ]
}
