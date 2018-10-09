import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

    transform(courses: Array<any>, fieldName: string,  name?: string) {
        console.log(courses);
        console.log(fieldName);
        console.log(name);
        if(name){
            let filteredCourse: Array<any> = null;
            filteredCourse = courses.filter(course => {
                console.log(course);
                console.log("Field Name", fieldName);
                console.log("Field Value", course[fieldName]);
               return course[fieldName].startsWith(name)
            })
            return filteredCourse;
        }
        return courses;
    }

}