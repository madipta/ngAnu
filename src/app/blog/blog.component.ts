import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <anu-hero1></anu-hero1>
    <anu-image-article [articles]="articles"></anu-image-article>
    <anu-event-article [articles]="events"></anu-event-article>
  `,
})
export class BlogComponent {
  articles = [
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://images.pexels.com/photos/5720777/pexels-photo-5720777.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      views: '2.3K',
      comments: '9',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://images.pexels.com/photos/5686474/pexels-photo-5686474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      views: '750',
      comments: '5',
      description: 'Psriracha leggings jianbing microdosing.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://images.pexels.com/photos/5995301/pexels-photo-5995301.jpeg?cs=srgb&dl=pexels-maksim-goncharenok-5995301.jpg&fm=jpg',
      views: '1.6K',
      comments: '23',
      description:
        'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    },
    {
      category: 'Movies',
      title: 'Harry Potter',
      imageUrl: 'https://images.pexels.com/photos/2557036/pexels-photo-2557036.jpeg?cs=srgb&dl=pexels-anna-tukhfatullina-food-photographerstylist-2557036.jpg&fm=jpg',
      views: '4.1K',
      comments: '66',
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
}
