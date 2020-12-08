import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './common/pipes/safe-pipe';
import { ImageArticleComponent } from './components/articles/image-article/image-articles.component';
import { TextArticleComponent } from './components/articles/text-article/text-article.component';
import { ImageArticleItemComponent } from './components/articles/image-article/image-article-item.component';
import { TextArticleItemComponent } from './components/articles/text-article/text-article-item.component';
import { PlainArticleComponent } from './components/articles/plain-article/plain-article.component';
import { PlainArticleItemComponent } from './components/articles/plain-article/plain-article-item.component';
import { EventArticleComponent } from './components/articles/event-article/event-article.component';
import { EventArticleItemComponent } from './components/articles/event-article/event-article-item.component';
import { SimpleFeedbackComponent } from './components/feedbacks/simple-feedback/simple-feedback.component';
import { PlainFeedbackComponent } from './components/feedbacks/plain-feedback/plain-feedback.component';
import { EleganFeedbackComponent } from './components/feedbacks/elegan-feedback/elegan-feedback.component';
import { EmailRegisterComponent } from './components/registers/email-register/email-register.component';
import { PlainSubscribeComponent } from './components/subscribes/plain-subscribe/plain-subscribe.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductItemComponent } from './components/products/product/product-item.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';

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
    PlainSubscribeComponent,
    ProductComponent,
    ProductItemComponent,
    DetailProductComponent,
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
    PlainSubscribeComponent,
    ProductComponent,
    DetailProductComponent,
  ],
})
export class NgtailModule {}
