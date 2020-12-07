import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageArticleComponent } from './cards/articles/image-article/image-articles.component';
import { TextArticleComponent } from './cards/articles/text-article/text-article.component';
import { ImageArticleItemComponent } from './cards/articles/image-article/image-article-item.component';
import { TextArticleItemComponent } from './cards/articles/text-article/text-article-item.component';
import { PlainArticleComponent } from './cards/articles/plain-article/plain-article.component';
import { PlainArticleItemComponent } from './cards/articles/plain-article/plain-article-item.component';
import { EventArticleComponent } from './cards/articles/event-article/event-article.component';
import { EventArticleItemComponent } from './cards/articles/event-article/event-article-item.component';

@NgModule({
  declarations: [
    ImageArticleComponent,
    ImageArticleItemComponent,
    TextArticleComponent,
    TextArticleItemComponent,
    PlainArticleComponent,
    PlainArticleItemComponent,
    EventArticleComponent,
    EventArticleItemComponent,
  ],
  imports: [CommonModule],
  exports: [
    ImageArticleComponent,
    TextArticleComponent,
    PlainArticleComponent,
    EventArticleComponent,
  ],
})
export class NgtailModule {}
