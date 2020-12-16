import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-header',
  template: `
    <header class="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-700 shadow-xl text-gray-700 body-font z-40">
      <div class="container max-w-screen-lg mx-auto py-3 md:px-4 flex flex-wrap flex-row items-center">
        <a class="flex title-font font-medium items-center ml-2 md:ml-0">
          <ng-content select="[anu-header-icon]"></ng-content>
          <span class="text-indigo-300 ml-2 text-xl">{{appName}}</span>
        </a>
        <div class="flex-grow"></div>
        <nav class="text-sm font-semibold mt-1 flex flex-wrap items-center justify-center">
          <ng-content select="[anu-header-menu]"></ng-content>
        </nav>
      </div>
    </header>
    <div class="w-full h-14"></div>
  `,
})
export class HeaderComponent {
  @Input() appName = 'ngTail';
}
