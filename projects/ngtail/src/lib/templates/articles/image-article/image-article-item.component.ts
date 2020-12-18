import { Component, Input } from '@angular/core';
import { DataArticle } from '../data-article';

@Component({
  selector: 'anu-image-article-item',
  template: `
    <div class="transform hover:-rotate-1 relative h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl">
      <img class="lg:h-48 md:h-36 w-full object-cover object-center" [src]="article.imageUrl" [alt]="article.title">
      <div class="px-5 pb-8 pt-4">
        <div class="flex items-center flex-wrap text-gray-400 text-xs mb-2">
          <a class="bg-gray-500 px-4 py-1 text-xs text-white leaading-none tracking-widest font-medium uppercase">{{article.category}}</a>
          <span class="inline-flex items-center ml-auto leading-none pr-2 py-1 border-r-2 border-gray-100">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>{{article.views}}
          </span>
          <span class="inline-flex items-center leading-none ml-2">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>{{article.comments}}
          </span>
        </div>
        <h1 class="text-3xl text-gray-900 leading-none mb-3">{{article.title}}</h1>
        <p class="leading-relaxed text-sm mb-8">{{article.description}}</p>
        <a class="absolute bottom-0 right-0 px-4 py-1 mb-4 mr-4 cursor-pointer uppercase text-xs text-gray-500 hover:text-pink-500 border-2 border-gray-700">{{linkText}}</a>
      </div>
    </div>
  `,
})
export class ImageArticleItemComponent {
  @Input() article: DataArticle;
  @Input() linkText = 'Read More';
}
