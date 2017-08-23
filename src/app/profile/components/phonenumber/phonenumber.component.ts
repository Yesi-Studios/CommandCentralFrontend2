import {Component, Input, OnInit} from '@angular/core';
import {PhoneNumber} from '../../models/phonenumber';

@Component({
  selector: 'cc-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent implements OnInit {

  @Input() phoneNumber: PhoneNumber;
  constructor() { }

  ngOnInit() {
  }

}
