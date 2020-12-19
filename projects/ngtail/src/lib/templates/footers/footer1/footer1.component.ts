import { Component, Input } from '@angular/core';
import { DataGroupMenus } from '../data-footer-links';

@Component({
  selector: 'anu-footer1',
  template: `
    <footer class="text-gray-700">
      <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
        <div class="flex-grow text-center md:text-left">
          <a class="flex font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-2xl">{{ appName }}</span>
          </a>
          <p class="mt-2 text-sm text-gray-500">{{ appDescription }}</p>
        </div>
        <anu-footer1-links
          [groupMenus]="groupMenus"
          class="flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center"
        ></anu-footer1-links>
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
export class Footer1Component {
  @Input() appName = 'ngTail';
  @Input() appDescription = 'Angular + TailwindCSS sample application';
  @Input() copyright = '© 2020 by Madipta';
  @Input() groupMenus: DataGroupMenus[] = [];
  @Input() facebookUrl = 'https://facebook.com';
  @Input() twitterUrl = 'https://twitter.com';
  @Input() instagramUrl = 'https://instagram.com';
  @Input() linkedinUrl = 'https://linkedin.com';
}
