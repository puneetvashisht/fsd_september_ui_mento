import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-test',
    template: `
        <h2>Test Component contents</h2>
    `
})
export class TestComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}