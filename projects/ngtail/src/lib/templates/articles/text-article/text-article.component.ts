import { Component, Input } from '@angular/core';
import { DataArticle } from '../data-article';

@Component({
  selector: 'anu-text-article',
  template: `
    <section class="text-gray-700">
      <div class="max-w-screen-lg px-5 py-24 mx-auto">
        <div class="flex flex-wrap justify-center -m-4">
          <div class="p-4 md:w-1/{{cols}} w-full" *ngFor="let article of articles">
            <anu-text-article-item [article]="article"></anu-text-article-item>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TextArticleComponent {
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
