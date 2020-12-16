import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-statistic',
  template: `
    <section class="bg-gray-100 text-gray-700 body-font">
      <div class="max-w-screen-lg container py-24 mx-auto flex flex-wrap">
        <div class="w-full md:w-1/2 px-5 flex flex-wrap">
          <h1 class="title-font font-medium text-xl mb-2 text-gray-900" [innerHTML]="title"></h1>
          <div class="leading-relaxed" [innerHTML]="description"></div>
          <div class="flex flex-row flex-wrap my-6">
            <div
              *ngFor="let stat of stats"
              class="mr-12 mb-4">
              <h2 class="title-font font-medium text-3xl text-gray-900">{{stat.value}}</h2>
              <p class="text-xs leading-relaxed">{{stat.title}}</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-5 ounded-lg overflow-hidden">
          <img
            [src]="imageUrl"
            [alt]="title"
            class="border-8 border-white rounded object-cover object-center w-full h-full">
        </div>
      </div>
    </section>
  `,
})
export class StatisticComponent {
  @Input() title = 'Moon hashtag pop-up try-hard offal truffaut';
  @Input() description = 'Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.';
  @Input() imageUrl = 'https://images.pexels.com/photos/3854816/pexels-photo-3854816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  @Input() stats: { title: string; value: string; }[] = [];
}
