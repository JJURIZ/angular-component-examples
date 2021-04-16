import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsHomeComponent } from './elements-home/elements-home.component';



@NgModule({
  declarations: [
    ElementsHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElementsHomeComponent
  ]
})
export class ElementsModule { }
