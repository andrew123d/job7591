import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    let planetsArr = [];
    for (let it of items) {
        if(it.name.toLowerCase() == searchText.toLowerCase()) {
            planetsArr.push(it) 
        }
    }
    if(Object.keys(planetsArr).length == 0) {
        return [-1]; 
    } else {
        return planetsArr;
    }
   }
}