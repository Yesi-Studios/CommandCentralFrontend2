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
    this.fieldTypes = fields.reduce((map, obj) => {
      map[obj['id']] = {type: obj['type'], name: obj['name']};
      return map;
    });
    console.log(this.fieldTypes);
  }

}