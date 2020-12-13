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
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterLinksComponent } from './components/footers/footer/footer-links.component';
import { Footer1Component } from './components/footers/footer1/footer1.component';
import { Footer1LinksComponent } from './components/footers/footer1/footer1-links.component';
import { Footer2LinksComponent } from './components/footers/footer2/footer2-links.component';
import { Footer2Component } from './components/footers/footer2/footer2.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { HeroComponent } from './components/heroes/hero/hero.component';
import { Hero1Component } from './components/heroes/hero1/hero1.component';
import { PricingComponent } from './components/pricings/pricing/pricing.component';
import { PricingItemComponent } from './components/pricings/pricing/pricing-item.component';
import { StatisticComponent } from './components/statistics/statistic/statistic.component';
import { StepComponent } from './components/steps/step/step.component';
import { StepItemComponent } from './components/steps/step/step-item.component';
import { Step1Component } from './components/steps/step1/step1.component';
import { Step1ItemComponent } from './components/steps/step1/step1-item.component';
import { TeamComponent } from './components/teams/team/team.component';
import { Team1Component } from './components/teams/team1/team1.component';
import { Team1ItemComponent } from './components/teams/team1/team1-item.component';

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
    FooterComponent,
    Footer1Component,
    FooterLinksComponent,
    Footer1LinksComponent,
    Footer2Component,
    Footer2LinksComponent,
    HeaderComponent,
    HeroComponent,
    Hero1Component,
    PricingComponent,
    PricingItemComponent,
    StatisticComponent,
    StepComponent,
    StepItemComponent,
    Step1Component,
    Step1ItemComponent,
    TeamComponent,
    Team1Component,
    Team1ItemComponent,
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
    FooterComponent,
    Footer1Component,
    Footer2Component,
    HeaderComponent,
    HeroComponent,
    Hero1Component,
    PricingComponent,
    StatisticComponent,
    StepComponent,
    Step1Component,
    TeamComponent,
    Team1Component,
  ],
})
export class NgtailModule {}
