import { Component, Input } from '@angular/core';
import { DataArticle } from '../data-article';

@Component({
  selector: 'anu-image-article',
  template: `
    <section class="text-gray-700">
      <div class="max-w-screen-lg px-5 py-24 mx-auto">
        <div class="flex flex-wrap">
          <div class="p-2 sm:w-1/2 md:w-1/{{ cols }}" *ngFor="let article of articles">
            <anu-image-article-item
              [article]="article"
            ></anu-image-article-item>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ImageArticleComponent {
  cols = 3;

  @Input() articles: DataArticle[] = [];

  @Input()
  get columns(): number {
    return this.cols;
  }
  set columns(val: number) {
    if (val > 6) {
      this.cols = 6;
    } else if (val < 2) {
      this.cols = 2;
    } else {
      this.cols = val;
    }
  }
}
