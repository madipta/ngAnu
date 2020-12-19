import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  PricingsData,
  StatsData,
  StepsData,
  TestimonialsData,
} from '../app-data';

@Component({
  selector: 'app-home',
  template: `
    <anu-hero (onLogin)="onLogin()" (onRegister)="onRegister()"></anu-hero>
    <anu-step1 [steps]="steps"></anu-step1>
    <anu-statistic [stats]="stats"></anu-statistic>
    <anu-pricing [pricings]="pricings"></anu-pricing>
    <anu-testimonial [testimonials]="testimonials"></anu-testimonial>
  `,
})
export class HomeComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['login']);
  }

  onRegister() {
    this.router.navigate(['register']);
  }

  steps = StepsData;

  stats = StatsData;

  pricings = PricingsData;

  testimonials = TestimonialsData;
}
