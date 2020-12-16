import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgtailModule } from 'projects/ngtail/src/public-api';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductsComponent, TeamComponent, BlogComponent],
  imports: [BrowserModule, AppRoutingModule, NgtailModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
