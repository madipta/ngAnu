import { Component, Input } from '@angular/core';
import { DataEvent } from '../data-event';

@Component({
  selector: 'anu-event-article-item',
  template: `
    <div
      [ngClass]="{'bg-gray-100': alternating, 'bg-white': !alternating}"
      class="px-8 py-8 flex flex-no-wrap">
      <div class="w-2/5 md:w-1/3 pr-12 flex-shrink-0 flex flex-col items-end">
        <span class="mt-2 leading-none font-medium title-font text-gray-600">{{article.category}}</span>
        <span class="mt-1 text-gray-500 text-sm">{{ article.eventDate }}</span>
      </div>
      <div class="flex-grow">
        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
          {{ article.title }}
        </h2>
        <p class="leading-relaxed">{{ article.description }}</p>
        <a class="cursor-pointer text-indigo-500 inline-flex items-center mt-4">
          <span>{{ linkText }}</span>
          <svg
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
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
