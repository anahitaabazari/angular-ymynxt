import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name : 'ConvertToSpacesPipe'
})

export class ConvertToSpacesPipe implements PipeTransform 
{
 transfrom(value: string, character:string) : string {
      return value.replace(character," ");
 }

 
}