import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgtailModule } from 'projects/ngtail/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    TeamComponent,
    BlogComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgtailModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
