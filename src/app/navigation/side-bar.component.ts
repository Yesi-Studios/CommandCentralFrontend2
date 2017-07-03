import { Component, Input } from '@angular/core';

import { LinkItem } from './link-item';

 @Component({
   selector: 'side-bar',
   templateUrl: 'side-bar.component.html',
   styleUrls: ['side-bar.component.css']
 })
 export class SideBarComponent {
   @Input() items: Array<LinkItem>;
 }
