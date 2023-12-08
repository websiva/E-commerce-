import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],fullString:string,propName:string): any[] {
    const result:any=[];
    if(!value||(fullString===""||propName==="")){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(fullString.toLowerCase())){
        result.push(a);
      }
    })
    return result;
  }

}
