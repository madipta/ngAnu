import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'anu-hero1',
  template: `
    <section class="bg-gradient-to-b from-indigo-100 to-transparent text-lg text-gray-600">
      <div class="max-w-screen-lg mx-auto flex py-24 flex-col md:flex-row">
        <div class="md:w-1/2 px-5 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 class="max-w-md sm:text-4xl text-3xl font-bold text-gray-900 mb-4" [innerHTML]="title"></h1>
          <p class="max-w-md mb-8 leading-relaxed" [innerHTML]="text"></p>
          <div class="max-w-md flex w-full md:justify-start justify-center items-end">
            <div class="mr-2 md:w-full lg:w-full xl:w-1/2 w-3/4">
              <label for="anu-hero1-field" class="leading-7 text-sm text-gray-600">{{fieldTitle}}</label>
              <input type="text" id="anu-hero1-field" name="anu-hero1-field" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button class="inline-flex text-white bg-gradient-to-b from-pink-400 to-pink-600 border-0 py-2 px-6 rounded shadow-lg">{{button}}</button>
          </div>
          <p class="max-w-md text-xs mt-2 text-gray-500 mb-6">{{fieldNotice}}</p>
          <div class="flex flex-row">
            <a [href]="googleplayUrl" target="_blank" class="bg-gray-200 inline-flex py-3 px-4 rounded-lg items-center mr-2 hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
              </svg>
              <span class="ml-3 flex items-start flex-col">
                <span class="leading-none text-xs text-gray-600 mb-1">GET IT ON</span>
                <span class="leading-none text-xs font-bold">Google Play</span>
              </span>
            </a>
            <a [href]="appstoreUrl" target="_blank" class="bg-gray-200 inline-flex py-3 px-4 rounded-lg items-center hover:bg-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
              </svg>
              <span class="ml-3 flex items-start flex-col">
                <span class="leading-none text-xs text-gray-600 mb-1">Download on the</span>
                <span class="leading-none text-xs font-bold">App Store</span>
              </span>
            </a>
          </div>
        </div>
        <div class="px-5 md:w-1/2 mt-16 md:mt-10 lg:mt-0">
          <img class="mx-auto object-cover object-center rounded border-8 border-gray-100 shadow-md" [alt]="title" [src]="imgUrl">
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class Hero1Component {
  @Input() title = 'Angular + TailwindCSS awesome!';
  @Input() text = 'Learn one way to build applications with Angular + TailwindCSS and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.';
  @Input() imgUrl = 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
  @Input() button = 'Submit';
  @Input() fieldTitle = 'Email Subcription';
  @Input() fieldNotice = 'We will not SPAM you for any reason. We will not share your email with anyone!';
  @Input() googleplayUrl = 'https://play.google.com/store';
  @Input() appstoreUrl = 'https://www.apple.com/id/app-store/';
}
