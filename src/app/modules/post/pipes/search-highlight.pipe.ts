import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchHighlight',
})
export class SearchHighlightPipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    const re = new RegExp(args, 'igm');
    value = value.replace(re, '<span class="highlighted-text">$&</span>');

    return value;
  }
}
