import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'anu-hero',
  template: `
    <section class="bg-gradient-to-b from-indigo-100 to-transparent text-lg text-gray-600 body-font">
      <div class="container mx-auto flex pt-20 pb-24 mt-6 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 px-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl font-bold text-gray-800 mb-4" [innerHTML]="title"></h1>
          <p class="mb-8 leading-relaxed" [innerHTML]="text"></p>
          <div class="flex justify-center text-lg">
            <button class="inline-flex text-white tracking-wider bg-indigo-500 border-0 py-2 px-6 rounded">{{button1}}</button>
            <button class="ml-3 inline-flex text-indigo-600 tracking-wider bg-white border-0 py-2 px-6 rounded">{{button2}}</button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-full">
          <div class="px-5 lg:px-10 lg:pt-5">
            <img class="object-cover object-center rounded" alt="hero" [src]="imgUrl">
          </div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent {
  @Input() title = 'Angular + TailwindCSS awesome!';
  @Input() text = 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.';
  @Input() imgUrl = 'https://dummyimage.com/720x600';
  @Input() button1 = 'Register';
  @Input() button2 = 'Sign In';
}
