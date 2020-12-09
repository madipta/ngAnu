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
      header: 'Header #1',
      menus: [
        {
          text: 'H1 Link1',
          url: '#',
        },
        {
          text: 'H1 Link2',
          url: '#',
        },
        {
          text: 'H1 Link3',
          url: '#',
        },
        {
          text: 'H1 Link4',
          url: '#',
        },
      ],
    },
    {
      header: 'Header #2',
      menus: [
        {
          text: 'H2 Link1',
          url: '#',
        },
        {
          text: 'H2 Link2',
          url: '#',
        },
        {
          text: 'H2 Link3',
          url: '#',
        },
        {
          text: 'H2 Link4',
          url: '#',
        },
      ],
    },
    {
      header: 'Header #3',
      menus: [
        {
          text: 'H3 Link1',
          url: '#',
        },
        {
          text: 'H3 Link2',
          url: '#',
        },
        {
          text: 'H3 Link3',
          url: '#',
        },
        {
          text: 'H3 Link4',
          url: '#',
        },
      ],
    },
  ];
}
