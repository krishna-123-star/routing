import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLength'
})
export class FilterByLengthPipe implements PipeTransform {
  transform(values: string[], minLength: number): string[] {
    if (!values) return [];
    return values.filter(v => v.length >= minLength);
  }
}
