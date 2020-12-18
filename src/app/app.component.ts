import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() appName = 'ngTail';
  
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

}
