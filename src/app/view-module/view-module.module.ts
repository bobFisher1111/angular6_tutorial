import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModuleComponentComponent } from './view-module-component/view-module-component.component';



@NgModule({
  declarations: [ViewModuleComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [ViewModuleComponentComponent]
})
export class ViewModuleModule { }
