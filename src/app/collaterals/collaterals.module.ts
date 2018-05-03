import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollateralsComponent } from './collaterals.component';
import { CollateralsViewComponent } from './collaterals-view/collaterals-view.component';
import { CollateralSelectorComponent } from './components/collateral-selector/collateral-selector.component';
import { CollateralEditorComponent } from './components/collateral-editor/collateral-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CollateralsComponent, CollateralsViewComponent, CollateralSelectorComponent, CollateralEditorComponent]
})
export class CollateralsModule { }
