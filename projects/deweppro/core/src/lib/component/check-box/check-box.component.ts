import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dui-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {

  @Input() title: string = '';
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();

  toggle(v: boolean): void {
    this.value = v;
    this.valueChange.emit(v);
  }

}
