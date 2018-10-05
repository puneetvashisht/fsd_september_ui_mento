import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BadgeComponent } from './badge.component';
import { CardComponent } from './card.component';
import { TestComponent } from './test.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchCoursesPipe } from './searchcourses.pipe';

@NgModule({
  declarations: [
    AppComponent, BadgeComponent, CardComponent, TestComponent, CapitalizePipe, SearchCoursesPipe
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
