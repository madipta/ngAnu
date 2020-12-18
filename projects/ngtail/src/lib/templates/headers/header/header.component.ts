import { Component } from '@angular/core';

@Component({
  selector: 'anu-header',
  template: `
    <header class="fixed top-0 left-0 w-full bg-gradient-to-b from-white to-gray-200 shadow-md text-gray-700 z-40">
      <div class="max-w-screen-lg mx-auto py-3 md:px-4 flex flex-wrap items-center">
        <div class="flex font-medium items-center pr-4 ml-2 md:ml-0 mr-2">
          <ng-content select="[anu-header-icon]"></ng-content>
        </div>
        <nav class="flex-grow flex flex-nowrap items-center justify-end">
          <ng-content select="[anu-header-menu]"></ng-content>
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {}
