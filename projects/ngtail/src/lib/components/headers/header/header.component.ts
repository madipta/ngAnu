import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-header',
  template: `
    <header class="bg-indigo-500 fixed top-0 left-0 right-0 text-gray-700 body-font shadow-xs">
      <div class="container mx-auto py-2 md:px-4 flex flex-wrap flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="text-indigo-300 ml-1 text-xl">{{appName}}</span>
        </a>
        <nav class="text-sm font-medium mt-1 md:mr-auto md:ml-12 md:py-1 flex flex-wrap items-center justify-center">
          <a class="cursor-pointer text-white hover:text-indigo-300 mx-3">First Link</a>
          <a class="cursor-pointer text-white hover:text-indigo-300 mx-3">Second Link</a>
          <a class="cursor-pointer text-white hover:text-indigo-300 mx-3">Third Link</a>
          <a class="cursor-pointer text-white hover:text-indigo-300 mx-3">Fourth Link</a>
        </nav>
        <a class="cursor-pointer text-white text-sm p-1 mt-4 md:mt-0">|</a>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  @Input() appName = 'ngTail';
}
