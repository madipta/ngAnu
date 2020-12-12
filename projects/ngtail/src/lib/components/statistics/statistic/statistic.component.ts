import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-statistic',
  template: `
    <section class="bg-gray-100 text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div class="w-full sm:p-4 px-4 mb-6">
            <h1 class="title-font font-medium text-xl mb-2 text-gray-900" [innerHTML]="title"></h1>
            <div class="leading-relaxed" [innerHTML]="description"></div>
          </div>
          <div class="flex flex-row flex-wrap p-4">
            <div
              *ngFor="let stat of stats"
              class="mr-12 mb-4">
              <h2 class="title-font font-medium text-3xl text-gray-900">{{stat.value}}</h2>
              <p class="text-xs leading-relaxed">{{stat.title}}</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img class="object-cover object-center w-full h-full" [src]="imageUrl" [alt]="title">
        </div>
      </div>
    </section>
  `,
})
export class StatisticComponent {
  @Input() title = 'Moon hashtag pop-up try-hard offal truffaut';
  @Input() description = 'Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.';
  @Input() imageUrl = 'https://dummyimage.com/600x300';
  @Input() stats: { title: string; value: string; }[] = [];
}
