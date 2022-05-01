import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysFilter',
})
export class KeysFilterPipe implements PipeTransform {
  transform(value: { [title: string]: any }, filter: string): string[] {
    const $result: string[] = [];
    const $filter = filter.toLowerCase();
    Object.keys(value).forEach((key: string) => {
      if ($filter.length === 0 || key.toLowerCase().indexOf($filter) !== -1) {
        $result.push(key);
      }
    });
    return $result;
  }
}

@Pipe({
  name: 'keyGetter',
})
export class KeyGetterPipe implements PipeTransform {
  transform(value: { [title: string]: any }, filter: string): string {
    let $result = '';
    const $filter = filter.toLowerCase();
    Object.keys(value).forEach((key: string) => {
      if (key.toLowerCase() === $filter) {
        $result = key;
      }
    });
    return $result;
  }
}
