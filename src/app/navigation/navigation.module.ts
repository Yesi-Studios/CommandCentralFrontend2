import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NavBarComponent } from './nav-bar.component';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [],
  exports: [NavBarComponent, SideBarComponent]
})
export class NavigationModule { }
