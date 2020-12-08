import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-email-register',
  template: `
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900" [innerHTML]="title"></h1>
          <p class="leading-relaxed mt-4" [innerHTML]="description"></p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg shadow-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5" [innerHTML]="caption"></h2>
          <div class="relative mb-4">
            <label for="anu-email-register-full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
            <input type="text" id="anu-email-register-full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="anu-email-register-email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="anu-email-register-email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          <p class="text-xs text-gray-500 mt-3" [innerHTML]="notice"></p>
        </div>
      </div>
    </section>
  `,
})
export class EmailRegisterComponent {
  @Input() caption = 'Sign Up';
  @Input() title = 'Slow-carb next level shoindcgoitch ethical authentic, poko scenester';
  @Input() description = 'Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.';
  @Input() notice = '';
}
