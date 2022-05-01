import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dui-switch-box',
  templateUrl: './switch-box.component.html',
  styleUrls: ['./switch-box.component.css'],
})
export class SwitchBoxComponent {
  _key: string = '';

  @Input() title: string = '';
  @Input() data: { [title: string]: any } = {};
  @Output() key = new EventEmitter<string>();
  @Output() value = new EventEmitter<any>();

  setValue(key: string): void {
    this._key = key;
    this.key.emit(key);
    this.value.emit(this.data[key]);
  }
}
