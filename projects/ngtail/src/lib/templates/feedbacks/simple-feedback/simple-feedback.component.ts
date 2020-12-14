import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-simple-feedback',
  template: `
    <section class="text-gray-700 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" [src]="mapUrl | safe" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 shadow-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font" [innerHtml]="caption"></h2>
          <p class="leading-relaxed mb-5 text-gray-600" [innerHtml]="description"></p>
          <div class="relative mb-4">
            <label for="anu-simple-feedback-name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="anu-simple-feedback-name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="anu-simple-feedback-email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="anu-simple-feedback-email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="anu-simple-feedback-message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="anu-simple-feedback-message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          <p class="text-xs text-gray-500 mt-3" [innerHtml]="notice"></p>
        </div>
      </div>
    </section>
  `,
})
export class SimpleFeedbackComponent {
  @Input() caption = 'Feedback';
  @Input() description = 'We\'d love to hear from you!';
  @Input() notice = '';
  @Input() mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126937.01234708032!2d106.68704723190385!3d-6.159993333319329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c9d110d719%3A0x300c5e82dd4b8a0!2sWest%20Jakarta%2C%20Kebonjeruk%2C%20West%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1607352165841!5m2!1sen!2sid';
}
