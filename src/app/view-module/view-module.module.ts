import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModuleComponentComponent } from './view-module-component/view-module-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewModuleComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ViewModuleComponentComponent]
})
export class ViewModuleModule { }
