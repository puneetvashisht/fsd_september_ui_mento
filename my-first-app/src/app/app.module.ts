import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { BadgeComponent } from './components/badge.component';
import { CardComponent } from './components/card.component';
import { TestComponent } from './components/test.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchCoursesPipe } from './pipes/searchcourses.pipe';
import { EmployeesComponent } from './components/employees.component';
import { SearchByNamePipe } from './pipes/searchbyname.pipe';
import { CourseService } from './services/course.service';
import { Child1Component } from './components/child1.component';
import { Child2Component } from './components/child2.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { WorkoutComponent } from './components/workout.component';
@NgModule({
  declarations: [
    AppComponent,WorkoutComponent, BadgeComponent, CardComponent, TestComponent, CapitalizePipe, SearchCoursesPipe,SearchByNamePipe, EmployeesComponent, Child1Component,Child2Component
  ],
  imports: [
    BrowserModule, HttpModule, StorageServiceModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }