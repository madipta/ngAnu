import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
      description:
        'Psriracha leggings jianbing microdosing.',
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
      description:
        'Psriracha leggings jianbing microdosing.',
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
      price: '$16.00'
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer Dummy Product',
      price: '$16.00'
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$16.00'
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$16.00'
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer Dummy Product',
      price: '$16.00'
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$18.00'
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$18.00'
    },
    {
      imageUrl: 'https://dummyimage.com/420x260',
      category: 'Shampoo',
      title: 'The Catalyzer',
      price: '$18.00'
    },
  ];
}
