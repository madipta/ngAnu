import { Component, Input } from '@angular/core';
import { DataGroupMenus } from '../data-footer-links';

@Component({
  selector: 'anu-footer2-links',
  template: `
    <div class="text-sm w-full md:w-auto md:pr-10 mb-8 md:mb-0" *ngFor="let groupMenu of groupMenus">
      <h2 class="font-medium text-gray-900 tracking-widest">{{groupMenu.header}}</h2>
      <ul class="mt-3">
        <li *ngFor="let item of groupMenu.menus" class="pl-1 my-2">
          <a [href]="item.url" class="text-xs text-gray-600 hover:underline">{{item.text}}</a>
        </li>
      </ul>
    </div>
  `,
})
export class Footer2LinksComponent {
  @Input() groupMenus: DataGroupMenus[];

  groupMenuColumns(): number {
    return this.groupMenus.length;
  }
}
