import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dui-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.css'],
})
export class TextViewComponent implements OnInit {
  @Input() title: string = '';
  @Input() value: string = '';

  ngOnInit(): void {}
}
