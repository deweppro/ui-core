import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Что такое Lorem Ipsum?';
  valueText = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.';
  valueNum = '621';
  valueBool = false;
  regex = new RegExp('[^0-9]', 'gi');

  selectList: { [title: string]: any } = {
    'key 1': 123,
    'key 2': 'hello',
    'key 3': false,
    'key 4': false,
    'key 5': false,
    'key 6': false,
    'key 7': false,
    'key 8': false,
    'key 9': false,
    'key 10': false,
    'key 11': false,
    'key 12': false,
    'key 13': false,
    'key 14': false,
  }
  selectDefault = '2';

  debug(msg: any): void {
    console.log(msg);
  }
}

