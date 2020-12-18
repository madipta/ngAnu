import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-hero',
  template: `
    <section class="bg-gradient-to-b from-indigo-100 to-transparent text-gray-600">
      <div class="max-w-screen-lg mx-auto flex py-24 flex-col md:flex-row">
        <div class="mb-12 md:mb-0 md:w-1/2 px-5 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 class="max-w-md sm:text-4xl text-3xl font-bold text-gray-800 mb-4" [innerHTML]="title"></h1>
          <p class="max-w-md mb-8 text-lg leading-relaxed" [innerHTML]="text"></p>
          <div class="max-w-md flex w-full justify-center md:justify-end">
            <button class="font-semibold tracking-wide text-indigo-500 bg-gradient-to-b from-white to-gray-200 shadow-lg py-3 px-8 rounded mr-4">{{button1}}</button>
            <button class="font-semibold tracking-wide text-white bg-gradient-to-b from-pink-400 to-pink-600 shadow-lg py-3 px-8 rounded">{{button2}}</button>
          </div>
        </div>
        <div class="px-5 md:w-1/2">
          <img class="object-cover object-center rounded border-8 border-gray-100 shadow-md" [alt]="title" [src]="imageUrl">
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  @Input() title = 'Angular + TailwindCSS awesome!';
  @Input() text = 'Learn one way to build applications with Angular + TailwindCSS and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.';
  @Input() imageUrl = 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';
  @Input() button1 = 'Sign In';
  @Input() button2 = 'Register';
}
