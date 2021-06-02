import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dui-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {

  @Input() title: string = '';
  @Input() regex?: RegExp;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  ngOnInit() {
    this.value = this.validate(this.value);
  }

  private validate(v: string): string {
    if (this.regex instanceof RegExp) {
      v = v.replace(this.regex, '');
    }
    return v;
  }

  update($event: string): void {
    this.value = this.validate($event);
    this.valueChange.emit(this.value);
  }
}
