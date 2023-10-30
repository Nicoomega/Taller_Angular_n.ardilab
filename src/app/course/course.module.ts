import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CourseComponent } from './course.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CourseComponent],
  exports: [CourseComponent],
})
export class CourseModule {}
