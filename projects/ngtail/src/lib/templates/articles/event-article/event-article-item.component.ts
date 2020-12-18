import { Component, Input } from '@angular/core';
import { DataEvent } from '../data-event';

@Component({
  selector: 'anu-event-article-item',
  template: `
    <div
      [ngClass]="{'bg-gray-100': alternating, 'bg-white': !alternating}"
      class="px-8 py-8 flex flex-no-wrap">
      <div class="w-2/5 md:w-1/3 pr-12 flex-shrink-0 flex flex-col items-end">
        <span class="mt-2 px-2 py-1 bg-gray-700 leading-none text-xs font-medium text-white">{{article.category}}</span>
        <span class="mt-1 text-gray-500 text-sm">{{ article.eventDate }}</span>
      </div>
      <div class="flex-grow">
        <h2 class="text-3xl font-medium text-gray-900 mb-2">
          {{ article.title }}
        </h2>
        <p class="leading-relaxed">{{ article.description }}</p>
        <a class="cursor-pointer text-xs text-gray-500 hover:text-pink-500 inline-flex items-center px-4 py-1 border-2 border-gray-700 mt-6">
          {{ linkText }}
        </a>
      </div>
    </div>
  `,
})
export class EventArticleItemComponent {
  @Input() alternating = false;
  @Input() article: DataEvent;
  @Input() linkText = 'Read More';
}
