import {Component, Input, OnInit} from '@angular/core';
import {PhysicalAddress} from '../../models/physicaladdress';

@Component({
  selector: 'cc-physicaladdress',
  templateUrl: './physicaladdress.component.html',
  styleUrls: ['./physicaladdress.component.css']
})
export class PhysicaladdressComponent implements OnInit {

  @Input() address: PhysicalAddress;
  constructor() { }

  ngOnInit() {
  }

}
