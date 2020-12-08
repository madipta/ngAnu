import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './common/pipes/safe-pipe';
import { ImageArticleComponent } from './cards/articles/image-article/image-articles.component';
import { TextArticleComponent } from './cards/articles/text-article/text-article.component';
import { ImageArticleItemComponent } from './cards/articles/image-article/image-article-item.component';
import { TextArticleItemComponent } from './cards/articles/text-article/text-article-item.component';
import { PlainArticleComponent } from './cards/articles/plain-article/plain-article.component';
import { PlainArticleItemComponent } from './cards/articles/plain-article/plain-article-item.component';
import { EventArticleComponent } from './cards/articles/event-article/event-article.component';
import { EventArticleItemComponent } from './cards/articles/event-article/event-article-item.component';
import { SimpleFeedbackComponent } from './cards/feedbacks/simple-feedback/simple-feedback.component';
import { PlainFeedbackComponent } from './cards/feedbacks/plain-feedback/plain-feedback.component';
import { EleganFeedbackComponent } from './cards/feedbacks/elegan-feedback/elegan-feedback.component';
import { EmailRegisterComponent } from './cards/registers/email-register/email-register.component';

@NgModule({
  declarations: [
    SafePipe,
    ImageArticleComponent,
    ImageArticleItemComponent,
    TextArticleComponent,
    TextArticleItemComponent,
    PlainArticleComponent,
    PlainArticleItemComponent,
    EventArticleComponent,
    EventArticleItemComponent,
    SimpleFeedbackComponent,
    PlainFeedbackComponent,
    EleganFeedbackComponent,
    EmailRegisterComponent,
  ],
  imports: [CommonModule],
  exports: [
    ImageArticleComponent,
    TextArticleComponent,
    PlainArticleComponent,
    EventArticleComponent,
    SimpleFeedbackComponent,
    PlainFeedbackComponent,
    EleganFeedbackComponent,
    EmailRegisterComponent,
  ],
})
export class NgtailModule {}
