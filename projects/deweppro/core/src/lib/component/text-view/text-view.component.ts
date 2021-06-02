import { Component, Input } from '@angular/core';

@Component({
  selector: 'dui-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css']
})
export class TextViewComponent {

  @Input() title: string = '';
  @Input() value: string = '';

}
