import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { UISharedModule } from '@notadd/features';
import { UI_COMPONENTS } from './components';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  UISharedModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS]
})
export class UIModule {}
