import {Component, Input, OnInit} from '@angular/core';
import {EmailAddress} from '../../models/emailaddress';

@Component({
  selector: 'cc-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  @Input() email: EmailAddress;
  constructor() { }

  ngOnInit() {
  }

}
