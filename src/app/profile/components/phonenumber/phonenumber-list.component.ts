import {Component, Input, OnInit} from '@angular/core';
import {PhoneNumber} from '../../models/phonenumber';
import {ProfileService} from '../../profile.service';

@Component({
  selector: 'cc-phonenumber-list',
  templateUrl: './phonenumber-list.component.html',
  styleUrls: ['./phonenumber-list.component.css']
})
export class PhonenumberListComponent implements OnInit {

  @Input() personId: string;
  phoneNumbers: PhoneNumber[];
  private errors: string[];
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getPhoneNumbersForPerson(this.personId)
      .then(phoneNumbers => this.phoneNumbers = phoneNumbers)
      .catch(errs => this.errors = this.errors.concat(errs));
  }

}
