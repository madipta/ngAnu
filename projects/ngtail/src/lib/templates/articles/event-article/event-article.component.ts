import { Component, Input } from '@angular/core';
import { DataEvent } from '../data-event';

@Component({
  selector: 'anu-event-article',
  template: `
    <section class="bg-gradient-to-b from-transparent via-gray-300 to-transparent text-gray-700 body-font overflow-hidden">
      <div class="max-w-screen-lg px-5 py-24 mx-auto">
        <anu-event-article-item
          *ngFor="let article of articles; odd as isOdd;"
          [article]="article"
          [alternating]="isOdd"
        ></anu-event-article-item>
      </div>
    </section>
  `,
})
export class EventArticleComponent {
  @Input() articles: DataEvent[] = [];
}
