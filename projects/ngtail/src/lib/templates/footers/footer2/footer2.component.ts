import { Component, Input } from '@angular/core';
import { DataGroupMenus } from '../data-footer-links';

@Component({
  selector: 'anu-footer2',
  template: `
    <footer class="bg-gray-800">
      <div class="max-w-screen-lg px-5 py-8 md:py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <anu-footer2-links
          [groupMenus]="groupMenus"
          class="flex flex-wrap mx-auto md:text-left text-center"
        ></anu-footer2-links>
        <div class="flex flex-col mt-6 lg:mt-0 mx-auto">
          <h2 class="font-semibold text-gray-300 tracking-widest text-xs mb-1">SUBSCRIBE</h2>
          <div class="flex justify-center items-end">
            <div class="w-44 sm:w-48 md:w-52 mr-2">
              <label for="anu-footer2-field" class="leading-7 text-sm text-gray-300">Email</label>
              <input
                type="text"
                id="anu-footer2-field"
                name="anu-footer2-field"
                class="w-full bg-gray-100 rounded-xs text-base outline-none text-gray-800 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded-sm">Submit</button>
          </div>
          <p class="text-gray-400 text-xs mt-2 italic">
            {{notice}}
          </p>
        </div>
      </div>
      <anu-footer
        [appName]="appName"
        [copyright]="copyright"
        [facebookUrl]="facebookUrl"
        [twitterUrl]="twitterUrl"
        [instagramUrl]="instagramUrl"
        [linkedinUrl]="linkedinUrl"
      ></anu-footer>
    </footer>
  `,
})
export class Footer2Component {
  @Input() appName = 'ngTail';
  @Input() appDescription = 'Angular + TailwindCSS sample application';
  @Input() copyright = '© 2020 by Madipta';
  @Input() groupMenus: DataGroupMenus[] = [];
  @Input() facebookUrl = 'https://facebook.com';
  @Input() twitterUrl = 'https://twitter.com';
  @Input() instagramUrl = 'https://instagram.com';
  @Input() linkedinUrl = 'https://linkedin.com';
  @Input() notice = 'We will not SPAM you for any reason. We will not share your email with anyone!';
}
