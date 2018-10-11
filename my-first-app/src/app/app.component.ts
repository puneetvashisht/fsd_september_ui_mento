import { Component, OnInit } from '@angular/core';
import { Course } from './Course';
import { Http } from '@angular/http';

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
  constructor(public http: Http){

  }

  handleCourseDeletion(courses: Array<Course>){
    console.log('In the parent, ', courses);
    this.courses = courses;
  }

  addCourse(name: string, summary: string){
    this.http.post('http://localhost:3000/courses', {
      title: name,
      summary: summary
    })
    .toPromise()
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      this.courses = data;
    })
  }
  
  ngOnInit(){
    this.http.get('http://localhost:3000/courses')
    .toPromise()
    .then(res=>res.json())
    .then(data => {
      console.log(data);
      this.courses = data;
    })

    
  }

  
}
