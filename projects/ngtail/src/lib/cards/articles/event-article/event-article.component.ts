import { Component, Input } from '@angular/core';
import { DataEvent } from '../data-event';

@Component({
  selector: 'anu-event-article',
  template: `
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <anu-event-article-item
          [article]="article"
          *ngFor="let article of articles"
        ></anu-event-article-item>
      </div>
    </section>
  `,
})
export class EventArticleComponent {
  @Input() articles: DataEvent[] = [];
}
