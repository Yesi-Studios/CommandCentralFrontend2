import { CommonModule } from '@angular/common';
import { ErrorService } from './error.service';
import { ErrorsComponent } from './errors.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [CommonModule],
  declarations: [ErrorsComponent],
  exports: [ErrorsComponent],
  providers: [ErrorService]
})
export class ErrorsModule { }
