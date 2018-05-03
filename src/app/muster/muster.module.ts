import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusterComponent } from './muster.component';
import { MusterViewComponent } from './muster-view/muster-view.component';
import { MusterEntryComponent } from './components/muster-entry/muster-entry.component';
import { MusterListComponent } from './components/muster-list/muster-list.component';
import { MusterArchiveListComponent } from './components/muster-archive-list/muster-archive-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusterComponent, MusterViewComponent, MusterEntryComponent, MusterListComponent, MusterArchiveListComponent]
})
export class MusterModule { }
