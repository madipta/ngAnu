import { Component, Input } from '@angular/core';
import { DataGroupMenus } from '../data-footer-links';

@Component({
  selector: 'anu-footer1-links',
  template: `
    <div class="md:w-auto w-full md:px-6 lg:px-12" *ngFor="let groupMenu of groupMenus">
      <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{{groupMenu.header}}</h2>
      <nav class="list-none mb-10">
        <li *ngFor="let item of groupMenu.menus">
          <a [href]="item.url" class="text-gray-600 hover:text-gray-800">{{item.text}}</a>
        </li>
      </nav>
    </div>
  `,
})
export class Footer1LinksComponent {
  @Input() groupMenus: DataGroupMenus[];

  groupMenuColumns(): number {
    return this.groupMenus.length;
  }
}
