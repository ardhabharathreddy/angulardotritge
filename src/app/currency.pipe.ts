import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(args[0]=='USA')
    {
      return value+'$';
    }
    else{
      return value+'₹';
    }
  }

}
