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
  constructor(public http: Http){

  }
  
  ngOnInit(){
    this.http.get('http://localhost:4200/assets/courses.json')
    .toPromise()
    .then(res=>res.json())
    .then(x => {
      console.log(x);
      this.courses = x;
    })

    
  }

  courses: Array<Course> = [
   
  ];
}
