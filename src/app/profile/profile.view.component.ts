import { Component } from '@angular/core';
import {LinkItem} from '../navigation/link-item';

@Component({
  selector: 'cc-profile-view',
  templateUrl: 'profile.view.component.html'
})

export class ProfileViewComponent {
  linkItems: LinkItem[] = [
    {
      text: 'My Profile',
      url: '/sailors/'
    },
    { text: 'Search Profiles',
      url: '/sailors/search'
    }
  ]
}
