import { Component, Input } from '@angular/core';
import { DataEvent } from '../data-event';

@Component({
  selector: 'anu-event-article-item',
  template: `
    <div class="py-8 flex border-b border-gray-200 flex-wrap md:flex-no-wrap">
      <div class="md:w-64 flex-shrink-0 flex flex-col">
        <span class="tracking-widest font-medium title-font text-gray-900">{{
          article.category
        }}</span>
        <span class="mt-1 text-gray-500 text-sm">{{ article.eventDate }}</span>
      </div>
      <div class="md:flex-grow">
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
  @Input() article: DataEvent;
  @Input() linkText = 'Read More';
}
