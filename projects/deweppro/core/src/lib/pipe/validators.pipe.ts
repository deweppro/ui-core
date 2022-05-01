import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rtl',
})
export class RTLPipe implements PipeTransform {
  transform(value: string): boolean {
    const regex =
      /[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]/;
    return regex.test(value);
  }
}
