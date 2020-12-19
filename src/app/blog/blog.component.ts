import { Component } from '@angular/core';
import { ArticlesData, EventsData } from '../app-data';

@Component({
  selector: 'app-blog',
  template: `
    <anu-hero1></anu-hero1>
    <anu-image-article [articles]="articles"></anu-image-article>
    <anu-event-article [articles]="events"></anu-event-article>
  `,
})
export class BlogComponent {
  articles = ArticlesData;
  events = EventsData;
}
