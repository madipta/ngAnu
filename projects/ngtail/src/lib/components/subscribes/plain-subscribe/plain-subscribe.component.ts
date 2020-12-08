import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-plain-subscribe',
  template: `
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" [innerHTML]="title"></h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base" [innerHTML]="description"></p>
        </div>
        <div class="flex sm:w-4/5 lg:w-1/2 w-full mx-auto px-8 sm:px-0 items-end">
          <div class="sm:mr-4 mr-2 flex-grow">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
        </div>
      </div>
    </section>
  `,
})
export class PlainSubscribeComponent {
  @Input() title = 'Join our Newsletter';
  @Input() description = 'Subscribe to stay up to date with the latest news, updates, features, and videos! ';
}
