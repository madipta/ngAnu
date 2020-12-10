import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-hero',
  template: `
    <section class="text-gray-700 body-font">
      <div class="bg-gray-100 rounded container mx-auto flex pt-6 pb-24 mt-12 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 px-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" [innerHTML]="title"></h1>
          <p class="mb-8 leading-relaxed" [innerHTML]="text"></p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div class="md:px-5 lg:px-10 lg:pt-5">
            <img class="object-cover object-center rounded" alt="hero" [src]="imgUrl">
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  @Input() title = 'Angular + TailwindCSS awesome!';
  @Input() text = 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.';
  @Input() imgUrl = 'https://dummyimage.com/720x600';
}
