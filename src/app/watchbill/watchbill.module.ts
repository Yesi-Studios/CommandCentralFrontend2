import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchbillComponent } from './watchbill.component';
import { WatchbillViewComponent } from './watchbill-view/watchbill-view.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ShiftComponent } from './components/shift/shift.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WatchbillComponent, WatchbillViewComponent, CalendarComponent, ShiftComponent]
})
export class WatchbillModule { }
