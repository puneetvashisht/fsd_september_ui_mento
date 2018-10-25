import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { Http } from '@angular/http';
import { CourseService } from '../services/course.service';
import { LogService } from '../services/log.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogService]
})
export class AppComponent implements OnInit {
  title = 'fanTastic weather here in Delhi today!!';
  now = new Date();
  messages: Array<string> = []

  courses: Array<Course> = [
   
  ];
  constructor(public courseService: CourseService, public logService: LogService){

  }

  handleCourseDeletion(courses: Array<Course>){
    console.log('In the parent, ', courses);
    this.courses = courses;
  }

  addCourse(name: string, summary: string){
    this.logService.push(name);
    this.courseService.addCourse(name, summary)
    .then(data => this.courses = data)
  }
  
  ngOnInit(){
   this.messages = this.logService.fetchAll();
   this.courseService.fetchCourses()
  //  .filter(data => data)
   .subscribe((data) => this.courses = data)

  }

}
