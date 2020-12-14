import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './common/pipes/safe-pipe';
import { ImageArticleComponent } from './templates/articles/image-article/image-articles.component';
import { TextArticleComponent } from './templates/articles/text-article/text-article.component';
import { ImageArticleItemComponent } from './templates/articles/image-article/image-article-item.component';
import { TextArticleItemComponent } from './templates/articles/text-article/text-article-item.component';
import { PlainArticleComponent } from './templates/articles/plain-article/plain-article.component';
import { PlainArticleItemComponent } from './templates/articles/plain-article/plain-article-item.component';
import { EventArticleComponent } from './templates/articles/event-article/event-article.component';
import { EventArticleItemComponent } from './templates/articles/event-article/event-article-item.component';
import { SimpleFeedbackComponent } from './templates/feedbacks/simple-feedback/simple-feedback.component';
import { PlainFeedbackComponent } from './templates/feedbacks/plain-feedback/plain-feedback.component';
import { EleganFeedbackComponent } from './templates/feedbacks/elegan-feedback/elegan-feedback.component';
import { EmailRegisterComponent } from './templates/registers/email-register/email-register.component';
import { PlainSubscribeComponent } from './templates/subscribes/plain-subscribe/plain-subscribe.component';
import { ProductComponent } from './templates/products/product/product.component';
import { ProductItemComponent } from './templates/products/product/product-item.component';
import { DetailProductComponent } from './templates/products/detail-product/detail-product.component';
import { FooterComponent } from './templates/footers/footer/footer.component';
import { FooterLinksComponent } from './templates/footers/footer/footer-links.component';
import { Footer1Component } from './templates/footers/footer1/footer1.component';
import { Footer1LinksComponent } from './templates/footers/footer1/footer1-links.component';
import { Footer2LinksComponent } from './templates/footers/footer2/footer2-links.component';
import { Footer2Component } from './templates/footers/footer2/footer2.component';
import { HeaderComponent } from './templates/headers/header/header.component';
import { HeroComponent } from './templates/heroes/hero/hero.component';
import { Hero1Component } from './templates/heroes/hero1/hero1.component';
import { PricingComponent } from './templates/pricings/pricing/pricing.component';
import { PricingItemComponent } from './templates/pricings/pricing/pricing-item.component';
import { StatisticComponent } from './templates/statistics/statistic/statistic.component';
import { StepComponent } from './templates/steps/step/step.component';
import { StepItemComponent } from './templates/steps/step/step-item.component';
import { Step1Component } from './templates/steps/step1/step1.component';
import { Step1ItemComponent } from './templates/steps/step1/step1-item.component';
import { TeamComponent } from './templates/teams/team/team.component';
import { Team1Component } from './templates/teams/team1/team1.component';
import { Team1ItemComponent } from './templates/teams/team1/team1-item.component';
import { Team2Component } from './templates/teams/team2/team2.component';
import { Team2ItemComponent } from './templates/teams/team2/team2-item.component';
import { TestimonialComponent } from './templates/testimonials/testimonial/testimonial.component';
import { Testimonial1Component } from './templates/testimonials/testimonial1/testimonial1.component';

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
    Team2Component,
    Team2ItemComponent,
    TestimonialComponent,
    Testimonial1Component,
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
    Team2Component,
    TestimonialComponent,
    Testimonial1Component,
  ],
})
export class NgtailModule {}
