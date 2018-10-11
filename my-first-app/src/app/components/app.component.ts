import { Component, OnInit } from '@angular/core';
import { Course } from '../models/Course';
import { Http } from '@angular/http';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fanTastic weather here in Delhi today!!';
  now = new Date();

  courses: Array<Course> = [
   
  ];
  constructor(public courseService: CourseService){

  }

  handleCourseDeletion(courses: Array<Course>){
    console.log('In the parent, ', courses);
    this.courses = courses;
  }

  addCourse(name: string, summary: string){
    this.courseService.addCourse(name, summary)
    .then(data => this.courses = data)
  }
  
  ngOnInit(){
   this.courseService.fetchCourses()
   .then(data => this.courses = data)
  }

  
}
