import { Component, Input } from '@angular/core';
import { FooterLinksData, MenuData } from './app-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @Input() appName = 'ngTail';
  
  footerLinks = FooterLinksData;
  menuLinks = MenuData;
}
