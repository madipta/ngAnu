import { Component, Input } from '@angular/core';

@Component({
  selector: 'anu-elegan-feedback',
  template: `
    <section class="text-gray-700 relative">
      <div class="container px-5 py-24 mx-auto sm:flex sm:flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 w-full bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" [src]="mapUrl | safe" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
          <div class="bg-white text-xs relative flex flex-wrap py-4 rounded shadow-lg">
            <div class="lg:w-1/2 px-6">
              <h2 class=" font-medium text-gray-900 tracking-widest text-sm">ADDRESS</h2>
              <p class="leading-relaxed" [innerHtml]="address"></p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class=" font-medium text-gray-900 tracking-widest text-sm">EMAIL</h2>
              <a class="cursor-pointer text-indigo-500 leading-relaxed">{{email}}</a>
              <h2 class=" font-medium text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
              <p class="leading-relaxed">{{phone}}</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:pl-10 md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium" [innerHtml]="caption"></h2>
          <p class="leading-relaxed mb-5 text-gray-600" [innerHtml]="description"></p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          <p class="text-xs text-gray-500 mt-3" [innerHtml]="notice"></p>
        </div>
      </div>
    </section>
  `,
})
export class EleganFeedbackComponent {
  @Input() caption = 'Contact Us';
  @Input() description = 'We\'d love to hear from you!';
  @Input() email = 'example@email.com';
  @Input() mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126937.01234708032!2d106.68704723190385!3d-6.159993333319329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c9d110d719%3A0x300c5e82dd4b8a0!2sWest%20Jakarta%2C%20Kebonjeruk%2C%20West%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1607352165841!5m2!1sen!2sid';
  @Input() address = '49 Smith St. <br>Jakarta Barat, 12321';
  @Input() phone = '0888-999-000';
  @Input() notice = '';
}
