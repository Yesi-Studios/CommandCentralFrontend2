import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../models/person';
import {ProfileService} from '../profile.service';
import {fields} from '../fields'
import {IMultiSelectOption} from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchText: string;
  searchResults: Person[];
  errorMessages: string[];
  advancedSearch: boolean;
  selectedOptions: number[];
  fields: IMultiSelectOption[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.fields = fields as IMultiSelectOption[];
  }

  search(text) {
    console.log('searching for:' + text);
    this.profileService.simpleSearch(text.split(' ').join('|'))
      .then(response => this.searchResults = response)
      .catch(errs => this.errorMessages = this.errorMessages.concat(errs));
  }

  onOptionsChange() {
    console.log(this.selectedOptions);
  }

}
