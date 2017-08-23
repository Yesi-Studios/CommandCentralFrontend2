import {Component, Input, OnInit} from '@angular/core';
import {ProfileService} from '../../profile.service';
import {PhysicalAddress} from '../../models/physicaladdress';

@Component({
  selector: 'cc-physicaladdress-list',
  templateUrl: './physicaladdress-list.component.html',
  styleUrls: ['./physicaladdress-list.component.css']
})
export class PhysicaladdressListComponent implements OnInit {

  @Input() personId: string;
  addresses: PhysicalAddress[];
  private errors: string[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getAddressesForPerson(this.personId)
      .then(addresses => this.addresses = addresses)
      .catch(errs => this.errors = this.errors.concat(errs));
  }

}
