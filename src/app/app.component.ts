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
}
