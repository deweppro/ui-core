import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AAAA'.repeat(100);
  value = 'BBBB'.repeat(100);
  regex = new RegExp('[^0-9]', 'gi');
}
