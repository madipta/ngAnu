import { Component, Input } from '@angular/core';
import { DataArticle } from '../data-article';

@Component({
  selector: 'anu-text-article-item',
  template: `
    <div class="h-full bg-gray-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
      <h2 class="tracking-widest text-xs font-medium text-gray-500 mb-1">{{article.category}}</h2>
      <h1 class="text-xl sm:text-2xl font-medium text-gray-800 mb-2">{{article.title}}</h1>
      <p class="leading-relaxed text-sm mb-5">{{article.description}}</p>
      <a class="cursor-pointer py-2 px-5 text-xs text-white bg-indigo-500 inline-block rounded">{{linkText}}</a>
      <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        <span class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>{{article.views}}
        </span>
        <span class="text-gray-600 inline-flex items-center leading-none text-sm">
          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>{{article.comments}}
        </span>
      </div>
    </div>
  `
})
export class TextArticleItemComponent {
  @Input() article: DataArticle;
  @Input() linkText = 'Read More';
}
