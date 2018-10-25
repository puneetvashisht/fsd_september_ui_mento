import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CourseService {
    
    constructor(public http: Http) { }

    baseUrl: string = 'http://localhost:3000/courses/'
    // baseUrl: string = 'http://localhost:8080/courses'

    addCourse(name: string, summary: string): Promise<any>{
        return this.http.post( this.baseUrl, {
          title: name,
          summary: summary
        })
        .toPromise()
        .then(res=>res.json())   
      }

    // fetchCourses(): Promise<any>{
    //    return this.http.get(this.baseUrl)
    //     .toPromise()
    //     .then(res=>res.json())
        
    // }
    fetchCourses(){
       return this.http.get(this.baseUrl).pipe(map(res => res.json()))        
    }
    
    deleteCourse(key: number): Promise<any>{

        return this.http.delete(this.baseUrl + key)
        .toPromise()
        .then(res=>res.json())
        
    }

}