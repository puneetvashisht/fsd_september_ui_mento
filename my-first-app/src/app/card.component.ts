import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from './Course';


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

    constructor(public http: Http){
       
    }

    ngOnInit() { 

    }

    deleteCourse(key: number){
        console.log('Deleting index', key);
        this.http.delete('')

        this.http.delete('http://localhost:3000/courses/' + key)
        .toPromise()
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          this.courseDeleted.emit(data);
        })

    }

}