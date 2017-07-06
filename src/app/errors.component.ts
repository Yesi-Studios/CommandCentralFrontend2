import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'errors-list',
  templateUrl: 'errors.component.html'
})
export class ErrorsComponent {
  @Input() errors: string[];
}
