import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing-module';
import { Courses } from './courses';
import { SharedModule } from '../../../shared/shared-module';

@NgModule({
  declarations: [Courses],
  imports: [CommonModule, CoursesRoutingModule, SharedModule],
})
export class CoursesModule {}