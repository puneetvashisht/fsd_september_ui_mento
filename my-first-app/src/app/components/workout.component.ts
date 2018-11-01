import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'my-workout',
    template: `
     <h2>Display workouts</h2>
     <ul>
        <li *ngFor="let workout of workouts"> {{workout.workoutTitle}} <button (click)="deleteWorkout(workout._id)">Delete</button></li>
     </ul>
    `
})
export class WorkoutComponent implements OnInit {

    constructor(private http: Http) { }

    workouts: Array<object> = []

    ngOnInit() { 
        this.http.get('http://localhost:3000/workouts')
        .toPromise()
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.workouts = data;
        
        })
    }


    deleteWorkout(workoutid){
        console.log('Delete workout', workoutid)

        this.http.delete('http://localhost:3000/workouts/' + workoutid)
        .toPromise()
        .then(res=>{
            console.log(res.status)
            return res.json()
        })
        .then(data=> console.log(data))
    }

}