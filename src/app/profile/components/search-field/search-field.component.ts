import {Component, Input, OnInit} from '@angular/core';
import { fields } from '../../fields';


@Component({
  selector: 'cc-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  @Input() field;
  @Input() fieldName;

  fieldTypes = fields;

  constructor() { }

  ngOnInit() {
  }

}
