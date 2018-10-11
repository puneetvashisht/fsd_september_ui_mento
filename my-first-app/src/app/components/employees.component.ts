import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: 'employees.component.html'
})
export class EmployeesComponent implements OnInit {
    searchField: string = 'first_name'

    employees: Array<Employee> = []

    constructor(public http: Http) { }

    ngOnInit() { 

        this.http.get('http://localhost:3000/employees')
        .toPromise()
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.employees = data;
        })

    }

}