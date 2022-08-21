import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter',
  pure: true
})
export class HighlighterPipe implements PipeTransform {
  transform(text: string, filterString: string): string {
    if (!text) return filterString;

    const stringRegexp = new RegExp(filterString, 'igm');

    return text.replace(stringRegexp, '<span class="highlighted-text">$&</span>');
  }
}
