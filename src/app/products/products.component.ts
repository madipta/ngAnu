import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <anu-detail-product [product]="products[0]"></anu-detail-product>
    <anu-product [products]="products"></anu-product>
  `,
})
export class ProductsComponent {
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
}
