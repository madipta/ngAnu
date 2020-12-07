import { Component, Input } from '@angular/core';
import { DataArticle } from '../data-article';

@Component({
  selector: 'anu-plain-article-item',
  template: `
    <div class="relative h-full pb-12 overflow-hidden">
      <h1 class="tracking-widest text-xs title-font font-medium text-gray-400 uppercase">{{article.category}}</h1>
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-800 mb-4">{{article.title}}</h2>
      <p class="leading-relaxed mb-8">{{article.description}}</p>
      <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto absolute bottom-0 left-0 w-full ">
        <a class="cursor-pointer py-2 px-5 text-xs text-white bg-indigo-500 inline-block rounded">{{linkText}}</a>
        <span class="text-gray-600 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r border-gray-200">
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
export class PlainArticleItemComponent {
  @Input() article: DataArticle;
  @Input() linkText = 'Read More';
}
