import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrespondenceViewComponent } from './correspondence-view/correspondence-view.component';
import { CorrespondenceItemComponent } from './components/correspondence-item/correspondence-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CorrespondenceViewComponent, CorrespondenceItemComponent]
})
export class CorrespondenceModule { }
