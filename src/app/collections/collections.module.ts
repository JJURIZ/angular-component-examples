import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';



@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CollectionsHomeComponent
  ]
})
export class CollectionsModule { }
