import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-email-login',
  template: `
    <section class="bg-gradient-to-t from-white to-gray-300 text-gray-700">
      <div class="max-w-screen-lg px-5 pb-24 pt-8 md:pt-24 mx-auto flex flex-wrap items-start">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 pt-0 md:pt-12 text-center">
          <h1 class="font-medium text-4xl text-gray-800" [innerHTML]="title"></h1>
          <p class="text-gray-600 text-lg leading-relaxed mt-4" [innerHTML]="description"></p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-white rounded-md shadow-lg p-6 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="tracking-wide text-gray-600 text-3xl font-bold text-center mb-3" [innerHTML]="caption"></h2>
          <div class="w-1/6 h-0 border-b-4 border-indigo-300 mb-12 mx-auto"></div>
          <div class="relative mb-4">
            <label for="anu-email-register-email" class="leading-7 text-sm">Email</label>
            <input type="email" id="anu-email-register-email" name="email" class="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="anu-email-register-password" class="leading-7 text-sm">Password</label>
            <input type="password" id="anu-email-register-password" name="password" class="w-full bg-white rounded border border-gray-400 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="text-white bg-pink-500 border-0 py-2 px-8 mt-4 focus:outline-none hover:bg-pink-600 rounded text-lg">Submit</button>
          <p class="text-xs text-gray-500 mt-3" [innerHTML]="notice"></p>
        </div>
      </div>
    </section>
  `,
})
export class EmailLoginComponent {
  @Input() caption = 'Login';
  @Input() title = 'Slow-carb next level shoindcgoitch ethical authentic, poko scenester';
  @Input() description = 'Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.';
  @Input() notice = '';
}
