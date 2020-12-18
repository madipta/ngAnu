import { Component, Input } from '@angular/core';
import { DataTeam } from '../data-team';

@Component({
  selector: 'anu-team2-item',
  template: `
    <div class="h-full flex flex-row justify-center m-4">
      <img
        [src]="member.photoUrl"
        [alt]="member.name"
        loading="lazy"
        class="flex-shrink-0 w-36 sm:w-44 md:w-48 h-36 sm:h-44 md:h-48 border-8 border-white rounded shadow-lg mx-2 object-cover object-center">
      <div class="flex-grow max-w-sm mx-2">
        <h2 [innerHTML]="member.name" class="leading-tight font-semibold text-2xl text-gray-800 mt-2"></h2>
        <h3 [innerHTML]="member.position" class="text-xs text-gray-600 mb-3"></h3>
        <p [innerHTML]="member.description" class="text-sm text-gray-800 mb-5"></p>
        <span class="inline-flex">
          <a class="text-gray-300">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-2 text-gray-300">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-2 text-gray-300">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  `,
})
export class Team2ItemComponent {
  @Input() member: DataTeam;
}
