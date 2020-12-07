import { Component, Input } from '@angular/core';
import { DataArticle } from '../data-article';

@Component({
  selector: 'anu-image-article',
  template: `
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap justify-center -m-4">
          <div class="p-4 md:w-1/{{ cols }}" *ngFor="let article of articles">
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
