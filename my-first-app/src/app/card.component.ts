import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-card',
    template: `
    
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="http://via.placeholder.com/100x100" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{caption}}</h5>
            <p class="card-text">{{summary}}</p>
            <my-badge caption="Votes"></my-badge>
        </div>
        </div>
    `
})
export class CardComponent implements OnInit {


    @Input('title') caption : string = ''
    @Input('summary') summary : string = ''
    constructor() { }

    ngOnInit() { 

    }

}