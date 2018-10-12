import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

@Component({
    selector: 'child-one',
    template: `
    <h3>Log Component 1</h3>
    <input type="text" #log (change)="0" placeholder="Enter log Message"/>
    <button (click)="logMessage(log.value)">Log Message</button>
    <ul class="list-group">
        <li *ngFor="let message of messages">{{message}}</li>   
    </ul>
    `
})
export class Child1Component implements OnInit {


    messages: Array<string> = []
    constructor(public logService: LogService) { }

    ngOnInit() { 
        this.messages = this.logService.fetchAll();
    }

    logMessage(message: string){
        this.logService.push(message);
    }

}