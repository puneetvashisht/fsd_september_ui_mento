import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    transform(value: string, arg?: any) {
        console.log(value);
        return value[0].toUpperCase() + value.slice(1).toLowerCase()
    }

}
