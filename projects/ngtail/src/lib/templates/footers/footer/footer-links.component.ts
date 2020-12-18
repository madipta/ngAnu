import { Component, Input } from '@angular/core';
import { DataGroupMenus } from '../data-footer-links';

@Component({
  selector: 'anu-footer-links',
  template: `
    <div class="md:w-1/{{groupMenuColumns()}} w-full" *ngFor="let groupMenu of groupMenus">
      <h2 class="font-medium text-gray-900 tracking-widest text-sm mb-3">{{groupMenu.header}}</h2>
      <ul class="mb-10">
        <li *ngFor="let item of groupMenu.menus">
          <a [href]="item.url" class="text-gray-600 hover:text-gray-800">{{item.text}}</a>
        </li>
      </ul>
    </div>
  `,
})
export class FooterLinksComponent {
  @Input() groupMenus: DataGroupMenus[];

  groupMenuColumns(): number {
    return this.groupMenus.length;
  }
}
