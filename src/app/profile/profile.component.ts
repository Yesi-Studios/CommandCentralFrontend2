import {Component, OnInit} from '@angular/core';
import {Person} from './models/person';
import {ProfileService} from './profile.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'cc-profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
  person: Person;
  errorMessages: string[];
  collapseOne = false;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.profileService.getProfile(id)
        .then(person => this.person = person)
        .catch(errs => this.errorMessages = this.errorMessages.concat(errs));
    } else {
      this.profileService.getMyProfile()
        .then(person => this.person = person)
        .catch(errs => this.errorMessages = this.errorMessages.concat(errs));
    }
  }
}
