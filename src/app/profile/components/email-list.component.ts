import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from '../profile.service';
import {EmailAddress} from '../models/emailaddress';

@Component({
  selector: 'cc-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  @Input() personId: string;
  emails: EmailAddress[];
  private errors: string[];
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getEmailsForPerson(this.personId)
      .then(emails => this.emails = emails )
      .catch(errs => this.errors = this.errors.concat(errs));
  }

}
