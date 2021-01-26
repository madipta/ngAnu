import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FooterLinksData, MenuData } from './app-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Input() appName = 'ngTail';

  footerLinks = FooterLinksData;
  menuLinks = MenuData;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scroll(0, 0);
      }
    });
  }
}
