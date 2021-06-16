import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dui-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  _popup = false;

  @Input() title: string = '';
  @Input() default: string = '';
  @Input() data: { [title: string]: any } = {};

  @Output() key = new EventEmitter<string>();
  @Output() value = new EventEmitter<any>();

  @HostListener('click') hostClick() {
    this._popup = true;
  }

  @HostListener('mouseleave') hostMouseLeave() {
    this._popup = false;
  }

  ngOnInit(): void {
  }

  push(key: string): void {
    this.default = key;
    this.key.emit(key);
    this.value.emit(this.data[key]);
  }

}
