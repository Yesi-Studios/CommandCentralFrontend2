import {Component, Input, OnInit} from '@angular/core';
import { fields } from '../../fields';


@Component({
  selector: 'cc-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  @Input() field;
  @Input() fieldId;

  fieldTypes: object;


  constructor() { }

  ngOnInit() {
    this.fieldTypes = {};
    fields.forEach((obj, i) => {
      this.fieldTypes[obj['id']] = {type: obj['type'], name: obj['name']};
    });
    this.field = {};
  }

  getQueryStringSegment() {
    const fieldData = this.fieldTypes[this.fieldId];
    if (fieldData['type'] === 'date') {
      return fieldData['name'] + '=' + this.field['from'] + ',' + this.field['to'];
    } else {
      return this.field
    }
  }

}
