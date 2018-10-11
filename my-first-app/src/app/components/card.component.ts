import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from '../models/Course';
import { CourseService } from '../services/course.service';


@Component({
    selector: 'my-card',
    template: `
    
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="http://via.placeholder.com/100x100" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{caption}}</h5>
            <p class="card-text">{{summary}}</p>
            <my-badge caption="Votes"></my-badge>
            <button type="button" class="btn btn-danger" (click)="deleteCourse(key)">Delete</button>
        </div>
        </div>
    `
})
export class CardComponent implements OnInit {


    @Input('title') caption : string = ''
    @Input('summary') summary : string = ''
    @Input('key') key : number;
    @Output('courseDeleted') courseDeleted : EventEmitter<Array<Course>> = new EventEmitter();

    constructor(public courseService: CourseService){
       
    }

    ngOnInit() { 

    }

    deleteCourse(key: number){
        console.log('Deleting index', key);

        this.courseService.deleteCourse(key)
        .then(data => this.courseDeleted.emit(data))

    }

}